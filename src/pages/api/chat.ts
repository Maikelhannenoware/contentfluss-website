export const prerender = false;

import Anthropic from '@anthropic-ai/sdk';

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 600;
const CHAT_TIMEOUT_MS = 12_000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ChatInputMessage = {
  role: 'user' | 'assistant';
  content: string;
};

function json(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);
  if (!record || record.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  rateLimitStore.set(key, record);
  return false;
}

function normalizeMessages(value: unknown): ChatInputMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) {
    return null;
  }

  const normalized: ChatInputMessage[] = [];
  for (const entry of value) {
    if (!entry || typeof entry !== 'object') return null;
    const role = (entry as { role?: unknown }).role;
    const content = (entry as { content?: unknown }).content;

    if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string') {
      return null;
    }

    const trimmed = content.trim();
    if (!trimmed || trimmed.length > MAX_MESSAGE_LENGTH) {
      return null;
    }
    normalized.push({ role, content: trimmed });
  }

  return normalized;
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

const SYSTEM_PROMPT = `Du bist Flo, der freundliche KI-Assistent von Contentfluss. Contentfluss ist eine KI-Agentur aus Neuss, die lokale Unternehmen in der Region Neuss/Düsseldorf beim Content-Marketing und bei KI-Automatisierungen unterstützt. Inhaber ist Maikel Hannen.

Unsere Pakete:
- Content-Starter: 8 fertige Posts/Monat (Instagram & Facebook), inkl. Bildvorschläge, lokale Hashtags – 299 €/Monat
- Content-Pro: 16 Posts + Google Business Beiträge + monatlicher Newsletter – 499 €/Monat (beliebtestes Paket, monatlich kündbar)
- KI-Automation: Einmalige Einrichtung eines KI-Workflows (z.B. Angebotserstellung, Kundenkommunikation) – ab 800 € einmalig

Kontakt & Buchung: hallo@contentfluss.de | Erstgespräch (15 Min., kostenlos) unter contentfluss.de/kontakt.

Verhalte dich so:
- Antworte auf Deutsch, freundlich und direkt
- Halte Antworten kurz (max. 3-4 Sätze)
- Nach 2-3 Nachrichten des Nutzers frage nach seinem Namen und seiner E-Mail, um ihn ans Team weiterzuleiten
- Empfehle das passende Paket basierend auf den Bedürfnissen
- Dränge niemanden, sei beratend

Links – verwende Markdown-Format [Linktext](URL) wenn passend:
- Preise / Pakete ansehen: [Leistungsübersicht](/leistungen)
- Termin buchen / Erstgespräch: [Jetzt Termin buchen](/kontakt)
- Direkt Calendly: [Slot aussuchen](https://calendly.com/maikel-hannen/kostenloses-erstgesprach)
- Kontaktformular: [Kontaktseite](/kontakt)
Setze Links sparsam und nur wenn sie dem Nutzer wirklich helfen.`;

export async function POST({ request }: { request: Request }) {
  const clientIp = getClientIp(request);
  if (isRateLimited(`chat:${clientIp}`)) {
    return json(429, {
      success: false,
      error: 'Zu viele Chat-Anfragen. Bitte versuche es in einigen Minuten erneut.',
      code: 'RATE_LIMITED',
    });
  }

  const apiKey = import.meta.env.ANTHROPIC_API_KEY_CHATBO_WEBSITE;
  if (!apiKey) {
    console.error('Chat API missing ANTHROPIC_API_KEY_CHATBO_WEBSITE');
    return json(503, {
      success: false,
      error: 'Der Chat ist aktuell nicht verfügbar. Nutze bitte das Kontaktformular.',
      code: 'CHAT_UNAVAILABLE',
    });
  }

  try {
    const body = await request.json();
    const messages = normalizeMessages((body as { messages?: unknown }).messages);
    if (!messages) {
      return json(400, {
        success: false,
        error: 'Ungültige Chat-Nachrichten.',
        code: 'INVALID_MESSAGES',
      });
    }

    const hasUserMessage = messages.some((msg) => msg.role === 'user');
    if (!hasUserMessage) {
      return json(400, {
        success: false,
        error: 'Es wurde keine Nutzer-Nachricht übermittelt.',
        code: 'NO_USER_MESSAGE',
      });
    }

    const client = new Anthropic({ apiKey });
    const response = await withTimeout(
      client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
      CHAT_TIMEOUT_MS
    );

    const replyBlock = response.content.find((contentBlock) => contentBlock.type === 'text');
    const reply = replyBlock?.type === 'text' ? replyBlock.text.trim() : '';
    if (!reply) {
      return json(502, {
        success: false,
        error: 'Es gab ein Problem bei der Chat-Antwort. Nutze bitte die Kontaktseite.',
        code: 'EMPTY_CHAT_RESPONSE',
      });
    }

    return json(200, {
      success: true,
      reply,
    });
  } catch (err) {
    if (err instanceof Error && err.message === 'TIMEOUT') {
      return json(504, {
        success: false,
        error: 'Der Chat braucht gerade zu lange. Nutze bitte die Kontaktseite.',
        code: 'CHAT_TIMEOUT',
      });
    }

    console.error('Chat API error:', err);
    return json(502, {
      success: false,
      error: 'Interner Fehler im Chat. Nutze bitte die Kontaktseite.',
      code: 'CHAT_UPSTREAM_ERROR',
    });
  }
}

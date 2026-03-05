import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  betrieb?: unknown;
  nachricht?: unknown;
  website?: unknown;
};

type ApiSuccess = { success: true };
type ApiError = { success: false; error: string; code: string };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 4000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function json(status: number, payload: ApiSuccess | ApiError) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function normalizeText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .replace(/\r/g, '')
    .replace(/\u0000/g, '')
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
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

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact API missing RESEND_API_KEY');
    return json(503, {
      success: false,
      error: 'Service aktuell nicht verfügbar.',
      code: 'CONTACT_UNAVAILABLE',
    });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(`contact:${clientIp}`)) {
    return json(429, {
      success: false,
      error: 'Zu viele Anfragen. Bitte versuche es in einigen Minuten erneut.',
      code: 'RATE_LIMITED',
    });
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return json(400, {
      success: false,
      error: 'Ungültige Anfrage.',
      code: 'INVALID_JSON',
    });
  }

  const honeypot = normalizeText(body.website, 120);
  if (honeypot) {
    return json(400, {
      success: false,
      error: 'Anfrage konnte nicht verarbeitet werden.',
      code: 'BOT_DETECTED',
    });
  }

  const name = normalizeText(body.name, 120);
  const email = normalizeText(body.email, 254);
  const betrieb = normalizeText(body.betrieb, 160);
  const nachricht = normalizeText(body.nachricht, MAX_MESSAGE_LENGTH);

  if (!name) {
    return json(400, {
      success: false,
      error: 'Bitte gib deinen Namen ein.',
      code: 'NAME_REQUIRED',
    });
  }

  if (!email || !isValidEmail(email)) {
    return json(400, {
      success: false,
      error: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      code: 'EMAIL_INVALID',
    });
  }

  if (!nachricht || nachricht.length < MIN_MESSAGE_LENGTH) {
    return json(400, {
      success: false,
      error: 'Bitte beschreibe dein Anliegen in mindestens 20 Zeichen.',
      code: 'MESSAGE_TOO_SHORT',
    });
  }

  const resend = new Resend(apiKey);
  const escapedNachricht = escapeHtml(nachricht).replace(/\n/g, '<br>');
  const { error } = await resend.emails.send({
    from: 'Contentfluss Kontaktformular <hallo@contentfluss.de>',
    to: ['hallo@contentfluss.de'],
    replyTo: email,
    subject: `Neue Anfrage von ${name}${betrieb ? ` (${betrieb})` : ''}`,
    html: `
      <h2>Neue Kontaktanfrage über contentfluss.de</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      ${betrieb ? `<p><strong>Betrieb:</strong> ${escapeHtml(betrieb)}</p>` : ''}
      <p><strong>Nachricht:</strong><br>${escapedNachricht}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return json(502, {
      success: false,
      error: 'E-Mail konnte nicht gesendet werden.',
      code: 'MAIL_SEND_FAILED',
    });
  }

  return json(200, { success: true });
};

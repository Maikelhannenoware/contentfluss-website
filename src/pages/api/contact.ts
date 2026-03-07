import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  branche?: unknown;
  teamgroesse?: unknown;
  engpass?: unknown;
  ziel?: unknown;
  audit?: unknown;
  consent?: unknown;
  website?: unknown;
};

type ApiSuccess = { success: true };
type ApiError = { success: false; error: string; code: string };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_ENGPASS_LENGTH = 15;
const MIN_ZIEL_LENGTH = 20;
const MAX_TEXT_LENGTH = 4000;
const ALLOWED_BRANCHES = new Set(['handwerk', 'immobilienverwaltung', 'sonstiges']);
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

function normalizeBoolean(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  const normalized = value.trim().toLowerCase();
  return normalized === 'true' || normalized === '1' || normalized === 'on' || normalized === 'yes';
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

function branchLabel(branche: string): string {
  if (branche === 'handwerk') return 'Handwerk';
  if (branche === 'immobilienverwaltung') return 'Immobilienverwaltung';
  return 'Sonstiges';
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
  const company = normalizeText(body.company, 160);
  const email = normalizeText(body.email, 254);
  const branche = normalizeText(body.branche, 60).toLowerCase();
  const teamgroesse = normalizeText(body.teamgroesse, 120);
  const engpass = normalizeText(body.engpass, MAX_TEXT_LENGTH);
  const ziel = normalizeText(body.ziel, MAX_TEXT_LENGTH);
  const auditWanted = normalizeBoolean(body.audit);
  const consent = normalizeBoolean(body.consent);

  if (!name) {
    return json(400, {
      success: false,
      error: 'Bitte gib deinen Namen ein.',
      code: 'NAME_REQUIRED',
    });
  }

  if (!company) {
    return json(400, {
      success: false,
      error: 'Bitte gib dein Unternehmen ein.',
      code: 'COMPANY_REQUIRED',
    });
  }

  if (!email || !isValidEmail(email)) {
    return json(400, {
      success: false,
      error: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      code: 'EMAIL_INVALID',
    });
  }

  if (!ALLOWED_BRANCHES.has(branche)) {
    return json(400, {
      success: false,
      error: 'Bitte wähle eine gültige Branche aus.',
      code: 'BRANCH_INVALID',
    });
  }

  if (!engpass || engpass.length < MIN_ENGPASS_LENGTH || !ziel || ziel.length < MIN_ZIEL_LENGTH) {
    return json(400, {
      success: false,
      error: 'Bitte beschreibe Engpass und Ziel ausführlicher.',
      code: 'MESSAGE_TOO_SHORT',
    });
  }

  if (!consent) {
    return json(400, {
      success: false,
      error: 'Bitte bestätige die Datenschutzeinwilligung.',
      code: 'CONSENT_REQUIRED',
    });
  }

  const resend = new Resend(apiKey);
  const escapedEngpass = escapeHtml(engpass).replace(/\n/g, '<br>');
  const escapedZiel = escapeHtml(ziel).replace(/\n/g, '<br>');

  const { error } = await resend.emails.send({
    from: 'Contentfluss Kontaktformular <hallo@contentfluss.de>',
    to: ['hallo@contentfluss.de'],
    replyTo: email,
    subject: `Neue Anfrage (${branchLabel(branche)}) - ${company}`,
    html: `
      <h2>Neue Kontaktanfrage über contentfluss.de</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Unternehmen:</strong> ${escapeHtml(company)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Branche:</strong> ${escapeHtml(branchLabel(branche))}</p>
      ${teamgroesse ? `<p><strong>Teamgröße:</strong> ${escapeHtml(teamgroesse)}</p>` : ''}
      <p><strong>Aktueller Engpass:</strong><br>${escapedEngpass}</p>
      <p><strong>Ziel / gewünschte Verbesserung:</strong><br>${escapedZiel}</p>
      <p><strong>Workflow-Audit gewünscht:</strong> ${auditWanted ? 'Ja' : 'Nein'}</p>
      <p><strong>Datenschutzeinwilligung:</strong> ${consent ? 'Ja' : 'Nein'}</p>
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

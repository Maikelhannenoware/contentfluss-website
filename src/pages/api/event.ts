import type { APIRoute } from 'astro';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;
const EVENT_NAME_REGEX = /^[a-z0-9_]{3,64}$/;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

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

function normalizeEventName(value: unknown): string {
  if (typeof value !== 'string') return '';
  const name = value.trim().toLowerCase();
  return EVENT_NAME_REGEX.test(name) ? name : '';
}

function normalizePath(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 120);
}

function normalizeSessionId(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 80);
}

export const POST: APIRoute = async ({ request }) => {
  const clientIp = getClientIp(request);
  if (isRateLimited(`event:${clientIp}`)) {
    return json(429, { success: false, code: 'RATE_LIMITED' });
  }

  let body: { event?: unknown; path?: unknown; sessionId?: unknown; data?: unknown };
  try {
    body = await request.json();
  } catch {
    return json(400, { success: false, code: 'INVALID_JSON' });
  }

  const event = normalizeEventName(body.event);
  if (!event) {
    return json(400, { success: false, code: 'INVALID_EVENT' });
  }

  const payload = {
    event,
    path: normalizePath(body.path),
    sessionId: normalizeSessionId(body.sessionId),
    data: typeof body.data === 'object' && body.data !== null ? body.data : {},
    timestamp: new Date().toISOString(),
    ip: clientIp,
  };

  console.info('[contentfluss:event]', payload);
  return json(200, { success: true });
};

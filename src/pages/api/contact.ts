import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; betrieb?: string; nachricht?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Ungültige Anfrage' }), { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const betrieb = body.betrieb?.trim() ?? '';
  const nachricht = body.nachricht?.trim() ?? '';

  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'Name und E-Mail sind Pflichtfelder.' }), { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Contentfluss Kontaktformular <hallo@contentfluss.de>',
    to: ['hallo@contentfluss.de'],
    replyTo: email,
    subject: `Neue Anfrage von ${name}${betrieb ? ` (${betrieb})` : ''}`,
    html: `
      <h2>Neue Kontaktanfrage über contentfluss.de</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${betrieb ? `<p><strong>Betrieb:</strong> ${betrieb}</p>` : ''}
      ${nachricht ? `<p><strong>Nachricht:</strong><br>${nachricht.replace(/\n/g, '<br>')}</p>` : ''}
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

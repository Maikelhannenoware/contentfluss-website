export const prerender = false;

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: import.meta.env.ANTHROPIC_API_KEY,
});

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
- Dränge niemanden, sei beratend`;

export async function POST({ request }: { request: Request }) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 });
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const reply = response.content[0].type === 'text' ? response.content[0].text : '';

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}

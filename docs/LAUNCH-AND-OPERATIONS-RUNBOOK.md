# Launch and Operations Runbook

## 1) Pre-Launch Checklist

### Technik
- `npm ci`
- `npm run astro -- check`
- `npm run build`
- `npm run preview` (Smoke-Test)

### Inhalt
- Kontaktwege geprüft (E-Mail/Calendly)
- Simulationshinweise in Proof-Sektionen sichtbar
- Rechtliche Seiten final gegengeprüft

### SEO
- Canonicals vorhanden
- OG/Twitter Tags vorhanden
- Sitemap erzeugt
- robots.txt korrekt

## 2) Environment

Pflicht:
- `RESEND_API_KEY`

Optional später:
- Analytics-/DB-Credentials für Event-Persistenz

## 3) Go-Live

1. Main-Branch aktuell halten
2. Deployment in Vercel auslösen
3. Live-Site Smoke-Test:
   - Navigation
   - Mobile Menü
   - Formular submit + Mail-Zustellung
   - Calendly-Link
   - Haupt-CTAs

## 4) Post-Launch Monitoring (7 Tage)

Täglich prüfen:
- Fehler in Build/Runtime
- Formular-Sendequote
- Event-Ingestion (`/api/event`)
- Antwortzeiten

## 5) Monatliche Betriebsroutine

- Copy-/CTA-Optimierung nach Event-Daten
- SEO-Meta-Review für Seiten mit niedriger CTR
- Proof-Sektion aktualisieren (sobald echte Cases vorliegen)
- Security + Dependency Review (`npm audit`)

## 6) Incident-Quickfix

Wenn Formular nicht sendet:
1. ENV `RESEND_API_KEY` prüfen
2. API-Logs für `/api/contact` prüfen
3. Rate-Limit/Validation-Code auswerten
4. Fallback-Kommunikation über `mailto:` temporär prominent schalten


# Contentfluss Website – Claude Context

## Tech Stack
- **Framework:** Astro 5 + Tailwind CSS 4
- **Adapter:** @astrojs/vercel (hybrid: statische Seiten + Serverless Functions)
- **E-Mail:** Resend (Domain contentfluss.de verifiziert)
- **Hosting:** Vercel (Team: maikels-projects-c94d18e5)
- **Repo:** https://github.com/Maikelhannenoware/contentfluss-website
- **Live:** https://contentfluss.de (auch .com leitet weiter)

## Projektstruktur
```
src/
  layouts/Layout.astro     # Haupt-Layout, Nav (Desktop + Hamburger-Menü), Footer
  pages/
    index.astro             # Startseite
    leistungen.astro        # Leistungsübersicht
    ueber-mich.astro        # Über mich
    kontakt.astro           # Kontaktformular (fetch → /api/contact)
    impressum.astro         # Impressum (Pflicht DE)
    datenschutz.astro       # Datenschutz DSGVO
    api/contact.ts          # Serverless Function: empfängt JSON POST, sendet E-Mail via Resend
  styles/global.css
```

## Wichtige Details
- Kontaktformular sendet JSON (nicht FormData!) → Vercel WAF blockiert multipart/form-data
- Resend FROM: `hallo@contentfluss.de`, TO: `maikel.hannen@gmail.com`
- RESEND_API_KEY ist als Vercel Environment Variable gesetzt
- Vercel Authentication muss **deaktiviert** sein (war Ursache für 403-Fehler)

## Deploy
- `git push` auf `main` → Vercel deployt automatisch
- Kein manuelles Redeploy nötig außer nach Env-Variable-Änderungen

## Inhaber
Rene Maikel Blay Hannen-Oware, Hesemannstraße 17a, 41460 Neuss
E-Mail: maikel.hannen@gmail.com | Tel: 015125273382

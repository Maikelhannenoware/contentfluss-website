# Contentfluss Website

Premium-Website für **Contentfluss** mit Fokus auf zwei Verticals:
- Handwerk
- Immobilienverwaltung

Stack:
- Astro 5
- Tailwind CSS 4 (inkl. eigenem CSS-Designsystem)
- Vercel Adapter
- `@astrojs/sitemap`

## Informationsarchitektur

- `/` Startseite
- `/handwerk`
- `/immobilienverwaltung`
- `/leistungen`
- `/workflows`
- `/ueber-uns`
- `/kontakt`
- `/fallbeispiele`
- `/impressum`
- `/datenschutz`
- `/ueber-mich` (Redirect auf `/ueber-uns`)

## Dokumentation (Handover)

- `docs/PROJECT-CLOSEOUT-2026-03-07.md`
- `docs/SEO-METADATA-MAP.md`
- `docs/TRACKING-PLAN.md`
- `docs/LAUNCH-AND-OPERATIONS-RUNBOOK.md`

## Design-System

Zentrale Tokens in `src/styles/global.css`:
- Farben (Ink, Accent, Surface, Line)
- Typografie (`Manrope` für Headlines, `IBM Plex Sans` für Body)
- Radius, Shadows, Spacing
- Buttons, Cards, Form-Styles, Header/Footer

Wiederverwendbare UI-Klassen:
- `.container`, `.section`, `.section-tight`
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- `.card`, `.card-muted`, `.card-accent`
- `.hero-grid`, `.workflow-visual`, `.faq-list`, `.form-shell`

## SEO & strukturierte Daten

Layout-basiert:
- Canonical
- Meta Description
- Open Graph / Twitter
- Organization + WebSite Schema auf allen Seiten

Seitenbasiert:
- ProfessionalService Schema
- BreadcrumbList Schema
- FAQPage Schema (wo FAQ vorhanden)

Helfer:
- `src/lib/seo.ts`

## Workflows / Content-Daten

Zentrale Workflow-Daten:
- `src/lib/workflows.ts`

Nutzung in:
- Startseite (Featured Workflows)
- `/handwerk`
- `/immobilienverwaltung`
- `/workflows`

## Tracking

Clientseitige Event-Erfassung über `/api/event`:
- CTA-Klicks über `data-track`
- Formular-Events (`contact_form_*`)
- Scrolltiefe (`scroll_depth_reached` bei 25/50/75/100)
- Vertical-Klicks und Workflow-CTAs

Hinweis:
- Kein Third-Party-Marketing-Tracking eingebaut
- Pseudonyme Session-ID via LocalStorage

## Kontaktformular

Seite: `/kontakt`

API: `src/pages/api/contact.ts`

Felder:
- Name
- Unternehmen
- E-Mail
- Branche
- Teamgröße (optional)
- Aktueller Engpass
- Ziel / Verbesserung
- Audit-Wunsch
- DSGVO-Consent
- Honeypot-Feld (`website`)

Sicherheits-/Qualitätsmaßnahmen:
- Rate-Limiting pro IP
- Input-Normalisierung + Validierung
- HTML-Escaping im E-Mail-Body
- Fehlercodes für Frontend-Mapping

Benötigte ENV Variable:
- `RESEND_API_KEY`

## Entwicklung

```bash
npm install
npm run astro -- check
npm run build
npm run dev
npm run preview
```

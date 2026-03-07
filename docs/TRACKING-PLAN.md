# Tracking Plan

## Ziel

Messung zentraler Conversion-Signale ohne Third-Party-Marketing-Tracking.

## Technischer Aufbau

- Client-Tracking im Layout per `window.contentflussTrack(...)`
- Event-Transport an `/api/event`
- Session-ID pseudonym in LocalStorage (`contentfluss_session_id`)

## Event-Namen (aktuell)

### CTA / Navigation
- `cta_clicked`
- `vertical_page_clicked`
- `workflow_cta_clicked`

### Formular
- `contact_form_started`
- `contact_form_submit_attempted`
- `contact_form_submitted`
- `contact_form_submit_failed`

### Engagement
- `scroll_depth_reached` mit `depth: 25|50|75|100`

## Event-Payload

Standard:
- `event`
- `path`
- `sessionId`
- `data` (optional, z. B. `label`, `depth`, `code`)
- `timestamp` (serverseitig)
- `ip` (serverseitig)

## Funnel-Auswertung (empfohlen)

1. Landingpage-Aufruf
2. CTA-Klick
3. Kontaktformular gestartet
4. Kontaktformular gesendet

Sekundär:
- Vertical-Klickrate
- Workflow-Klickrate je Seite
- Scrolltiefe auf Kernseiten

## Nächste Ausbaustufe

Empfohlen:
- Persistenz in DB statt nur Server-Log
- Einfaches Dashboard mit Conversion-Rate pro Seite
- UTM-Erfassung für Kampagnen


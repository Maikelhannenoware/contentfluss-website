# Contentfluss Website Redesign — Masterplan (FINAL)

> **Für:** Coding-Agent Umsetzung
> **Stack:** Astro + Tailwind CSS + Vanilla JS
> **Datum:** 19.03.2026
> **Version:** 4 (final — alle Feedback-Runden + Konsistenz-Bereinigung eingearbeitet)
> **Quellen:** Code-Analyse, visuelle Analyse (giga.ai, useorigin.com, linear.app), Doppel-Feedback Claude + ChatGPT
>
> **WICHTIGE UMSETZUNGSREGEL — ZWEI-PASS-SYSTEM:**
> Dieser Plan wird in zwei Freigabe-Passes umgesetzt:
> - **Pass 1 (Static):** Hero, Typografie, Hintergrund, Spacing, Cards, Shadows, CTA — alles OHNE Motion.
>   Kein einziges `animation`- oder `transition`-Property außer Hover-States (border-color, box-shadow).
> - **Pass 2 (Motion):** Blur-Reveals, Parallax, Hover-Shine, Scroll-linked, Ambient Breathing
>
> **Freigabe-Checkpoint:** Pass 2 darf erst starten, wenn Desktop-, Tablet- und Mobile-Static-Screens
> visuell freigegeben wurden. Komposition, Typografie, Abstände, Cards und Hero-Bühne müssen sitzen,
> bevor Parallax, Blur-Reveals und Shine implementiert werden.
>
> Grund: Effekte dürfen eine noch nicht perfekte Komposition nicht kaschieren.

---

## Phase 0 — Art Direction

> Dieses Kapitel definiert, wie Contentfluss als Marke aussehen soll.
> ALLE Design-Entscheidungen in den folgenden Phasen müssen hiermit konsistent sein.
> Im Zweifel hat dieses Kapitel Vorrang vor jedem Einzeleffekt.

### 0.1 Markencharakter in 5 Begriffen

1. **Operativ-präzise** — nicht abstrakt, nicht visionär, sondern greifbar
2. **Ruhig-hochwertig** — nicht laut, nicht flashy, sondern souverän
3. **Technisch-warm** — nicht steril, nicht kalt, sondern kompetent mit Nähe
4. **Fokussiert** — nicht überladen, nicht "alles auf einmal", sondern kuratiert
5. **Vertrauenswürdig** — nicht buzzword-getrieben, sondern glaubwürdig

### 0.2 Was Contentfluss NICHT ist

| Contentfluss ist NICHT                      | Contentfluss IST                              |
|---------------------------------------------|-----------------------------------------------|
| Eine bunte Startup-Spielerei                | Eine ruhige High-End-Tech-Marke               |
| Eine generische "KI-Agentur"-Seite         | Spezialisiert auf 2 Branchen, operativ klar   |
| Eine No-Code-Demo-Seite                     | Ein Partner, der echte Prozesse löst           |
| Flashy Animationen um der Animation willen  | Kontrollierte Motion mit Zweck                 |
| "Noch eine SaaS-Landingpage"               | Operative Präzision mit Premium-Atmosphäre     |
| Futuristisch-abgehoben                      | Modern, aber geerdet und zugänglich            |

### 0.3 Visuelle Welt

**Lichtstimmung:**
Dunkel, aber nicht kalt. Die Basis bleibt Dark-Mode, aber mit weichen, tiefen Verläufen
die das Gefühl von "Raum" erzeugen. Keine flat-schwarzen Flächen. Stattdessen:
tiefes Navy (#060B18), rauchiges Blau-Grau (#0D1525), Anthrazit mit Tiefe.
Punktuelle Lichtzonen (Glows) erzeugen Wärme und leiten den Blick.

**Materialität:**
Oberflächen fühlen sich an wie gebürstetes Metall hinter getöntem Glas.
Cards haben Gewicht (mehrstufige Shadows). Borders sind präsent aber fein.
Kein Plastik-Gefühl, kein rein-flaches Material.

**Farbwelt:**
- Primär: Tiefes Blau (#1558FF) — Akzent, CTAs, Highlights
- Sekundär: Ruhiges Violett (rgba(120, 50, 220)) — nur als Hintergrund-Glow
- Erfolg: Gedämpftes Grün (#18C37E) — Statuselemente
- Neutral: Die bestehende Grauabstufung (#0A0A0A → #111 → #171717) bleibt,
  wird aber durch weichere Übergänge verbunden
- NEU: Warm-Highlights — sehr sparsam ein warmes Cyan/Petrol (rgba(80,180,200,0.08))
  für Tiefenwirkung in Hintergründen

**Bildsprache:**
Kein generisches Stockfoto. Keine Naturlandschaften. Keine Office-Menschen.
Stattdessen: das Produkt selbst als "Bild". Der Workflow-Canvas, UI-Elemente,
Status-Badges, Datenflüsse — das IST die Bildsprache von Contentfluss.
Optional als Hintergrund-Textur: abstrakte architektonische Strukturen,
subtile Rasterlinien, volumetrische Lichtflächen — immer unter 10% Opacity.

**Accent-Nutzung:**
Blau (#1558FF) wird NICHT inflationär eingesetzt. Es markiert:
- CTAs (Buttons)
- Aktive Zustände
- Die wichtigste Information pro Section
- Glow-Akzente (subtil, im Hintergrund)
Alles andere bleibt in der neutralen Graupalette.

### 0.4 Motion-Persönlichkeit

Motion bei Contentfluss ist **ruhig, kontrolliert und zweckgebunden**.

**Erlaubte Motion-Typen (nur diese 4):**

1. **Reveal** — Elemente erscheinen beim Scrollen (opacity + translateY + blur)
2. **Depth** — Leichter Parallax zwischen Ebenen beim Scrollen
3. **State-Transitions** — Hover-Effekte, Focus-States, Accordion-Öffnungen
4. **Ambient** — Sehr langsame, kaum wahrnehmbare Hintergrund-Bewegungen (Glow-Breathing)

**Verboten:**
- Springende oder bouncende Animationen
- Marquee/Ticker-Effekte
- Permanente Shimmer/Blink-Animationen auf UI-Elementen
- Scroll-Hijacking oder Scroll-Snap
- Parallax auf Text (nur auf dekorative Elemente)
- Alles, was nach "Demo" oder "Marketing-Gimmick" aussieht

**Timing-Regeln:**
- Reveal-Dauer: 500-700ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1) für Entrances
- Hover-Transitions: 200-300ms ease
- Ambient-Loops: >8s (kaum wahrnehmbar)
- Stagger-Delay zwischen Elementen: 100-150ms

### 0.5 Typografie-System

**Schriften:**
- Display/Headlines: Space Grotesk 700 (bleibt)
- Body: Inter 400/500 (bleibt)
- Mono/Technical: JetBrains Mono (bleibt)
- NEU — Serif-Akzent: Instrument Serif Italic (nur für gezielte emotionale Momente)

**Serif-Einsatzregel:**
Instrument Serif wird NUR an maximal 3-4 Stellen auf der gesamten Homepage eingesetzt:
1. Ein Wort in der Hero-Headline
2. Die Final-CTA-Headline
3. Optional: 1-2 Section-Headlines (nicht alle!)

**NICHT:** Jede Section-Headline bekommt mechanisch "erstes Wort in Serif".
Das wird vorhersehbar und wirkt wie eine Formel statt wie Charakter.

**Größen-Upgrade:**
```
h1: clamp(2.5rem, 6vw, 4.25rem)    /* von 3.75rem auf 4.25rem max */
h2: clamp(1.8rem, 4vw, 2.75rem)    /* von 2.5rem auf 2.75rem max */
.page-intro: clamp(1.1rem, 2.2vw, 1.3rem)  /* etwas größer */
```

### 0.6 Spacing & Layout-System

**Vertikaler Rhythmus:**
```
--space-section:      clamp(5rem, 12vw, 8rem)    /* zwischen Sections — mehr Luft */
--space-section-sm:   clamp(3rem, 7vw, 5rem)     /* kleinere Sections */
--space-block:        2.5rem                       /* zwischen Blöcken innerhalb Section */
--space-element:      1.25rem                      /* zwischen Elementen */
```
Upgrade von aktuell: section-y von max 7rem → 8rem. Mehr Luft = teurer.

**Container:**
- Max-width: 1160px bleibt
- Aber: Hero darf auf 1280px gehen (mehr Bühne)
- Cards: padding von 1.75rem → 2rem

**Layout-Wechsel für visuellen Rhythmus:**
Die Homepage wechselt bewusst zwischen:
- Centered (Hero, Final CTA)
- Split/Asymmetrisch (Problem-Section, ggf. Workflows)
- Grid (Target Groups, Process Steps)
Nie mehr als 2 aufeinanderfolgende Sections im gleichen Layout.

### 0.7 Do / Don't Übersicht

| DO                                           | DON'T                                          |
|----------------------------------------------|------------------------------------------------|
| Subtile Glow-Akzente im Hintergrund         | Grell leuchtende Neon-Effekte                  |
| Mehrstufige Shadows für Tiefe                | Flat Cards ohne jede Tiefenwirkung             |
| Serif nur an 3-4 emotionalen Stellen         | Serif auf jeder Headline mechanisch            |
| Ruhige ambient Hintergrund-Motion            | Springende, bouncende Animationen              |
| Blur-to-Sharp Reveal beim Scrollen           | Nur opacity-toggle als Reveal                  |
| Operations Canvas als Signature Visual       | Generische Illustrationen oder Stock-Fotos     |
| Kuratiert: weniger zeigen, dafür größer      | Alles gleichberechtigt auf einer Ebene         |
| Mobile: vereinfacht, ruhiger als Desktop     | Alle Effekte 1:1 auf Mobile übertragen         |
| Trust-Elemente strategisch platzieren        | Social Proof vergessen oder verstecken         |
| Performance first (CSS-native Animationen)   | GSAP oder schwere JS-Libraries laden           |

---

## Phase 1 — Hero & Header

### 1.1 Header-Verhalten

**Status Quo:**
Sticky Header mit backdrop-blur(14px), 64px Höhe, border-bottom.
→ Funktional okay, aber zu "normal".

**Neu:**
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
  background-color: rgba(10, 10, 10, 0.7);     /* etwas transparenter */
  backdrop-filter: blur(20px) saturate(1.3);     /* stärkerer Blur */
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06); /* subtilerer Border */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Beim Scrollen: etwas solider werden */
.site-header.scrolled {
  background-color: rgba(10, 10, 10, 0.92);
  border-bottom-color: var(--color-border);
}
```

**JS ergänzen:** Einfacher Scroll-Listener der `.scrolled` Klasse bei scrollY > 50 toggelt.

**CTA im Header:**
Button bleibt. Aber: Auf Desktop den CTA-Button etwas kleiner (btn-sm bleibt),
dafür mit dezenterem Stil — nicht das knallige Blau des Hero-CTAs.
```css
.header-cta {
  background: rgba(21, 88, 255, 0.15);
  border: 1px solid rgba(21, 88, 255, 0.3);
  color: var(--color-accent);
}
.header-cta:hover {
  background: var(--color-accent);
  color: #fff;
}
```
→ Ghost-Stil im Ruhezustand, füllt sich beim Hover. Weniger aggressiv.

### 1.2 Hero — Struktur & Copy

**Ziel:** In 5 Sekunden muss klar werden: Das ist eine ernsthafte Premium-Firma,
die operative Probleme mit KI löst. Modern, hochwertig, nicht gimmicky.

**Layout:** Split bleibt (Text links, Visual rechts). Aber:
- Container-Max auf 1280px für den Hero
- Mehr vertikales Padding: clamp(6rem, 14vw, 10rem) statt clamp(5rem, 12vw, 9rem)
- Mehr Luft zwischen Text und Visual

**Copy-Struktur:**

```
Eyebrow:    "KI-Workflows für Handwerk & Hausverwaltung"
            → Stil: ruhiger Badge, feine Border, kein Shimmer
            → Kleiner Dot davor (wie bei Giga: ● CUSTOM AGENTS)

Headline:   FINAL (keine Alternativen mehr):
            "Weniger operative Reibung.
             Mehr Flow im Tagesgeschäft."
            → Serif-Akzent auf "Reibung":
              "Weniger operative <span class="serif-accent">Reibung.</span>
               Mehr Flow im Tagesgeschäft."
            → Max 2 Zeilen auf Desktop
            → Warum diese Headline: Sie ist merkbar, emotional und trotzdem
              operativ konkret. "Reibung" als Serif-Wort kontrastiert
              perfekt — es ist das Problem-Wort, das visuell hervorgehoben wird.

Subline:    "Contentfluss automatisiert Anfragen, Meldungen,
             Angebote und Kommunikation — auf euren bestehenden
             Abläufen, ohne Systemwechsel."
            → page-intro Klasse, max 2-3 Zeilen

CTAs:       Primär: "Fit-Call buchen" (btn-primary btn-lg)
            Sekundär: "Workflows ansehen →" (cta-link, KEIN zweiter Button)
            → Nur 2 CTAs, nicht mehr

Trust-Row:  Direkt unter den CTAs, noch innerhalb der Hero-Section:
            4 Pills: "Pilot in 3–5 Wochen" | "Kein Systemwechsel" |
                     "DSGVO-orientiert" | "3–30 Mitarbeitende"
            → Statisch, ruhig, glass-pill Stil
            → KEIN Marquee, keine Bewegung

WICHTIG — Trust-Dopplung vermeiden:
            Die Trust-Row im Hero ERSETZT den separaten Trust-Strip (Section 2).
            Section 2 (trust-strip) wird ENTFERNT.
            Begründung: Beide zeigen fast identische Inhalte. Doppelte
            Vertrauensbeweise direkt hintereinander wirken redundant, nicht
            überzeugender. Die Trust-Row im Hero ist wirkungsvoller, weil sie
            direkt beim First Impression sichtbar ist.
```

### 1.3 Hero — Signature Visual (Operations Canvas)

**Das zentrale Wiederkennungs-Element von Contentfluss.**

Das aktuelle Workflow-Monitor-Konzept bleibt, wird aber zum "Operations Canvas" aufgewertet.
Nicht einfach eine dunkle Box mit Monospace-Text, sondern ein inszeniertes Mini-Dashboard.

**Struktur des Canvas — BEWUSST REDUZIERT:**

Das Canvas soll nach "souveränes Systembild" aussehen, NICHT nach "Mini-Adminpanel".
Regel: Große Status-Signale, wenige Knoten, wenig Kleinsttext. Je cleaner, desto teurer.

```
┌─────────────────────────────────────────────┐
│  ● ● ●     OPERATIONS CANVAS      ● aktiv  │  ← Title Bar (clean, mono)
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────┐   ──→   ┌──────────┐         │
│  │ Anfrage  │         │ Qualifi- │         │
│  │  ● neu   │         │ zierung  │         │
│  └──────────┘         │ ● läuft  │         │
│                       └──────┬───┘         │
│                              │              │
│                       ┌──────┴───┐         │
│                       │ Routing  │         │
│                       │  ✓ done  │         │
│                       └──────────┘         │
│                                             │
├─────────────────────────────────────────────┤
│  –18 Min / Tag              12 verarbeitet  │  ← Stat-Bar (2 Werte, groß)
└─────────────────────────────────────────────┘
```

**Reduktionsregeln:**
- Maximal 3 Flow-Knoten (Anfrage → Qualifizierung → Routing)
- Nur 2 Status-Arten: ● aktiv (blau-pulsend) und ✓ fertig (grün)
- Stat-Bar: NUR 2 Kennzahlen, groß dargestellt
- Kein Kleinsttext, keine Erklärungen im Canvas
- Die Knoten-Labels sind max 1-2 Wörter
- Viel Whitespace innerhalb des Canvas

**Visuell:**
- Hintergrund: solid surface (#111111), NICHT Glassmorphism
  (Glass funktioniert nicht auf dem aktuellen Hintergrund)
- Multi-Layer Shadow (3 Ebenen + subtiler Glow-Ring):
  ```css
  .operations-canvas {
    background: var(--color-surface);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-xl);
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.04),
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 8px 24px rgba(0, 0, 0, 0.4),
      0 32px 80px rgba(0, 0, 0, 0.5),
      0 0 100px rgba(21, 88, 255, 0.06);
  }
  ```
- Flow-Verbindungen zwischen den Knoten: dünne Linien (statisch in Pass 1, Puls-Animation in Pass 2)
- Status-Badges: "neu" (blau), "läuft" (blau, Pulsing erst in Pass 2), "fertig" (grün)
- Stat-Karten unten: "-18 Min/Tag" als Highlight-Stat

**Motion auf dem Canvas (PASS 2 — erst nach Static-Freigabe):**
- Leichtes Float: beibehalten, aber langsamer (8s statt 6s)
- Status-Dots: sanftes Pulsing (bereits vorhanden, beibehalten)
- Flow-Linien: sehr subtiles Pulse-Through (ein Lichtpunkt wandert langsam entlang der Linie)
- Beim Scroll: Canvas bewegt sich leicht nach oben (Parallax, 30-50px über 80vh)

**Floating-Chips:**
- ENTFERNEN. Sie adden visuelles Rauschen und überlappen den Canvas.
  Die Information ("12 heute verarbeitet", "Qualifizierung aktiv") ist
  bereits IM Canvas sichtbar. Die Chips sind redundant.
- Wenn Chips bleiben sollen: Deutlich weiter weg positionieren und
  nur auf Desktop >1200px zeigen.

### 1.4 Hero — Hintergrund

**Aktuell:** Fast schwarz mit kaum sichtbarem Grid und schwachem Glow.
→ Kein Raumgefühl, keine Tiefe, keine Atmosphäre.

**Neu — Drei Hintergrund-Layer:**

```css
/* Layer 1: Tiefer Gradient statt Flat-Schwarz */
.hero {
  background:
    linear-gradient(
      175deg,
      #060B18 0%,          /* Tiefes Navy oben */
      #0A0E1A 30%,         /* Übergang */
      var(--color-bg) 70%  /* Standard-Bg unten */
    );
}

/* Layer 2: Starker Accent-Glow (::before) */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 900px 600px at 65% 30%,
      rgba(21, 88, 255, 0.14) 0%,        /* Hauptglow hinter Canvas */
      transparent 70%
    ),
    radial-gradient(
      ellipse 500px 400px at 20% 80%,
      rgba(80, 50, 180, 0.06) 0%,         /* Sekundärer warmer Glow */
      transparent 70%
    );
  pointer-events: none;
  z-index: 0;
  /* KEIN animation hier — hero-glow-breathe gehört zu PASS 2 (siehe 1.6) */
}

/* Layer 3: Grid-Pattern (::after) — subtil verstärkt */
.hero::after {
  /* Bestehendes Grid, aber opacity von 0.022 auf 0.035 erhöhen */
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 4rem 4rem;  /* etwas enger */
  /* mask-image bleibt */
}
```

**Warum kein Bild?**
Ein atmosphärisches Hintergrundbild (architektonisch, abstrakt) wäre möglich,
ist aber OPTIONAL und erst in Phase 4 (Polish) zu evaluieren.
Die Glow-Gradienten + Grid + tieferer Base-Gradient erzeugen bereits
deutlich mehr Atmosphäre als der aktuelle Zustand.
Ein Bild kann schnell "random" oder "stockig" wirken — lieber ohne
und dafür die Glow-Welt sauber, als mit einem mittelmäßigen Bild.

### 1.5 Hero — Entrance-Animation (PASS 2 — erst nach Static-Freigabe)

**Blur-to-Sharp statt nur Fade-Up:**

```css
@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.hero .eyebrow {
  animation: hero-enter 0.6s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero h1 {
  animation: hero-enter 0.7s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero .page-intro {
  animation: hero-enter 0.6s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero .cta-group {
  animation: hero-enter 0.6s 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero .trust-row {
  animation: hero-enter 0.5s 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Canvas: Eigene Entrance mit Scale */
@keyframes canvas-enter {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
.hero .operations-canvas-wrap {
  animation: canvas-enter 0.9s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
```

### 1.6 Hero — Scroll-Linked & Ambient Motion (PASS 2 — erst nach Static-Freigabe)

> **Dieses Kapitel wird erst implementiert, wenn Pass 1 (Static) visuell abgenommen ist.**

```css
/* Ambient Glow-Breathing (aus 1.4 hierher verschoben) */
@keyframes hero-glow-breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.hero::before {
  animation: hero-glow-breathe 14s ease-in-out infinite;
}

/* Canvas schwebt nach oben beim Scrollen */
@supports (animation-timeline: scroll()) {
  @keyframes canvas-parallax {
    from { transform: translateY(0); }
    to { transform: translateY(-50px); }
  }
  .operations-canvas-wrap {
    animation: canvas-parallax linear;
    animation-timeline: scroll();
    animation-range: 0vh 80vh;
  }

  /* Hero-Text fadet leicht beim Wegschrollen */
  @keyframes hero-text-fade {
    0% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-20px); }
  }
  .hero .stack {
    animation: hero-text-fade linear;
    animation-timeline: scroll();
    animation-range: 20vh 70vh;
  }

  /* Glow pulsiert mit Scroll */
  @keyframes glow-scroll {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.4; }
  }
  .hero::before {
    animation: glow-scroll linear;
    animation-timeline: scroll();
    animation-range: 0vh 100vh;
  }
}
```

Fallback: Ohne `animation-timeline` Support passiert nichts — die Seite
sieht dann einfach "normal" aus (progressive enhancement).

### 1.7 Hero — Mobile-Verhalten

```
- Layout wechselt zu Single-Column (Text oben, Canvas unten) — bereits so
- Canvas wird auf max-width: 360px skaliert
- Floating-Chips: komplett ausgeblendet (bereits so bei <960px)
- Hero-Padding reduziert: clamp(4rem, 10vw, 6rem) statt 10rem
- Scroll-linked Animationen: DEAKTIVIERT auf Mobile
  @media (max-width: 768px) {
    .operations-canvas-wrap,
    .hero .stack,
    .hero::before {
      animation-timeline: auto !important;
    }
  }
- Grid-Pattern: ausblenden auf Mobile (spart Rendering)
- Glow: auf 70% Opacity reduzieren (weniger visuelles Rauschen auf kleinem Screen)
```

---

## Phase 2 — Globale Systeme

### 2.1 Shadow-System

Ersetze die aktuelle einschichtige Shadow-Logik durch ein dreistufiges System:

```css
@theme {
  /* ... bestehende Variablen ... */

  /* Shadow System */
  --shadow-sm:
    0 1px 2px rgba(0,0,0,0.25),
    0 2px 6px rgba(0,0,0,0.15);
  --shadow-md:
    0 1px 3px rgba(0,0,0,0.25),
    0 4px 12px rgba(0,0,0,0.2),
    0 12px 40px rgba(0,0,0,0.15);
  --shadow-lg:
    0 2px 4px rgba(0,0,0,0.25),
    0 8px 20px rgba(0,0,0,0.25),
    0 24px 64px rgba(0,0,0,0.2);
  --shadow-glow:
    0 0 0 1px rgba(21,88,255,0.08),
    0 4px 12px rgba(21,88,255,0.06),
    0 12px 48px rgba(21,88,255,0.04);
}
```

**Anwendung:**
```
.card                    → kein Shadow (default), Shadow-md on hover
.card:hover              → var(--shadow-md)
.workflow-card:hover     → var(--shadow-lg) + glow-border
.target-panel:hover      → var(--shadow-lg)
.operations-canvas       → var(--shadow-lg) permanent
.process-step:hover      → var(--shadow-sm)
```

### 2.2 Glow-Border auf Hover

```css
/* Utility: jedes interaktive Element bekommt beim Hover eine leuchtende Kante */
.card:hover,
.workflow-card:hover,
.target-panel:hover {
  border-color: rgba(21, 88, 255, 0.18);
}
```

Kein `inset box-shadow` oder overdone Glow — nur die Border-Farbe wechselt subtil zu Blau.
Das reicht zusammen mit dem Shadow-System für Premium-Feeling.

### 2.3 Hintergrund-Glow pro Section

Nicht jede Section, sondern **3 gezielte Stellen** auf der Homepage:

```css
/* Utility-Klassen für Section-Glows */
.has-glow {
  position: relative;
  overflow: hidden;
}
.has-glow::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, var(--glow-color, rgba(21,88,255,0.06)), transparent 70%);
  pointer-events: none;
  z-index: 0;
}
.has-glow > * {
  position: relative;
  z-index: 1;
}

/* Positionierung per Modifier */
.glow-br::after { bottom: -20%; right: -10%; }
.glow-tl::after { top: -15%; left: -10%; }
.glow-center::after { top: 50%; left: 50%; transform: translate(-50%, -50%); }
```

**Wo anwenden:**
1. Section 3 (Target Groups): `has-glow glow-br`
2. Section 5 (Workflows): `has-glow glow-tl` mit `--glow-color: rgba(100,60,200,0.05)`
3. Section 8 (Final CTA): `has-glow glow-center` mit stärkerem Glow (0.10)

### 2.4 Reveal-System Upgrade (PASS 2 — erst nach Static-Freigabe)

```css
/* Blur-to-Sharp statt nur Fade */
[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  filter: blur(4px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Stagger: auch mit Blur */
[data-stagger] > * {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(3px);
}
[data-stagger].is-visible > * {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Stagger Delays: etwas gestreckt */
[data-stagger].is-visible > *:nth-child(1) { transition-delay: 0s; }
[data-stagger].is-visible > *:nth-child(2) { transition-delay: 0.12s; }
[data-stagger].is-visible > *:nth-child(3) { transition-delay: 0.24s; }
[data-stagger].is-visible > *:nth-child(4) { transition-delay: 0.36s; }
[data-stagger].is-visible > *:nth-child(5) { transition-delay: 0.48s; }
[data-stagger].is-visible > *:nth-child(6) { transition-delay: 0.6s; }
```

### 2.5 Card-Shine auf Hover (NUR selektiv) (PASS 2 — erst nach Static-Freigabe)

**Nur auf:** `.workflow-card` und `.target-panel`. NICHT auf Standard-`.card`.

```css
.workflow-card,
.target-panel {
  position: relative;
  overflow: hidden;
}
.workflow-card::before,
.target-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255,255,255,0.025) 45%,
    rgba(255,255,255,0.05) 50%,
    rgba(255,255,255,0.025) 55%,
    transparent 60%
  );
  background-size: 250% 100%;
  background-position: 200% center;
  transition: background-position 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 1;
}
.workflow-card:hover::before,
.target-panel:hover::before {
  background-position: -50% center;
}
```

Standard-Cards lösen Premium über gute Shadows und Border-Glow, nicht über Shine.

### 2.6 Film-Grain (OPTIONAL — Phase 4 evaluieren)

Grain wird NICHT in Phase 2 implementiert. Erst wenn alle anderen visuellen Systeme stehen,
wird in Phase 4 evaluiert, ob Grain noch nötig ist oder die Seite auch ohne bereits premium wirkt.

Wenn ja:
```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.02;
  background: url('/noise.png') repeat;
  mix-blend-mode: overlay;
}
```
noise.png = 200x200px tile, subtiles Rauschen. Opacity MAXIMAL 0.025.

---

## Phase 2B — Typografie-Implementierung

### Google Fonts Link erweitern

In `Layout.astro`, den bestehenden Google Fonts Link erweitern:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
```

### CSS-Variable ergänzen

```css
@theme {
  --font-serif: "Instrument Serif", Georgia, serif;
  /* bestehende Variablen bleiben */
}
```

### Utility-Klasse

```css
.serif-accent {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}
```

### Anwendung im HTML (sparsam!)

```html
<!-- Hero (konsistent mit 1.2 Copy-Struktur) -->
<h1>Weniger operative <span class="serif-accent">Reibung.</span> Mehr Flow im Tagesgeschäft.</h1>

<!-- Final CTA -->
<h2>Welcher Ablauf kostet euch täglich die meiste <span class="serif-accent">Zeit?</span></h2>

<!-- Optional: 1 weitere Section -->
<h2><span class="serif-accent">Spezialisiert</span> auf zwei Branchen</h2>
```

Das sind maximal 3 Stellen. Nicht mehr.

**VALIDIERUNG nach erstem Build:**
Nach der Implementierung muss visuell geprüft werden, ob Instrument Serif
die Seite tatsächlich wärmer und hochwertiger macht oder ob sie zu "editorial"
oder "fashion" wirkt. Wenn die Serif-Akzente nicht überzeugen → ENTFERNEN
und stattdessen rein auf Space Grotesk mit Größen-/Gewichtskontrasten setzen.
Die Serif-Font ist ein Experiment, kein Muss.

---

## Phase 3 — Homepage Sections

### 3.1 Homepage-Struktur (Gesamt-Flow)

```
1. HERO          — Bühne, Atmosphäre, Canvas, CTAs, Trust-Row (inkl. Trust-Pills)
2. TARGET GROUPS — "Für wen" — 2 Branchen-Cards mit individuellen Gradients
3. PROBLEM       — Split-Layout, Text + Pain-Card
4. WORKFLOWS     — 3 Feature-Workflow-Cards mit individuellen Gradient-BGs
5. PROCESS       — 3-Step Flow horizontal
6. FAQ           — Clean Accordion (bleibt)
7. FINAL CTA     — Dramatisch, starker Glow, emotionale Typo
```

**ENTFERNT: Trust-Strip als separate Section.**
Die Trust-Informationen sind jetzt in der Hero Trust-Row.
Die alte `<div class="trust-strip">` Section wird komplett aus index.astro entfernt.

### 3.2 Target Groups (ehem. Section 3)

**Aktuell:** 2 identische Cards nebeneinander.
**Neu:** Individuelle Gradient-Hintergründe für visuelle Differenzierung.

```css
.target-panel:nth-child(1) {
  background: linear-gradient(
    155deg,
    rgba(21, 88, 255, 0.05) 0%,
    var(--color-surface) 45%
  );
}
.target-panel:nth-child(2) {
  background: linear-gradient(
    155deg,
    rgba(120, 50, 220, 0.04) 0%,
    var(--color-surface) 45%
  );
}
```

**Eyebrow-Dots:** Farbige Dots vor "Handwerk" (blau) und "Hausverwaltung" (violett).
```html
<span class="eyebrow"><span class="dot dot-blue"></span> Handwerk</span>
<span class="eyebrow"><span class="dot dot-violet"></span> Hausverwaltung</span>
```

```css
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.dot-blue { background: var(--color-accent); }
.dot-violet { background: rgba(120, 50, 220, 0.8); }
```

Section bekommt `has-glow glow-br` Klasse für Hintergrund-Glow.

### 3.4 Problem-Section (Section 4)

**Bleibt weitgehend.** Korrekturen:
- `data-reveal` auf die Haupt-Elemente (bereits vorhanden)
- Pain-Card (rechte Seite): Leichter roter Schimmer im Hintergrund
  ```css
  .pain-card-elevated {
    background: linear-gradient(
      160deg,
      rgba(239, 68, 68, 0.04) 0%,
      var(--color-elevated) 40%
    );
  }
  ```

### 3.5 Workflows-Section (Section 5)

**Individuelle Gradient-Hintergründe pro Card:**

```css
.workflow-card:nth-child(1) {
  background: linear-gradient(155deg, rgba(21,88,255,0.05) 0%, var(--color-surface) 50%);
}
.workflow-card:nth-child(2) {
  background: linear-gradient(155deg, rgba(100,50,200,0.04) 0%, var(--color-surface) 50%);
}
.workflow-card:nth-child(3) {
  background: linear-gradient(155deg, rgba(24,195,126,0.04) 0%, var(--color-surface) 50%);
}
```

→ Blau für Handwerk-Workflow 1, Violett für Handwerk-Workflow 2, Grün für Immo-Workflow.
Section bekommt `has-glow glow-tl` Klasse.

### 3.6 Process-Section (Section 6)

**Process-Step Nummern aufwerten:**

```css
.process-step-num {
  font-family: var(--font-display);
  font-size: 1.75rem;         /* von 0.75rem auf 1.75rem */
  font-weight: 700;
  color: var(--color-accent);
  opacity: 0.3;                /* dezent, nicht dominant */
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  display: block;
}
```

Verbindungslinie: Bleibt als statischer Gradient. KEINE Puls-Animation
(das wäre "Gimmick", nicht "Premium").

### 3.7 FAQ (Section 7)

**Bleibt.** Einzige Ergänzung:
```css
details[open] > summary {
  color: var(--color-text-primary);
}
.faq-answer {
  animation: hero-enter 0.3s ease both; /* Sanftes Reinblenden beim Öffnen */
}
```

### 3.8 Final CTA (Section 8)

**Deutlich aufwerten — das ist der emotionale Abschluss.**

```css
.section-feature {
  padding-block: clamp(5rem, 12vw, 8rem); /* Mehr Luft */
}

/* Stärkerer Doppel-Glow */
.section-feature::before {
  background:
    radial-gradient(
      ellipse 700px 500px at 30% 50%,
      rgba(21, 88, 255, 0.10) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 500px 400px at 70% 50%,
      rgba(80, 180, 200, 0.06) 0%,
      transparent 70%
    );
}
```

**Headline mit Serif-Akzent:**
```html
<h2>Welcher Ablauf kostet euch täglich die meiste <span class="serif-accent">Zeit?</span></h2>
```

**Headline-Größe für CTA-Section vergrößern:**
```css
.conviction-block h2 {
  font-size: clamp(2rem, 4.5vw, 3rem); /* Größer als Standard-H2 */
}
```

---

## Phase 4 — Polish & QA

### 4.1 Visual QA Checklist

- [ ] Hero: Glow sichtbar aber nicht grell?
- [ ] Hero: Canvas-Shadows erzeugen Tiefe?
- [ ] Hero: Blur-to-Sharp Entrance funktioniert smooth?
- [ ] Hero: Scroll-linked Parallax auf Canvas funktioniert?
- [ ] Globale Reveals: Blur-to-Sharp auf allen Sections?
- [ ] Cards: Hover-Shine auf Workflow-Cards und Target-Panels?
- [ ] Cards: Shadow-System konsistent?
- [ ] Glow-Sektionen: 3 Sections haben dezenten Hintergrund-Glow?
- [ ] Typografie: Serif nur an max 3 Stellen?
- [ ] Typografie: H1/H2 Größen-Upgrade angewendet?
- [ ] CTA-Section: Stärker als Rest der Seite?
- [ ] Trust-Row (im Hero): Ruhig, keine Animation?
- [ ] Process-Steps: Nummern größer?

### 4.2 Mobile QA

- [ ] Hero: Single-column, kein Overflow
- [ ] Canvas: Skaliert korrekt, keine Überlappung
- [ ] Chips: Ausgeblendet auf <960px
- [ ] Scroll-linked: Deaktiviert auf Mobile
- [ ] Glow-Hintergründe: Reduzierte Opacity auf Mobile
- [ ] Touch-Targets: Alle Buttons mind. 44x44px
- [ ] Kein horizontaler Scroll auf allen Breakpoints

### 4.3 Performance

- [ ] Lighthouse Score >90 auf allen Metriken
- [ ] Keine Layout-Shifts durch Animationen
- [ ] will-change nur auf aktiv animierte Elemente
- [ ] Grain-Overlay (falls implementiert): GPU-composited
- [ ] Alle Animationen respektieren prefers-reduced-motion

### 4.4 Cross-Browser

- [ ] Chrome/Edge: Volle Funktionalität inkl. scroll-linked
- [ ] Firefox: scroll-linked getestet
- [ ] Safari: Fallbacks für animation-timeline, backdrop-filter OK
- [ ] Mobile Safari: Keine Rendering-Artefakte bei Glows

### 4.5 Optional: Film-Grain evaluieren

Erst NACH allen anderen Änderungen:
- Seite ohne Grain betrachten
- Wenn sie bereits premium genug wirkt → kein Grain
- Wenn sie noch "zu digital/clean" wirkt → Grain mit 0.02 Opacity testen
- Im Zweifel: weglassen

---

## Datei-Referenz

| Datei | Was ändert sich |
|-------|-----------------|
| `src/styles/global.css` | Shadow-System, Glow-Utilities, Reveal-Blur, Shine-Effekt, Headline-Größen, Hero-Hintergrund, Canvas-Styles, Hover-States, Process-Nummern, CTA-Section |
| `src/layouts/Layout.astro` | Font-Link (Instrument Serif), Header scroll-Klasse JS, ggf. Grain-Overlay |
| `src/pages/index.astro` | Hero-Markup (Canvas statt Monitor), Serif-Akzente (3 Stellen), Section-Klassen (has-glow), Trust-Row in Hero, Chips entfernen |
| `src/pages/handwerk.astro` | Subpage-Hero Glow-Farbe, ggf. 1 Serif-Akzent |
| `src/pages/immobilienverwaltung.astro` | Subpage-Hero Glow-Farbe |
| `src/pages/leistungen.astro` | Subpage-Hero Glow-Farbe |
| `src/pages/workflows.astro` | Subpage-Hero Glow-Farbe |
| `src/pages/ueber-uns.astro` | Subpage-Hero Glow-Farbe |

---

## Zusammenfassung: Was diesen Plan von v1 unterscheidet

1. **Art Direction zuerst** — Bevor ein einziger Effekt implementiert wird, ist die Markenrichtung definiert
2. **Weniger Effekte, besser kuratiert** — Kein Marquee, kein Eyebrow-Shimmer, kein Gradient-Text als Hauptmittel
3. **Signature Visual** — Operations Canvas als wiederkehrendes Markenelement, nicht nur eine "Box im Hero"
4. **Serif strategisch, nicht mechanisch** — Max 3 Stellen, nicht jede Headline
5. **Shine nur selektiv** — Nur auf Workflow-Cards und Target-Panels, nicht überall
6. **Header mitgedacht** — Transparenter, scroll-responsive, subtilerer CTA
7. **Spacing-System** — Mehr Luft = teurer
8. **Mobile von Anfang an** — Scroll-linked deaktiviert, Effekte reduziert, Layout vereinfacht
9. **Grain erst am Ende evaluieren** — Nicht als erstes implementieren
10. **Conversion bleibt sichtbar** — Trust-Row im Hero, klare CTAs, kein "nur schön"

---

*Masterplan v4 (final) — 19.03.2026*
*Quellen: Claude Code-Analyse + ChatGPT Art-Direction Feedback, fusioniert*

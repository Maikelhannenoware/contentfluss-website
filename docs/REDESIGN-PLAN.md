# Contentfluss Website Redesign Plan

**Ziel:** Die bestehende Website von 7/10 auf 9.5/10 bringen — auf Mobbin-/Awwwards-Level — ohne kompletten Neuaufbau.

**Strategie:** Layer-by-Layer Premium-Upgrade auf die bestehende Astro + CSS Architektur. Kein Framework-Wechsel, kein Neuschreiben. Gezielte Eingriffe an den Stellen, die den größten visuellen Impact haben.

**Referenz-Seiten:** giga.ai, useorigin.com, linear.app

**Umsetzungs-Reihenfolge:** Hero → Globale Effekte → Typografie → Sections → Motion → Cards → Subpages

---

## Übersicht: Die 7 Hauptbereiche

| # | Bereich | Impact | Aufwand |
|---|---------|--------|---------|
| 1 | Hero-Transformation | ★★★★★ | Mittel |
| 2 | Globale Premium-Layer (Grain, Shadows, Glow) | ★★★★★ | Gering |
| 3 | Typografie-Upgrade | ★★★★☆ | Gering |
| 4 | Sektions-Redesign & Visuelles Layering | ★★★★☆ | Mittel |
| 5 | Scroll-Animationen & Motion-System | ★★★★★ | Mittel-Hoch |
| 6 | Card & Component Upgrades | ★★★☆☆ | Mittel |
| 7 | Subpages angleichen | ★★★☆☆ | Mittel |

---

## 1. Hero-Transformation

### Status Quo
- Split-Layout: Text links, Workflow-Monitor rechts
- Dunkler Hintergrund mit minimalem Grid-Pattern und schwachem blauem radial-gradient
- Glassmorphism auf dem Monitor wirkt nicht, weil dahinter kaum visueller Content ist
- "Qualifizierung aktiv"-Chip überlagert den Monitor und wirkt wie ein Bug
- Entrance-Animation: simples fade-up, zu zahm
- Kein Signature-Visual, kein dramatischer erster Eindruck

### Ziel
Der Hero soll beim ersten Seitenaufruf sofort "Wow" erzeugen — vergleichbar mit giga.ai (cineastische Atmosphäre) oder Origin (Himmel + Tiefe + Serif-Kontrast). Aber passend zu Contentfluss: nicht Natur-Kitsch, sondern **operative Präzision mit Atmosphäre**.

### Änderungen

#### 1.1 Hintergrund-System komplett neu
```
AKTUELL:
- ::before → radial-gradient (blauer Glow, kaum sichtbar)
- ::after → Grid-Pattern (sehr subtil)
- .hero-accent → drifting glow (kaum wahrnehmbar)

NEU:
- Atmosphärischer Base-Layer: Dunkler, subtiler Gradient von tiefem Navy (#060B18)
  unten zu einem leichten, rauchigen Blau-Grau (#0D1525) oben.
  Nicht flat-schwarz, sondern mit Tiefenwirkung.
- Accent-Glow Layer: Deutlich stärkerer radialer Glow hinter dem Monitor-Bereich.
  Radius: ~800px, Farbe: rgba(21, 88, 255, 0.18) — sichtbar, aber nicht grell.
  Zweiter Glow: violett/magenta-Akzent unten-links, rgba(120, 50, 220, 0.08).
- Grid-Pattern beibehalten, aber Opacity auf 0.04 erhöhen (aktuell 0.022).
- OPTIONAL: Atmosphärisches Hintergrundbild — z.B. ein abstraktes, dunkles
  architektonisches Muster oder ein subtiler Nebel-/Rauch-Effekt als Background-Image
  mit sehr niedriger Opacity (0.08-0.12). Muss zur Marke passen:
  keine Naturlandschaft (das ist Giga's Ding), sondern eher strukturell/architektonisch.
  Wenn Bild, dann CSS: background-blend-mode: soft-light oder overlay.
```

#### 1.2 Workflow-Monitor aufwerten
```
AKTUELL:
- .workflow-monitor hat .glass Klasse
- Blur wirkt nicht, weil Hintergrund fast schwarz
- Float-Animation (wm-float) ist okay aber zu simpel
- Chips überlappen den Monitor

NEU:
- Glassmorphism ENTFERNEN oder grundlegend ändern:
  → Option A: Statt .glass die Standard-Card-Behandlung nutzen (solid surface),
    ABER mit mehrschichtigem Shadow-System:
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.06),
      0 1px 2px rgba(0,0,0,0.4),
      0 8px 24px rgba(0,0,0,0.5),
      0 24px 80px rgba(0,0,0,0.6),
      0 0 120px rgba(21,88,255,0.08);
  → Option B: Glassmorphism beibehalten, aber Hintergrund-Glow DEUTLICH verstärken,
    sodass der Blur tatsächlich etwas verschwimmt (siehe 1.1 Accent-Glow)

- Glow-Ring um den Monitor:
  Ein subtiler ::after Pseudo-Element mit border: 1px solid rgba(21,88,255,0.15)
  und box-shadow: 0 0 60px rgba(21,88,255,0.1) — gibt dem Monitor eine "leuchtende" Kante

- Floating-Chips fixen:
  → Position so anpassen, dass sie den Monitor NICHT überlappen
  → Stattdessen rechts-oben und links-unten mit genug Abstand
  → Alternativ: Chips ganz entfernen — sie adden visuelles Rauschen ohne klaren Nutzen
```

#### 1.3 Hero-Headline mit Gradient-Text
```
AKTUELL:
h1: "Weniger manuelle Arbeit. Klarere Abläufe. Weniger, was liegen bleibt."
→ Rein weiß, Space Grotesk 700

NEU (zwei Optionen):

OPTION A — Gradient auf Schlüsselwörter:
"Weniger manuelle Arbeit." → Normal weiß
"Klarere Abläufe." → Gradient-Text (blau → cyan → weiß)
"Weniger, was liegen bleibt." → Normal weiß

CSS dafür:
.hero-gradient-text {
  background: linear-gradient(135deg, #1558FF 0%, #4FC3F7 50%, #F5F7FA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

OPTION B — Serif/Sans-Serif Kontrast (Origin-Stil):
Statt Gradient ein typografischer Kontrast nutzen (siehe Abschnitt 3).
Das erste emotionale Wort in Serif-Italic, der Rest in Space Grotesk.
```

#### 1.4 Hero-Entrance Choreografie aufwerten
```
AKTUELL:
- Simples fade-up mit gestaffelten Delays (0s, 0.15s, 0.3s, 0.4s)
- cubic-bezier(0.22, 1, 0.36, 1) — okay aber Standard

NEU:
- Blur-to-Sharp Entrance:
  @keyframes hero-text-enter {
    from {
      opacity: 0;
      transform: translateY(24px);
      filter: blur(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

- Staggering beibehalten, aber Delays etwas strecken:
  Eyebrow: 0.1s, H1: 0.3s, Intro: 0.5s, CTAs: 0.7s, Monitor: 0.4s

- Monitor-Entrance: Statt nur fade-up-right auch leichte scale-Transformation:
  @keyframes monitor-enter {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
      filter: blur(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }
  Duration: 1s statt 0.8s
```

#### 1.5 Eyebrow-Badge aufwerten
```
AKTUELL:
- Standard .eyebrow mit accent-soft Background und border

NEU:
- Leichter Shimmer/Shine-Effekt auf dem Badge:
  @keyframes eyebrow-shine {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .hero .eyebrow {
    background: linear-gradient(
      90deg,
      var(--color-accent-soft) 0%,
      rgba(21,88,255,0.25) 50%,
      var(--color-accent-soft) 100%
    );
    background-size: 200% 100%;
    animation: eyebrow-shine 4s ease-in-out infinite;
  }

  → Subtiler, wertiger Effekt. Nicht blinken, sondern langsam schimmern.
```

---

## 2. Globale Premium-Layer

Diese Änderungen wirken sich auf die GESAMTE Seite aus und verändern den "Feel" fundamental.

### 2.1 Film-Grain / Noise Texture Overlay
```
Warum: Gibt der Seite eine analoge, taktile Qualität. Linear und viele Awwwards-Seiten nutzen das.
Sehr subtil, aber es "bricht" die perfekte Digitalität.

Implementation:
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;  /* Sehr subtil! */
  background-image: url("data:image/svg+xml,..."); /* Inline SVG noise */
  /* ODER: Eine kleine 200x200px Noise-PNG als repeating tile */
  mix-blend-mode: overlay;
}

Alternative ohne Bild (rein CSS):
→ CSS-basiertes Grain via randomisiertem Background-Gradient
→ Weniger performant, aber kein Asset nötig

WICHTIG: opacity zwischen 0.02 und 0.04 halten. Mehr wirkt schmutzig.
```

### 2.2 Shadow-System Upgrade
```
AKTUELL:
- Cards: box-shadow: 0 8px 32px rgba(0,0,0,0.4) on hover
- Workflow-cards: 0 16px 48px rgba(0,0,0,0.45) on hover
→ Einschichtig, flach

NEU — Dreischichtiges Shadow-System:
--shadow-sm:
  0 1px 2px rgba(0,0,0,0.3),
  0 2px 8px rgba(0,0,0,0.2);

--shadow-md:
  0 1px 3px rgba(0,0,0,0.3),
  0 4px 16px rgba(0,0,0,0.25),
  0 12px 48px rgba(0,0,0,0.2);

--shadow-lg:
  0 2px 4px rgba(0,0,0,0.3),
  0 8px 24px rgba(0,0,0,0.3),
  0 24px 80px rgba(0,0,0,0.25);

--shadow-glow:
  0 0 0 1px rgba(21,88,255,0.1),
  0 4px 16px rgba(21,88,255,0.08),
  0 16px 64px rgba(21,88,255,0.05);

Anwenden auf:
- .card:hover → --shadow-lg
- .workflow-card:hover → --shadow-lg + --shadow-glow
- .workflow-monitor → --shadow-lg (permanent, kein hover)
- .process-step:hover → --shadow-md
```

### 2.3 Glow-Sektionen (nicht nur im Hero)
```
AKTUELL:
- Glow nur im Hero (::before) und in .section-feature (::before)
- Rest der Seite: komplett flat

NEU:
Jede zweite Section bekommt einen subtilen radialen Glow als Hintergrund-Akzent.
Nicht identisch, sondern variierend:

Section 3 (Target Groups):
  Glow unten-rechts, blau, opacity 0.06

Section 5 (Workflows):
  Glow oben-links, violett/blau, opacity 0.05

Section 8 (Final CTA):
  Doppel-Glow: blau links + cyan rechts, opacity 0.08 (stärker, weil CTA)

Implementation per Section via zusätzliches ::before Pseudo-Element
oder via einer neuen Utility-Klasse:

.glow-bl::before { /* bottom-left glow */
  content: "";
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(21,88,255,0.07), transparent 70%);
  pointer-events: none;
}

.glow-tr::before { /* top-right glow */
  content: "";
  position: absolute;
  top: -15%;
  right: -5%;
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(100,50,200,0.05), transparent 70%);
  pointer-events: none;
}

Sections müssen position: relative; overflow: hidden; bekommen.
```

### 2.4 Border-Subtle-Glow auf Hover
```
Für ALLE Cards und interaktiven Elemente:
Statt nur border-color Änderung auch ein subtiler Glow-Border.

.card:hover,
.workflow-card:hover,
.target-panel:hover,
.process-step:hover {
  border-color: rgba(21, 88, 255, 0.2);
  box-shadow:
    var(--shadow-lg),
    inset 0 0 0 1px rgba(21, 88, 255, 0.08);
}

→ Das gibt den Cards eine leuchtende Kante, die sich premium anfühlt.
```

---

## 3. Typografie-Upgrade

### 3.1 Serif-Akzent-Font einführen
```
AKTUELL:
- Display: Space Grotesk (Sans-Serif)
- Body: Inter (Sans-Serif)
- Mono: JetBrains Mono

VORSCHLAG:
Zusätzlich eine Serif-Font für emotionale Headline-Akzente:
→ "Instrument Serif" (Google Fonts, kostenlos, modern, elegant)
→ ODER "Playfair Display" (klassischer, mehr Origin-Feeling)
→ ODER "DM Serif Display" (warm, zugänglich)

EMPFEHLUNG: Instrument Serif — passt am besten zu Space Grotesk.

USAGE — Nicht überall, sondern gezielt:
- Hero H1: Schlüsselwort in Serif-Italic
- Section H2s: Erstes Wort in Serif-Italic (wie Origin: "Track everything", "Ask anything")
- Final CTA H2: Komplett oder teilweise in Serif

Beispiele für Contentfluss:
- "Weniger manuelle Arbeit." → "*Weniger* manuelle Arbeit."
- "Spezialisiert auf zwei Branchen" → "*Spezialisiert* auf zwei Branchen"
- "Operative Abläufe, nicht Feature-Listen" → "*Operative* Abläufe, nicht Feature-Listen"

CSS:
--font-serif: "Instrument Serif", Georgia, serif;

.serif-accent {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

Google Fonts Link ergänzen in Layout.astro:
family=Instrument+Serif:ital@1
```

### 3.2 Headline-Größen aufziehen
```
AKTUELL:
h1: clamp(2.2rem, 5.5vw, 3.75rem)  → Max 60px
h2: clamp(1.7rem, 3.5vw, 2.5rem)   → Max 40px

NEU:
h1: clamp(2.5rem, 6vw, 4.25rem)    → Max 68px (deutlich größer, mehr Statement)
h2: clamp(1.8rem, 4vw, 2.75rem)    → Max 44px (etwas mehr Presence)

Die Referenz-Seiten arbeiten alle mit deutlich größerer Typografie.
Giga: Hero-Text ist ~72px+
Origin: "Own your wealth" ist ~80px+
```

### 3.3 Absatztext-Spacing
```
AKTUELL:
p { max-width: 68ch; } → Okay
body line-height: 1.65 → Okay

NEU:
.page-intro Größe leicht erhöhen:
font-size: clamp(1.1rem, 2.2vw, 1.3rem) statt clamp(1.05rem, 2vw, 1.2rem)
line-height: 1.75 statt 1.7

→ Mehr Luft, lesbarer, wertiger
```

---

## 4. Sektions-Redesign & Visuelles Layering

### 4.1 Sektions-Kontraste verstärken
```
AKTUELL:
- .section: bg = --color-bg (#0A0A0A)
- .section-alt: bg = --color-surface (#111111)
- .section-dark: bg = --color-elevated (#171717)
→ Alle drei sind fast identisch dunkel. Kaum visueller Rhythmus.

NEU:
- Mehr Kontrast zwischen Sektionen
- NICHT durch hellere Backgrounds, sondern durch:
  1. Glow-Akzente (siehe 2.3)
  2. Unterschiedliche innere Layouts (centered vs. split vs. full-width)
  3. "Feature-Sections" mit deutlich anderem Treatment

VORSCHLAG für Homepage-Flow:
Section 1 (Hero): Dramatisch, Glow, Grid, großer Monitor → ✓ wird redesigned
Section 2 (Trust Strip): Beibehalten, aber Glass-Pills etwas mehr Kontrast → Minor tweak
Section 3 (Target Groups): NEU als "Bento Grid" Layout
Section 4 (Problem): Beibehalten als ruhiger Text-Block
Section 5 (Workflows): NEU als Feature-Showcase mit Glow-Hintergrund
Section 6 (Process): Beibehalten, horizontal Flow ist gut
Section 7 (FAQ): Beibehalten, clean
Section 8 (Final CTA): Dramatisch, großer Glow, emotionale Typo → Upgrade
```

### 4.2 Target-Groups als Bento-Grid (Giga-Stil)
```
AKTUELL:
Zwei gleiche Cards nebeneinander mit Pain-Lists.
→ Funktional, aber langweilig. Sieht aus wie jede andere SaaS-Seite.

NEU — Inspiration von Gigas Feature-Sections:
Statt zwei gleiche Cards → Asymmetrisches Bento-Grid:

┌─────────────────────┬──────────────────┐
│                     │   Handwerk       │
│  Große Headline     │   (Icon + 3     │
│  "Zwei Branchen,    │    Pain Points)  │
│   zwei Ansätze"     ├──────────────────┤
│                     │  Hausverwaltung  │
│                     │   (Icon + 3     │
│                     │    Pain Points)  │
└─────────────────────┴──────────────────┘

→ Linke Spalte: Große Headline + kurze Intro
→ Rechte Spalte: Zwei gestapelte Cards
→ Asymmetrie erzeugt visuelles Interesse
→ Cards bekommen leichten Gradient-Hintergrund (wie Origin Feature-Cards)
```

### 4.3 Workflow-Section als Showcase
```
AKTUELL:
Drei gleiche Workflow-Cards in einem grid-3.
→ Informationsdicht, aber visuell monoton.

NEU:
Layout wie Giga "Agent Canvas" Section:
- Linke Spalte (breit): Große Headline + Beschreibung + CTA
- Rechte Spalte: Gestapelte Feature-Badges (klein)
- Darunter: Full-width Feature-Card mit:
  → Gradient-Hintergrund (dunkelblau → schwarz)
  → Workflow-Visualisierung darin (nicht nur Text, sondern ein visuelles Flowchart)
  → ODER: Ein vergrößerter Workflow-Monitor der zeigt, wie Daten fließen

Alternative (einfacher umzusetzen):
- Die drei Workflow-Cards beibehalten
- ABER: Jede Card bekommt einen individuellen subtilen Gradient-Hintergrund
  Card 1: linear-gradient(135deg, rgba(21,88,255,0.06), transparent 60%)
  Card 2: linear-gradient(135deg, rgba(100,50,200,0.05), transparent 60%)
  Card 3: linear-gradient(135deg, rgba(24,195,126,0.04), transparent 60%)
→ Visueller Rhythmus durch Farbvariation
```

### 4.4 Final CTA Section aufwerten
```
AKTUELL:
- .section-feature mit schwachem Glow
- .conviction-block: zentrierter Text + Buttons
→ Zu ähnlich wie der Rest der Seite

NEU:
- Deutlich stärkerer Glow-Hintergrund (opacity 0.12-0.15 statt 0.07)
- Doppelter Glow: Blau von links + Cyan/Grün von rechts
- Headline in Serif-Italic (emotional, persönlich)
- Größere Headline (h2 auf h1-Größe ziehen für diese Section)
- OPTIONAL: Subtile Partikel-Animation im Hintergrund oder
  ein animierter Glow-Orb (wie Origin "Manage money together")
```

---

## 5. Scroll-Animationen & Motion-System

### 5.1 Scroll-Triggered → Scroll-Linked Upgrade
```
AKTUELL:
IntersectionObserver → .is-visible → opacity 1, translateY(0)
→ Binär: Element erscheint oder nicht.

NEU — Zweistufiges System:

STUFE 1 (Behalten + Verbessern):
- IntersectionObserver für Section-Entrances beibehalten
- ABER: Blur-to-Sharp hinzufügen:
  [data-reveal] {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(4px);
    transition: opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease;
  }
  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

STUFE 2 (NEU — Scroll-Linked):
CSS-native scroll-driven Animationen (kein GSAP nötig!):

Für den Hero-Monitor — Parallax-Effekt:
@keyframes parallax-up {
  from { transform: translateY(0); }
  to { transform: translateY(-60px); }
}
.workflow-monitor {
  animation: parallax-up linear;
  animation-timeline: scroll();
  animation-range: 0vh 80vh;
}
→ Monitor schwebt beim Scrollen leicht nach oben — erzeugt Tiefe.

Für Hero-Text — Fade-out beim Wegschrollen:
@keyframes hero-fade {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-30px); }
}
.hero .stack {
  animation: hero-fade linear;
  animation-timeline: scroll();
  animation-range: 0vh 60vh;
}

Für Glow-Elemente — Intensität ändert sich:
@keyframes glow-pulse-scroll {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}
.hero::before {
  animation: glow-pulse-scroll linear;
  animation-timeline: scroll();
  animation-range: 0vh 100vh;
}

BROWSER-SUPPORT:
animation-timeline: scroll() wird von Chrome 115+, Edge 115+, Firefox 110+ unterstützt.
Safari hat experimentelle Unterstützung.
→ Fallback: Ohne animation-timeline verhält sich alles normal (progressive enhancement).
→ @supports (animation-timeline: scroll()) { ... } für sichere Anwendung.
```

### 5.2 Stagger-Delays verbessern
```
AKTUELL:
nth-child Delays: 0s, 0.1s, 0.2s, 0.3s, 0.4s, 0.5s
→ Zu schnell, Cards erscheinen fast gleichzeitig

NEU:
nth-child Delays: 0s, 0.12s, 0.24s, 0.36s, 0.48s, 0.6s
+ Blur-Effekt bei jedem Element (siehe 5.1 Stufe 1)
+ Leichter Scale-Effekt: scale(0.97) → scale(1)
→ Wirkt deutlich raffinierter
```

### 5.3 Card-Hover Micro-Interactions
```
AKTUELL:
.workflow-card:hover { transform: translateY(-4px); }
→ Standard, jede Seite hat das

NEU — Shine-Effekt auf Hover (Linear-Stil):

.card::before,
.workflow-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255,255,255,0.03) 45%,
    rgba(255,255,255,0.06) 50%,
    rgba(255,255,255,0.03) 55%,
    transparent 60%
  );
  background-size: 250% 100%;
  background-position: 200% center;
  transition: background-position 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 1;
}
.card:hover::before,
.workflow-card:hover::before {
  background-position: -50% center;
}

→ Ein subtiler Lichtschein "wandert" über die Card beim Hover.
→ Premium-Effekt, den man von Linear und Apple-Seiten kennt.
```

### 5.4 Smooth Scroll-Snap zwischen Sektionen (OPTIONAL)
```
NICHT empfohlen für die erste Version.
Scroll-Snap kann auf langen Seiten frustrierend sein.
→ Nur implementieren wenn explizit gewünscht.
```

---

## 6. Card & Component Upgrades

### 6.1 Target-Panel Gradient-Hintergrund
```
AKTUELL:
background: var(--color-surface);
border: 1px solid var(--color-border);

NEU:
.target-panel:nth-child(1) {
  background: linear-gradient(
    160deg,
    rgba(21, 88, 255, 0.06) 0%,
    var(--color-surface) 40%
  );
  border-color: rgba(21, 88, 255, 0.15);
}
.target-panel:nth-child(2) {
  background: linear-gradient(
    160deg,
    rgba(120, 50, 220, 0.05) 0%,
    var(--color-surface) 40%
  );
  border-color: rgba(120, 50, 220, 0.12);
}

→ Farbkodierung: Handwerk = Blau, Hausverwaltung = Violett
→ Gibt der Seite visuellen Rhythmus statt "alles gleich"
```

### 6.2 Process-Steps aufwerten
```
AKTUELL:
Drei identische Cards mit Nummer + Titel + Text
Horizontal verbunden durch eine gradient-Linie

NEU:
- Nummern größer und als Gradient-Text:
  font-size: 2rem statt 0.75rem
  background: linear-gradient(...) / -webkit-background-clip: text
- Oder: Nummern in einem kreisförmigen Badge mit Glow-Border
- Verbindungslinie: Animiert!
  → Pulsing-Dots die von links nach rechts wandern
  → Oder: gradient-Linie die beim Scrollen "aufleuchtet"
```

### 6.3 FAQ Accordion aufwerten
```
AKTUELL: Funktional, clean → Beibehalten
Einzige Änderung:
- Smooth height-Transition beim Öffnen/Schließen
- Leichter Glow auf den Divider-Linien beim Open-State:
  .faq-item[open] {
    border-bottom-color: rgba(21, 88, 255, 0.2);
  }
```

### 6.4 Trust-Strip aufwerten
```
AKTUELL:
Glass-Pills mit Text → Gut
Aber: Statisch, keine Bewegung

NEU:
- Horizontale Scroll-Animation (Marquee-Effekt):
  Die Pills bewegen sich langsam von rechts nach links (wie ein Ticker)
  → Erzeugt visuelles Leben ohne Ablenkung
  → CSS-only mit @keyframes und translateX
  → Dupliziere die Items für seamless loop

- ODER (subtiler): Leichter hover-Scale auf den Pills:
  transform: scale(1.05) on hover
```

---

## 7. Subpages angleichen

### Grundprinzip
Alle Subpages (Leistungen, Handwerk, Hausverwaltung, Workflows, Über uns) profitieren automatisch von den globalen Änderungen (Grain, Shadows, Typografie, Reveal-Blur). Spezifische Änderungen:

### 7.1 Subpage-Heros aufwerten
```
AKTUELL:
.hero-sub: Kleine Version des Hero, schwacher Glow
→ Alle Subpages sehen gleich aus im Hero

NEU:
- Subpage-Heros bekommen individuelle Glow-Farben:
  /handwerk → Orange-warmer Glow (Handwerk-Feeling)
  /immobilienverwaltung → Violetter Glow (Professional)
  /leistungen → Standard Blau
  /workflows → Cyan/Türkis
  /ueber-uns → Warmer, neutraler Glow

- Headline in Serif-Akzent (erstes Wort)
- Leicht größerer hero-sub Padding (aktuell clamp(3.5rem, 8vw, 6rem) → clamp(4rem, 10vw, 7rem))
```

### 7.2 Handwerk & Hausverwaltung: Before/After aufwerten
```
AKTUELL:
.before-card und .after-card → Funktional, aber flach

NEU:
- before-card: Leichter roter Glow im Hintergrund (danger-feeling)
- after-card: Deutlicherer Glow (success/accent)
- Animated Transition: Wenn man scrollt, "morpht" die before-card visuell zur after-card
  → Scroll-linked opacity Änderung
  → ODER: Eine einzige Card die per Toggle umschaltet (interaktiv)
```

---

## 8. Technische Hinweise für die Umsetzung

### 8.1 Performance
```
- Grain-Overlay: Muss position: fixed + pointer-events: none sein.
  Nutze will-change: transform für GPU-Compositing.
- Scroll-linked Animationen: Nutze animation-timeline: scroll() (CSS-native).
  KEIN JavaScript ScrollEvent-Listener (Performance-Killer).
- Glow-Elemente: Sind reine CSS radial-gradients, kein Performance-Problem.
- Shine-Effekt auf Cards: Nur background-position Transition, sehr performant.
```

### 8.2 Progressive Enhancement
```
- Alle Scroll-linked Animationen in @supports (animation-timeline: scroll()) wrappen
- prefers-reduced-motion: Alle Animationen respektieren (bereits teilweise vorhanden)
- prefers-reduced-transparency: Glass-Effekte fallback (bereits vorhanden)
- Grain-Overlay: Kann in Safari etwas anders aussehen → Testen
```

### 8.3 Fonts laden
```
Layout.astro Google Fonts Link erweitern:
AKTUELL:
family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700

NEU (Instrument Serif hinzufügen):
family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700

→ Instrument Serif wird NUR als italic geladen (so wird sie verwendet)
→ Minimaler Performance-Impact (~15KB)
```

### 8.4 Dateien die geändert werden
```
src/styles/global.css          → Hauptarbeit: Shadows, Glows, Grain, Shine, Animations
src/layouts/Layout.astro       → Font-Link ergänzen, Grain-Overlay
src/pages/index.astro          → Hero-Markup, Serif-Akzente, Section-Klassen
src/pages/handwerk.astro       → Serif-Akzente, Glow-Klassen
src/pages/immobilienverwaltung.astro → Serif-Akzente, Glow-Klassen
src/pages/leistungen.astro     → Serif-Akzente, Glow-Klassen
src/pages/workflows.astro      → Serif-Akzente, Glow-Klassen
src/pages/ueber-uns.astro      → Serif-Akzente, Glow-Klassen
```

---

## 9. Priorisierte Umsetzungs-Reihenfolge

### Phase 1: "Der erste Eindruck" (Hero + Globales) — ~2h
1. Globale CSS: Grain-Overlay, Shadow-System, Glow-Utilities
2. Font: Instrument Serif laden
3. Hero-Hintergrund neu (stärkerer Glow, tieferer Gradient)
4. Hero-Headline: Gradient-Text oder Serif-Akzent
5. Hero-Entrance: Blur-to-Sharp Animation
6. Monitor: Shadow-System, Glow-Ring, Chip-Fix

### Phase 2: "Die Seite lebt" (Motion + Sections) — ~2h
7. Scroll-reveal: Blur-Effekt global hinzufügen
8. Scroll-linked: Hero-Parallax auf Monitor
9. Card-Hover: Shine-Effekt implementieren
10. Glow-Sektionen: 2-3 Sections mit Hintergrund-Glows
11. Trust-Strip: Marquee oder hover-Effekt

### Phase 3: "Jede Section zählt" (Detailarbeit) — ~2h
12. Target-Groups: Gradient-Hintergründe, ggf. Bento-Layout
13. Workflow-Cards: Individuelle Gradient-Hintergründe
14. Process-Steps: Größere Nummern, animierte Verbindungslinie
15. Final CTA: Dramatischer Glow, Serif-Headline
16. Subpage-Heros: Individuelle Glow-Farben

### Phase 4: "Polish" — ~1h
17. Feinschliff: Spacing, Transitions prüfen
18. Mobile: Alle Effekte auf Mobile testen und anpassen
19. Performance: Lighthouse-Check
20. Cross-Browser: Safari, Firefox testen

---

## 10. Was NICHT geändert wird

- **Seitenstruktur:** Die Homepage-Sections (Hero → Trust → Targets → Problem → Workflows → Process → FAQ → CTA) bleiben in dieser Reihenfolge
- **Inhalte/Copy:** Texte bleiben wie sie sind (außer Serif-Akzente auf einzelnen Wörtern)
- **Tech-Stack:** Astro + Tailwind + Vanilla CSS + Vanilla JS bleiben
- **SEO:** Alle Meta-Tags, Schemas, semantisches HTML bleiben
- **Tracking:** Event-System bleibt unverändert
- **Navigation:** Header + Footer bleiben strukturell gleich
- **Accessibility:** Skip-Links, ARIA, Keyboard-Navigation, reduced-motion bleiben

---

## 11. Visuelle Referenz-Matrix

| Effekt | Wo bei Referenz | Wo bei Contentfluss |
|--------|----------------|-------------------|
| Serif/Sans-Mix | Origin: jede Section-Headline | Hero H1 + Section H2s (erstes Wort) |
| Gradient-Text | Linear: Headlines | Hero H1 (Option A) |
| Film-Grain | Linear: global | Global body::before |
| Glow-Sektionen | Origin: Feature-Cards | 3-4 Sections + Final CTA |
| Multi-Layer Shadows | Alle drei | Global Shadow-System |
| Scroll-Linked Motion | Linear, Giga | Hero-Parallax, Hero-Fadeout |
| Card-Shine auf Hover | Linear | Alle Cards |
| Blur-to-Sharp Entrance | Giga, Linear | data-reveal System |
| Atmosphärischer BG | Giga (Landschaft), Origin (Himmel) | Subtile Texture/Gradient (kein Bild) |
| 3D-Perspektive | Origin (Phone-Mockup) | NICHT umsetzen (passt nicht) |
| Full-Screen Hero-Image | Giga | NICHT umsetzen (andere Marke) |
| Animated Eyebrow | Giga | Hero Eyebrow Shimmer |

---

*Plan erstellt am 19.03.2026 — Quellen: Code-Analyse contentfluss.de, visuelle Analyse giga.ai + useorigin.com + linear.app, ChatGPT-Insights zu Art Direction*

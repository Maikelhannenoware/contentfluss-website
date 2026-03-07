export type VerticalKey = 'handwerk' | 'immobilienverwaltung';

export type WorkflowDefinition = {
  slug: string;
  name: string;
  short: string;
  problem: string;
  solution: string;
  benefits: [string, string, string];
  who: string;
  effect: string;
};

export const handwerkWorkflows: WorkflowDefinition[] = [
  {
    slug: 'anfrageannahme-vorqualifikation',
    name: 'Anfrageannahme & Vorqualifikation',
    short: 'Neue Anfragen kommen strukturierter rein und sind schneller bearbeitbar.',
    problem: 'Anfragen kommen per Telefon, Mail und Messenger unvollständig und unsortiert an.',
    solution: 'Eingänge werden automatisch kategorisiert, qualifiziert und als klarer Vorgang vorbereitet.',
    benefits: [
      'Weniger verlorene Anfragen',
      'Vollständigere Infos vor dem Rückruf',
      'Schnelleres Routing ins Team',
    ],
    who: 'Geeignet für SHK, Elektro, Dach/Fenster, Sanierung und Servicebetriebe.',
    effect: 'Typischer Effekt: schnellere Erstreaktion und weniger Rückfragen im Büro.',
  },
  {
    slug: 'angebots-follow-up-conversion',
    name: 'Angebots-Follow-up & Conversion',
    short: 'Angebote werden sauber nachverfolgt statt nach Tagen oder Wochen zu versanden.',
    problem: 'Angebote bleiben offen, weil strukturiertes Nachfassen im Tagesgeschäft untergeht.',
    solution: 'Der Workflow steuert Follow-ups zeitbasiert, priorisiert und im richtigen Ton je Anfrage.',
    benefits: [
      'Mehr Rücklauf auf Angebote',
      'Klare Wiedervorlagen statt Excel-Chaos',
      'Weniger manueller Kommunikationsaufwand',
    ],
    who: 'Für Betriebe mit regelmäßigem Angebotsaufkommen.',
    effect: 'Typischer Effekt: mehr Abschlüsse ohne zusätzliche Vertriebskapazität.',
  },
  {
    slug: 'wartungs-service-recall',
    name: 'Wartungs- & Service-Recall',
    short: 'Wartungstermine werden proaktiv erinnert und wiederkehrende Umsätze stabilisiert.',
    problem: 'Wartungen werden nicht konsequent reaktiviert und Potenzial bleibt liegen.',
    solution: 'Kunden werden automatisch zur richtigen Zeit erinnert, inkl. Terminvorbereitung.',
    benefits: [
      'Mehr planbare Serviceauslastung',
      'Weniger manuelles Nachfassen',
      'Sauberere Terminvorbereitung',
    ],
    who: 'Für Wartungs- und Servicebetriebe mit Bestandskundengeschäft.',
    effect: 'Typischer Effekt: bessere Auslastung und weniger Leerlauf im Kalender.',
  },
  {
    slug: 'rechnung-zahlung-mahnkommunikation',
    name: 'Rechnungs- / Zahlungs- / Mahn-Kommunikation',
    short: 'Offene Posten werden konsistent und professionell nachverfolgt.',
    problem: 'Zahlungserinnerungen passieren unregelmäßig und binden unnötig Bürozeit.',
    solution: 'Statusabhängige Kommunikation läuft automatisiert mit klaren Eskalationsstufen.',
    benefits: [
      'Weniger manuelle Mahnläufe',
      'Mehr Verbindlichkeit in der Kommunikation',
      'Transparenterer Forderungsstand',
    ],
    who: 'Für Betriebe mit vielen Einzelrechnungen und offenen Forderungen.',
    effect: 'Typischer Effekt: geringerer Aufwand pro offenem Vorgang und bessere Übersicht.',
  },
  {
    slug: 'dispo-termin-kommunikation',
    name: 'Dispo- & Termin-Kommunikation',
    short: 'Büro und Außendienst arbeiten mit klaren Status statt mit Rückrufschleifen.',
    problem: 'Terminabstimmungen erzeugen viele Rückfragen zwischen Büro, Team und Kunden.',
    solution: 'Status-Updates, Erinnerungen und Verschiebungen werden standardisiert ausgespielt.',
    benefits: [
      'Weniger Abstimmungschaos',
      'Klarere Tagesplanung',
      'Mehr Transparenz für Kunden und Team',
    ],
    who: 'Für Betriebe mit hoher Terminfrequenz und wechselnden Einsatzorten.',
    effect: 'Typischer Effekt: weniger Unterbrechungen und stabilere Tagesabläufe.',
  },
];

export const immobilienverwaltungWorkflows: WorkflowDefinition[] = [
  {
    slug: 'schadenmeldung-vorqualifikation',
    name: 'Schadenmeldung & Vorqualifikation',
    short: 'Schadenmeldungen kommen vollständiger rein und können schneller bearbeitet werden.',
    problem: 'Meldungen sind unvollständig und erzeugen lange Rückfrageketten.',
    solution: 'Eingänge werden automatisch auf Vollständigkeit geprüft und sauber als Vorgang angelegt.',
    benefits: [
      'Vollständigere Schadenmeldungen',
      'Weniger Rückfragen an Mieter/Eigentümer',
      'Schnellerer Start der Bearbeitung',
    ],
    who: 'Geeignet für Haus- und WEG-Verwaltungen mit vielen Schadenvorgängen.',
    effect: 'Typischer Effekt: kürzere Durchlaufzeiten vom Eingang bis zur Beauftragung.',
  },
  {
    slug: 'inbox-triage',
    name: 'Eigentümer- / Mieter-Inbox-Triage',
    short: 'E-Mails werden automatisch priorisiert, zugeordnet und vorbereitet.',
    problem: 'Zu viele Nachrichten landen ungefiltert im Postfach und verdrängen Wichtiges.',
    solution: 'Der Workflow erkennt Anliegen, priorisiert sie und verteilt sie nach Regeln.',
    benefits: [
      'Weniger Kommunikationschaos',
      'Klarere Zuständigkeiten pro Vorgang',
      'Schnellere Reaktionszeiten',
    ],
    who: 'Für Teams mit hohem E-Mail- und Ticketaufkommen.',
    effect: 'Typischer Effekt: entlastete Sachbearbeitung und weniger Liegenbleiber.',
  },
  {
    slug: 'handwerkerkoordination-status',
    name: 'Handwerkerkoordination & Status-Updates',
    short: 'Externe Dienstleister und interne Bearbeiter bleiben im gleichen Informationsstand.',
    problem: 'Statusupdates laufen über viele Kanäle und sind schwer nachvollziehbar.',
    solution: 'Kommunikation und Statuswechsel werden standardisiert und automatisch angestoßen.',
    benefits: [
      'Weniger Nachtelefonieren',
      'Bessere Nachvollziehbarkeit je Vorgang',
      'Höhere Transparenz für Beteiligte',
    ],
    who: 'Für Verwaltungen mit mehreren Dienstleistern und parallelen Fällen.',
    effect: 'Typischer Effekt: weniger Koordinationsaufwand pro Schadensfall.',
  },
  {
    slug: 'serienkommunikation-dokumentenanforderung',
    name: 'Serienkommunikation & Dokumentenanforderung',
    short: 'Wiederkehrende Anschreiben und Nachforderungen laufen verlässlich und dokumentiert.',
    problem: 'Dokumente fehlen häufig, Nachforderungen kosten Zeit und verlaufen unstrukturiert.',
    solution: 'Fristenbasierte Kommunikation inkl. Erinnerungen wird zentral gesteuert.',
    benefits: [
      'Weniger manuelle Serienmails',
      'Höhere Rücklaufquote auf Anforderungen',
      'Klarere Dokumentationsstände',
    ],
    who: 'Für Verwaltungen mit regelmäßigen Eigentümer- oder Mieteranfragen.',
    effect: 'Typischer Effekt: weniger administrative Schleifen in Standardprozessen.',
  },
  {
    slug: 'mahn-rueckstands-kommunikation',
    name: 'Mahn- und Rückstands-Kommunikation',
    short: 'Rückstände werden strukturiert nachverfolgt, ohne den Ton zu verlieren.',
    problem: 'Rückstände werden uneinheitlich verfolgt und verursachen unnötige Abstimmung.',
    solution: 'Kommunikation erfolgt regelbasiert je Status, Frist und Eskalationsstufe.',
    benefits: [
      'Weniger manueller Mahnaufwand',
      'Konsistente Kommunikation',
      'Transparente Priorisierung offener Fälle',
    ],
    who: 'Für kleine bis mittlere Verwaltungen mit laufenden Forderungsprozessen.',
    effect: 'Typischer Effekt: stabilere Abläufe und entlastete Teams im Tagesgeschäft.',
  },
];

export const featuredWorkflowIds: string[] = [
  'anfrageannahme-vorqualifikation',
  'angebots-follow-up-conversion',
  'wartungs-service-recall',
  'schadenmeldung-vorqualifikation',
  'inbox-triage',
  'handwerkerkoordination-status',
];

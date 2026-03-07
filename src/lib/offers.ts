export type VerticalKey = 'handwerk' | 'immobilienverwaltung';

export type OfferPriority = 'phase1' | 'phase2';

export type OfferDefinition = {
  code: string;
  slug: string;
  vertical: VerticalKey;
  name: string;
  shortDescription: string;
  targetGroup: string;
  problem: string;
  solution: string;
  painSignals: string[];
  deliverables: string[];
  techStack: string[];
  implementationTime: string;
  setupPrice: string;
  retainerPrice: string;
  onboarding: string[];
  priority: OfferPriority;
  caution?: string;
};

const offers: OfferDefinition[] = [
  {
    code: 'HW-01',
    slug: 'anfrageannahme-vorqualifikation',
    vertical: 'handwerk',
    name: 'Anfrageannahme & Vorqualifikation',
    shortDescription:
      'Neue Anfragen aus Formular, E-Mail, WhatsApp und optional verpassten Anrufen werden gebuendelt, qualifiziert und priorisiert uebergeben.',
    targetGroup:
      'SHK, Elektro, Dach/Fenster/Sanierung sowie Wartungs- und Servicebetriebe mit hohem Anfragevolumen.',
    problem:
      'Anfragen kommen unvollstaendig und unsortiert ueber mehrere Kanaele rein, dringende Faelle werden zu spaet erkannt und das Buero verliert Zeit in Rueckfragen.',
    solution:
      'Ein strukturierter Intake-Workflow normalisiert Eingangsdaten, klassifiziert Leistung, Dringlichkeit und Region, fordert fehlende Angaben nach und gibt priorisierte Vorgaenge an das Team.',
    painSignals: [
      'Bitte per Mail oder Telefon melden ohne klares Formular',
      'Unvollstaendige Erstanfragen',
      'Lange Antwortzeiten',
      'Schlechte Erreichbarkeitsbewertungen',
      'Notdienst-/Wartungsanfragen ohne saubere Priorisierung',
    ],
    deliverables: [
      'Multichannel-Intake (Web, E-Mail, WhatsApp, optional Missed Call)',
      'AI-Klassifikation fuer Leistung, Dringlichkeit, Standort und Vollstaendigkeit',
      'Automatische Rueckfragen bei fehlenden Pflichtdaten',
      'Priorisierung und Task-Handover ins Buero/Team',
      'Optionale Eingangsbestaetigung und Rueckrufankuendigung',
    ],
    techStack: [
      'Next.js Intake-Form oder Intake-App',
      'PostgreSQL + Prisma',
      'OpenAI Structured Outputs',
      'WhatsApp Cloud API',
      'E-Mail via Postmark/Resend',
      'Optional Twilio fuer Missed-Call-Flow',
      'Redis + BullMQ',
      'PostHog Funnel Tracking',
    ],
    implementationTime: 'MVP 3-4 Wochen, Vollausbau 4-6 Wochen',
    setupPrice: '2.900-4.900 EUR',
    retainerPrice: '590-890 EUR/Monat',
    onboarding: [
      'Leistungskategorien, PLZ-Radius, Buerozeiten und Eskalationsregeln festlegen',
      'Kanaele und Pflichtfelder fuer Intake definieren',
      'Textbausteine fuer Eingangs- und Rueckfragekommunikation freigeben',
      'Tests fuer Notdienst, Standardfall und unvollstaendige Anfrage durchfuehren',
    ],
    priority: 'phase1',
  },
  {
    code: 'HW-02',
    slug: 'angebots-followup-conversion',
    vertical: 'handwerk',
    name: 'Angebots-Follow-up & Conversion',
    shortDescription:
      'Offene Angebote werden mit einer klaren Sequenz nachverfolgt, Antworten klassifiziert und als naechste Aktion ins Team gespielt.',
    targetGroup: 'Alle Handwerksbetriebe mit regelmaessigem Angebotsgeschaeft.',
    problem:
      'Angebote bleiben offen, Nachfassen passiert sporadisch und der Angebotsstatus ist im Tagesgeschaeft nicht transparent.',
    solution:
      'Der Workflow startet pro Angebot eine zeitbasierte Follow-up-Sequenz, bewertet Antworten in Statusklassen und erzeugt automatisch Tasks fuer Rueckruf, Klaerung oder Abschluss.',
    painSignals: [
      'Angebote werden geschrieben, aber nicht systematisch verfolgt',
      'Sporadisches Nachfassen',
      'Hoher Angebotsbestand ohne Statusklarheit',
      'Annahmen haengen von einzelnen Personen ab',
    ],
    deliverables: [
      'Quote-Datenmodell inkl. Status und Events',
      'Follow-up-Sequenz (Tag 2, 5, 10, 20)',
      'Antwortklassifikation (INTERESTED, QUESTION, LATER, NOT_INTERESTED, CALL_ME)',
      'Automatische Aufgaben fuer Rueckfragen und Rueckrufwuensche',
      'Status-Dashboard fuer Angebots-Pipeline und Konversion',
    ],
    techStack: [
      'Next.js Admin fuer Angebotsstatus und Sequenzen',
      'PostgreSQL + Prisma',
      'Redis + BullMQ fuer Delays und Retry',
      'OpenAI Structured Outputs',
      'WhatsApp Cloud API oder E-Mail',
      'Optional SMS-Reminder',
      'PostHog oder internes KPI-Dashboard',
    ],
    implementationTime: 'MVP 3-4 Wochen, Vollausbau 4-6 Wochen',
    setupPrice: '3.900-5.900 EUR',
    retainerPrice: '790-1.190 EUR/Monat',
    onboarding: [
      'Angebotsquellen, Angebotsarten und Statusstufen mappen',
      'Kanalpraeferenzen und Freigaberegeln fuer Follow-ups definieren',
      'No-go-Situationen und Eskalationslogik abstimmen',
      'Pilot mit einer Angebotskategorie und stufenweise Rollout-Planung',
    ],
    priority: 'phase1',
  },
  {
    code: 'HW-03',
    slug: 'wartungs-service-recall',
    vertical: 'handwerk',
    name: 'Wartungs- & Service-Recall',
    shortDescription:
      'Wartungs- und Serviceintervalle werden automatisch verfolgt, Kunden reaktiviert und Rueckmeldungen in Termin- oder Task-Status ueberfuehrt.',
    targetGroup: 'SHK, Klima/Heizung, Elektropruefung und andere Servicebetriebe mit wiederkehrenden Leistungen.',
    problem:
      'Wartungstermine werden nicht konsequent reaktiviert, dadurch bleibt wiederkehrender Umsatz ungenutzt und Auslastung ist weniger planbar.',
    solution:
      'Intervall-Daten steuern Recall-Sequenzen ueber WhatsApp/E-Mail, Antworten werden klassifiziert und in Terminanfrage, Rueckruf oder Pause uebersetzt.',
    painSignals: [
      'Serviceintervalle werden nur manuell nachgehalten',
      'Unregelmaessige Recall-Kommunikation',
      'Unplanbare Auslastung in der Serviceplanung',
    ],
    deliverables: [
      'Intervall- und Faelligkeitslogik pro Serviceart',
      'Mehrstufige Recall-Sequenzen',
      'Rueckmeldeklassifikation und Statusfuehrung',
      'Task-/Terminanstoss fuer das Team',
      'Reporting zu Ruecklauf und Reaktivierung',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'WhatsApp Cloud API',
      'E-Mail via Postmark/Resend',
      'BullMQ fuer Zeitsteuerung',
      'OpenAI fuer Freitext-Antwortklassifikation',
    ],
    implementationTime: 'MVP 2-3 Wochen, Vollausbau 3-5 Wochen',
    setupPrice: '2.500-4.500 EUR',
    retainerPrice: '490-790 EUR/Monat',
    onboarding: [
      'Serviceintervalle und Recall-Zeitfenster definieren',
      'Kontaktpraeferenzen inkl. Opt-in und Ruhezeiten abstimmen',
      'Textvorlagen fuer Erinnerungen freigeben',
      'Pilot mit einem Servicebereich starten und erweitern',
    ],
    priority: 'phase1',
  },
  {
    code: 'HW-04',
    slug: 'rechnung-zahlung-mahn-kommunikation',
    vertical: 'handwerk',
    name: 'Rechnung / Zahlung / Mahn-Kommunikation',
    shortDescription:
      'Offene Rechnungen werden mit stufenweiser Kommunikation strukturiert und einheitlich nachverfolgt.',
    targetGroup: 'Handwerksbetriebe mit vielen Einzelrechnungen und wiederkehrendem Mahnaufwand.',
    problem:
      'Zahlungserinnerungen passieren unregelmaessig, binden Buerozeit und es fehlt ein klares Bild ueber offene Forderungen.',
    solution:
      'Eine regelbasierte Mahnlogik steuert Kommunikation je Status, wertet Antworten aus und dokumentiert Eskalationsstufen transparent.',
    painSignals: [
      'Uneinheitliche Mahnlaeufe',
      'Manuelle Erinnerungen ohne festen Prozess',
      'Unklare Forderungsuebersicht',
    ],
    deliverables: [
      'Mahnstufen-Workflow mit Zeitsteuerung',
      'Antwortkategorisierung eingehender Rueckmeldungen',
      'Statusfuehrung je Rechnung/Forderung',
      'Kommunikationsvorlagen mit Eskalationsregeln',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'E-Mail als Primaerkanal',
      'Optional WhatsApp fuer vorsichtige Servicekommunikation',
      'BullMQ fuer Mahnstufen',
      'OpenAI fuer Antwortkategorisierung',
    ],
    implementationTime: '3-5 Wochen je nach Integrationsgrad',
    setupPrice: '2.000-3.900 EUR',
    retainerPrice: '390-690 EUR/Monat',
    onboarding: [
      'Rechnungs- und Statusdatenquellen abstimmen',
      'Mahnstufen und Fristen pro Falltyp definieren',
      'Kommunikationsrichtlinien rechtlich und tonal freigeben',
      'Abnahme mit Testfaellen pro Mahnstufe',
    ],
    priority: 'phase2',
    caution: 'Rechtlich und kommunikativ sensibel, nicht aggressiv automatisieren.',
  },
  {
    code: 'HW-05',
    slug: 'dispo-termin-kommunikation',
    vertical: 'handwerk',
    name: 'Dispo- & Termin-Kommunikation',
    shortDescription:
      'Terminbestaetigung, Verschiebung und Einsatzkommunikation laufen standardisiert ueber einen Workflow.',
    targetGroup: 'Handwerksbetriebe mit hoher Terminfrequenz und wechselnden Einsatzorten.',
    problem:
      'Terminabstimmungen erzeugen viele Rueckfragen zwischen Buero, Team und Kunden und stoeren die Tagesplanung.',
    solution:
      'Statusupdates, Erinnerungen und Verschiebungen werden kanaluebergreifend orchestriert und bei Bedarf in Dispo- oder Kalenderprozesse integriert.',
    painSignals: [
      'Hohe Anzahl manueller Umbuchungen',
      'Viele Rueckrufschleifen zwischen Buero und Aussendienst',
      'Unklare Kundenkommunikation bei Aenderungen',
    ],
    deliverables: [
      'Terminstatus-Workflow und Benachrichtigungslogik',
      'Verschiebungs- und Rueckfrageprozess',
      'Task-Handover an Disposition',
      'Optionale Kalender-/Dispo-Anbindung',
    ],
    techStack: [
      'Next.js Admin',
      'PostgreSQL + Prisma',
      'Twilio/WhatsApp/E-Mail',
      'BullMQ',
      'OpenAI Structured Outputs fuer freie Antworten',
    ],
    implementationTime: '4-7 Wochen (delivery-lastig)',
    setupPrice: '4.900-8.900 EUR',
    retainerPrice: '990-1.490 EUR/Monat',
    onboarding: [
      'Termin- und Dispo-Prozess aufnehmen',
      'Statusstufen und Eskalationen definieren',
      'Kanaele je Kundensegment festlegen',
      'Pilot je Team/Region mit klaren SLA testen',
    ],
    priority: 'phase2',
    caution: 'Komplexes Offer, nach stabilen Kernoffers ausrollen.',
  },
  {
    code: 'IM-01',
    slug: 'schadenmeldung-vorqualifikation',
    vertical: 'immobilienverwaltung',
    name: 'Schadenmeldung & Vorqualifikation',
    shortDescription:
      'Schadenmeldungen werden vollstaendig aufgenommen, fehlende Informationen automatisiert nachgefordert und als sauberer Vorgang uebergeben.',
    targetGroup: 'Hausverwaltungen und WEG-Verwaltungen mit hoher Schadenvorgangslast.',
    problem:
      'Meldungen sind unvollstaendig, Rueckfragen verzoegern den Start der Bearbeitung und die Uebergabe an Dienstleister ist inkonsistent.',
    solution:
      'Ein Intake-Layer ueber Web, E-Mail und WhatsApp strukturiert Schadenmeldungen, prueft Vollstaendigkeit und priorisiert Vorgaenge fuer Verwaltung und Handwerker.',
    painSignals: [
      'Schadenmeldungen nur per Mail/Telefon',
      'Kein klarer Dokumenten- oder Foto-Upload',
      'Viele Rueckfragen vor Erstbearbeitung',
      'Serviceueberlastung in Copy/Bewertungen',
    ],
    deliverables: [
      'Schaden-Intake mit Pflichtfeldern (Adresse, Einheit, Schadenart, Dringlichkeit)',
      'Foto-/Anhang-Handling inkl. Vollstaendigkeitscheck',
      'Kategorienlogik (Wasser, Heizung, Elektro, Schimmel, Allgemeinflaeche, Sonstiges)',
      'Automatische Nachforderung fehlender Angaben',
      'Vorgangsboard mit Priorisierung und Routing',
    ],
    techStack: [
      'Next.js Intake-Form/Portal-Layer',
      'PostgreSQL + Prisma',
      'File Upload / Object Storage',
      'E-Mail Parsing',
      'WhatsApp Cloud API',
      'OpenAI Structured Outputs',
      'BullMQ fuer Nachforderung und Wiedervorlage',
    ],
    implementationTime: 'MVP 4-5 Wochen, Vollausbau 5-7 Wochen',
    setupPrice: '4.900-7.900 EUR',
    retainerPrice: '890-1.490 EUR/Monat',
    onboarding: [
      'Objektstruktur, Vorgangskategorien und Dringlichkeitsregeln definieren',
      'Pflichtfragen, Dateianforderungen und Eskalationen abstimmen',
      'Ansprechpartner und Routing je Falltyp festlegen',
      'UAT mit typischen Schadensfaellen vor Go-live',
    ],
    priority: 'phase1',
  },
  {
    code: 'IM-02',
    slug: 'inbox-triage',
    vertical: 'immobilienverwaltung',
    name: 'Inbox-Triage',
    shortDescription:
      'Eingehende Mails und Nachrichten werden automatisch klassifiziert, priorisiert und als saubere Arbeitsqueue vorbereitet.',
    targetGroup: 'Verwalterteams mit hoher Mail- und Ticketlast aus Mieter-, Eigentuemer- und Dienstleisterkommunikation.',
    problem:
      'Zu viele Nachrichten landen ungefiltert im Postfach, Prioritaeten sind unklar und wichtige Vorgaenge bleiben liegen.',
    solution:
      'Der Workflow erkennt Absenderrolle und Objektbezug, klassifiziert Anliegen, priorisiert sie und uebergibt sie inklusive Antwortvorschlag an das Team.',
    painSignals: [
      'Komplexe E-Mail-/Kontaktstruktur',
      'Viele Kontaktpunkte mit wenig Struktur',
      'Unklare Zustaendigkeiten in der Inbox',
      'Lange Erstreaktionszeiten',
    ],
    deliverables: [
      'Shared-Mailbox-Connector und Parsing',
      'Klassifikation fuer Schaden, Abrechnung, Eigentuemerthema, Dokument, Zahlung, Termin',
      'Thread-Zusammenfuehrung und Absenderrollen-Erkennung',
      'Priorisierung und Teamzuweisung',
      'Antwortentwuerfe oder Rueckfrageprompts',
    ],
    techStack: [
      'Shared mailbox connector / E-Mail Parsing',
      'Next.js Inbox UI',
      'PostgreSQL + Prisma',
      'OpenAI Structured Outputs',
      'BullMQ',
      'Optionale DMS-/Ticket-Weitergabe',
    ],
    implementationTime: 'MVP 3-4 Wochen, Vollausbau 4-6 Wochen',
    setupPrice: '3.900-6.500 EUR',
    retainerPrice: '690-1.190 EUR/Monat',
    onboarding: [
      'Postfaecher, Kategorien und Priorisierungsregeln erfassen',
      'Absenderrollen und Objektbezug-Logik mappen',
      'Zustaendigkeiten und Routingregeln definieren',
      'Textbausteine fuer Antwortentwuerfe freigeben',
    ],
    priority: 'phase1',
  },
  {
    code: 'IM-03',
    slug: 'handwerkerkoordination-statusupdates',
    vertical: 'immobilienverwaltung',
    name: 'Handwerkerkoordination & Status-Updates',
    shortDescription:
      'Statuskommunikation zwischen Verwaltung, Bewohnern und Dienstleistern wird standardisiert und nachvollziehbar.',
    targetGroup: 'Verwaltungen mit mehreren Dienstleistern und parallelen Schadensfaellen.',
    problem:
      'Statusupdates laufen ueber viele Kanaele und verursachen hohen manuellen Koordinationsaufwand.',
    solution:
      'Ein Multi-Party-Workflow steuert Statuswechsel, Rueckfragen und Benachrichtigungen fuer alle beteiligten Rollen.',
    painSignals: [
      'Viele Nachtelefonate zu Status und Terminen',
      'Keine zentrale Vorgangsnachvollziehbarkeit',
      'Hohe Abstimmungszeit pro Fall',
    ],
    deliverables: [
      'Statusmodell je Vorgang',
      'Automatisierte Updates an Beteiligte',
      'Task- und Eskalationslogik fuer offene Schritte',
      'Dokumentierte Kommunikationshistorie',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'E-Mail / WhatsApp',
      'Tasks + Statusmodell',
      'BullMQ',
      'OpenAI fuer freie Antwortklassifikation',
    ],
    implementationTime: '4-6 Wochen',
    setupPrice: '4.900-7.500 EUR',
    retainerPrice: '790-1.290 EUR/Monat',
    onboarding: [
      'Beteiligte Rollen und Statusstufen pro Fall definieren',
      'Kommunikationskanaele je Stakeholder festlegen',
      'Eskalationen und SLA fuer Rueckmeldungen abstimmen',
      'Pilot nach IM-01 oder IM-02 aufsetzen',
    ],
    priority: 'phase2',
    caution: 'Sinnvoll als Ausbau nach erfolgreichem Einstieg ueber IM-01 oder IM-02.',
  },
  {
    code: 'IM-04',
    slug: 'serienkommunikation-dokumentenanforderung',
    vertical: 'immobilienverwaltung',
    name: 'Serienkommunikation & Dokumentenanforderung',
    shortDescription:
      'Dokumentenanforderungen und wiederkehrende Anschreiben laufen fristbasiert und transparent.',
    targetGroup: 'Verwaltungen mit regelmaessigen Rueckmelde- und Dokumentenprozessen.',
    problem:
      'Dokumente fehlen haeufig, Nachforderungen kosten Zeit und verlaufen unstrukturiert.',
    solution:
      'Der Workflow steuert fristbasierte Serienkommunikation inklusive Erinnerungen, Uploads und Ruecklaufstatus.',
    painSignals: [
      'Kein klarer Dokumenten-Upload-Prozess',
      'Viele manuelle Serienmails',
      'Niedrige Ruecklaufquote bei Anforderungen',
    ],
    deliverables: [
      'Campaign-UI fuer Serienkommunikation',
      'Fristen- und Erinnerungslogik',
      'Dokumentenanforderungen mit Upload-Endpunkten',
      'Ruecklauf- und Statusuebersicht',
    ],
    techStack: [
      'Next.js Campaign UI',
      'PostgreSQL',
      'E-Mail + optional WhatsApp',
      'Document upload endpoints',
      'BullMQ',
    ],
    implementationTime: '3-5 Wochen',
    setupPrice: '2.900-4.900 EUR',
    retainerPrice: '490-890 EUR/Monat',
    onboarding: [
      'Dokumentenarten und Fristregeln definieren',
      'Kontaktsegmente und Kommunikationszeitpunkte abstimmen',
      'Vorlagen und Erinnerungslogik freigeben',
      'Testlauf mit kleinem Segment vor Rollout',
    ],
    priority: 'phase2',
  },
  {
    code: 'IM-05',
    slug: 'rueckstands-mahn-kommunikation',
    vertical: 'immobilienverwaltung',
    name: 'Rueckstands- / Mahn-Kommunikation',
    shortDescription:
      'Rueckstandsfaelle werden stufenweise und konsistent kommuniziert, ohne Eskalationston zu verlieren.',
    targetGroup: 'Verwaltungen mit laufenden Rueckstands- und Forderungsprozessen.',
    problem:
      'Rueckstaende werden uneinheitlich verfolgt, was zu Abstimmungsaufwand und intransparenter Priorisierung fuehrt.',
    solution:
      'Ein regelbasierter Flow steuert Kommunikation je Status, Frist und Eskalationsstufe und dokumentiert jeden Fall sauber.',
    painSignals: [
      'Uneinheitliche Mahnkommunikation',
      'Viele manuelle Abstimmungen je Rueckstandsfall',
      'Fehlende Priorisierung offener Faelle',
    ],
    deliverables: [
      'Stufenlogik fuer Rueckstandsansprache',
      'Status- und Fristenfuehrung je Fall',
      'Eskalationsregeln mit dokumentierter Historie',
      'Reporting fuer offene und geschlossene Faelle',
    ],
    techStack: [
      'Next.js + PostgreSQL',
      'E-Mail als Primaerkanal',
      'BullMQ',
      'Optional OpenAI fuer Antwortklassifikation',
    ],
    implementationTime: '3-5 Wochen',
    setupPrice: '3.500-5.900 EUR',
    retainerPrice: '590-990 EUR/Monat',
    onboarding: [
      'Rueckstandsfaelle und Fristlogik mappen',
      'Kommunikationsstufen und Eskalationskriterien freigeben',
      'Datenschutz- und Rechtsabstimmung je Prozessstufe durchfuehren',
      'Pilotphase mit begrenztem Fallset starten',
    ],
    priority: 'phase2',
    caution: 'Kommunikativ und rechtlich sensibel, erst nach stabilen Kernprozessen ausrollen.',
  },
];

export const handwerkOffers = offers.filter((offer) => offer.vertical === 'handwerk');

export const immobilienverwaltungOffers = offers.filter(
  (offer) => offer.vertical === 'immobilienverwaltung',
);

export const allOffers = offers;

export function getOfferBySlug(vertical: VerticalKey, slug: string) {
  return offers.find((offer) => offer.vertical === vertical && offer.slug === slug);
}

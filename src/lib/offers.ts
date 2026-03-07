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
      'Neue Anfragen aus Formular, E-Mail, WhatsApp und optional verpassten Anrufen werden gebündelt, qualifiziert und priorisiert übergeben.',
    targetGroup:
      'SHK, Elektro, Dach/Fenster/Sanierung sowie Wartungs- und Servicebetriebe mit hohem Anfragevolumen.',
    problem:
      'Anfragen kommen unvollständig und unsortiert über mehrere Kanäle rein, dringende Fälle werden zu spät erkannt und das Büro verliert Zeit in Rückfragen.',
    solution:
      'Ein strukturierter Intake-Workflow normalisiert Eingangsdaten, klassifiziert Leistung, Dringlichkeit und Region, fordert fehlende Angaben nach und gibt priorisierte Vorgänge an das Team.',
    painSignals: [
      'Bitte per Mail oder Telefon melden ohne klares Formular',
      'Unvollständige Erstanfragen',
      'Lange Antwortzeiten',
      'Schlechte Erreichbarkeitsbewertungen',
      'Notdienst-/Wartungsanfragen ohne saubere Priorisierung',
    ],
    deliverables: [
      'Multichannel-Intake (Web, E-Mail, WhatsApp, optional Missed Call)',
      'AI-Klassifikation für Leistung, Dringlichkeit, Standort und Vollständigkeit',
      'Automatische Rückfragen bei fehlenden Pflichtdaten',
      'Priorisierung und Task-Handover ins Büro/Team',
      'Optionale Eingangsbestätigung und Rückrufankündigung',
    ],
    techStack: [
      'Next.js Intake-Form oder Intake-App',
      'PostgreSQL + Prisma',
      'OpenAI Structured Outputs',
      'WhatsApp Cloud API',
      'E-Mail via Postmark/Resend',
      'Optional Twilio für Missed-Call-Flow',
      'Redis + BullMQ',
      'PostHog Funnel Tracking',
    ],
    implementationTime: 'MVP 3-4 Wochen, Vollausbau 4-6 Wochen',
    setupPrice: '2.900-4.900 EUR',
    retainerPrice: '590-890 EUR/Monat',
    onboarding: [
      'Leistungskategorien, PLZ-Radius, Bürozeiten und Eskalationsregeln festlegen',
      'Kanäle und Pflichtfelder für Intake definieren',
      'Textbausteine für Eingangs- und Rückfragekommunikation freigeben',
      'Tests für Notdienst, Standardfall und unvollständige Anfrage durchführen',
    ],
    priority: 'phase1',
  },
  {
    code: 'HW-02',
    slug: 'angebots-followup-conversion',
    vertical: 'handwerk',
    name: 'Angebots-Follow-up & Conversion',
    shortDescription:
      'Offene Angebote werden mit einer klaren Sequenz nachverfolgt, Antworten klassifiziert und als nächste Aktion ins Team gespielt.',
    targetGroup: 'Alle Handwerksbetriebe mit regelmäßigem Angebotsgeschäft.',
    problem:
      'Angebote bleiben offen, Nachfassen passiert sporadisch und der Angebotsstatus ist im Tagesgeschäft nicht transparent.',
    solution:
      'Der Workflow startet pro Angebot eine zeitbasierte Follow-up-Sequenz, bewertet Antworten in Statusklassen und erzeugt automatisch Tasks für Rückruf, Klärung oder Abschluss.',
    painSignals: [
      'Angebote werden geschrieben, aber nicht systematisch verfolgt',
      'Sporadisches Nachfassen',
      'Hoher Angebotsbestand ohne Statusklarheit',
      'Annahmen hängen von einzelnen Personen ab',
    ],
    deliverables: [
      'Quote-Datenmodell inkl. Status und Events',
      'Follow-up-Sequenz (Tag 2, 5, 10, 20)',
      'Antwortklassifikation (INTERESTED, QUESTION, LATER, NOT_INTERESTED, CALL_ME)',
      'Automatische Aufgaben für Rückfragen und Rückrufwünsche',
      'Status-Dashboard für Angebots-Pipeline und Konversion',
    ],
    techStack: [
      'Next.js Admin für Angebotsstatus und Sequenzen',
      'PostgreSQL + Prisma',
      'Redis + BullMQ für Delays und Retry',
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
      'Kanalpräferenzen und Freigaberegeln für Follow-ups definieren',
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
      'Wartungs- und Serviceintervalle werden automatisch verfolgt, Kunden reaktiviert und Rückmeldungen in Termin- oder Task-Status überführt.',
    targetGroup: 'SHK, Klima/Heizung, Elektroprüfung und andere Servicebetriebe mit wiederkehrenden Leistungen.',
    problem:
      'Wartungstermine werden nicht konsequent reaktiviert, dadurch bleibt wiederkehrender Umsatz ungenutzt und Auslastung ist weniger planbar.',
    solution:
      'Intervall-Daten steuern Recall-Sequenzen über WhatsApp/E-Mail, Antworten werden klassifiziert und in Terminanfrage, Rückruf oder Pause übersetzt.',
    painSignals: [
      'Serviceintervalle werden nur manuell nachgehalten',
      'Unregelmäßige Recall-Kommunikation',
      'Unplanbare Auslastung in der Serviceplanung',
    ],
    deliverables: [
      'Intervall- und Fälligkeitslogik pro Serviceart',
      'Mehrstufige Recall-Sequenzen',
      'Rückmeldeklassifikation und Statusführung',
      'Task-/Terminanstoss für das Team',
      'Reporting zu Rücklauf und Reaktivierung',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'WhatsApp Cloud API',
      'E-Mail via Postmark/Resend',
      'BullMQ für Zeitsteuerung',
      'OpenAI für Freitext-Antwortklassifikation',
    ],
    implementationTime: 'MVP 2-3 Wochen, Vollausbau 3-5 Wochen',
    setupPrice: '2.500-4.500 EUR',
    retainerPrice: '490-790 EUR/Monat',
    onboarding: [
      'Serviceintervalle und Recall-Zeitfenster definieren',
      'Kontaktpräferenzen inkl. Opt-in und Ruhezeiten abstimmen',
      'Textvorlagen für Erinnerungen freigeben',
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
      'Zahlungserinnerungen passieren unregelmäßig, binden Bürozeit und es fehlt ein klares Bild über offene Forderungen.',
    solution:
      'Eine regelbasierte Mahnlogik steuert Kommunikation je Status, wertet Antworten aus und dokumentiert Eskalationsstufen transparent.',
    painSignals: [
      'Uneinheitliche Mahnläufe',
      'Manuelle Erinnerungen ohne festen Prozess',
      'Unklare Forderungsübersicht',
    ],
    deliverables: [
      'Mahnstufen-Workflow mit Zeitsteuerung',
      'Antwortkategorisierung eingehender Rückmeldungen',
      'Statusführung je Rechnung/Forderung',
      'Kommunikationsvorlagen mit Eskalationsregeln',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'E-Mail als Primärkanal',
      'Optional WhatsApp für vorsichtige Servicekommunikation',
      'BullMQ für Mahnstufen',
      'OpenAI für Antwortkategorisierung',
    ],
    implementationTime: '3-5 Wochen je nach Integrationsgrad',
    setupPrice: '2.000-3.900 EUR',
    retainerPrice: '390-690 EUR/Monat',
    onboarding: [
      'Rechnungs- und Statusdatenquellen abstimmen',
      'Mahnstufen und Fristen pro Falltyp definieren',
      'Kommunikationsrichtlinien rechtlich und tonal freigeben',
      'Abnahme mit Testfällen pro Mahnstufe',
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
      'Terminbestätigung, Verschiebung und Einsatzkommunikation laufen standardisiert über einen Workflow.',
    targetGroup: 'Handwerksbetriebe mit hoher Terminfrequenz und wechselnden Einsatzorten.',
    problem:
      'Terminabstimmungen erzeugen viele Rückfragen zwischen Büro, Team und Kunden und stören die Tagesplanung.',
    solution:
      'Statusupdates, Erinnerungen und Verschiebungen werden kanalübergreifend orchestriert und bei Bedarf in Dispo- oder Kalenderprozesse integriert.',
    painSignals: [
      'Hohe Anzahl manueller Umbuchungen',
      'Viele Rückrufschleifen zwischen Büro und Aussendienst',
      'Unklare Kundenkommunikation bei Änderungen',
    ],
    deliverables: [
      'Terminstatus-Workflow und Benachrichtigungslogik',
      'Verschiebungs- und Rückfrageprozess',
      'Task-Handover an Disposition',
      'Optionale Kalender-/Dispo-Anbindung',
    ],
    techStack: [
      'Next.js Admin',
      'PostgreSQL + Prisma',
      'Twilio/WhatsApp/E-Mail',
      'BullMQ',
      'OpenAI Structured Outputs für freie Antworten',
    ],
    implementationTime: '4-7 Wochen (delivery-lastig)',
    setupPrice: '4.900-8.900 EUR',
    retainerPrice: '990-1.490 EUR/Monat',
    onboarding: [
      'Termin- und Dispo-Prozess aufnehmen',
      'Statusstufen und Eskalationen definieren',
      'Kanäle je Kundensegment festlegen',
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
      'Schadenmeldungen werden vollständig aufgenommen, fehlende Informationen automatisiert nachgefordert und als sauberer Vorgang übergeben.',
    targetGroup: 'Hausverwaltungen und WEG-Verwaltungen mit hoher Schadenvorgangslast.',
    problem:
      'Meldungen sind unvollständig, Rückfragen verzögern den Start der Bearbeitung und die Übergabe an Dienstleister ist inkonsistent.',
    solution:
      'Ein Intake-Layer über Web, E-Mail und WhatsApp strukturiert Schadenmeldungen, prüft Vollständigkeit und priorisiert Vorgänge für Verwaltung und Handwerker.',
    painSignals: [
      'Schadenmeldungen nur per Mail/Telefon',
      'Kein klarer Dokumenten- oder Foto-Upload',
      'Viele Rückfragen vor Erstbearbeitung',
      'Serviceüberlastung in Copy/Bewertungen',
    ],
    deliverables: [
      'Schaden-Intake mit Pflichtfeldern (Adresse, Einheit, Schadenart, Dringlichkeit)',
      'Foto-/Anhang-Handling inkl. Vollständigkeitscheck',
      'Kategorienlogik (Wasser, Heizung, Elektro, Schimmel, Allgemeinfläche, Sonstiges)',
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
      'BullMQ für Nachforderung und Wiedervorlage',
    ],
    implementationTime: 'MVP 4-5 Wochen, Vollausbau 5-7 Wochen',
    setupPrice: '4.900-7.900 EUR',
    retainerPrice: '890-1.490 EUR/Monat',
    onboarding: [
      'Objektstruktur, Vorgangskategorien und Dringlichkeitsregeln definieren',
      'Pflichtfragen, Dateianforderungen und Eskalationen abstimmen',
      'Ansprechpartner und Routing je Falltyp festlegen',
      'UAT mit typischen Schadensfällen vor Go-live',
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
    targetGroup: 'Verwalterteams mit hoher Mail- und Ticketlast aus Mieter-, Eigentümer- und Dienstleisterkommunikation.',
    problem:
      'Zu viele Nachrichten landen ungefiltert im Postfach, Prioritäten sind unklar und wichtige Vorgänge bleiben liegen.',
    solution:
      'Der Workflow erkennt Absenderrolle und Objektbezug, klassifiziert Anliegen, priorisiert sie und übergibt sie inklusive Antwortvorschlag an das Team.',
    painSignals: [
      'Komplexe E-Mail-/Kontaktstruktur',
      'Viele Kontaktpunkte mit wenig Struktur',
      'Unklare Zuständigkeiten in der Inbox',
      'Lange Erstreaktionszeiten',
    ],
    deliverables: [
      'Shared-Mailbox-Connector und Parsing',
      'Klassifikation für Schaden, Abrechnung, Eigentümerthema, Dokument, Zahlung, Termin',
      'Thread-Zusammenführung und Absenderrollen-Erkennung',
      'Priorisierung und Teamzuweisung',
      'Antwortentwürfe oder Rückfrageprompts',
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
      'Postfächer, Kategorien und Priorisierungsregeln erfassen',
      'Absenderrollen und Objektbezug-Logik mappen',
      'Zuständigkeiten und Routingregeln definieren',
      'Textbausteine für Antwortentwürfe freigeben',
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
    targetGroup: 'Verwaltungen mit mehreren Dienstleistern und parallelen Schadensfällen.',
    problem:
      'Statusupdates laufen über viele Kanäle und verursachen hohen manuellen Koordinationsaufwand.',
    solution:
      'Ein Multi-Party-Workflow steuert Statuswechsel, Rückfragen und Benachrichtigungen für alle beteiligten Rollen.',
    painSignals: [
      'Viele Nachtelefonate zu Status und Terminen',
      'Keine zentrale Vorgangsnachvollziehbarkeit',
      'Hohe Abstimmungszeit pro Fall',
    ],
    deliverables: [
      'Statusmodell je Vorgang',
      'Automatisierte Updates an Beteiligte',
      'Task- und Eskalationslogik für offene Schritte',
      'Dokumentierte Kommunikationshistorie',
    ],
    techStack: [
      'Next.js + PostgreSQL + Prisma',
      'E-Mail / WhatsApp',
      'Tasks + Statusmodell',
      'BullMQ',
      'OpenAI für freie Antwortklassifikation',
    ],
    implementationTime: '4-6 Wochen',
    setupPrice: '4.900-7.500 EUR',
    retainerPrice: '790-1.290 EUR/Monat',
    onboarding: [
      'Beteiligte Rollen und Statusstufen pro Fall definieren',
      'Kommunikationskanäle je Stakeholder festlegen',
      'Eskalationen und SLA für Rückmeldungen abstimmen',
      'Pilot nach IM-01 oder IM-02 aufsetzen',
    ],
    priority: 'phase2',
    caution: 'Sinnvoll als Ausbau nach erfolgreichem Einstieg über IM-01 oder IM-02.',
  },
  {
    code: 'IM-04',
    slug: 'serienkommunikation-dokumentenanforderung',
    vertical: 'immobilienverwaltung',
    name: 'Serienkommunikation & Dokumentenanforderung',
    shortDescription:
      'Dokumentenanforderungen und wiederkehrende Anschreiben laufen fristbasiert und transparent.',
    targetGroup: 'Verwaltungen mit regelmäßigen Rückmelde- und Dokumentenprozessen.',
    problem:
      'Dokumente fehlen häufig, Nachforderungen kosten Zeit und verlaufen unstrukturiert.',
    solution:
      'Der Workflow steuert fristbasierte Serienkommunikation inklusive Erinnerungen, Uploads und Rücklaufstatus.',
    painSignals: [
      'Kein klarer Dokumenten-Upload-Prozess',
      'Viele manuelle Serienmails',
      'Niedrige Rücklaufquote bei Anforderungen',
    ],
    deliverables: [
      'Campaign-UI für Serienkommunikation',
      'Fristen- und Erinnerungslogik',
      'Dokumentenanforderungen mit Upload-Endpunkten',
      'Rücklauf- und Statusübersicht',
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
    name: 'Rückstands- / Mahn-Kommunikation',
    shortDescription:
      'Rückstandsfälle werden stufenweise und konsistent kommuniziert, ohne Eskalationston zu verlieren.',
    targetGroup: 'Verwaltungen mit laufenden Rückstands- und Forderungsprozessen.',
    problem:
      'Rückstände werden uneinheitlich verfolgt, was zu Abstimmungsaufwand und intransparenter Priorisierung führt.',
    solution:
      'Ein regelbasierter Flow steuert Kommunikation je Status, Frist und Eskalationsstufe und dokumentiert jeden Fall sauber.',
    painSignals: [
      'Uneinheitliche Mahnkommunikation',
      'Viele manuelle Abstimmungen je Rückstandsfall',
      'Fehlende Priorisierung offener Fälle',
    ],
    deliverables: [
      'Stufenlogik für Rückstandsansprache',
      'Status- und Fristenführung je Fall',
      'Eskalationsregeln mit dokumentierter Historie',
      'Reporting für offene und geschlossene Fälle',
    ],
    techStack: [
      'Next.js + PostgreSQL',
      'E-Mail als Primärkanal',
      'BullMQ',
      'Optional OpenAI für Antwortklassifikation',
    ],
    implementationTime: '3-5 Wochen',
    setupPrice: '3.500-5.900 EUR',
    retainerPrice: '590-990 EUR/Monat',
    onboarding: [
      'Rückstandsfälle und Fristlogik mappen',
      'Kommunikationsstufen und Eskalationskriterien freigeben',
      'Datenschutz- und Rechtsabstimmung je Prozessstufe durchführen',
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

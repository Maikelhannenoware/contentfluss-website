const SITE_URL = 'https://contentfluss.de';

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  return new URL(path, SITE_URL).toString();
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Contentfluss',
    url: SITE_URL,
    email: 'hallo@contentfluss.de',
    telephone: '+4915125273382',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hesemannstraße 17a',
      addressLocality: 'Neuss',
      postalCode: '41460',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'Country', name: 'Deutschland' },
      { '@type': 'Country', name: 'Österreich' },
      { '@type': 'Country', name: 'Schweiz' },
    ],
    knowsAbout: [
      'KI Automatisierung Handwerk',
      'KI-Agentur Handwerk',
      'KI Immobilienverwaltung',
      'AI Workflows Unternehmen',
      'Prozessautomatisierung Handwerk',
      'Workflow-Audit',
      'Büroautomatisierung Handwerk',
      'Automatisierung Hausverwaltung',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Contentfluss',
    url: SITE_URL,
    inLanguage: 'de-DE',
  };
}

export function professionalServiceSchema(pageUrl: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Contentfluss',
    url: absoluteUrl(pageUrl),
    description,
    areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
    serviceType: [
      'AI-Operations',
      'Workflow-Audit',
      'Prozessautomatisierung',
      'KI-gestützte Workflows',
    ],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export const pageMeta = {
  home: {
    title: 'Contentfluss – KI-Workflows für Handwerk & Immobilienverwaltung',
    description: 'Contentfluss entwickelt KI-Workflows für operative Prozesse in Handwerk und Hausverwaltung. Weniger manuelle Arbeit, klarere Abläufe und sauberere Anfrageeingänge.'
  },
  leistungen: {
    title: 'Leistungen | Contentfluss – Operative KI-Workflows für KMU',
    description: 'Prozessanalyse, Workflow-Design und Umsetzung: Contentfluss implementiert KI-Workflows, die operative Abläufe in kleinen und mittleren Betrieben entlasten.'
  },
  handwerk: {
    title: 'KI-Workflows für Handwerksbetriebe | Contentfluss',
    description: 'Weniger Rückfragen, sauberere Anfragen, automatisiertes Angebots-Follow-up: Contentfluss automatisiert operative Abläufe in SHK-, Elektro- und Dachbetrieben.'
  },
  immobilienverwaltung: {
    title: 'KI-Workflows für Immobilienverwaltungen | Contentfluss',
    description: 'Strukturierte Schadenmeldungen, Inbox-Triage und Mieteranfragen automatisieren: Contentfluss entlastet operative Abläufe in Haus- und Immobilienverwaltungen.'
  },
  workflows: {
    title: 'Beispiel-Workflows für operative Prozesse | Contentfluss',
    description: 'Konkrete KI-Workflows für Anfragequalifizierung, Angebots-Follow-up, Schadenmeldungen und interne Übergaben – für Handwerk und Hausverwaltung.'
  },
  fallbeispiele: {
    title: 'Beispielabläufe & Workflow-Szenarien | Contentfluss',
    description: 'Exemplarische Workflow-Szenarien für typische operative Engpässe in Handwerk und Hausverwaltung – transparent dargestellt als Musterabläufe.'
  },
  ueberUns: {
    title: 'Über Contentfluss | KI-Workflows mit Fokus auf operative Entlastung',
    description: 'Contentfluss ist spezialisiert auf operative KI-Workflows für KMU. Kein Berater-Pitch, keine Tool-Show – sondern umsetzbare Abläufe, die im Alltag funktionieren.'
  },
  kontakt: {
    title: 'Kontakt & Fit-Call | Contentfluss',
    description: 'Im kostenlosen Fit-Call klären wir, welcher operative Ablauf bei euch zuerst entlastet werden sollte – und ob ein KI-Workflow dafür wirtschaftlich Sinn ergibt.'
  }
} as const;

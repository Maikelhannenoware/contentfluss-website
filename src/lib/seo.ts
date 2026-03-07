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
    '@type': 'Organization',
    name: 'Contentfluss',
    url: SITE_URL,
    email: 'hallo@contentfluss.de',
    areaServed: 'DE',
    knowsAbout: [
      'KI Automatisierung Handwerk',
      'KI Immobilienverwaltung',
      'AI Workflows Unternehmen',
      'Prozessautomatisierung Deutschland',
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
    areaServed: 'Deutschland',
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

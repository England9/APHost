export const legalMeta = {
  companyName: 'Apollo Twelve LLC',
  websiteName: 'Vulcira',
  websiteUrl: 'https://vulcira.com',
  effectiveDate: 'August 1, 2026',
  contactPath: '/#contact',
} as const;

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

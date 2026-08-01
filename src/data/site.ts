export const site = {
  name: 'Apollo',
  wordmark: 'Apollo Twelve',
  title: 'Apollo Twelve — Lifestyle, Ventures, and Long-Term Initiatives',
  description:
    'Apollo Twelve is the public-facing platform for Apollo Twelve LLC — a focused group of ventures across lifestyle, culture, and long-term brand development.',
  url: 'https://apollotwelve.org',
  ogImage: '/images/og-apollo.svg',
  social: {
    linkedin: 'https://linkedin.com/company/apollo12',
    instagram: 'https://instagram.com/apollo12',
  },
  parentCompany: 'Apollo Twelve LLC',
  commercialGroup: ['Vulcira', 'Golden Days LLC'],
  initiative: 'The Chain Reaction Project',
  footerDescription:
    'Apollo Twelve LLC is the parent entity. Each venture and initiative operates with its own identity, purpose, and creative direction.',
  turnstileSiteKey: '0x4AAAAAAEDdw0x1UReVe9jG',
  founder: {
    name: 'England',
    displayName: '"England"',
    title: 'Founder',
  },
} as const;

export const navigation = [
  { label: 'About', href: '/#about' },
  { label: 'Ventures', href: '/#ventures' },
  { label: 'Initiatives', href: '/#initiatives' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const inquiryOptions = [
  'Apollo',
  'Vulcira',
  'Golden Days',
  'The Chain Reaction Project',
  'Privacy and legal requests',
  'General Inquiry',
] as const;

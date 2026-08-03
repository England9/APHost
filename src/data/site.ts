export const site = {
  name: 'Apollo Twelve',
  wordmark: 'Apollo Twelve',
  title: 'Apollo Twelve LLC | Lifestyle Brands, Consulting & Community Initiatives',
  description:
    'Apollo Twelve LLC is the parent company behind Vulcira, Golden Days, Apollo Twelve Consulting, and The Chain Reaction Project — lifestyle brands, business advisory, and nonprofit fundraising for schools and communities.',
  url: 'https://apollotwelve.org',
  ogImage: '/images/og-apollo.svg',
  social: {
    linkedin: 'https://linkedin.com/company/apollo12',
    instagram: 'https://instagram.com/apollo12',
  },
  parentCompany: 'Apollo Twelve LLC',
  commercialGroup: ['Vulcira', 'Golden Days LLC', 'Apollo Twelve Consulting'],
  initiative: 'The Chain Reaction Project',
  footerDescription:
    'Apollo Twelve LLC is the parent company. Each venture and initiative operates independently with its own brand, team, and goals.',
  turnstileSiteKey: '0x4AAAAAAEDdw0x1UReVe9jG',
  founder: {
    name: 'England',
    displayName: 'England',
    title: 'Founder',
  },
} as const;

export const navigation = [
  { label: 'About', href: '/#about' },
  { label: 'Initiatives', href: '/#initiatives' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const inquiryOptions = [
  'Apollo Twelve LLC',
  'Vulcira',
  'Golden Days LLC',
  'Apollo Twelve Consulting',
  'The Chain Reaction Project',
  'Privacy and legal requests',
  'General Inquiry',
] as const;

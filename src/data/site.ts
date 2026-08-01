export const site = {
  name: 'Apollo',
  title: 'Apollo — Lifestyle, Ventures, and Long-Term Initiatives',
  description:
    'Apollo is the public-facing platform for Apollo Twelve LLC — a focused group of ventures across lifestyle, culture, and long-term brand development.',
  url: 'https://apollo12.llc',
  ogImage: '/images/og-apollo.svg',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA',
  social: {
    linkedin: 'https://linkedin.com/company/apollo12',
    instagram: 'https://instagram.com/apollo12',
  },
  parentCompany: 'Apollo Twelve LLC',
  commercialGroup: ['Vulcira', 'Golden Days'],
  founder: {
    name: 'England',
    displayName: '"England"',
    title: 'Founder',
  },
} as const;

export const navigation = [
  { label: 'About', href: '/#about' },
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

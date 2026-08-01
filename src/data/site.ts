export const site = {
  name: 'Vulcira',
  title: 'Vulcira — Lifestyle, Ventures, and Long-Term Initiatives',
  description:
    'Vulcira works with Apollo Twelve LLC to build a focused group of ventures across lifestyle, culture, and long-term brand development.',
  url: 'https://vulcira.com',
  email: 'inquiries@vulcira.com',
  ogImage: '/images/og-vulcira.jpg',
  social: {
    linkedin: 'https://linkedin.com/company/vulcira',
    instagram: 'https://instagram.com/vulcira',
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
  'Vulcira',
  'Golden Days',
  'The Chain Reaction Project',
  'General Inquiry',
] as const;

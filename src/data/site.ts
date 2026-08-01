export const site = {
  name: 'Vulcira',
  title: 'Vulcira — Business, Fashion, and Long-Term Initiatives',
  description:
    'Vulcira is a founder-led business platform connected to a focused group of commercial ventures and independent initiatives.',
  url: 'https://vulcira.com',
  email: 'inquiries@vulcira.com',
  ogImage: '/images/og-vulcira.svg',
  social: {
    linkedin: 'https://linkedin.com/company/vulcira',
    instagram: 'https://instagram.com/vulcira',
  },
  parentCompany: 'Apollo Twelve LLC',
  footerStatement:
    'Vulcira, Golden Days LLC, and Vulcira Fashion are associated with Apollo Twelve LLC. The Chain Reaction Project is a separate nonprofit entity founded by the same founder.',
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Nonprofit', href: '#nonprofit' },
  { label: 'Contact', href: '#contact' },
] as const;

export const inquiryOptions = [
  'Vulcira',
  'Golden Days LLC',
  'Vulcira Fashion',
  'The Chain Reaction Project',
  'General Inquiry',
] as const;

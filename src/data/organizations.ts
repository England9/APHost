export type OrganizationCategory = 'commercial' | 'nonprofit' | 'platform';

export interface Organization {
  id: string;
  name: string;
  category: OrganizationCategory;
  shortDescription: string;
  fullDescription: string;
  websiteUrl: string | null;
  image: string;
  imageAlt: string;
  actionLabel: string;
  pagePath: string;
  displayOrder: number;
  active: boolean;
}

export const organizations: Organization[] = [
  {
    id: 'vulcira',
    name: 'Vulcira',
    category: 'platform',
    shortDescription:
      'A lifestyle brand devoted to considered living — products, experiences, and identity shaped by culture and everyday life.',
    fullDescription:
      'Vulcira develops lifestyle offerings with a long-term perspective: restrained in tone, consistent in quality, and grounded in how people actually live.',
    websiteUrl: null,
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Lifestyle brand editorial photograph',
    actionLabel: 'Explore Vulcira',
    pagePath: '/ventures/vulcira',
    displayOrder: 1,
    active: true,
  },
  {
    id: 'golden-days',
    name: 'Golden Days LLC',
    category: 'commercial',
    shortDescription:
      'A venture devoted to bringing the nostalgia and feeling of youth into thoughtful modern-day products and experiences.',
    fullDescription:
      'Golden Days develops work rooted in warmth, optimism, and the emotional texture of earlier chapters — made relevant for today.',
    websiteUrl: null,
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden sunset over a beach',
    actionLabel: 'Explore Golden Days',
    pagePath: '/ventures/golden-days',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    category: 'nonprofit',
    shortDescription:
      'A nonprofit initiative focused on generous, mission-driven work and lasting public benefit.',
    fullDescription:
      'The Chain Reaction Project supports programs and partnerships that create meaningful community impact through accountable, thoughtful action.',
    websiteUrl: null,
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'Hand reaching toward warm light',
    actionLabel: 'Explore the Chain Reaction Project',
    pagePath: '/ventures/chain-reaction-project',
    displayOrder: 3,
    active: true,
  },
];

export function getActiveOrganizations(category?: OrganizationCategory) {
  return organizations
    .filter((org) => org.active && (category ? org.category === category : true))
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getHomepageVentures() {
  return getActiveOrganizations();
}

export function getNonprofit() {
  return organizations.find((org) => org.id === 'chain-reaction-project' && org.active);
}

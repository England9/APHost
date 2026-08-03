export type OrganizationCategory = 'commercial' | 'nonprofit' | 'platform' | 'consulting';

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
      'Vulcira is a lifestyle brand selling cosmetics, skincare, and fashion for customers who want quality products with a clear point of view.',
    fullDescription:
      'Vulcira develops and sells cosmetics, apparel, and lifestyle products through direct-to-consumer and retail channels.',
    websiteUrl: null,
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Vulcira lifestyle brand cosmetics and fashion',
    actionLabel: 'Learn about Vulcira',
    pagePath: '/ventures/vulcira',
    displayOrder: 1,
    active: true,
  },
  {
    id: 'golden-days',
    name: 'Golden Days LLC',
    category: 'commercial',
    shortDescription:
      'Golden Days LLC makes vintage-inspired fashion and nostalgia-driven products for customers who want style rooted in classic American culture.',
    fullDescription:
      'Golden Days LLC designs and sells vintage fashion, curated apparel, and nostalgia-themed consumer products.',
    websiteUrl: null,
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden Days vintage fashion and nostalgia brand',
    actionLabel: 'Learn about Golden Days',
    pagePath: '/ventures/golden-days',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'apollo-twelve-consulting',
    name: 'Apollo Twelve Consulting',
    category: 'consulting',
    shortDescription:
      'Apollo Twelve Consulting advises founders and brands on strategy, operations, and growth. We work with early-stage and established companies.',
    fullDescription:
      'Apollo Twelve Consulting provides brand strategy, venture advisory, and operational consulting for businesses building for the long term.',
    websiteUrl: null,
    image: '/images/ventures/apollo-consulting-whiteboard.jpg',
    imageAlt: 'Business strategy whiteboard with charts and data',
    actionLabel: 'Learn about Consulting',
    pagePath: '/ventures/apollo-twelve-consulting',
    displayOrder: 3,
    active: true,
  },
  {
    id: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    category: 'nonprofit',
    shortDescription:
      'The Chain Reaction Project is a nonprofit that raises money for schools, sports equipment, arts programs, and community causes.',
    fullDescription:
      'The Chain Reaction Project runs fundraising campaigns and community partnerships to fund schools, athletic programs, and local causes.',
    websiteUrl: null,
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'Community fundraising and nonprofit impact',
    actionLabel: 'Learn about the Chain Reaction Project',
    pagePath: '/ventures/chain-reaction-project',
    displayOrder: 4,
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

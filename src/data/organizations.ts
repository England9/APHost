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
      'A lifestyle brand spanning cosmetics, fashion, and culture — developed with restraint, quality, and a long-term view.',
    fullDescription:
      'Vulcira develops cosmetics, apparel, and experiences for people who care about how things feel, look, and last.',
    websiteUrl: null,
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Vulcira lifestyle brand editorial photograph',
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
      'Vintage nostalgia and fashion for the modern day — warmth, optimism, and the feeling of youth made wearable.',
    fullDescription:
      'Golden Days translates nostalgic sensibility into vintage-inspired fashion, curated goods, and experiences built with honesty and craft.',
    websiteUrl: null,
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden Days vintage nostalgia fashion',
    actionLabel: 'Explore Golden Days',
    pagePath: '/ventures/golden-days',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'apollo-twelve-consulting',
    name: 'Apollo Twelve Consulting',
    category: 'consulting',
    shortDescription:
      'Strategic advisory for founders and brands — brand strategy, venture guidance, and operational support built to last.',
    fullDescription:
      'Apollo Twelve Consulting helps clients navigate growth, positioning, and the decisions that shape durable companies.',
    websiteUrl: null,
    image: '/images/ventures/apollo-consulting.jpg',
    imageAlt: 'Apollo Twelve consulting strategy session',
    actionLabel: 'Explore Consulting',
    pagePath: '/ventures/apollo-twelve-consulting',
    displayOrder: 3,
    active: true,
  },
  {
    id: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    category: 'nonprofit',
    shortDescription:
      'A nonprofit raising money for schools, sports equipment, arts programs, and community causes that need support.',
    fullDescription:
      'The Chain Reaction Project organizes fundraising campaigns and partnerships that create lasting public benefit through accountable, thoughtful action.',
    websiteUrl: null,
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'Community impact and hope',
    actionLabel: 'Explore the Chain Reaction Project',
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

export type OrganizationCategory = 'commercial' | 'nonprofit' | 'platform';

export interface Organization {
  id: string;
  name: string;
  category: OrganizationCategory;
  legalRelationship: string;
  shortDescription: string;
  fullDescription: string;
  websiteUrl: string | null;
  image: string;
  imageAlt: string;
  actionLabel: string;
  displayOrder: number;
  active: boolean;
}

export const organizations: Organization[] = [
  {
    id: 'vulcira',
    name: 'Vulcira',
    category: 'platform',
    legalRelationship: 'Associated with Apollo Twelve LLC',
    shortDescription:
      'The central business and public-facing platform connecting the broader group of ventures, ideas, and strategic initiatives.',
    fullDescription:
      'Vulcira serves as the central public-facing presence for a focused group of commercial ventures and founder-led initiatives. It provides organizational clarity, strategic direction, and a unified point of connection across the broader enterprise.',
    websiteUrl: null,
    image: '/images/ventures/vulcira.svg',
    imageAlt: 'Abstract architectural composition — placeholder for Vulcira',
    actionLabel: 'Explore Vulcira',
    displayOrder: 1,
    active: true,
  },
  {
    id: 'golden-days',
    name: 'Golden Days',
    category: 'commercial',
    legalRelationship: 'Associated with Apollo Twelve LLC',
    shortDescription:
      'An independent commercial venture focused on developing thoughtful products, experiences, and long-term business opportunities.',
    fullDescription:
      'Golden Days operates as an independent commercial venture within the Apollo Twelve LLC group, developing products and experiences with a long-term perspective and disciplined creative direction.',
    websiteUrl: null,
    image: '/images/ventures/golden-days.svg',
    imageAlt: 'Material texture study — placeholder for Golden Days',
    actionLabel: 'View Golden Days',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'vulcira-fashion',
    name: 'Vulcira Fashion',
    category: 'commercial',
    legalRelationship: 'Associated with Apollo Twelve LLC',
    shortDescription:
      'A fashion-focused brand shaped by contemporary culture, strong visual identity, and disciplined creative direction.',
    fullDescription:
      'Vulcira Fashion is a fashion-focused brand operating at the intersection of contemporary culture and considered design, with a commitment to strong visual identity and lasting creative direction.',
    websiteUrl: null,
    image: '/images/ventures/vulcira-fashion.svg',
    imageAlt: 'Editorial fashion composition — placeholder for Vulcira Fashion',
    actionLabel: 'Discover Vulcira Fashion',
    displayOrder: 3,
    active: true,
  },
  {
    id: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    category: 'nonprofit',
    legalRelationship:
      'Independent nonprofit entity founded by the same founder; not associated with Apollo Twelve LLC',
    shortDescription:
      'An independent nonprofit entity founded by the same founder. Its work is separate from the commercial operations of Apollo Twelve LLC and is focused on mission-driven initiatives and public benefit.',
    fullDescription:
      'The Chain Reaction Project is a separate nonprofit organization founded by the same individual who established the commercial ventures associated with Apollo Twelve LLC. It operates independently, with its own governance, mission, and public benefit focus.',
    websiteUrl: null,
    image: '/images/ventures/chain-reaction.svg',
    imageAlt: 'Abstract composition — placeholder for The Chain Reaction Project',
    actionLabel: 'Visit The Chain Reaction Project',
    displayOrder: 4,
    active: true,
  },
];

export function getActiveOrganizations(category?: OrganizationCategory) {
  return organizations
    .filter((org) => org.active && (category ? org.category === category : true))
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getCommercialVentures() {
  return getActiveOrganizations().filter((org) => org.category !== 'nonprofit');
}

export function getNonprofit() {
  return organizations.find((org) => org.id === 'chain-reaction-project' && org.active);
}

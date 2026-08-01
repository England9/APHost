export interface VenturePage {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  image: string;
  imageAlt: string;
}

export const venturePages: VenturePage[] = [
  {
    slug: 'vulcira',
    name: 'Vulcira',
    eyebrow: 'Lifestyle Brand',
    title: 'A lifestyle brand built around considered living.',
    intro:
      'Vulcira is a lifestyle brand shaped by culture, environment, and the details of everyday life. The work spans products, experiences, and visual identity — developed with restraint, quality, and a long-term view of what it means to live well.',
    sections: [
      {
        heading: 'Everyday Culture',
        body:
          'Vulcira draws from the rhythms of daily life — home, travel, personal style, and the objects people choose to keep close. The brand is interested in what lasts: habits, materials, and environments that feel intentional rather than performative.',
      },
      {
        heading: 'Products & Experiences',
        body:
          'From consumer goods to curated experiences, Vulcira develops offerings that reflect a coherent point of view. Each release is considered in context — how it fits into a life, not just a market category.',
      },
      {
        heading: 'Lasting Identity',
        body:
          'Vulcira is built as a durable lifestyle platform. The emphasis is on consistency of taste, clarity of purpose, and the discipline required to grow a brand that people return to over time.',
      },
    ],
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Lifestyle brand editorial photograph',
  },
  {
    slug: 'golden-days',
    name: 'Golden Days',
    eyebrow: 'Nostalgia & Youth',
    title: 'Bringing the feeling of youth to the modern day.',
    intro:
      'Golden Days is built around a simple conviction: the warmth, optimism, and openness of youth should not be confined to memory. We develop products and experiences that carry that feeling forward — thoughtfully, honestly, and with respect for what made those moments matter.',
    sections: [
      {
        heading: 'The Feeling We Chase',
        body:
          'Not imitation, but atmosphere. Golden Days looks for the emotional texture of earlier chapters — summers that felt endless, friendships that felt uncomplicated, the quiet confidence of being young — and finds ways to make that sensibility relevant today.',
      },
      {
        heading: 'Products & Experiences',
        body:
          'From considered consumer goods to immersive experiences, Golden Days builds with nostalgia as a design principle rather than a marketing hook. The work is warm, accessible, and grounded in real craft.',
      },
      {
        heading: 'Built to Last',
        body:
          'Youth fades, but the values behind Golden Days do not. Every venture under this name is approached with long-term intent — designed to earn trust, not just attention.',
      },
    ],
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden sunset over a beach',
  },
  {
    slug: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    eyebrow: 'Nonprofit',
    title: 'Generous work in service of public benefit.',
    intro:
      'The Chain Reaction Project is a nonprofit initiative focused on mission-driven programs, community support, and lasting public benefit. Its work is guided by generosity, accountability, and a belief that small actions can create meaningful change.',
    sections: [
      {
        heading: 'Our Mission',
        body:
          'The Chain Reaction Project exists to support initiatives that improve lives and strengthen communities. We invest time, resources, and attention where they can make a genuine difference — without spectacle, without exaggeration.',
      },
      {
        heading: 'How We Work',
        body:
          'Programs are developed carefully, executed responsibly, and measured by outcomes rather than visibility. We partner with organizations and individuals who share a commitment to honest, durable impact.',
      },
      {
        heading: 'A Broader Commitment',
        body:
          'The project reflects a shared belief in giving back — in building something that extends beyond commercial ambition and serves people who need it most.',
      },
    ],
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'Hand reaching toward warm light',
  },
];

export const ventureNavLinks = venturePages.map((page) => ({
  label: page.name,
  href: `/ventures/${page.slug}`,
}));

export function getVenturePage(slug: string) {
  return venturePages.find((page) => page.slug === slug);
}

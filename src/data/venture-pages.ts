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
    eyebrow: 'High Fashion',
    title: 'Contemporary fashion with disciplined creative direction.',
    intro:
      'Vulcira is a fashion-led venture shaped by editorial sensibility, strong visual identity, and a commitment to craft. The work sits at the intersection of contemporary culture and considered design — deliberate in tone, precise in execution, and built for longevity rather than trend.',
    sections: [
      {
        heading: 'Visual Identity',
        body:
          'Every collection and communication is approached with the rigor of a creative studio. Typography, material, silhouette, and pacing are treated as a unified language — restrained, intentional, and unmistakably Vulcira.',
      },
      {
        heading: 'Cultural Position',
        body:
          'Vulcira draws from fashion, publishing, and modern enterprise without borrowing their clichés. The brand is contemporary without being loud, fashionable without being disposable.',
      },
      {
        heading: 'Long-Term Direction',
        body:
          'Fashion here is not a seasonal exercise. Vulcira is developed as a lasting brand platform — one that values quality of thought, quality of making, and the discipline required to sustain both.',
      },
    ],
    image: '/images/ventures/vulcira.svg',
    imageAlt: 'Editorial fashion composition — placeholder for Vulcira',
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
    image: '/images/ventures/golden-days.svg',
    imageAlt: 'Material texture study — placeholder for Golden Days',
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
    image: '/images/ventures/chain-reaction.svg',
    imageAlt: 'Abstract composition — placeholder for The Chain Reaction Project',
  },
];

export const ventureNavLinks = venturePages.map((page) => ({
  label: page.name,
  href: `/ventures/${page.slug}`,
}));

export function getVenturePage(slug: string) {
  return venturePages.find((page) => page.slug === slug);
}

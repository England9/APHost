export interface VentureFocus {
  title: string;
  description: string;
}

export interface VentureGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface VentureSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface VenturePage {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  focusAreas: VentureFocus[];
  sections: VentureSection[];
  gallery: VentureGalleryImage[];
  cta: {
    heading: string;
    body: string;
  };
}

export const venturePages: VenturePage[] = [
  {
    slug: 'vulcira',
    name: 'Vulcira',
    eyebrow: 'Lifestyle Brand',
    title: 'Cosmetics, fashion, and the art of considered living.',
    tagline: 'Beauty and style with intention.',
    intro:
      'Vulcira is a lifestyle brand at the intersection of cosmetics, fashion, and everyday culture. We develop products and experiences for people who care about how things feel, look, and last — from skincare rituals and color palettes to wardrobe essentials shaped by a clear point of view.',
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Vulcira lifestyle brand editorial photograph',
    focusAreas: [
      {
        title: 'Cosmetics',
        description:
          'Skincare, color, and fragrance developed with clean formulations and editorial restraint — products designed for daily ritual, not trend cycles.',
      },
      {
        title: 'Fashion',
        description:
          'Apparel and accessories built around versatile silhouettes, quality materials, and a wardrobe philosophy that favors longevity over volume.',
      },
      {
        title: 'Culture',
        description:
          'Editorial storytelling, collaborations, and experiences that connect Vulcira to the communities and aesthetics that shape modern living.',
      },
    ],
    sections: [
      {
        heading: 'A brand built on atmosphere',
        body:
          'Vulcira is not a single product line — it is a sensibility. Warm light, tactile materials, and a confidence that comes from knowing what you like. Every release is considered in context: how it fits into a morning routine, a wardrobe, a room, a life.',
        image: '/images/ventures/vulcira-cosmetics.jpg',
        imageAlt: 'Vulcira cosmetics and skincare products in editorial styling',
      },
      {
        heading: 'Quality you can feel',
        body:
          'From formulation to fabric, Vulcira prioritizes ingredients and construction that hold up over time. We partner with makers who share our standards — transparent sourcing, responsible production, and design that earns its place in your daily life.',
      },
      {
        heading: 'Growing with intention',
        body:
          'Vulcira is built as a durable platform, not a flash-in-the-pan label. New categories, collaborations, and retail experiences are introduced deliberately — each one strengthening the identity rather than diluting it.',
        image: '/images/ventures/vulcira-fashion.jpg',
        imageAlt: 'Vulcira apparel and fashion editorial',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/vulcira-lifestyle.jpg',
        alt: 'Vulcira lifestyle accessories and wardrobe details',
        caption: 'Lifestyle & accessories',
      },
      {
        src: '/images/ventures/vulcira-retail.jpg',
        alt: 'Vulcira retail display with cosmetics and fashion',
        caption: 'Retail & experiences',
      },
    ],
    cta: {
      heading: 'Interested in Vulcira?',
      body: 'Whether you are a collaborator, retailer, or early supporter — we welcome thoughtful conversations about the brand.',
    },
  },
  {
    slug: 'golden-days',
    name: 'Golden Days LLC',
    eyebrow: 'Vintage & Nostalgia',
    title: 'Vintage nostalgia and fashion for the modern day.',
    tagline: 'The feeling of youth, made wearable.',
    intro:
      'Golden Days is devoted to the warmth, optimism, and emotional texture of earlier chapters — summers that felt endless, friendships that felt uncomplicated, the quiet confidence of being young. We translate that nostalgia into vintage-inspired fashion, curated goods, and experiences that feel honest rather than performative.',
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden Days vintage nostalgia fashion editorial',
    focusAreas: [
      {
        title: 'Vintage Fashion',
        description:
          'Curated and original pieces inspired by decades past — reworked vintage, limited runs, and capsule collections with a timeless sensibility.',
      },
      {
        title: 'Nostalgia Culture',
        description:
          'Editorial content, pop-ups, and experiences that celebrate the music, film, and aesthetics of eras that still resonate today.',
      },
      {
        title: 'Modern Craft',
        description:
          'New products designed with retro sensibility and contemporary quality — made to be worn, kept, and passed along.',
      },
    ],
    sections: [
      {
        heading: 'Not imitation — atmosphere',
        body:
          'Golden Days does not chase trends or copy decades wholesale. We look for the emotional through-line — the golden-hour light, the worn-in denim, the record-store afternoon — and build products and experiences that carry that feeling into the present.',
        image: '/images/ventures/golden-days-vintage.jpg',
        imageAlt: 'Vintage clothing and nostalgic fashion styling',
      },
      {
        heading: 'Fashion with a story',
        body:
          'Every piece in a Golden Days collection is chosen or designed with narrative in mind. Vintage finds are restored with care. Original garments reference silhouettes and fabrics that aged well. The result is a wardrobe that feels personal, not generic.',
      },
      {
        heading: 'Built to last beyond the moment',
        body:
          'Nostalgia is the starting point, not the whole story. Golden Days is approached with long-term intent — building trust through quality, authenticity, and respect for the cultures and eras we draw inspiration from.',
        image: '/images/ventures/golden-days-fashion.jpg',
        imageAlt: 'Golden Days retro-inspired fashion editorial',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/golden-days-craft.jpg',
        alt: 'Vintage craft goods and nostalgic collectibles',
        caption: 'Craft & culture',
      },
      {
        src: '/images/ventures/golden-days-summer.jpg',
        alt: 'Nostalgic summer editorial with vintage details',
        caption: 'Summer nostalgia',
      },
    ],
    cta: {
      heading: 'Connect with Golden Days',
      body: 'For collaborations, wholesale inquiries, or to learn about upcoming drops — reach out through Apollo Twelve.',
    },
  },
  {
    slug: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    eyebrow: 'Nonprofit',
    title: 'Raising money for causes, schools, and communities.',
    tagline: 'Small actions. Lasting impact.',
    intro:
      'The Chain Reaction Project is a nonprofit initiative focused on fundraising for schools, sports equipment, arts programs, community causes, and the people who need support most. We believe generosity compounds — one contribution leads to another, and meaningful change builds over time.',
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'Community impact and hope',
    focusAreas: [
      {
        title: 'Schools & Education',
        description:
          'Fundraising for classroom supplies, technology, field trips, and programs that give students resources they would not otherwise have.',
      },
      {
        title: 'Sports & Equipment',
        description:
          'Providing athletic gear, uniforms, and facility support so young athletes can compete safely and with pride.',
      },
      {
        title: 'Community Causes',
        description:
          'Partnering with local organizations on food drives, disaster relief, health initiatives, and programs that strengthen neighborhoods.',
      },
    ],
    sections: [
      {
        heading: 'Fundraising with purpose',
        body:
          'The Chain Reaction Project organizes campaigns, events, and partnerships designed to raise real money for real needs. Every initiative starts with listening — understanding what a school, team, or community actually requires before asking for support.',
        image: '/images/ventures/chain-reaction-impact.jpg',
        imageAlt: 'School equipment and community fundraising supplies',
      },
      {
        heading: 'Accountability at every step',
        body:
          'Donors deserve transparency. Funds are directed to verified needs, tracked through completion, and reported back to the communities and supporters who made the work possible. Impact is measured by outcomes, not visibility.',
      },
      {
        heading: 'A chain that keeps growing',
        body:
          'The name reflects our belief: one act of generosity inspires the next. Volunteers become advocates. Recipients become contributors. The project exists to keep that chain moving — quietly, consistently, and with respect for everyone involved.',
        image: '/images/ventures/chain-reaction-community.jpg',
        imageAlt: 'Community donation supplies and volunteer fundraising',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/chain-reaction-schools.jpg',
        alt: 'Classroom supplies and school education resources',
        caption: 'Schools & education',
      },
      {
        src: '/images/ventures/chain-reaction-sports.jpg',
        alt: 'Athletic equipment and sports gear for schools',
        caption: 'Sports & equipment',
      },
    ],
    cta: {
      heading: 'Support the Chain Reaction Project',
      body: 'Whether you want to donate, volunteer, nominate a cause, or partner on a campaign — we would like to hear from you.',
    },
  },
  {
    slug: 'apollo-twelve-consulting',
    name: 'Apollo Twelve Consulting',
    eyebrow: 'Advisory',
    title: 'Strategic guidance for ventures that aim to last.',
    tagline: 'Clarity, discipline, long-term thinking.',
    intro:
      'Apollo Twelve Consulting provides advisory services to founders, brands, and organizations navigating growth, positioning, and operational decisions. Drawing on the same principles that guide our own ventures — restraint, quality, and a long view — we help clients build structures and strategies designed to endure.',
    image: '/images/ventures/apollo-consulting-whiteboard.jpg',
    imageAlt: 'Whiteboard with charts and business strategy data',
    focusAreas: [
      {
        title: 'Brand Strategy',
        description:
          'Positioning, narrative, and identity development for companies that want coherence across products, channels, and customer touchpoints.',
      },
      {
        title: 'Venture Advisory',
        description:
          "Guidance for early-stage founders on structure, go-to-market planning, partnership evaluation, and the decisions that shape a company's first years.",
      },
      {
        title: 'Operations & Growth',
        description:
          'Practical support on scaling thoughtfully — team structure, vendor relationships, process design, and the operational backbone behind sustainable growth.',
      },
    ],
    sections: [
      {
        heading: 'Advice rooted in practice',
        body:
          'Apollo Twelve Consulting is not theoretical. Our recommendations come from building real ventures — lifestyle brands, nonprofit programs, and commercial operations — and learning what works when the stakes are personal and the timeline is long.',
        image: '/images/ventures/apollo-consulting-business.jpg',
        imageAlt: 'Business analytics dashboard and professional workspace',
      },
      {
        heading: 'Selective engagement',
        body:
          'We work with a limited number of clients at a time. Engagements are chosen based on alignment — shared values around quality, transparency, and building something that matters beyond a quarterly cycle.',
      },
      {
        heading: 'From strategy to execution',
        body:
          'Consulting does not end at a slide deck. We stay involved through implementation — helping clients translate strategy into action, navigate obstacles, and adjust course without losing sight of the original purpose.',
        image: '/images/ventures/apollo-consulting-operations.jpg',
        imageAlt: 'Business reports, charts, and operational planning documents',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/apollo-consulting-strategy.jpg',
        alt: 'Strategy whiteboard with charts and sticky notes',
        caption: 'Strategy & planning',
      },
      {
        src: '/images/ventures/apollo-consulting-metrics.jpg',
        alt: 'Business metrics reports and KPI analytics',
        caption: 'Metrics & growth',
      },
    ],
    cta: {
      heading: 'Start a conversation',
      body: 'If you are building something with long-term intent and want a thoughtful partner — reach out to discuss how Apollo Twelve Consulting can help.',
    },
  },
];

export const ventureNavLinks = venturePages.map((page) => ({
  label: page.name,
  href: `/ventures/${page.slug}`,
}));

export function getVenturePage(slug: string) {
  return venturePages.find((page) => page.slug === slug);
}

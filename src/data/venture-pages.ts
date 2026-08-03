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
    title: 'Vulcira: cosmetics, fashion, and lifestyle products.',
    tagline: 'A lifestyle brand built on product quality.',
    intro:
      'Vulcira is a lifestyle brand under Apollo Twelve LLC. We sell cosmetics, skincare, fragrance, and fashion for customers who care about ingredients, fit, and design. Vulcira products are sold direct-to-consumer and through select retail partners.',
    image: '/images/ventures/vulcira.jpg',
    imageAlt: 'Vulcira lifestyle brand cosmetics and fashion',
    focusAreas: [
      {
        title: 'Cosmetics & Skincare',
        description:
          'Vulcira develops skincare, makeup, and fragrance lines with clean formulations and packaging designed for daily use. Products are tested for quality and consistency before release.',
      },
      {
        title: 'Fashion & Apparel',
        description:
          'Vulcira apparel includes wardrobe essentials, accessories, and seasonal collections built around versatile fits and durable fabrics. We focus on pieces customers keep, not one-season trends.',
      },
      {
        title: 'Brand & Retail',
        description:
          'Vulcira builds brand awareness through editorial content, partnerships, and retail experiences. We are expanding into new product categories and distribution channels as the brand grows.',
      },
    ],
    sections: [
      {
        heading: 'Products customers use every day',
        body:
          'Vulcira makes products people reach for in the morning and wear throughout the week. That includes skincare routines, color cosmetics, fragrance, and apparel. Every product line is developed with a consistent aesthetic and quality standard across the brand.',
        image: '/images/ventures/vulcira-cosmetics.jpg',
        imageAlt: 'Vulcira cosmetics and skincare product line',
      },
      {
        heading: 'Quality standards across every category',
        body:
          'We source ingredients and materials from suppliers who meet our specifications. Manufacturing partners are audited for consistency and safety. Vulcira products are priced to reflect the quality of what goes into them.',
      },
      {
        heading: 'A brand built to grow',
        body:
          'Vulcira is an operating brand, not a one-off collection. We are adding product categories, retail partnerships, and geographic reach on a planned timeline. Growth is deliberate so the brand stays coherent as it scales.',
        image: '/images/ventures/vulcira-fashion.jpg',
        imageAlt: 'Vulcira fashion and apparel collection',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/vulcira-lifestyle.jpg',
        alt: 'Vulcira lifestyle accessories and product styling',
        caption: 'Lifestyle products',
      },
      {
        src: '/images/ventures/vulcira-retail.jpg',
        alt: 'Vulcira retail display with cosmetics and fashion',
        caption: 'Retail partnerships',
      },
    ],
    cta: {
      heading: 'Work with Vulcira',
      body: 'For wholesale, retail partnerships, press inquiries, or collaboration opportunities, contact Apollo Twelve LLC through our contact form.',
    },
  },
  {
    slug: 'golden-days',
    name: 'Golden Days LLC',
    eyebrow: 'Vintage Fashion',
    title: 'Golden Days LLC: vintage fashion and nostalgia-driven products.',
    tagline: 'Classic style for modern wardrobes.',
    intro:
      'Golden Days LLC is a fashion and consumer goods company under Apollo Twelve LLC. We design and sell vintage-inspired clothing, curated apparel, and nostalgia-themed products for customers who want style with a connection to American culture from the 1960s through the 1990s.',
    image: '/images/ventures/golden-days.jpg',
    imageAlt: 'Golden Days vintage fashion brand',
    focusAreas: [
      {
        title: 'Vintage-Inspired Fashion',
        description:
          'Golden Days designs and sources clothing inspired by mid-century and retro American style. Collections include reworked vintage pieces, original designs, and limited-run apparel.',
      },
      {
        title: 'Nostalgia Products',
        description:
          'Beyond apparel, Golden Days sells consumer goods that tap into cultural nostalgia: accessories, home goods, and gift items tied to music, film, and everyday life from past decades.',
      },
      {
        title: 'Retail & Events',
        description:
          'Golden Days sells online and through pop-up retail events. We use editorial content and community events to connect with customers who share an interest in vintage culture and classic style.',
      },
    ],
    sections: [
      {
        heading: 'Fashion rooted in real nostalgia',
        body:
          'Golden Days does not copy trends from a mood board. Our designs reference specific eras, fabrics, and silhouettes that aged well. The goal is clothing and products that feel familiar without looking like a costume.',
        image: '/images/ventures/golden-days-vintage.jpg',
        imageAlt: 'Golden Days vintage clothing collection',
      },
      {
        heading: 'Products with a clear audience',
        body:
          'Our customers are people who grew up with or admire the culture of earlier decades. Golden Days speaks to them through product design, packaging, and brand storytelling that respects the source material.',
      },
      {
        heading: 'Built as a lasting brand',
        body:
          'Golden Days LLC is structured to operate long term. We release collections on a seasonal schedule, build repeat customers, and invest in product quality so items hold up to regular wear.',
        image: '/images/ventures/golden-days-fashion.jpg',
        imageAlt: 'Golden Days retro-inspired fashion editorial',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/golden-days-craft.jpg',
        alt: 'Golden Days vintage craft and nostalgia products',
        caption: 'Nostalgia products',
      },
      {
        src: '/images/ventures/golden-days-summer.jpg',
        alt: 'Golden Days summer nostalgia editorial',
        caption: 'Seasonal collections',
      },
    ],
    cta: {
      heading: 'Partner with Golden Days',
      body: 'For wholesale, retail, or press inquiries about Golden Days LLC, reach out through the Apollo Twelve LLC contact form.',
    },
  },
  {
    slug: 'chain-reaction-project',
    name: 'The Chain Reaction Project',
    eyebrow: 'Nonprofit',
    title: 'The Chain Reaction Project: fundraising for schools and communities.',
    tagline: 'Raising money where it is needed most.',
    intro:
      'The Chain Reaction Project is a nonprofit initiative of Apollo Twelve LLC. We raise money for schools, youth sports programs, arts education, and community causes. Donations go directly to verified needs: classroom supplies, athletic equipment, instruments, and program funding.',
    image: '/images/ventures/chain-reaction.jpg',
    imageAlt: 'The Chain Reaction Project nonprofit community impact',
    focusAreas: [
      {
        title: 'Schools & Education',
        description:
          'We fundraise for classroom supplies, technology, textbooks, field trips, and after-school programs. Schools and teachers submit needs. We verify requests and deliver resources.',
      },
      {
        title: 'Sports & Equipment',
        description:
          'The Chain Reaction Project provides athletic gear, uniforms, helmets, and facility support for youth sports teams that lack funding for basic equipment.',
      },
      {
        title: 'Community Causes',
        description:
          'We partner with local organizations on food drives, disaster relief, health programs, and neighborhood initiatives. Every campaign has a defined goal, budget, and reporting timeline.',
      },
    ],
    sections: [
      {
        heading: 'Fundraising tied to real needs',
        body:
          'Every Chain Reaction Project campaign starts with a specific request: a school needs laptops, a team needs uniforms, a community center needs supplies. We raise money against that need, purchase or deliver resources, and report back to donors on what was funded.',
        image: '/images/ventures/chain-reaction-impact.jpg',
        imageAlt: 'School supplies and equipment funded by Chain Reaction Project',
      },
      {
        heading: 'Transparent use of donations',
        body:
          'Donors receive updates on how their contributions are used. We track spending, document deliveries, and share results with schools, teams, and community partners. Administrative costs are kept low so the majority of funds reach the intended recipients.',
      },
      {
        heading: 'Community-driven impact',
        body:
          'The Chain Reaction Project works with volunteers, local businesses, and partner organizations to expand reach. People who benefit from one campaign often support the next. That is the chain reaction we aim to create.',
        image: '/images/ventures/chain-reaction-community.jpg',
        imageAlt: 'Community donation supplies organized for distribution',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/chain-reaction-schools.jpg',
        alt: 'Classroom supplies funded for schools',
        caption: 'School programs',
      },
      {
        src: '/images/ventures/chain-reaction-sports.jpg',
        alt: 'Youth sports equipment provided through fundraising',
        caption: 'Sports equipment',
      },
    ],
    cta: {
      heading: 'Support the Chain Reaction Project',
      body: 'To donate, volunteer, nominate a school or cause, or partner on a fundraising campaign, contact Apollo Twelve LLC.',
    },
  },
  {
    slug: 'apollo-twelve-consulting',
    name: 'Apollo Twelve Consulting',
    eyebrow: 'Business Advisory',
    title: 'Apollo Twelve Consulting: strategy and operations for growing businesses.',
    tagline: 'Practical advice from operators, not theorists.',
    intro:
      'Apollo Twelve Consulting is the advisory practice of Apollo Twelve LLC. We help founders and brand owners with strategy, positioning, operations, and growth planning. Our team has built and run the same types of businesses we advise: consumer brands, retail operations, and nonprofit programs.',
    image: '/images/ventures/apollo-consulting-whiteboard.jpg',
    imageAlt: 'Apollo Twelve Consulting strategy whiteboard with business data',
    focusAreas: [
      {
        title: 'Brand Strategy',
        description:
          'We help companies define their positioning, messaging, and go-to-market approach. This includes competitive analysis, customer research, and brand identity development across product, marketing, and sales channels.',
      },
      {
        title: 'Venture Advisory',
        description:
          'For early-stage founders, we provide guidance on company structure, fundraising preparation, partnership evaluation, and the operational decisions that shape a business in its first one to three years.',
      },
      {
        title: 'Operations & Growth',
        description:
          'We help established brands scale: supply chain setup, team structure, vendor management, process design, and the systems needed to grow revenue without losing quality or margin.',
      },
    ],
    sections: [
      {
        heading: 'Consulting based on operating experience',
        body:
          'Apollo Twelve Consulting is staffed by people who have built brands, managed P&Ls, and handled the day-to-day work of running a company. Our recommendations are grounded in what we have done ourselves, not textbook frameworks alone.',
        image: '/images/ventures/apollo-consulting-business.jpg',
        imageAlt: 'Business analytics dashboard and consulting workspace',
      },
      {
        heading: 'Selective client engagements',
        body:
          'We take on a limited number of clients at a time. Engagements are scoped to specific outcomes: a positioning project, an operational audit, a go-to-market plan. We work with companies whose values and ambitions align with how we operate our own ventures.',
      },
      {
        heading: 'Strategy through execution',
        body:
          'We do not deliver a report and walk away. Apollo Twelve Consulting stays involved through implementation: helping clients hire, set up systems, launch products, and adjust plans based on real results.',
        image: '/images/ventures/apollo-consulting-operations.jpg',
        imageAlt: 'Business operations planning documents and growth reports',
      },
    ],
    gallery: [
      {
        src: '/images/ventures/apollo-consulting-strategy.jpg',
        alt: 'Strategy whiteboard with charts and planning notes',
        caption: 'Strategy planning',
      },
      {
        src: '/images/ventures/apollo-consulting-metrics.jpg',
        alt: 'Business KPI metrics and performance reports',
        caption: 'Performance tracking',
      },
    ],
    cta: {
      heading: 'Hire Apollo Twelve Consulting',
      body: 'To discuss a consulting engagement, describe your business and what you need help with through the Apollo Twelve LLC contact form.',
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

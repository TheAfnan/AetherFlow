import { CurrencyConfig, PricingTier, BentoItem, TestimonialItem } from './types';

export const CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', multiplier: 1 },
  { code: 'EUR', symbol: '€', multiplier: 0.9 },
  { code: 'INR', symbol: '₹', multiplier: 80 }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    baseRate: 19,
    description: 'Perfect for small teams automating core data pipelines and custom agent ingestion.',
    features: [
      'Up to 50,000 active pipeline records/mo',
      '2 autonomous agent executors',
      'Standard schema mapping engine',
      'Next-day email & chat support',
      'Standard SOC2 data compliance',
      'API access (100 req/min)'
    ],
    ctaText: 'Deploy Starter Node',
    popular: false
  },
  {
    id: 'pro',
    name: 'Scale Pro',
    baseRate: 49,
    description: 'Designed for scaling operations demanding real-time synchronization and high throughput.',
    features: [
      'Up to 250,000 active pipeline records/mo',
      '10 autonomous agent executors',
      'Cognitive schema mapping engine',
      'Sub-second processing SLA',
      'Enterprise SSO & RBAC permissions',
      '24/7 dedicated support queue',
      'API access (1,000 req/min)'
    ],
    ctaText: 'Scale Up Operations',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Core',
    baseRate: 129,
    description: 'Dedicated cloud isolation, infinite streaming, and full regulatory data compliance.',
    features: [
      'Unlimited active pipeline records',
      'Unlimited autonomous agents',
      'Dedicated single-tenant servers',
      'Custom database schema mapping rules',
      'HIPAA & custom security controls',
      'Custom SLAs with credit backing',
      'White-glove infrastructure consulting'
    ],
    ctaText: 'Connect Enterprise Node',
    popular: false
  }
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'pipeline',
    tag: 'Execution Engine',
    title: 'Autonomous Data Execution',
    description: 'Run intricate multi-node data workflows without manual scripting. Cognitive agents continuously self-heal, handle schema drifts, and automatically retry on transient network failures.',
    visualType: 'pipeline'
  },
  {
    id: 'schema',
    tag: 'Dynamic Normalizer',
    title: 'Cognitive Schema Mapping',
    description: 'Forget rigid parsing schemas. Direct AetherFlow to any unstructured JSON, PDF reports, or legacy XML streams. Our model extracts, matches, and normalizes schema relations instantly.',
    visualType: 'schema'
  },
  {
    id: 'security',
    tag: 'Shield Guard',
    title: 'Zero-Trust Data Security',
    description: 'Keep sensitive database entries private. Every single record processed is isolated, scrubbed of PII, and AES-256 encrypted at the edge. We meet SOC2, HIPAA, and GDPR standards by default.',
    visualType: 'security'
  },
  {
    id: 'scale',
    tag: 'Performance Core',
    title: 'High-Throughput Streaming Engine',
    description: 'A global messaging queue built on rust-native cores. Process millions of active records per minute with less than 2ms transport latency and near-zero database contention.',
    visualType: 'scale'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: "AetherFlow revolutionized how we ingest partner catalogs. We went from custom ingestion scripts that broke weekly to zero-touch schema normalization. This saved our engineering team thousands of hours.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Veloce Global",
    rating: 5
  },
  {
    id: 't2',
    quote: "The state-isolated performance is not a marketing gimmick—it actually handles millions of concurrent records with absolute zero transport lag. AetherFlow is now the foundation of our entire data core.",
    author: "Marcus Vance",
    role: "Principal Infrastructure Architect",
    company: "Aetherial Labs",
    rating: 5
  },
  {
    id: 't3',
    quote: "Deploying the Scale Pro node was incredibly straightforward. The interface is clean, minimalist, and perfectly functional. It does exactly what it promises without any fluff.",
    author: "Siddharth Nair",
    role: "Director of Technology",
    company: "Zeta Insights",
    rating: 5
  }
];

export const COMPANY_LOGOS = [
  { name: 'Vercel', path: 'M0 0h24v24H0V0z' },
  { name: 'Linear', path: 'M12 2L2 22h20L12 2z' },
  { name: 'Stripe', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { name: 'Raycast', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z' }
];

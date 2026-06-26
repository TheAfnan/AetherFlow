export interface CurrencyConfig {
  code: 'USD' | 'EUR' | 'INR';
  symbol: string;
  multiplier: number;
}

export interface PricingTier {
  id: string;
  name: string;
  baseRate: number; // monthly rate in base currency (USD)
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface BentoItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  visualType: 'pipeline' | 'schema' | 'security' | 'scale';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating: number;
}

export interface CompanyLogo {
  name: string;
  svgPath: string;
}

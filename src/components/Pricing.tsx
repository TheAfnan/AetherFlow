import { useEffect, useRef } from 'react';
import { PRICING_TIERS } from '../data';
import { CheckIcon, CpuIcon, ServerIcon } from './icons';

const PRICING_MATRIX = {
  // Tier definitions
  tierDefinitions: {
    starter: { id: 'starter', name: 'Starter' },
    pro: { id: 'pro', name: 'Scale Pro' },
    enterprise: { id: 'enterprise', name: 'Enterprise Core' }
  },
  // Base monthly prices
  baseMonthlyPrices: {
    starter: 19,
    pro: 49,
    enterprise: 129
  },
  // Currency metadata with symbols, exchange rates, regional tariffs, and locale settings
  currencyMetadata: {
    USD: {
      symbol: '$',
      exchangeMultiplier: 1.0,
      regionalTariffMultiplier: 1.0,
      locale: 'en-US',
      zoneLabel: 'US-EAST ZONE_1 (x1.00)'
    },
    EUR: {
      symbol: '€',
      exchangeMultiplier: 0.9,
      regionalTariffMultiplier: 0.9,
      locale: 'de-DE',
      zoneLabel: 'EU-WEST ZONE_2 (x0.90)'
    },
    INR: {
      symbol: '₹',
      exchangeMultiplier: 80.0,
      regionalTariffMultiplier: 80.0,
      locale: 'en-IN',
      zoneLabel: 'AP-SOUTH ZONE_3 (x80.00)'
    }
  },
  // Annual discount multiplier (20% flat discount)
  annualDiscountMultiplier: 0.8
};

export default function Pricing() {
  // References to price numbers
  const priceStarterRef = useRef<HTMLSpanElement>(null);
  const priceProRef = useRef<HTMLSpanElement>(null);
  const priceEnterpriseRef = useRef<HTMLSpanElement>(null);

  // References to billing period labels
  const periodStarterRef = useRef<HTMLSpanElement>(null);
  const periodProRef = useRef<HTMLSpanElement>(null);
  const periodEnterpriseRef = useRef<HTMLSpanElement>(null);

  // Core configuration states inside REFS to fully block React re-renders
  const currentCurrency = useRef<'USD' | 'EUR' | 'INR'>('USD');
  const currentBilling = useRef<'monthly' | 'annual'>('monthly');

  // Multi-dimensional dynamic calculation & Direct DOM manipulation
  const updatePricesInDOM = () => {
    const currency = currentCurrency.current;
    const billing = currentBilling.current;

    const currencyConfig = PRICING_MATRIX.currencyMetadata[currency];
    const { symbol, exchangeMultiplier, locale, zoneLabel } = currencyConfig;

    const tiers = ['starter', 'pro', 'enterprise'] as const;

    tiers.forEach((tier) => {
      const baseValue = PRICING_MATRIX.baseMonthlyPrices[tier];
      let finalValue = baseValue * exchangeMultiplier;

      // Apply flat 20% annual discount multiplier if annual cycle is selected
      if (billing === 'annual') {
        finalValue = finalValue * PRICING_MATRIX.annualDiscountMultiplier;
      }

      // Format price correctly based on locale and currency configuration
      const formattedPrice = locale === 'en-IN'
        ? Math.round(finalValue).toLocaleString('en-IN')
        : Math.round(finalValue).toLocaleString(locale, { maximumFractionDigits: 0 });

      let targetPriceRef;
      let targetPeriodRef;

      if (tier === 'starter') {
        targetPriceRef = priceStarterRef.current;
        targetPeriodRef = periodStarterRef.current;
      } else if (tier === 'pro') {
        targetPriceRef = priceProRef.current;
        targetPeriodRef = periodProRef.current;
      } else {
        targetPriceRef = priceEnterpriseRef.current;
        targetPeriodRef = periodEnterpriseRef.current;
      }

      // Directly update the text nodes and apply smooth CSS number transition
      if (targetPriceRef) {
        targetPriceRef.textContent = `${symbol}${formattedPrice}`;
        targetPriceRef.classList.remove('animate-price-change');
        void targetPriceRef.offsetWidth; // Trigger reflow
        targetPriceRef.classList.add('animate-price-change');
      }
      if (targetPeriodRef) {
        targetPeriodRef.textContent = billing === 'annual' ? '/yr' : '/mo';
      }

      // Directly update regional tariff indicator
      const tariffEl = document.getElementById(`regional-tariff-${tier}`);
      if (tariffEl) {
        tariffEl.textContent = `// REGIONAL TARIFF: ${zoneLabel}`;
      }
    });

    // Update Currency selection button classes directly in DOM
    (['USD', 'EUR', 'INR'] as const).forEach((curr) => {
      const btn = document.getElementById(`btn-currency-${curr}`);
      if (btn) {
        if (curr === currency) {
          btn.className = "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30";
        } else {
          btn.className = "px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white border border-transparent transition-all duration-150";
        }
      }
    });

    // Update Billing selection button classes directly in DOM
    (['monthly', 'annual'] as const).forEach((bill) => {
      const btn = document.getElementById(`btn-billing-${bill}`);
      if (btn) {
        if (bill === billing) {
          btn.className = "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30";
        } else {
          btn.className = "px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white border border-transparent transition-all duration-150";
        }
      }
    });
  };

  // Run initial DOM update on mount
  useEffect(() => {
    updatePricesInDOM();
  }, []);

  const handleCurrencyChange = (curr: 'USD' | 'EUR' | 'INR') => {
    currentCurrency.current = curr;
    updatePricesInDOM();
  };

  const handleBillingChange = (bill: 'monthly' | 'annual') => {
    currentBilling.current = bill;
    updatePricesInDOM();
  };

  return (
    <section 
      id="pricing" 
      className="py-24 bg-dark-surface border-b border-zinc-800 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-accent">
            // 03. PRICING ARCHITECTURE
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
            Matrix pricing
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Choose your node deployment size. Select your regional billing tariff and pricing cycle. Updates are computed dynamically without overhead.
          </p>
        </div>

        {/* CONTROLS AREA - State Isolated Controllers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Billing Toggle Selector */}
          <div className="flex items-center gap-1 border border-zinc-800 p-1 bg-dark-primary/15 relative">
            {/* Pulsing discount badge to highlight the 20% saving */}
            <span className="absolute -top-3.5 right-4 bg-primary-accent text-dark-primary font-mono text-[8px] font-extrabold uppercase px-2 py-0.5 tracking-wider shadow-md animate-pulse">
              ★ SAVE 20% ANNUALLY
            </span>
            <button
              id="btn-billing-monthly"
              onClick={() => handleBillingChange('monthly')}
              className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30"
            >
              Monthly Ingress
            </button>
            <button
              id="btn-billing-annual"
              onClick={() => handleBillingChange('annual')}
              className="px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white border border-transparent transition-all duration-150"
            >
              Annual Node
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 border border-zinc-800 p-1 bg-dark-primary/15">
            <button
              id="btn-currency-USD"
              onClick={() => handleCurrencyChange('USD')}
              className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30"
            >
              USD ($)
            </button>
            <button
              id="btn-currency-EUR"
              onClick={() => handleCurrencyChange('EUR')}
              className="px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white border border-transparent transition-all duration-150"
            >
              EUR (€)
            </button>
            <button
              id="btn-currency-INR"
              onClick={() => handleCurrencyChange('INR')}
              className="px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white border border-transparent transition-all duration-150"
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => {
            const isPro = tier.popular;
            
            // Set up local DOM references mapping
            let priceRef;
            let periodRef;
            if (tier.id === 'starter') {
              priceRef = priceStarterRef;
              periodRef = periodStarterRef;
            } else if (tier.id === 'pro') {
              priceRef = priceProRef;
              periodRef = periodProRef;
            } else {
              priceRef = priceEnterpriseRef;
              periodRef = periodEnterpriseRef;
            }

            return (
              <article 
                key={tier.id}
                className={`relative p-8 border flex flex-col justify-between transition-all duration-300 ${
                  isPro 
                    ? 'bg-dark-primary text-white border-primary-accent/30 shadow-2xl scale-102 z-10' 
                    : 'bg-dark-primary/10 text-zinc-100 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-accent text-dark-primary font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-primary-accent">
                    Most Deployed
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className={`border-b pb-6 mb-6 ${isPro ? 'border-surface-light/10' : 'border-zinc-800'}`}>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-tight mb-2 flex items-center gap-2">
                      {isPro ? <CpuIcon className="w-5 h-5 text-primary-accent" /> : <ServerIcon className="w-5 h-5 text-zinc-400" />}
                      {tier.name}
                    </h3>
                    <p className={`font-sans text-xs leading-relaxed ${
                      isPro ? 'text-surface-light/80' : 'text-zinc-400'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Pricing Display (REFS bound) */}
                  <div className="flex flex-col mb-8 gap-1.5">
                    <div className="flex items-baseline gap-1">
                      <span 
                        ref={priceRef}
                        className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white"
                      >
                        $0
                      </span>
                      <span 
                        ref={periodRef}
                        className={`font-mono text-xs font-semibold ${
                          isPro ? 'text-surface-light/60' : 'text-zinc-500'
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                    <div 
                      id={`regional-tariff-${tier.id}`}
                      className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase"
                    >
                      // REGIONAL TARIFF: US-EAST ZONE_1 (x1.00)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs">
                        <CheckIcon className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isPro ? 'text-primary-accent' : 'text-secondary-accent'
                        }`} />
                        <span className={isPro ? 'text-surface-light/90' : 'text-zinc-300'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <button 
                  className={`w-full text-center font-mono text-xs font-bold uppercase tracking-wider py-3.5 transition-all duration-200 border ${
                    isPro 
                      ? 'bg-primary-accent text-dark-primary border-primary-accent hover:bg-white hover:text-dark-primary hover:border-white' 
                      : 'bg-dark-primary text-primary-accent border-primary-accent/20 hover:bg-primary-accent hover:text-dark-primary'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

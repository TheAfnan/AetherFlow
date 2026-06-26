import { useState } from 'react';
import { ChevronRightIcon, PlusIcon, MinusIcon } from './icons';

const FAQ_CATEGORIES = ['Overview', 'Security', 'Protocols', 'Licensing'] as const;

type FAQCategory = typeof FAQ_CATEGORIES[number];

interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: 'Overview',
    question: 'What is the AetherFlow platform?',
    answer: 'AetherFlow is an advanced, AI-driven data automation platform that allows organizations to ingest, sanitize, normalize, and route structured and unstructured data with absolute zero hand-written mapping code.'
  },
  {
    category: 'Overview',
    question: 'Who is this platform designed for?',
    answer: 'Our platform is engineered specifically for enterprise data architects, DevOps teams, and solutions engineers who require highly performant, resilient, and fully compliant real-time database integrations.'
  },
  {
    category: 'Overview',
    question: 'Does AetherFlow provide pre-built agents?',
    answer: 'Yes! AetherFlow includes a comprehensive suite of pre-loaded cognitive agents designed for typical ingestion vectors, such as partner catalog feeds, CRM streams, and unstructured financial records.'
  },
  {
    category: 'Security',
    question: 'How is data security guaranteed?',
    answer: 'We utilize a strict zero-trust sandbox architecture. Every single record processed is scrubbed of private identifiers (PII), encrypted using AES-256-GCM, and sandboxed in transit before final database synchronization.'
  },
  {
    category: 'Security',
    question: 'Is AetherFlow SOC2 and HIPAA compliant?',
    answer: 'Yes, AetherFlow has been fully certified for SOC2 Type II. Additionally, our pipeline core offers a dedicated HIPAA compliance mode with complete business associate agreement (BAA) coverage.'
  },
  {
    category: 'Protocols',
    question: 'What databases and data sinks are supported?',
    answer: 'We support all major databases natively: PostgreSQL, MySQL, BigQuery, Snowflake, MongoDB, and Firestore, as well as general message streams like Apache Kafka and AWS Kinesis.'
  },
  {
    category: 'Protocols',
    question: 'How does self-healing operate during failure?',
    answer: 'If a remote data sink experiences downtime, our queue thread enters an autonomous exponential back-off cycle, buffering raw ingress records in our rust-native edge buffers to ensure zero data loss.'
  },
  {
    category: 'Licensing',
    question: 'What is the annual discount multiplier?',
    answer: 'When committing to an annual deployment billing cycle, we apply a flat 20% discount multiplier directly to your base node rate. This is computed dynamically across all available regional currencies.'
  },
  {
    category: 'Licensing',
    question: 'Can I scale down my node deployment size?',
    answer: 'Absolutely. You can dynamically scale up or down your core nodes and agent executors at any time through our central administrative terminal or CLI.'
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('Overview');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter(faq => faq.category === activeCategory);

  return (
    <section 
      id="faq" 
      className="py-24 bg-dark-surface border-b border-zinc-800 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-accent">
            // 05. INQUIRIES MATRIX
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
            Common inquiries
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Everything you need to know about deploying, scaling, and securing your database nodes. Select a category below.
          </p>
        </div>

        {/* FAQ Layout - Bento Two Column Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Category Tabs (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 border border-zinc-800 p-4 bg-dark-primary/10">
            <span className="font-mono text-[10px] text-zinc-500 block mb-3 font-bold uppercase tracking-wider">// SELECT CATEGORY</span>
            {FAQ_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpandedIndex(0); // Reset accordion to first item in new category
                  }}
                  className={`w-full text-left px-5 py-4 font-mono text-xs font-bold uppercase tracking-wider border transition-all duration-200 flex items-center justify-between ${
                    isSelected 
                      ? 'bg-dark-primary text-primary-accent border-primary-accent/30' 
                      : 'bg-dark-primary/5 hover:bg-dark-primary/15 text-zinc-300 border-zinc-800/80 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <ChevronRightIcon className={`w-4 h-4 transition-transform duration-200 ${
                    isSelected ? 'translate-x-1 text-primary-accent' : 'text-zinc-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Accordion FAQs (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <article 
                  key={faq.question}
                  className="bg-dark-primary/10 border border-zinc-800 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <h3 className="font-mono text-sm sm:text-base font-bold text-zinc-100 uppercase tracking-tight group-hover:text-primary-accent transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-dark-primary/20 group-hover:bg-dark-primary/40 flex items-center justify-center text-primary-accent transition-colors duration-300">
                      <ChevronRightIcon className={`w-4 h-4 transition-transform duration-300 ease-out ${isExpanded ? 'rotate-90 text-primary-accent' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                    </div>
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100 border-t border-zinc-800/80' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed bg-dark-surface/30">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

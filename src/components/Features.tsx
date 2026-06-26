import { useState, useEffect } from 'react';
import { BENTO_ITEMS } from '../data';
import { CpuIcon, ChevronDownIcon, RefreshIcon, ShieldIcon } from './icons';

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen resize to ensure context lock transition is fluid
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // If we resize back to desktop and activeIndex is collapsed (-1), reset to first item
      if (!mobile && activeIndex === -1) {
        setActiveIndex(0);
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <section 
      id="features" 
      className="py-24 bg-dark-surface border-b border-zinc-800 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-accent">
              // 01. CORE CAPABILITIES
            </div>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
              Engineered for <br />Autonomy
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Go beyond standard cron jobs. Deploy a cognitive database pipeline network that operates, heals, and scales without manual engineering intervention.
          </p>
        </div>

        {/* Bento Grid - DESKTOP VIEW */}
        <div 
          id="bento"
          className="hidden md:grid grid-cols-12 gap-6"
        >
          {/* Card 1: Autonomous Data Execution (col-span-8, Row 1 left) */}
          <div
            id="bento-card-pipeline"
            className={`col-span-8 h-[370px] p-8 border transition-all duration-300 relative overflow-hidden flex flex-row items-center gap-6 cursor-pointer group ${
              activeIndex === 0 
                ? 'bg-dark-primary/20 border-primary-accent/40 shadow-[0_0_20px_-3px_rgba(212,163,89,0.06)]' 
                : 'bg-dark-primary/10 border-zinc-800 hover:border-zinc-700'
            }`}
            onMouseEnter={() => setActiveIndex(0)}
            onClick={() => setActiveIndex(0)}
          >
            <div className="flex-1 flex flex-col justify-between h-full py-2 relative z-10">
              <div>
                <span className={`font-mono text-[10px] block mb-2 font-bold ${activeIndex === 0 ? 'text-primary-accent' : 'text-zinc-500'}`}>
                  01. // {BENTO_ITEMS[0].tag.toUpperCase()}
                </span>
                <h3 className="font-mono text-xl font-bold uppercase tracking-tight mb-3 text-white">
                  {BENTO_ITEMS[0].title}
                </h3>
                <p className="font-sans text-xs leading-relaxed text-zinc-400 max-w-sm">
                  {BENTO_ITEMS[0].description}
                </p>
              </div>
              <div className="font-mono text-[9px] text-zinc-500">
                THREAD_SLA: SUB_MILLISECOND
              </div>
            </div>
            
            <div className="flex-1 bg-dark-surface/50 border border-zinc-800/80 p-5 flex items-center justify-center relative h-full max-w-[320px]">
              <PipelineVisualizer />
            </div>
            
            {activeIndex === 0 && <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary-accent" />}
          </div>

          {/* Card 2: Cognitive Schema Mapping (col-span-4, row-span-2, Right-side vertical tower) */}
          <div
            id="bento-card-schema"
            className={`col-span-4 row-span-2 h-[764px] p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
              activeIndex === 1 
                ? 'bg-dark-primary/20 border-primary-accent/40 shadow-[0_0_20px_-3px_rgba(212,163,89,0.06)]' 
                : 'bg-dark-primary/10 border-zinc-800 hover:border-zinc-700'
            }`}
            onMouseEnter={() => setActiveIndex(1)}
            onClick={() => setActiveIndex(1)}
          >
            <div className="relative z-10">
              <span className={`font-mono text-[10px] block mb-2 font-bold ${activeIndex === 1 ? 'text-primary-accent' : 'text-zinc-500'}`}>
                02. // {BENTO_ITEMS[1].tag.toUpperCase()}
              </span>
              <h3 className="font-mono text-xl font-bold uppercase tracking-tight mb-3 text-white">
                {BENTO_ITEMS[1].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-zinc-400">
                {BENTO_ITEMS[1].description}
              </p>
            </div>

            <div className="my-6 bg-dark-surface/50 border border-zinc-800/80 p-5 flex items-center justify-center relative h-[380px]">
              <SchemaVisualizer />
            </div>

            <div className="font-mono text-[9px] text-zinc-500 relative z-10 flex justify-between border-t border-zinc-800/40 pt-4">
              <span>NORMALIZATION: ACTIVE</span>
              <span>DRIFT_HEALTH: 100%</span>
            </div>

            {activeIndex === 1 && <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary-accent" />}
          </div>

          {/* Card 3: Zero-Trust Data Security (col-span-4, Row 2 left) */}
          <div
            id="bento-card-security"
            className={`col-span-4 h-[370px] p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
              activeIndex === 2 
                ? 'bg-dark-primary/20 border-primary-accent/40 shadow-[0_0_20px_-3px_rgba(212,163,89,0.06)]' 
                : 'bg-dark-primary/10 border-zinc-800 hover:border-zinc-700'
            }`}
            onMouseEnter={() => setActiveIndex(2)}
            onClick={() => setActiveIndex(2)}
          >
            <div className="relative z-10">
              <span className={`font-mono text-[10px] block mb-2 font-bold ${activeIndex === 2 ? 'text-primary-accent' : 'text-zinc-500'}`}>
                03. // {BENTO_ITEMS[2].tag.toUpperCase()}
              </span>
              <h3 className="font-mono text-xl font-bold uppercase tracking-tight mb-3 text-white">
                {BENTO_ITEMS[2].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-zinc-400">
                {BENTO_ITEMS[2].description}
              </p>
            </div>

            <div className="my-4 bg-dark-surface/40 border border-zinc-800/50 p-4 flex items-center justify-center relative">
              <SecurityVisualizer />
            </div>

            <div className="font-mono text-[9px] text-zinc-500 relative z-10">
              SHIELD_LEVEL: SECURE_ALPHA
            </div>

            {activeIndex === 2 && <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary-accent" />}
          </div>

          {/* Card 4: High-Throughput Streaming Engine (col-span-4, Row 2 middle) */}
          <div
            id="bento-card-scale"
            className={`col-span-4 h-[370px] p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
              activeIndex === 3 
                ? 'bg-dark-primary/20 border-primary-accent/40 shadow-[0_0_20px_-3px_rgba(212,163,89,0.06)]' 
                : 'bg-dark-primary/10 border-zinc-800 hover:border-zinc-700'
            }`}
            onMouseEnter={() => setActiveIndex(3)}
            onClick={() => setActiveIndex(3)}
          >
            <div className="relative z-10">
              <span className={`font-mono text-[10px] block mb-2 font-bold ${activeIndex === 3 ? 'text-primary-accent' : 'text-zinc-500'}`}>
                04. // {BENTO_ITEMS[3].tag.toUpperCase()}
              </span>
              <h3 className="font-mono text-xl font-bold uppercase tracking-tight mb-3 text-white">
                {BENTO_ITEMS[3].title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-zinc-400">
                {BENTO_ITEMS[3].description}
              </p>
            </div>

            <div className="my-4 bg-dark-surface/40 border border-zinc-800/50 p-4 flex items-center justify-center relative">
              <ScaleVisualizer />
            </div>

            <div className="font-mono text-[9px] text-zinc-500 relative z-10">
              SCALE_METRIC: RUST_CORE_ASYNC
            </div>

            {activeIndex === 3 && <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary-accent" />}
          </div>
        </div>

        {/* Accordion Layout - MOBILE VIEW WITH ACCORDION TRANSITION */}
        <div 
          id="mobile-accordion"
          className="md:hidden flex flex-col gap-4"
        >
          {BENTO_ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <article 
                key={item.id}
                className={`border transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? 'bg-dark-primary/20 text-zinc-100 border-zinc-700' 
                    : 'bg-dark-primary/10 text-zinc-300 border-zinc-800'
                }`}
              >
                {/* Accordion Header */}
                <button
                  id={`accordion-btn-${item.id}`}
                  className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <div className="space-y-1">
                    <span className={`font-mono text-[9px] block font-bold ${
                      isActive ? 'text-primary-accent' : 'text-zinc-500'
                    }`}>
                      0{index + 1}. // {item.tag.toUpperCase()}
                    </span>
                    <h3 className="font-mono text-base font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'rotate-180 text-primary-accent' : 'text-zinc-500'
                  }`} />
                </button>

                {/* Accordion Content with smooth height transition */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100 border-t border-zinc-800/60' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 space-y-6">
                      <p className="font-sans text-xs leading-relaxed text-zinc-400">
                        {item.description}
                      </p>

                      {/* Embed the relevant visualizer inside the accordion for rich mobile experience */}
                      <div className="bg-dark-primary/30 p-4 border border-zinc-800 rounded-none flex items-center justify-center min-h-[160px]">
                        {index === 0 && <PipelineVisualizer />}
                        {index === 1 && <SchemaVisualizer />}
                        {index === 2 && <SecurityVisualizer />}
                        {index === 3 && <ScaleVisualizer />}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 1. Autonomous Pipeline Visualizer Sub-component
function PipelineVisualizer() {
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-4 text-white">
      <div className="flex justify-between items-center w-full bg-dark-primary/40 px-4 py-2 border border-dark-primary/30">
        <span className="font-mono text-[10px] text-surface-light/50">COGNITIVE FLOW_PIPELINE</span>
        <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
          <RefreshIcon className="w-3 h-3 animate-spin" /> RUNNING
        </span>
      </div>
      
      <div className="grid grid-cols-4 gap-2.5 w-full items-center">
        {['Ingress', 'Sanitize', 'Validate', 'Store'].map((step, idx) => (
          <div key={step} className="flex flex-col items-center relative">
            <div className={`w-10 h-10 flex items-center justify-center border font-mono text-xs font-bold ${
              idx === 1 
                ? 'bg-primary-accent text-dark-primary border-primary-accent pulse-border' 
                : 'bg-dark-primary/40 text-surface-light border-dark-primary/30'
            }`}>
              {idx + 1}
            </div>
            <span className="font-mono text-[9px] mt-1.5 text-surface-light/60">{step}</span>
            {idx < 3 && (
              <div className="absolute top-5 -right-3 w-4 h-0.5 bg-dark-primary/30" />
            )}
          </div>
        ))}
      </div>

      <div className="w-full text-center p-3 bg-primary-accent/5 border border-primary-accent/15">
        <span className="font-mono text-[11px] text-primary-accent flex items-center justify-center gap-1.5">
          <CpuIcon className="w-3.5 h-3.5 animate-pulse" />
          Healing active on validation thread #4...
        </span>
      </div>
    </div>
  );
}

// 2. Cognitive Schema Mapping Visualizer
function SchemaVisualizer() {
  return (
    <div className="w-full max-w-md grid grid-cols-2 gap-4 text-white">
      {/* Unstructured Raw Ingress */}
      <div className="border border-dark-primary/30 bg-dark-primary/10 p-3 flex flex-col justify-between">
        <div className="font-mono text-[9px] text-surface-light/40 border-b border-dark-primary/20 pb-1.5 mb-2 flex items-center justify-between">
          <span>UNSTRUCTURED_DATA</span>
          <span className="text-secondary-accent">RAW</span>
        </div>
        <div className="font-mono text-[10px] space-y-1 text-surface-light/60">
          <div>{"{"}</div>
          <div className="pl-2">"nm": "Elena Rostova",</div>
          <div className="pl-2">"mail_addr": "elena@vel.co",</div>
          <div className="pl-2">"v_lvl": "high_val_user"</div>
          <div>{"}"}</div>
        </div>
      </div>

      {/* Structured Database Ingest */}
      <div className="border border-primary-accent/20 bg-primary-accent/5 p-3 flex flex-col justify-between relative">
        <div className="font-mono text-[9px] text-primary-accent border-b border-primary-accent/20 pb-1.5 mb-2 flex items-center justify-between">
          <span>CLEAN_SCHEMA_TABLE</span>
          <span className="text-emerald-400">SYNCED</span>
        </div>
        <div className="font-mono text-[10px] space-y-1">
          <div className="flex justify-between">
            <span className="text-surface-light/40">full_name:</span>
            <span className="text-primary-accent">"Elena Rostova"</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-light/40">email:</span>
            <span className="text-primary-accent">"elena@vel.co"</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-light/40">tier:</span>
            <span className="text-primary-accent">"Enterprise"</span>
          </div>
        </div>
        {/* Connection Link */}
        <div className="absolute top-1/2 -left-3.5 w-3 h-0.5 bg-primary-accent/40" />
      </div>
    </div>
  );
}

// 3. Zero-Trust Security Visualizer
function SecurityVisualizer() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3 border border-dark-primary/30 bg-dark-primary/20 p-3">
        <ShieldIcon className="w-8 h-8 text-primary-accent" />
        <div className="flex-1 font-mono text-[11px]">
          <div className="flex justify-between">
            <span>DATA LOCK SYSTEM</span>
            <span className="text-emerald-400">SECURE</span>
          </div>
          <div className="text-surface-light/40 text-[10px]">REAL-TIME CRYPTOGRAPHY ACTIVE</div>
        </div>
      </div>

      <div className="space-y-1.5 font-mono text-[10px] bg-dark-primary/10 p-3 border border-dark-primary/30">
        <div className="flex justify-between">
          <span className="text-surface-light/40">ENCRYPTION TYPE:</span>
          <span>AES-256-GCM EDGE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-surface-light/40">PII STRIPPING:</span>
          <span className="text-emerald-400">100% SUCCESSFUL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-surface-light/40">COMPLIANCE CODE:</span>
          <span className="text-primary-accent">SOC2_TYPE_II_OK</span>
        </div>
      </div>
    </div>
  );
}

// 4. High-Throughput Streaming Engine
function ScaleVisualizer() {
  return (
    <div className="w-full max-w-md space-y-3 text-white">
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-dark-primary/30 p-3 bg-dark-primary/20">
          <div className="font-mono text-[9px] text-surface-light/40">STREAM THROTTLE</div>
          <div className="font-mono text-xl font-bold text-white mt-1">84,192 <span className="text-xs font-normal">/s</span></div>
        </div>
        <div className="border border-primary-accent/20 p-3 bg-primary-accent/5">
          <div className="font-mono text-[9px] text-primary-accent">LATENCY PENETRATION</div>
          <div className="font-mono text-xl font-bold text-primary-accent mt-1">1.8 <span className="text-xs font-normal">ms</span></div>
        </div>
      </div>

      <div className="border border-dark-primary/30 p-2 bg-dark-primary/10">
        <div className="flex justify-between items-center font-mono text-[9px] text-surface-light/40 mb-1">
          <span>REPLICATION THREAD LOAD</span>
          <span>99.99% IN SYNC</span>
        </div>
        <div className="w-full h-1 bg-dark-primary/30 overflow-hidden">
          <div className="h-full bg-primary-accent animate-pulse" style={{ width: '84%' }} />
        </div>
      </div>
    </div>
  );
}

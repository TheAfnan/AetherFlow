import { useState, useEffect } from 'react';
import { ArrowRightIcon, TerminalIcon, ServerIcon, CheckCircleIcon } from './icons';
import { COMPANY_LOGOS } from '../data';

export default function Hero() {
  const [commandText, setCommandText] = useState('');
  const [terminalStep, setTerminalStep] = useState(0);
  const [ingressLoad, setIngressLoad] = useState(4129);
  const [logIndex, setLogIndex] = useState(0);

  // High-fidelity terminal sequence loop (Bootstrapped under 500ms)
  useEffect(() => {
    const fullCommand = 'aetherflow init --node-class=edge';
    let typeIdx = 0;
    let typingTimer: any;
    let sequenceTimer1: any;
    let sequenceTimer2: any;
    let sequenceTimer3: any;
    
    const runTerminalSequence = () => {
      setCommandText('');
      setTerminalStep(0);
      typeIdx = 0;
      
      const typeChar = () => {
        if (typeIdx < fullCommand.length) {
          // Type very fast to ensure total bootstrap is under 500ms
          setCommandText(fullCommand.slice(0, typeIdx + 2));
          typeIdx += 2;
          typingTimer = setTimeout(typeChar, 8); 
        } else {
          setCommandText(fullCommand);
          // 120ms: request handshake
          sequenceTimer1 = setTimeout(() => {
            setTerminalStep(1);
            // 250ms: verify handshake
            sequenceTimer2 = setTimeout(() => {
              setTerminalStep(2);
              // 400ms: render active stream metrics & code mock
              sequenceTimer3 = setTimeout(() => {
                setTerminalStep(3);
              }, 150);
            }, 130);
          }, 120);
        }
      };
      
      typeChar();
    };

    runTerminalSequence();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(sequenceTimer1);
      clearTimeout(sequenceTimer2);
      clearTimeout(sequenceTimer3);
    };
  }, []);

  // Continuous real-time metric & rotating log updates
  useEffect(() => {
    const loadInterval = setInterval(() => {
      setIngressLoad((prev) => {
        const deviation = Math.floor(Math.random() * 41) - 20; // Fluctuate +/- 20
        return prev + deviation;
      });
    }, 1500);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % 4);
    }, 2500);

    return () => {
      clearInterval(loadInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 grid-bg-dark border-b border-zinc-800 overflow-hidden"
    >
      {/* Floating Particles background overlay */}
      <div className="particle-field">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 animate-fade-in">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-dark-primary text-primary-accent px-3 py-1 font-mono text-xs uppercase tracking-widest border border-primary-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-ping" />
            Core Ingress Node v4.10.2
          </div>

          {/* Heading with Premium Gradient & Bold Styling */}
          <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase leading-[0.95]">
            Power your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-secondary-accent bg-[length:200%_auto] animate-[textGradient_4s_linear_infinite] relative">
              future
            </span> with AI
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Deploy custom enterprise agents and automate complex database workflows. Scale your organizational intelligence with AetherFlow’s zero-trust mapping network today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            <a 
              href="#pricing"
              className="glow-btn inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30 px-7 py-4 transition-all duration-200"
            >
              Build a Workflow
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a 
              href="#bento"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-wider border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white bg-dark-primary/20 px-7 py-4 transition-colors"
            >
              <TerminalIcon className="w-4 h-4" />
              View Architecture
            </a>
          </div>

          {/* Meta metrics */}
          <div className="flex flex-wrap gap-6 items-center mt-6 text-zinc-500 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="w-4 h-4 text-primary-accent" />
              SOC2 Type II Certified
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="w-4 h-4 text-primary-accent" />
              Real-time PII Scrubbing
            </div>
          </div>
        </div>

        {/* Right Column: Premium Interactive Terminal Visualizer */}
        <div className="lg:col-span-5 w-full animate-slide-up">
          <div className="relative bg-dark-surface border border-dark-primary/20 p-5 shadow-2xl overflow-hidden group terminal-glow-container">
            {/* Scanline visual overlay effects */}
            <div className="scanline-overlay"></div>
            <div className="scanline-sweep"></div>

            {/* Ambient gold glow in top right */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-dark-primary/20 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-[10px] text-surface-light/40 tracking-wider flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                NODE_REPL_SHELL // CONSOLE
              </div>
            </div>

            {/* Terminal Body */}
            <div className="relative z-10 font-mono text-xs space-y-3.5 text-surface-light/80 min-h-[295px] flex flex-col justify-start">
              <div className="text-primary-accent/80 flex items-center gap-1.5">
                <span className="text-secondary-accent font-bold">$</span>
                <span>{commandText}</span>
                <span className="w-1.5 h-3.5 bg-primary-accent animate-cursor-blink inline-block" />
              </div>
              
              {terminalStep >= 1 && (
                <div className="text-surface-light/50 animate-fade-in text-[11px] flex items-center justify-between">
                  <span>[SYSTEM] Requesting cluster handshake...</span>
                  <span className="text-zinc-600">60%</span>
                </div>
              )}
              
              {terminalStep === 1 && (
                <div className="w-full bg-zinc-900 h-1.5 border border-zinc-800 overflow-hidden">
                  <div className="bg-primary-accent h-full transition-all duration-300" style={{ width: '60%' }} />
                </div>
              )}
              
              {terminalStep >= 2 && (
                <div className="text-emerald-400 flex items-center gap-1.5 animate-fade-in text-[11px]">
                  <span>✔</span> Handshake verified successfully (34ms)
                </div>
              )}
              
              {terminalStep >= 3 && (
                <div className="animate-fade-in space-y-3.5 mt-1">
                  {/* Stats Box */}
                  <div className="border border-dark-primary/30 bg-dark-primary/20 p-3 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-surface-light/40 text-[10px]">NODE CLUSTER</span>
                      <span className="text-primary-accent text-[11px] font-bold">aether-node-us-east-1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-surface-light/40 text-[10px]">INGRESS LOAD</span>
                      <span className="text-white font-medium text-[11px] font-mono">{ingressLoad.toLocaleString()} records/sec</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-surface-light/40 text-[10px]">PIPELINE LOSS</span>
                      <span className="text-emerald-400 text-[11px] font-bold">0.0000%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-surface-light/40 text-[10px]">THROUGHPUT</span>
                      <span className="text-white text-[11px] font-semibold">{99.98}% optimal</span>
                    </div>
                  </div>

                  {/* Running process code mock */}
                  <div className="space-y-1 text-[11px] leading-relaxed border-l-2 border-primary-accent/20 pl-2">
                    <div className="flex gap-2">
                      <span className="text-secondary-accent font-bold">▶</span>
                      <span className="text-white font-semibold">import</span>
                      <span className="text-surface-light/60">{"{ sanitize }"}</span>
                      <span className="text-white font-semibold">from</span>
                      <span className="text-primary-accent">"@aetherflow/core"</span>
                    </div>
                    <div className="flex gap-2 pl-4 text-surface-light/60">
                      <span>const</span>
                      <span className="text-white">sanitized_record</span>
                      <span>=</span>
                      <span className="text-white">await sanitize(raw_entry)</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5 pl-4">
                      <ServerIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>State synced to database.</span>
                    </div>
                  </div>

                  {/* Live rotating status log feed */}
                  <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1.5 h-4 border-t border-dark-primary/15 pt-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-ping" />
                    <span className="text-primary-accent/80 font-bold uppercase">LIVE FEED //</span>
                    <span className="text-zinc-400 transition-all duration-300">
                      {[
                        "SYSTEM: Synced shard #921 (0.8ms latency)",
                        "DATABASE: Re-indexed table blocks optimal",
                        "PROTOCOL: Executed heartbeat validation check OK",
                        "SECURE: Scrubbed PII on incoming stream #4"
                      ][logIndex]}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Visualizer Bottom Info Rail */}
            <div className="relative z-10 mt-5 pt-3.5 border-t border-dark-primary/20 flex items-center justify-between text-[10px] font-mono text-surface-light/40">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE_NODE_STREAMING // US-EAST
              </div>
              <div>PORT: 3000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24 border-t border-zinc-800 pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            // Trusted by infrastructure teams globally
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {COMPANY_LOGOS.map((logo, index) => (
              <div 
                key={logo.name} 
                className="flex items-center gap-2 opacity-0 hover:opacity-100 transition-all duration-300 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <svg 
                  className="w-5 h-5 fill-zinc-400 group-hover:fill-primary-accent transition-colors duration-200" 
                  viewBox="0 0 24 24"
                >
                  <path d={logo.path} />
                </svg>
                <span className="font-mono text-sm font-bold tracking-tight text-zinc-400 hover:text-white lowercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

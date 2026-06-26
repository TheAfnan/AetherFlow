import { CpuIcon, GithubIcon, TwitterIcon, LinkedinIcon, AetherFlowLogo } from './icons';

export default function Footer() {
  return (
    <footer 
      id="footer" 
      className="bg-dark-surface text-zinc-400 border-t border-zinc-800 py-16 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand Info (5 columns) */}
          <div className="md:col-span-5 space-y-6">
            <a 
              id="footer-logo-link"
              href="#" 
              className="flex items-center gap-2.5 group"
              aria-label="AetherFlow Home"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-dark-primary text-primary-accent border border-primary-accent/20 overflow-hidden">
                <AetherFlowLogo className="w-5.5 h-5.5 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="font-mono text-lg font-bold tracking-tight text-white uppercase">
                Aether<span className="text-secondary-accent">Flow</span>
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              AetherFlow is a next-generation AI-driven data automation platform. Streamline your enterprise data pipelines with autonomous workflows, sub-millisecond precision, and zero-trust data isolation.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-dark-primary/20 border border-zinc-800 text-zinc-400 hover:text-primary-accent hover:border-primary-accent/40 transition-colors" aria-label="AetherFlow Twitter/X">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-dark-primary/20 border border-zinc-800 text-zinc-400 hover:text-primary-accent hover:border-primary-accent/40 transition-colors" aria-label="AetherFlow GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-dark-primary/20 border border-zinc-800 text-zinc-400 hover:text-primary-accent hover:border-primary-accent/40 transition-colors" aria-label="AetherFlow LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Products (2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary-accent">
              // Core Engine
            </h3>
            <nav className="flex flex-col gap-2.5 font-sans text-xs">
              <a href="#features" className="hover:text-primary-accent transition-colors">Autonomous Agent</a>
              <a href="#features" className="hover:text-primary-accent transition-colors">Cognitive Mapping</a>
              <a href="#features" className="hover:text-primary-accent transition-colors">Shield Guard Edge</a>
              <a href="#pricing" className="hover:text-primary-accent transition-colors">Handshake APIs</a>
            </nav>
          </div>

          {/* Column 3: Resources (2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary-accent">
              // Documentation
            </h3>
            <nav className="flex flex-col gap-2.5 font-sans text-xs">
              <a href="#faq" className="hover:text-primary-accent transition-colors">FAQ Matrix</a>
              <a href="#" className="hover:text-primary-accent transition-colors">System Schemas</a>
              <a href="#" className="hover:text-primary-accent transition-colors">Node Telemetry</a>
              <a href="#" className="hover:text-primary-accent transition-colors">Handshake SDK</a>
            </nav>
          </div>

          {/* Column 4: Compliance (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary-accent">
              // Security Hub
            </h3>
            <nav className="flex flex-col gap-2.5 font-sans text-xs">
              <a href="#" className="hover:text-primary-accent transition-colors">SOC2 Compliance Report</a>
              <a href="#" className="hover:text-primary-accent transition-colors">PII Scrubbing Sandbox</a>
              <a href="#" className="hover:text-primary-accent transition-colors">Zero-Trust Protocol</a>
              <a href="#" className="hover:text-primary-accent transition-colors">Security Incident Log</a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © 2026 AETHERFLOW TECHNOLOGIES. ALL RIGHTS RESERVED. // NODE_CLUSTER: AF-US-EAST-PRIMARY
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>STATUS: PRODUCTION • BUILD: v4.1.0 • REGION: US-EAST-1 • UPTIME: 99.98%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

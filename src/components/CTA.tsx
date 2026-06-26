import { useState, useRef, FormEvent } from 'react';
import { TerminalIcon, CheckIcon } from './icons';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section 
      id="cta" 
      className="py-24 bg-dark-surface border-b border-zinc-800 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Panel: Content */}
          <div className="lg:col-span-6 space-y-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-primary-accent text-dark-primary px-3 py-1 font-mono text-xs uppercase tracking-widest border border-primary-accent/20 font-bold">
              // READY FOR INGRESS
            </div>
            
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
              Deploy your <br />
              <span className="text-primary-accent">First Node</span> today
            </h2>

            <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
              Connect your database core and experience the power of cognitive autonomous mapping. Secure, sandboxed, and 100% serverless.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-primary-accent" /> No Credit Card Required
              </div>
              <div className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-primary-accent" /> 14-Day Free Sandbox Access
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Terminal Registration */}
          <div className="lg:col-span-6">
            <div className="bg-dark-primary/10 border border-zinc-800 p-6 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary-accent/5 rounded-full blur-2xl pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-primary-accent" />
                  <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
                    NODE_HANDSHAKE_INIT
                  </span>
                </div>
                <div className="font-mono text-[10px] text-primary-accent">
                  v4.1.0_PROD
                </div>
              </div>

              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="font-mono text-xs text-zinc-400">
                    // Enter your email below to spin up a sandboxed node:
                  </div>

                  <div className="relative flex items-center border border-zinc-800 bg-dark-surface p-1 focus-within:border-zinc-700">
                    <span className="font-mono text-primary-accent text-xs pl-3 pr-1 shrink-0">$</span>
                    <input
                      id="terminal-email-input"
                      ref={terminalInputRef}
                      type="email"
                      placeholder="admin@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none text-white font-mono text-xs p-3.5 focus:outline-none focus:ring-0 placeholder-zinc-600"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-primary-accent text-dark-primary font-mono text-xs font-bold uppercase tracking-wider px-5 py-3.5 hover:bg-white hover:text-dark-primary transition-all duration-200 cursor-pointer"
                    >
                      EXECUTE
                    </button>
                  </div>
                </form>
              )}

              {status === 'loading' && (
                <div className="font-mono text-xs text-zinc-300 space-y-3.5 py-6">
                  <div className="text-primary-accent">Connecting node for {email}...</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                    <span>[PROCESS] Generating node credentials...</span>
                  </div>
                  <div className="text-zinc-500">Waiting for handshaking clusters...</div>
                </div>
              )}

              {status === 'success' && (
                <div className="font-mono text-xs text-zinc-300 space-y-4 py-4">
                  <div className="text-emerald-400 font-bold flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 bg-emerald-500/10 text-emerald-400 p-0.5 rounded-full" />
                    <span>[SUCCESS] HANDSHAKE VERIFIED</span>
                  </div>
                  <div className="border border-zinc-800 bg-dark-surface/50 p-4 text-[11px] space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">NODE_STATUS:</span>
                      <span className="text-primary-accent">DEPLOYED_AND_ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">SANDBOX_URL:</span>
                      <span className="text-white">aetherflow.io/nodes/{email.split('@')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">CREDENTIALS:</span>
                      <span className="text-emerald-400">DISPATCHED_TO_INBOX</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setEmail('');
                      setStatus('idle');
                    }}
                    className="font-mono text-[10px] text-primary-accent hover:underline focus:outline-none cursor-pointer"
                  >
                    // Deploy another test node
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

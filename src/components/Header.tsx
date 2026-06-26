import { useState, useEffect } from 'react';
import { CpuIcon, CloseIcon, MenuIcon, AetherFlowLogo } from './icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dark-surface/90 backdrop-blur-md py-4 border-surface-light/10 shadow-lg' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          id="logo-link"
          href="#" 
          className="flex items-center gap-2.5 group"
          aria-label="AetherFlow Home"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-dark-primary text-primary-accent border border-primary-accent/20 overflow-hidden">
            <AetherFlowLogo className="w-5.5 h-5.5 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 border border-primary-accent/30 pointer-events-none pulse-border" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-white uppercase">
            Aether<span className="text-secondary-accent">Flow</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav 
          id="desktop-nav"
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          <a href="#features" className="font-sans text-sm font-medium text-zinc-400 hover:text-primary-accent transition-colors">Features</a>
          <a href="#bento" className="font-sans text-sm font-medium text-zinc-400 hover:text-primary-accent transition-colors">Architecture</a>
          <a href="#pricing" className="font-sans text-sm font-medium text-zinc-400 hover:text-primary-accent transition-colors">Pricing</a>
          <a href="#testimonials" className="font-sans text-sm font-medium text-zinc-400 hover:text-primary-accent transition-colors">Testimonials</a>
          <a href="#faq" className="font-sans text-sm font-medium text-zinc-400 hover:text-primary-accent transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div id="header-actions" className="hidden md:flex items-center">
          <a 
            href="#pricing" 
            className="glow-btn font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent border border-primary-accent/30 px-5 py-2.5 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle"
          className="md:hidden text-zinc-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        id="mobile-navigation"
        className={`md:hidden fixed inset-0 top-[73px] bg-dark-surface z-40 transition-transform duration-300 ease-in-out border-t border-zinc-800 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 h-full justify-between bg-dark-surface">
          <div className="flex flex-col gap-6">
            <a 
              href="#features" 
              className="font-mono text-lg font-bold text-white border-b border-zinc-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              // 01. FEATURES
            </a>
            <a 
              href="#bento" 
              className="font-mono text-lg font-bold text-white border-b border-zinc-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              // 02. ARCHITECTURE
            </a>
            <a 
              href="#pricing" 
              className="font-mono text-lg font-bold text-white border-b border-zinc-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              // 03. PRICING
            </a>
            <a 
              href="#testimonials" 
              className="font-mono text-lg font-bold text-white border-b border-zinc-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              // 04. SOCIAL PROOF
            </a>
            <a 
              href="#faq" 
              className="font-mono text-lg font-bold text-white border-b border-zinc-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              // 05. INQUIRIES
            </a>
          </div>

          <div className="flex flex-col gap-4 pb-12">
            <a 
              href="#pricing"
              className="w-full text-center font-mono text-xs font-bold uppercase tracking-wider bg-dark-primary text-primary-accent py-3 border border-primary-accent/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

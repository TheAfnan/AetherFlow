import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-surface text-zinc-100 font-sans flex flex-col antialiased selection:bg-primary-accent selection:text-dark-surface">
      {/* Semantic Layout Modules */}
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Block */}
        <Hero />

        {/* 2. Features Grid & Dynamic Bento-to-Accordion Wrapper */}
        <Features />

        {/* 3. Performance Isolated Pricing System */}
        <Pricing />

        {/* 4. Enterprise Social Proof Grid */}
        <Testimonials />

        {/* 5. Interactive FAQ Category Hub */}
        <FAQ />

        {/* 6. High Converting Command Console CTA */}
        <CTA />
      </main>

      {/* 7. Comprehensive Semantic Footer */}
      <Footer />
    </div>
  );
}

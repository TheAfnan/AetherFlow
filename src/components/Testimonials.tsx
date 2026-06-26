import { TESTIMONIALS } from '../data';
import { StarIcon, MessageSquareIcon } from './icons';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-dark-surface border-b border-zinc-800 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-accent">
            // 04. SOCIAL PROOF ARCHITECTURE
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-none">
            Trusted by Pioneers
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Discover how leading engineering organizations trust AetherFlow’s infrastructure nodes to drive mission-critical database operations.
          </p>
        </div>

        {/* Testimonials Marquee Layout */}
        <div className="marquee-container -mx-6 px-6 relative">
          <div className="marquee-track py-6 flex gap-8">
            {/* Double the list to make the loop seamless and infinite */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <article 
                key={`${t.id}-${idx}`}
                className="bg-dark-primary/15 hover:bg-dark-primary/20 p-8 border border-zinc-800 hover:border-primary-accent/25 hover:shadow-[0_0_30px_rgba(212,163,89,0.04)] transition-all duration-300 flex flex-col justify-between w-[400px] shrink-0 relative overflow-hidden group"
              >
                {/* Decorative watermarked background quote icon */}
                <div className="absolute -right-4 -bottom-6 font-mono text-[140px] text-primary-accent/[0.02] select-none pointer-events-none font-bold">
                  ”
                </div>

                <div className="relative z-10">
                  {/* Rating stars & Quote mark representation */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-3.5 h-3.5 fill-primary-accent text-primary-accent" />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] text-zinc-600 font-bold tracking-widest">
                      // AUTHENTIC_NODE
                    </span>
                  </div>

                  {/* Blockquote with spacious typography */}
                  <blockquote className="font-sans text-sm font-normal text-zinc-300 leading-relaxed italic mb-8">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <figure className="relative z-10 flex items-center gap-3.5 border-t border-zinc-800/60 pt-5 mt-auto">
                  {/* Monogram avatar badge */}
                  <div className="w-10 h-10 bg-dark-primary text-primary-accent border border-primary-accent/30 flex items-center justify-center font-mono text-xs font-bold uppercase transition-transform duration-300 group-hover:scale-105">
                    {t.author.charAt(0)}
                  </div>
                  <figcaption className="font-mono text-xs">
                    <div className="font-bold text-zinc-100 uppercase tracking-tight">{t.author}</div>
                    <div className="text-zinc-500 text-[9px] mt-0.5 leading-none">
                      {t.role} @ <span className="text-primary-accent/90">{t.company}</span>
                    </div>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

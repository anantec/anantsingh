import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import type { Testimonial } from '../types/portfolio';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="flex-shrink-0 w-80 card-dark rounded-2xl p-6 mx-3"
      style={{ minWidth: 320 }}
    >
      <div className="text-2xl mb-4">{t.emoji}</div>
      <p className="text-gray-300 font-light text-sm leading-relaxed italic mb-6">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            className="w-9 h-9 rounded-full object-contain bg-white/10 flex-shrink-0 p-1"
          />
        ) : (
          <div className="w-9 h-9 rounded-full gradient-btn flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {t.name[0]}
          </div>
        )}
        <div>
          <div className="text-white text-xs font-medium uppercase tracking-wide">{t.name}</div>
          <div className="text-gray-600 text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  // triple to ensure enough cards for seamless infinite loop
  const looped = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-4">Testimonials</div>
          <h2 className="hero-heading font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What clients say.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0C0C0C 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #0C0C0C 0%, transparent 100%)' }}
        />

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              animation: 'marquee 30s linear infinite',
              width: 'max-content',
            }}
          >
            {looped.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
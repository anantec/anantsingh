import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ServicesSection() {
  const { services } = usePortfolio();

  return (
    <section id="skills" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-4">Services</div>
          <h2 className="hero-heading font-bold mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What I do.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {idx > 0 && <div className="border-t border-white/5" />}
              <div className="py-10 grid md:grid-cols-[60px_1fr_280px] gap-6 items-start">
                {/* Number */}
                <div className="text-gray-700 font-light text-sm font-mono pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Title + desc */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">{svc.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed max-w-lg">
                    {svc.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {svc.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

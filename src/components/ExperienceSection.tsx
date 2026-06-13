import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-4">Experience</div>
          <h2 className="hero-heading font-bold mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Where I've worked.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {idx > 0 && <div className="border-t border-white/5" />}
              <div className="py-10 grid md:grid-cols-[60px_1fr] gap-6">
                {/* Number */}
                <div className="text-gray-700 font-light text-sm font-mono pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {exp.company}
                      </h3>
                      <div className="text-gray-400 font-light text-sm mt-0.5">{exp.role}</div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-mono text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-600">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.slice(0, 3).map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-700 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

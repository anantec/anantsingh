import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Label */}
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-6">About</div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: headline */}
            <div>
              <h2 className="hero-heading font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Build, Create,<br />Grow.
              </h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
                <MapPin size={14} />
                <span>{profile.location}</span>
              </div>

              {/* Skills tags */}
              <div className="mt-10 space-y-5">
                {skills.categories.slice(0, 3).map((cat) => (
                  <div key={cat.name}>
                    <div className="text-xs text-gray-600 tracking-widest uppercase mb-3">{cat.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: bio */}
            <div>
              {profile.bio.split('\n').map((para, i) => (
                <p key={i} className="bio-text text-gray-300 leading-[1.85] font-light text-[1.05rem] mb-4">
                  {para.trim()}
                </p>
              ))}

              <div className="mt-10 space-y-5">
                {skills.categories.slice(3).map((cat) => (
                  <div key={cat.name}>
                    <div className="text-xs text-gray-600 tracking-widest uppercase mb-3">{cat.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

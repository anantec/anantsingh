import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    platform: 'LinkedIn',
    handle: 'anantdugtal',
    icon: <Linkedin size={14} />,
    description: 'Professional updates, BD insights, and content strategy thoughts.',
    url: 'https://linkedin.com/in/anantdugtal',
    image: '/src/photos/linkedin.jpg',
  },
  {
    platform: 'Instagram',
    handle: 'sochungausername',
    icon: <FaInstagram size={14} />,
    description: 'Behind the scenes, reels, and Hinglish takes on life and work.',
    url: 'https://instagram.com/sochungausername',
    image: '/src/photos/igg.png',
  },
  {
    platform: 'X',
    handle: 'pookieanant',
    icon: <FaXTwitter size={14} />,
    description: 'Unfiltered thoughts on tech, content, and whatever else is on my mind.',
    url: 'https://x.com/pookieanant',
    image: '/src/photos/x.jpg',
  },
];

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Socials() {
  return (
    <section id="socials" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-4">Connect</div>
          <h2 className="hero-heading font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Find me online.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="card-dark rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 block"
            >
              {/* Profile screenshot */}
              <div className="h-48 relative overflow-hidden bg-[#111]">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.platform}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #111 0%, #1a1025 100%)' }}
                  >
                    <span className="text-gray-700 text-sm tracking-widest uppercase">
                      {s.platform}
                    </span>
                  </div>
                )}
                {/* Platform badge */}
                <div className="absolute top-4 left-4 text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-gray-300 backdrop-blur-sm">
                  {s.platform}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-1.5 text-white font-medium text-base">
                    <span className="text-gray-400">{s.icon}</span>
                    <span>/{s.handle}</span>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/40 transition-all duration-200">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
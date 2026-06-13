import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

function AvatarSVG({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="avatarGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#2a1a3e" />
          <stop offset="100%" stopColor="#0f0a1a" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#C026D3" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="none" stroke="url(#ringGrad)" strokeWidth="2" />
      <circle cx="60" cy="60" r="55" fill="url(#avatarGrad)" />
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fill="#BBCCD7"
        fontSize="32"
        fontFamily="Kanit, sans-serif"
        fontWeight="600"
        letterSpacing="2"
      >
        {initials}
      </text>
    </svg>
  );
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Role pill */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {profile.role}
        </motion.div>

        {/* Avatar */}
        <motion.div
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="w-28 h-28 md:w-36 md:h-36"
        >
          <img
            src="/src/photos/avatar2.png"
            alt={profile.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="hero-heading font-bold leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          Hi, I'm {profile.shortName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-gray-400 font-light max-w-xl leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
        >
          {profile.tagline}
        </motion.p>

        {/* Social pills */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <SocialLinks social={profile.social} variant="pills" />
        </motion.div>

        {/* CTA row */}
        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
            className="gradient-btn text-white font-medium px-7 py-3 rounded-full text-sm"
          >
            Work with me
          </a>
          <a
            href="#projects"
            className="border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-light px-7 py-3 rounded-full text-sm transition-all duration-200"
          >
            See my work
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={6}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-10 mt-4"
        >
          {[
            { value: `${profile.yearsOfExperience}+`, label: 'Years' },
            { value: '2+', label: 'Clients' },
            { value: '5M+', label: 'Views Generated' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="hero-heading font-bold text-2xl md:text-3xl">{value}</div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}

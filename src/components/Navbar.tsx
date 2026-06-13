import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Socials', href: '#socials' },
];

export default function Navbar() {
  const { profile } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Full-width navbar — visible at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100'
          }`}
        style={{ height: 72 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <a href="#hero" className="hero-heading font-bold text-lg tracking-tight">
            {profile.shortName}
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide font-light"
              >
                {label}
              </a>
            ))}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
              className="gradient-btn text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Work with me!
            </a>
          </div>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown for top nav */}
        {open && !scrolled && (
          <div className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-400 hover:text-white border-b border-white/5 text-sm tracking-wide"
              >
                {label}
              </a>
            ))}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
              className="gradient-btn inline-block mt-4 text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Work with me!
            </a>
          </div>
        )}
      </nav>

      {/* Floating pill navbar — appears on scroll */}
      <div
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        {/* Desktop pill */}
        <nav
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 backdrop-blur-xl"
          style={{
            background: 'rgba(12,12,12,0.85)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
          }}
        >
          {/* Brand dot */}
          <a
            href="#hero"
            className="hero-heading font-bold text-sm px-5 py-1.5 tracking-tight"
          >
            {profile.shortName}
          </a>

          <div className="w-px h-4 bg-white/10 mx-1" />

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs text-gray-400 hover:text-white hover:bg-white/8 transition-all duration-200 px-5 py-1.5 rounded-full font-light tracking-wide"
            >
              {label}
            </a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-1" />

          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
            className="gradient-btn text-white text-xs font-medium px-6 py-2 rounded-full whitespace-nowrap flex-shrink-0"
          >
            Work with me!
          </a>
        </nav>

        {/* Mobile pill */}
        <div className="md:hidden">
          <div
            className="relative flex items-center justify-between px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-xl"
            style={{
              background: 'rgba(12,12,12,0.85)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              width: '90vw',
            }}
          >
            {/* Logo left */}
            <a href="#hero" className="hero-heading font-bold text-sm">
              {profile.shortName}
            </a>
            {/* Empty center — handled by justify-between */}
            {/* Hamburger right */}
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

          {/* Mobile dropdown from pill */}
          {open && scrolled && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden"
              style={{ background: 'rgba(12,12,12,0.95)' }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="p-3">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
                  className="gradient-btn block text-center text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  Work with me!
                </a>
              </div>
            </div>
          )}
        </div >
      </div >
    </>
  );
}
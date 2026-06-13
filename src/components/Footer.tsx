import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

const NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.social.email ?? '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand col */}
          <div>
            <div className="hero-heading font-bold text-3xl mb-2">{profile.name}</div>
            <div className="text-gray-600 text-sm mb-1">{profile.specialization}</div>
            <div className="text-gray-700 text-xs">{profile.location}</div>
          </div>

          {/* Navigate col */}
          <div>
            <div className="text-xs text-gray-600 tracking-widest uppercase mb-5">Navigate</div>
            <a
             href={`https://mail.google.com/mail/?view=cm&to=${profile.social.email}`}
            target='_blank'
            className="gradient-btn text-white text-sm font-medium px-5 py-2 rounded-full"
          >
           Let's Build together!
          </a>
          </div>

          {/* Reach out col */}
          <div>
            <div className="text-xs text-gray-600 tracking-widest uppercase mb-5">Reach Out</div>
            {profile.social.email && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-gray-300 font-light">{profile.social.email}</span>
                <button
                  onClick={copyEmail}
                  className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                </button>
              </div>
            )}
            <SocialLinks social={profile.social} variant="icons" />
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-700 text-xs">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="text-gray-700 text-xs">
            Built with React · TypeScript · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

import { Twitter, Instagram, Linkedin, Mail, X } from 'lucide-react';
import type { Social } from '../types/portfolio';

interface Props {
  social: Social;
  variant?: 'pills' | 'icons';
}

const LINKS = [
  { key: 'x' as const, icon: X, label: 'X (Twitter)' },
  { key: 'instagram' as const, icon: Instagram, label: 'Instagram' },
  { key: 'linkedin' as const, icon: Linkedin, label: 'LinkedIn' },
  { key: 'email' as const, icon: Mail, label: 'Email', isEmail: true },
];

export default function SocialLinks({ social, variant = 'pills' }: Props) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {LINKS.map(({ key, icon: Icon, label, isEmail }) => {
        const value = social[key];
        if (!value) return null;
        const href = isEmail ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            target={isEmail ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className={
              variant === 'pills'
                ? 'flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/30 hover:text-white transition-all duration-200'
                : 'text-gray-500 hover:text-white transition-colors duration-200'
            }
          >
            <Icon size={15} />
            {variant === 'pills' && <span>{label}</span>}
          </a>
        );
      })}
    </div>
  );
}

import { ArrowUpRight, Instagram } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const isReel = project.type === 'reel';
  const microlinkUrl = project.link
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`
    : null;

  return (
    <div className="card-dark rounded-2xl overflow-hidden group sticky top-24 transition-shadow duration-300 hover:border-white/20">
      {/* Thumbnail */}
      <div className="h-52 relative overflow-hidden bg-[#111]">
        {microlinkUrl ? (
          <img
            src={microlinkUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(ellipse 60% 60% at ${30 + index * 15}% 50%, rgba(124,58,237,0.4) 0%, transparent 70%)`,
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-light text-sm tracking-widest uppercase text-center px-6">
              {project.title}
            </span>
          </>
        )}

        {/* Reel badge */}
        {isReel && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-gray-300 backdrop-blur-sm">
            <Instagram size={11} />
            Reel
          </div>
        )}

        {project.highlight && (
          <div className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-white font-medium text-base leading-snug">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-200"
              aria-label={isReel ? 'Watch reel' : 'Visit site'}
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        <p className="text-gray-500 font-light text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
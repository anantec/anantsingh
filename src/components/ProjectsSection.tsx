import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  // highlight first, then rest
  const sorted = [
    ...projects.filter((p) => p.highlight),
    ...projects.filter((p) => !p.highlight),
  ];

  return (
    <section id="projects" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs text-gray-600 tracking-widest uppercase mb-4">Work</div>
          <h2 className="hero-heading font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Selected projects.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

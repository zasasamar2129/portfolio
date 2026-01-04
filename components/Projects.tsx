
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-40 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-28">
        <span className="text-xs font-black text-[var(--primary)] uppercase tracking-[0.6em] mb-6">Execution Log</span>
        <h2 className="text-6xl md:text-8xl font-black text-[var(--text)] text-center leading-none">
          ELITE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--text-muted)]">MISSIONS</span>
        </h2>
        <div className="h-[3px] w-32 bg-[var(--primary)]/30 mt-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-[var(--primary)]/10 blur opacity-0 group-hover:opacity-100 transition duration-700" />
            
            <div className="relative p-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl h-full flex flex-col group-hover:border-[var(--primary)]/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-[var(--primary)]/5 rounded-2xl border border-[var(--border)] group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/40 transition-all">
                  <Zap size={24} />
                </div>
                <a href={project.link} className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-3xl font-black text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-[var(--text-muted)] mb-10 flex-grow leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-4 py-1.5 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest group-hover:border-[var(--primary)]/20 group-hover:text-[var(--primary)] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-40 relative overflow-hidden bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div>
            <span className="text-xs font-black text-[var(--primary)] uppercase tracking-[0.5em] mb-4 block">Internal Energy</span>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--text)]">MASTERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--text-muted)]">CHART</span></h2>
          </div>
          <p className="text-[var(--text-muted)] max-w-md text-right font-medium italic">
            "Your bugs have no place to hide."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-black text-[var(--text)] uppercase tracking-[0.2em] group-hover:text-[var(--primary)] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-[var(--primary)] font-bold">{skill.level}%</span>
                </div>
                <div className="h-[3px] w-full bg-[var(--border)] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-[var(--primary)] relative shadow-[0_0_10px_var(--primary-glow)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {LANGUAGES.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="aspect-square flex flex-col items-center justify-center p-10 border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-xl rounded-3xl relative group hover:border-[var(--primary)] transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <span className="text-6xl font-black text-[var(--primary)]/10 mb-6 group-hover:text-[var(--primary)] group-hover:scale-110 transition-all duration-500 font-chakra">
                  {lang.symbol}
                </span>
                <span className="text-xl font-black text-[var(--text)] mb-1">{lang.name}</span>
                <span className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest">{lang.proficiency}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-52 px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/30 to-transparent blur-3xl -z-10 group-hover:from-[var(--primary)]/50 transition-all duration-700" />
          <div className="aspect-[4/5] bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
              alt="Shinobi Workspace" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.5em] mb-3 block">Digital Shinobi</span>
              <h3 className="text-3xl font-black text-[var(--text)] tracking-tight">ZEN THE ARCHITECT</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-black text-[var(--text)] mb-12 leading-[0.9] tracking-tighter">
            MASTERING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--text-muted)]">FORBIDDEN.</span>
          </h2>
          
          <div className="space-y-8 text-[var(--text-muted)] text-xl leading-relaxed font-light">
            <p>
              In the silent void of the terminal, I weave <span className="text-[var(--text)] font-bold">complex automation scripts</span> that operate beyond human perception. My vision is enhanced by years of debugging—a digital intuition that deciphers system flows instantly.
            </p>
            <p>
              I bridge worlds using <span className="text-[var(--text)] font-bold">advanced API jutsu</span>, connecting modern stacks with precision. My discipline is forged in the fires of constant learning, always evolving, never settling for mediocre performance.
            </p>
            <p>
              From the visual manipulation of the <span className="text-[var(--primary)] font-bold">Adobe Suite</span> to the cold, efficient logic of <span className="text-[var(--primary)] font-bold">system utilities</span>, I manifest digital excellence in every project.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            <div>
              <h4 className="text-4xl font-black text-[var(--text)] mb-1">95%</h4>
              <p className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest">Efficiency Rate</p>
            </div>
            <div className="w-px h-12 bg-[var(--border)]" />
            <div>
              <h4 className="text-4xl font-black text-[var(--text)] mb-1">08+</h4>
              <p className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest">S-Rank Missions</p>
            </div>
            <div className="w-px h-12 bg-[var(--border)]" />
            <div>
              <h4 className="text-4xl font-black text-[var(--text)] mb-1">∞</h4>
              <p className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest">Will to Evolve</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

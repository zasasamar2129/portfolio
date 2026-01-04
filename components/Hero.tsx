
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[var(--primary)]/10 rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 text-center"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '2em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-[var(--primary)] text-xs uppercase mb-6 font-black"
        >
          Master of the Digital Arts
        </motion.p>
        
        <h1 className="text-8xl md:text-[12rem] font-black text-[var(--text)] tracking-tighter mb-4 leading-none select-none">
          ZEN<span className="text-[var(--primary)] drop-shadow-[0_0_25px_var(--primary-glow)]">.</span>
        </h1>
        
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent mx-auto mb-10" />
        
        <p className="text-lg md:text-2xl text-[var(--text-muted)] max-w-3xl font-medium leading-relaxed tracking-wide">
          Architect of <span className="text-[var(--text)]">Seamless Automation</span> <span className="text-[var(--primary)]/40 mx-2">/</span> 
          Master of <span className="text-[var(--text)]">API Jutsu</span> <span className="text-[var(--primary)]/40 mx-2">/</span> 
          Elite <span className="text-[var(--text)]">Technologist</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-[var(--primary)] uppercase tracking-[0.4em] font-black">Explore the Realm</span>
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[var(--primary)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

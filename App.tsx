
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChakraCursor from './components/ChakraCursor';
import ChakraBackground from './components/ChakraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [stage, setStage] = useState<'entry' | 'loading' | 'ready'>('entry');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isZooming, setIsZooming] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? '' : 'light-mode';
  }, [theme]);

  const handleAmaterasu = () => {
    setIsZooming(true);
    // Animation timing matches the CSS zoom animation
    setTimeout(() => {
      setStage('loading');
      setTimeout(() => {
        setStage('ready');
      }, 1500);
    }, 1000);
  };

  return (
    <div className={`relative min-h-screen selection:bg-[var(--primary)] selection:text-white bg-[var(--bg)] overflow-x-hidden theme-${theme}`}>
      <ChakraCursor />
      <ChakraBackground />

      <AnimatePresence mode="wait">
        {stage === 'entry' && (
          <motion.div
            key="entry-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden ${isZooming ? 'amaterasu-zoom' : ''}`}
          >
            <motion.div
              animate={{ rotate: isZooming ? 1080 : 360 }}
              transition={{ duration: isZooming ? 1 : 20, repeat: isZooming ? 0 : Infinity, ease: isZooming ? "circIn" : "linear" }}
              className="absolute w-[150%] aspect-square border-[1px] border-red-900/10 rounded-full"
            />
            
            <motion.div 
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-48 h-48 rounded-full border-4 border-red-600 flex items-center justify-center relative mb-12 shadow-[0_0_50px_rgba(239,68,68,0.3)] bg-red-600/5 group">
                 {/* Animated Tomoe for the Entry Eye */}
                 <motion.div 
                   animate={{ rotate: isZooming ? 1800 : 360 }}
                   transition={{ duration: isZooming ? 1 : 10, repeat: isZooming ? 0 : Infinity, ease: isZooming ? "circIn" : "linear" }}
                   className="absolute inset-4 border-2 border-red-900/30 rounded-full"
                 />
                 <motion.div 
                   animate={{ scale: isZooming ? 5 : 1 }}
                   transition={{ duration: 1, ease: "circIn" }}
                   className="w-12 h-12 bg-red-600 rounded-full shadow-[0_0_20px_#ef4444] border-4 border-black z-20" 
                 />
                 
                 {[0, 120, 240].map(deg => (
                   <motion.div 
                    key={deg}
                    style={{ rotate: deg }}
                    animate={{ rotate: isZooming ? deg + 1800 : deg + 360 }}
                    transition={{ duration: isZooming ? 1 : 8, repeat: isZooming ? 0 : Infinity, ease: isZooming ? "circIn" : "linear" }}
                    className="absolute inset-0 flex justify-center pt-8"
                   >
                     <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                   </motion.div>
                 ))}
              </div>

              <motion.button
                onClick={handleAmaterasu}
                disabled={isZooming}
                whileHover={{ scale: 1.1, letterSpacing: '0.8em', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                className="px-12 py-4 border-2 border-red-600 text-red-600 font-black uppercase tracking-[0.5em] transition-all duration-300 hover:bg-red-600 shadow-[0_0_30px_rgba(239,68,68,0.2)] disabled:opacity-0"
              >
                AMATERASU
              </motion.button>
              
              <p className="mt-8 text-[10px] text-red-900 font-black uppercase tracking-widest opacity-50">
                Release the Chakra
              </p>
            </motion.div>

            {/* Black Flame Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "110%", x: Math.random() * 100 + "%" }}
                  animate={{ y: "-10%", x: (Math.random() * 100) + (Math.random() * 10 - 5) + "%" }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                  className="absolute w-2 h-8 bg-black blur-sm"
                />
              ))}
            </div>
          </motion.div>
        )}

        {stage === 'loading' && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 border-2 border-[var(--primary)]/20 border-t-[var(--primary)] rounded-full flex items-center justify-center"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-[var(--border)] border-b-[var(--primary)] rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center font-black text-[var(--primary)] text-4xl drop-shadow-[0_0_15px_var(--primary-glow)]">
                Z
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h2 className="text-[var(--text)] text-[12px] uppercase tracking-[1em] font-black">Connecting Chakra</h2>
              <div className="w-64 h-[2px] bg-[var(--border)] mt-8 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary-glow)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {stage === 'ready' && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          
          <div className="relative">
            {/* Dark Energy Spine */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[var(--primary)]/40 via-[var(--primary)]/5 to-transparent -z-10" />
            
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </motion.main>
      )}
    </div>
  );
};

export default App;

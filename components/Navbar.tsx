
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-transparent border-b border-[var(--border)]"
    >
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full border-2 border-[var(--primary)] flex items-center justify-center text-sm font-black text-[var(--primary)] shadow-[0_0_10px_var(--primary-glow)]">
          Z
        </div>
        <span className="text-xl font-black tracking-tighter text-[var(--text)]">ZEN<span className="text-[var(--primary)]">.</span>{theme === 'dark' ? 'UCHIHA' : 'SENJU'}</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-bold text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors uppercase tracking-[0.2em] relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-[var(--border)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all ml-4"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      
      
    </motion.nav>
  );
};

export default Navbar;

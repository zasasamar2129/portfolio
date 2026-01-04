
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-24 border border-[var(--border)] bg-gradient-to-b from-[var(--card-bg)] to-transparent rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
          
          <h2 className="text-5xl md:text-7xl font-black text-[var(--text)] mb-8 tracking-tighter">
            ESTABLISH <br/>
            <span className="text-[var(--primary)]">CONNECTION</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Transmission through the hidden network. Let us discuss the mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
             <a href="https://github.com/zasasamar2129" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all group">
               <Github size={24} className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
               <span className="text-sm font-black text-[var(--text)] uppercase tracking-widest">Source</span>
             </a>
             <a href="http://t.me/z_reaper" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all group">
               <MessageCircle size={24} className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
               <span className="text-sm font-black text-[var(--text)] uppercase tracking-widest">Telegram</span>
             </a>
             <a href="mailto:zasasamar@outlook.com" className="flex items-center justify-center gap-4 p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all group">
               <Mail size={24} className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
               <span className="text-sm font-black text-[var(--text)] uppercase tracking-widest">Signal</span>
             </a>
          </div>

          <motion.button
            onClick={() => {
            window.location.href = "mailto:zasasamar@outlook.com";
           }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px var(--primary-glow)' }}
            whileTap={{ scale: 0.98 }}
          className="px-14 py-6 bg-[var(--primary)] text-white font-black uppercase tracking-[0.3em] rounded-full flex items-center gap-4 mx-auto group transition-all"
        >
          Send Signal
          <Send
          size={22}
          className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
        />
        </motion.button>

        
        <div className="mt-28 flex flex-col items-center gap-6">
          <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.5em] font-black">
            © {new Date().getFullYear()} ZEN • NO COMPROMISE • UNLEASH THE FIRE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

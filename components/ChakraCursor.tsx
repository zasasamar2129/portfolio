
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const ChakraCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = !!target.closest('a') || !!target.closest('button') || target.tagName === 'A' || target.tagName === 'BUTTON';
      setIsHovering(isLink);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      setRipples(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(prev => prev.filter(r => Date.now() - r.id < 500));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <>
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="fixed pointer-events-none z-[9996] w-12 h-12 rounded-full border border-[var(--primary)]"
          />
        ))}
      </AnimatePresence>

      {/* Outer Sharingan Ring - Medium Size (approx 48px) */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed pointer-events-none z-[9997] w-12 h-12 rounded-full border-[2px] border-[var(--primary)]/40 flex items-center justify-center bg-[var(--primary)]/5"
        animate={{
          rotate: 360,
          scale: isHovering ? 1.4 : 1,
          opacity: 1,
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 400, damping: 25 }
        }}
      >
        {/* Simplified Tomoe Patterns for smaller size */}
        {[0, 120, 240].map((deg) => (
          <motion.div
            key={deg}
            style={{ rotate: deg }}
            className="absolute inset-0 flex justify-center items-start pt-0.5"
          >
            <div className="w-2 h-2 bg-black rounded-full relative">
              <div className="absolute top-1/2 left-full -translate-y-1/2 w-2.5 h-1 bg-black rounded-r-full origin-left" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Core Pupil */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed pointer-events-none z-[9999] w-4 h-4 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary-glow)] border-[1.5px] border-black"
        animate={{
          scale: isClicking ? 0.7 : (isHovering ? 1.1 : 1),
        }}
      />
      
      {/* Subtle secondary ring */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed pointer-events-none z-[9998] w-7 h-7 rounded-full border border-black/20"
      />
    </>
  );
};

export default ChakraCursor;

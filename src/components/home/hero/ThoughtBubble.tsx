"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function ThoughtBubble() {
  // Hook to control the typing cycle key
  const [loopKey, setLoopKey] = useState(0);
  const textToType = "Still thinking when to start?";

  useEffect(() => {
    // Total typing time: 31 characters * 0.04s stagger = 1.24 seconds
    // plus 3.5 seconds to read it = 4.74 seconds total per loop cycle
    const cycleDuration = (textToType.length * 40) + 3500;

    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      /* SPEED OVERHAUL:
         - Added transform-gpu and contain-layout to bypass CPU re-paint calculations on typing cycles.
      */
      className="absolute bottom-[95%] sm:bottom-[85%] lg:bottom-[80%] left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[210px] h-[160px] sm:w-[240px] sm:h-[190px] flex items-center justify-center select-none scale-90 xs:scale-95 sm:scale-100 origin-bottom transform-gpu contain-layout"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Hand-drawn SVG Cloud Bubble */}
      <svg 
        className="absolute inset-0 w-full h-full text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform-gpu" 
        viewBox="0 0 200 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 110 
             C 30 115, 15 100, 20 80 
             C 5 75, 5 50, 25 45 
             C 20 25, 45 10, 65 20 
             C 85 5, 115 5, 135 20 
             C 160 10, 180 25, 175 50 
             C 195 55, 195 80, 180 90 
             C 185 110, 165 125, 145 120 
             C 125 135, 95 135, 75 125 
             C 65 125, 55 120, 50 110 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          className="opacity-90"
        />
        
        {/* Trailing thought bubbles (Bottom-Right) */}
        <ellipse cx="156" cy="132" rx="12" ry="7" transform="rotate(25 156 132)" stroke="currentColor" strokeWidth="2" fill="currentColor" className="fill-white/5" />
        <ellipse cx="172" cy="144" rx="8" ry="5" transform="rotate(25 172 144)" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="184" cy="152" rx="5" ry="3.5" transform="rotate(25 184 152)" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center px-7 sm:px-9 pb-5 pt-2 text-center w-full h-full">
        
        {/* Header: Internal Monologue */}
        <div className="flex items-center gap-1 mb-1.5 justify-center">
          <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400 stroke-[2]" />
          <span className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-[0.15em] text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text font-mono shifted-label">
            Internal Monologue
          </span>
        </div>
        
        {/* Main Quote with Perfect React-driven Infinite Loop */}
        <motion.p 
          key={loopKey}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.04, 
                delayChildren: 0.2,    
              }
            }
          }}
          className="text-[11px] sm:text-[13px] font-semibold leading-tight text-white font-sans tracking-wide max-w-[125px] sm:max-w-[145px] italic min-h-[2.5em]"
        >
          {/* Opening Quote */}
          <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>"</motion.span>
          
          {/* Map through the character arrays natively */}
          {textToType.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 1 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.04 }}
              className="inline-block will-change-transform"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* Closing Quote */}
          <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>"</motion.span>
        </motion.p>
        
      </div>
    </motion.div>
  );
}
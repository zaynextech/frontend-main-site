"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollReminder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      if (window.scrollY < 50) {
        setIsVisible(true);
      }
    }, 2200);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          /* DYNAMIC POSITIONING ENGINE:
            - Mobile: Sits on the right side (right-6 bottom-8, x: 0)
            - Large Desktop (lg): Moves to the exact center (lg:left-1/2, lg:-translate-x-1/2, lg:bottom-12)
          */
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="fixed bottom-8 right-6 lg:right-auto lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 z-40 pointer-events-none select-none flex items-center justify-center rounded-full  
            w-10 h-10 lg:w-14 lg:h-14" /* Smaller circle on mobile, much larger on desktop */
        >
        

          {/* ================= CASCADING DOUBLE CHEVRON ENGINE ================= */}
          <div className="flex flex-col items-center justify-center -space-y-1.5 lg:-space-y-2 py-1">
            {[0, 1].map((index) => (
              <motion.svg
                key={index}
                animate={{ 
                  opacity: [0.1, 1, 0.1], 
                  y: [0, 4, 0] 
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                /* DYNAMIC ARROW SIZING:
                  - Mobile: w-4 h-4
                  - Desktop: lg:w-6 lg:h-6 (Much larger and visible)
                */
                className="w-6 h-8 lg:w-10 lg:h-8 text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.7)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            ))}
          </div>
          {/* =================================================================== */}
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
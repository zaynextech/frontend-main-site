"use client";

import { motion, TargetAndTransition } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroLeft() {
  // Ultra-optimized transition values configured to settle within minimal clock cycles
  const transitionSpring: TargetAndTransition["transition"] = { 
    type: "spring", 
    stiffness: 140, // Increased stiffness for snapper initial rendering sequences
    damping: 22, 
    mass: 0.6,
    restDelta: 0.001 
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      /* SPEED LAYER: Applied explicit default visibility classes (opacity-100) 
         so elements render instantly even before client-side hydration scripts parse fully.
      */
      className="w-full lg:w-[62%] text-center lg:text-left flex flex-col justify-center items-center lg:items-start order-1 lg:order-none relative z-10 contain-layout px-3 py-5 xs:p-5 sm:p-16 lg:p-14 bg-neutral-950/10 backdrop-blur-[1px] opacity-100 transform-gpu"
    >
      
      {/* ================= PREMIUM NEON HUD GLOW FRAME ================= */}
      {/* Optimized vector rendering container using hardware acceleration wrappers */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none text-cyan-500/40 transform-gpu"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          {/* Swapped to a lightweight performance layout tracking boundary scale */}
          <filter id="neon-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          ry="24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="900 300 2000" 
          filter="url(#neon-glow)"
          className="text-cyan-500/40 sm:text-cyan-400/30 transition-opacity duration-200 will-change-[transform,opacity]"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Hardware Geometric Accent Tag shifted to the top-right gap area */}
      <div className="absolute top-0 right-12 xs:right-16 sm:right-20 -translate-y-1/2 flex gap-1 items-center px-2 py-0.5 bg-neutral-950 border border-cyan-500/30 rounded-full scale-90 sm:scale-100 forward-layer">
        <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
        <span className="text-[8px] font-mono tracking-widest text-white uppercase"> SYS.LIVE</span>
      </div>
      {/* ============================================================ */}


      {/* 1. Premium Typography with Zero-Glitch Text Masking */}
      <h1 className="w-full text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[0.95] flex flex-col items-center lg:items-start content-visibility">
        
        {/* Row 1 Mask */}
        <span className="relative block overflow-hidden pb-1 w-full min-h-[1.1em]">
          <motion.span
            variants={{ 
              hidden: { y: 40, opacity: 0 }, // Shallow initial offset prevents heavy paint shifts
              visible: { y: 0, opacity: 1 } 
            }}
            transition={{ ...transitionSpring, delay: 0.02 }}
            className="block text-zinc-50 font-black will-change-transform"
          >
            Professional Websites
          </motion.span>
        </span>

        {/* Row 2 Mask */}
        <span className="relative block overflow-hidden pt-1 pb-4 -mb-4 w-full min-h-[1.2em]">
          <motion.span
            variants={{ 
              hidden: { y: 40, opacity: 0 }, 
              visible: { y: 0, opacity: 1 } 
            }}
            transition={{ ...transitionSpring, delay: 0.08 }}
            className="block bg-gradient-to-r from-cyan-400 via-cyan    -500 to-cyan-500 bg-clip-text text-transparent will-change-transform pt-0.5 pb-2"
          >
            & Digital Solutions
          </motion.span>
        </span>

        {/* Row 3 Subtext Tagline */}
        <span className="relative block overflow-hidden mt-3 pb-1 -mb-1 min-h-[1.2em] w-full">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="block text-zinc-100 text-sm xs:text-lg sm:text-xl md:text-2xl font-light will-change-transform py-0.5"
          >
            For Growing Businesses
          </motion.span>
        </span>
      </h1>

      {/* 2. Code-Structured Description Block */}
      <div className="relative mt-5 xs:mt-6 pl-0 lg:pl-6 border-l-0 lg:border-l lg:border-zinc-800/80 max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl group w-full">
        <span className="hidden lg:block absolute left-[-24px] top-0 font-mono text-[10px] text-zinc-600 transition-colors duration-200 group-hover:text-cyan-500/50">
          01
        </span>
        <motion.p
          variants={{ 
            hidden: { opacity: 0, y: 8 }, 
            visible: { opacity: 1, y: 0 } 
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.28 }}
          className="text-xs xs:text-sm sm:text-base md:text-lg text-zinc-100 leading-relaxed max-w-2xl will-change-transform"
        >
          We build modern websites and software that help businesses grow.
        </motion.p>
      </div>

      {/* 3. CTA Buttons */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ ...transitionSpring, delay: 0.35 }}
        className="mt-6 xs:mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-3 justify-center lg:justify-start transform-gpu"
      >
       <a
        href="https://client.zaynex.tech/start-project"
        className="w-full sm:w-auto group"
      >
        <Button
          size="lg"
          className="w-full sm:w-auto h-11 sm:h-12 rounded-full bg-cyan-500 text-black font-bold px-6 sm:px-8 text-sm sm:text-base transition-all duration-200 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(6,182,212,0.25)]"
        >
          Start Your Project

          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </a>

        <Link to="/portfolio" className="w-full sm:w-auto group">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-11 sm:h-12 rounded-full border-cyan-500 bg-zinc-900/20 px-8 text-zinc-300 transition-all duration-300 hover:bg-zinc-800/50 hover:border-cyan-500 hover:text-white"
          >
            View Our Work
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
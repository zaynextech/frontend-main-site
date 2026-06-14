"use client";

import { motion, useMotionTemplate, MotionValue } from "framer-motion";

type TechStackRightProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export default function TechStackRight({ mouseX, mouseY }: TechStackRightProps) {
  return (
    /* RESPONSIVE VIEWPORT BOUNDS: Explicitly isolates perspective containers to large screens */
    <div className="lg:col-span-5 flex justify-center w-full lg:perspective-1000 order-1 lg:order-none contain-layout">
      <motion.div
        /* PERFORMANCE LAYER: 
           - Mobile devices render this card naturally flat to preserve system battery cycles.
           - Desktops automatically activate the 3D hardware matrix warp smoothly.
        */
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          rotateY: typeof window !== "undefined" && window.innerWidth >= 1024 ? -5 : 0
        }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ type: "spring", stiffness: 90, damping: 22 }}
        className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl bg-neutral-950/40 p-3 sm:p-4 shadow-2xl backdrop-blur-xl transform-gpu overflow-hidden group/console flex flex-col gap-3"
        style={{ willChange: "transform, opacity" }}
      >
        {/* ================= PREMIUM NEON HUD GLOW FRAME ================= */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none select-none text-cyan-500/40 transform-gpu" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none"
        >
          <defs>
            <filter id="console-neon-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect 
            x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="16" ry="16" 
            stroke="currentColor" strokeWidth="2" strokeDasharray="950 150 2000" 
            filter="url(#console-neon-glow)" 
            className="text-cyan-500/40 group-hover/console:text-cyan-400/60 transition-colors duration-300" 
            vectorEffect="non-scaling-stroke" 
          />
        </svg>

        <div className="absolute top-0 right-10 -translate-y-1/2 flex gap-1 items-center px-1.5 py-0.5 bg-neutral-950 border border-cyan-500/30 rounded-full scale-75 z-20 pointer-events-none">
          <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-[7px] font-mono tracking-widest text-cyan-400/80 uppercase">SYS.UI</span>
        </div>

        {/* Console Header Bar */}
        <div className="flex items-center justify-between w-full border-b border-white/5 pb-2.5 relative z-10 select-none">
          {/* Real Mac-Style Window Controls Engine */}
          <div className="flex gap-2 group/controls cursor-pointer">
            {/* Close Button (Red) */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center relative transition-colors duration-200">
              <svg className="w-1 h-1 text-[#4C0002] opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            {/* Minimize Button (Yellow) */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center relative transition-colors duration-200">
              <svg className="w-1.5 h-0.5 text-[#5C3E00] opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            {/* Maximize Button (Green) */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAA2C] flex items-center justify-center relative transition-colors duration-200">
              <svg className="w-1 h-1 text-[#004D03] opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.5H9M4.5 1v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <span className="text-[9px] font-mono tracking-widest text-cyan-500/50">// ENGINE.STREAM</span>
        </div>

        {/* ================= VIDEO WINDOW CANVAS CONTAINER ================= */}
        <div className="flex-1 w-full relative z-10 rounded-xl border border-white/5 bg-neutral-900/40 overflow-hidden select-none pointer-events-none transform-gpu contain-strict">
          <video
            autoPlay
            loop
            muted
            playsInline
            /* SPEED TUNING: preload="none" ensures your critical styles and font layers mount 
               completely unblocked without racing the video download asset thread. */
            preload="none"
            className="w-full h-full object-cover opacity-100 group-hover/console:opacity-100 transition-opacity duration-500 transform-gpu"
            style={{ willChange: "opacity" }}
          >
            <source src="/videos/techvedio.webm" type="video/webm" />
            <source src="/videos/techvedio.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle inside gradient matrix vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Mouse Position Glowing Dynamic Highlight Tracking Mask */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/console:opacity-100 transform-gpu"
          style={{
            willChange: "background",
            background: useMotionTemplate`
              radial-gradient(
                260px circle at ${mouseX}px ${mouseY}px,
                rgba(6, 182, 212, 0.06),
                transparent 80%
              )
            `,
          }}
        />
      </motion.div>
    </div>
  );
}
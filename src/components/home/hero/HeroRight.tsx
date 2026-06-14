"use client";

import { motion } from "framer-motion";
import ThoughtBubble from "./ThoughtBubble";

export default function HeroRight() {
  return (
    <div className="relative w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-[45%] flex items-center justify-center mt-28 lg:mt-0 order-2 lg:order-none contain-layout">
      <motion.div 
        className="relative w-full flex flex-col items-center justify-center transform-gpu"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }} /* Forces immediate GPU layer rendering */
      >
        {/* Back Ambient Glow */}
        <div className="absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/5 rounded-full blur-[30px] pointer-events-none z-0 transform-gpu" />

        {/* --- INTEGRATED THINKING BUBBLE ENGINE --- */}
        <div className="absolute bottom-[75%] left-[-50px] xs:left-[-35px] sm:bottom-[80%] sm:left-[-15px] lg:bottom-auto lg:top-[140px] xl:top-[145px] lg:left-[-40px] xl:left-[-10px] pointer-events-none z-30">
          <ThoughtBubble />
        </div>

        {/* Character Presentation - Max Speed Optimization */}
        <img
          src="/images/thinking.png"
          alt="Thinking Character Concept"
          decoding="async" /* Prevents image from blocking main thread painting execution */
          className="w-full h-auto max-h-[240px] xs:max-h-[240px] sm:max-h-[280px] lg:max-h-[460px] object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.6)] z-10 filter brightness-110 contrast-100 will-change-transform"
        />
        
        {/* --- END THINKING BUBBLE ENGINE --- */}
      </motion.div>
    </div>
  );
}
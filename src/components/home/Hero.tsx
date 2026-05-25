"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import InteractiveGrid from "../ui/interactive-grid";

// Memoized outside component to prevent re-allocation on re-renders

const Hero = () => {
  return (
    <section 
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-10 sm:px-6 lg:px-8 pt-24 pb-12 text-center bg-[#030303] antialiased"
      aria-label="Introduction Hero Section"
    >
      {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-60 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/30" />
 
      </div>

     

      {/* Main Heading with Text Masking */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-5xl text-2xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter"
      >
        Building Modern Websites <br className="hidden sm:block" />
        <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
          for Growing Businesses
        </span>
      </motion.h1>

      {/* Paragraph Element */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="handwritten z-10 mt-6 sm:mt-8 max-w-2xl text-lg sm:text-2xl md:text-3xl text-zinc-300 antialiased leading-relaxed"
      >
        Zaynex builds modern websites and web apps for businesses looking to{"  "} 
      <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)] whitespace-nowrap">
        grow online.
      </span>
      </motion.p>

      {/* Interactive CTAs with Shimmer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="z-10 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <Link to="/quote" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="group relative h-12 w-30 sm:w-auto overflow-hidden rounded-full border-2 border-cyan-500 bg-transparent px-10 text-base font-bold text-white transition-all hover:bg-cyan-500/10 active:scale-[0.98]"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />

            <span className="relative flex items-center justify-center">
              Start Your Website
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1 shrink-0"
              />
            </span>
          </Button>
        </Link>

        <Link to="/portfolio" className="w-full sm:w-auto">
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 w-30 sm:w-auto rounded-full px-10 text-base border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
          >
            <Sparkles size={18} className="mr-2 text-cyan-400 shrink-0" />
            View Solutions
          </Button>
        </Link>
      </motion.div>

      {/* Technical Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 mt-20 sm:mt-24 w-full"
      >
        {/* Title */}
     

        {/* Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto" aria-label="Technology Stack List">
          
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
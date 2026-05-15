"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import InteractiveGrid from "../ui/interactive-grid";

// Memoized outside component to prevent re-allocation on re-renders
const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Docker"];

const Hero = () => {
  return (
    <section 
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center bg-[#030303] antialiased"
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
          className="h-full w-full object-cover scale-105 opacity-40 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/70" />

        <InteractiveGrid />

        {/* Primary Glow */}
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

        {/* Accent Glow */}
        <div className="absolute right-[10%] bottom-[10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      {/* Premium Glass Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-6 md:mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 sm:px-5 py-2 backdrop-blur-2xl"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        {/* Icon */}
        <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
          <Terminal size={14} className="text-cyan-300" aria-hidden="true" />
        </div>

        {/* Text */}
        <span className="relative text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-300 truncate max-w-[240px] sm:max-w-none">
          Building Premium Digital Experiences Worldwide
        </span>

        {/* Live Dot */}
        <div className="relative flex items-center gap-2 shrink-0">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        </div>
      </motion.div>

      {/* Main Heading with Text Masking */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter"
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
        className="handwritten z-10 mt-6 sm:mt-8 max-w-2xl text-xl sm:text-2xl md:text-3xl text-zinc-300 antialiased leading-relaxed"
      >
        Zaynex designs and develops modern websites, SaaS platforms, 
        and business systems for companies looking to{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)] whitespace-nowrap">
          grow online.
        </span>
      </motion.p>

      {/* Interactive CTAs with Shimmer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="z-10 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <Link to="/quote" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="group relative h-14 w-full sm:w-auto overflow-hidden rounded-full border-2 border-cyan-500 bg-transparent px-10 text-base font-bold text-white transition-all hover:bg-cyan-500/10 active:scale-[0.98]"
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
            className="h-14 w-full sm:w-auto rounded-full px-10 text-base border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
          >
            <Sparkles size={18} className="mr-2 text-accent shrink-0" />
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
        <span className="block mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Powered By Modern Technologies
        </span>

        {/* Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto" aria-label="Technology Stack List">
          {TECH_STACK.map((tech) => (
            <div
              key={tech}
              className="group rounded-full border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 select-none"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-300 group-hover:text-white">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
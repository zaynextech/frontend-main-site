"use client";

import React, { useState, useEffect } from "react";
import { BatteryFull, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type PhoneShowcaseProps = {
  className?: string;
};

const PhoneShowcase = ({ className }: PhoneShowcaseProps) => {
  const [time, setTime] = useState("09:41");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-12 md:py-16 min-h-screen w-full relative overflow-hidden flex items-center ${className || ""}`}>
      
      {/* ================= BACKGROUND CINEMATIC CANVAS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none transform-gpu contain-strict">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hourglass-poster.webp"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.6] contrast-[0.9] opacity-100  duration-500 "
        >
          <source
            src="/videos/hourglass.webm"
            type="video/webm"
          />
          <source
            src="/videos/hourglass.mp4"
            type="video/mp4"
          />
        </video>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Cyan Focus Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#030303]" />

        {/* Left Readability Overlay */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#030303] via-[#030303]/10 to-transparent" />
      </div>
      
      </div>
      {/* ============================================================ */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* COMPRESSED PHONE PADDING CONTAINER WITH HUD INTERFACE FRAMEWORK */}
        <div className="group relative rounded-[2rem]  p-5 xs:p-6 sm:p-10 lg:p-14  overflow-hidden">
          
          {/* ================= AI HUD GLOW STROKE ENGINE ================= */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none text-cyan-500/40 transform-gpu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <filter id="showcase-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Continuous path with a clean breakout gap computed for the top right corner */}
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="32"
              ry="32"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="1600 240 3000" 
              filter="url(#showcase-neon-glow)"
              className="text-cyan-500/60 sm:text-cyan-400/70 transition-all duration-300"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

        
          {/* ============================================================ */}

          

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* 1. Left Text Column */}
            <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left gap-4 p-2 sm:p-0">
              
              {/* Premium Typography Structure matching the layout principles of HeroLeft */}
             <h2 className="w-full text-xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[0.95] flex flex-col gap-1">
                  <span className="block text-zinc-50">
                    Beautiful on every device.
                  </span>

                  <span className="block bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                    Powerful on every screen.
                  </span>
                </h2>

              <p className="max-w-xl text-sm sm:text-sm lg:text-base leading-relaxed text-zinc-100 mt-2">
                We build fast, responsive websites that look stunning and perform flawlessly across mobile, tablet, and desktop.
              </p>
              <Link to="/quote" className="w-full sm:w-auto group">
          <Button
            size="lg"
            className="w-full sm:w-auto h-11 sm:h-12 rounded-full bg-cyan-500 text-black font-bold px-6 sm:px-8 text-sm sm:text-base transition-all duration-200 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(6,182,212,0.25)]"
          >
            Get a Free Quote
            <ArrowRight
              size={16}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link>
            </div>

            {/* 2. Right Phone Column */}
            <div className="md:col-span-5 flex justify-center md:justify-end w-full">
              <div className="relative group/phone select-none transform scale-[0.8] xs:scale-[0.85] sm:scale-90 md:scale-[0.85] lg:scale-100 origin-center md:origin-right transition-transform duration-500">
                
                {/* 3D Depth Frame Blur */}
                <div className="absolute -inset-2 bg-black rounded-[46px] blur opacity-30 transition-all duration-700 group-hover/phone:opacity-100 group-hover/phone:blur-xl" />

                {/* iPhone Physical Mockup Frame */}
                <div className="relative w-[240px] h-[490px] sm:w-[260px] sm:h-[530px] bg-black border-[10px] border-[#00818F] rounded-[36px] shadow-2xl overflow-hidden antialiased z-10">
                  
                  {/* Dynamic Island Cutout */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-5 bg-black rounded-b-xl z-40 flex items-center justify-center gap-2">
                    <div className="relative flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner" />
                      <div className="absolute h-0.5 w-0.5 rounded-full bg-cyan-500/50 blur-[0.5px]" />
                    </div>
                    <div className="h-0.5 w-8 rounded-full bg-zinc-800 shadow-inner border border-zinc-700/50" />
                  </div>

                  {/* Upper Status Bar Layer */}
                  <div className="absolute top-0 left-0 right-0 h-8 z-30 flex items-center justify-between px-4 pointer-events-none pt-1.5">
                    <span className="text-[10px] font-semibold tracking-tight text-white/90 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      {time}
                    </span>
                    <div className="flex items-center gap-1 opacity-80 text-white scale-75 origin-right">
                      <Wifi className="w-3.5 h-3.5" />
                      <BatteryFull className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Screen Display Area */}
                  <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#030303] transform-gpu">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover object-top antialiased transform-gpu scale-[1.01]"
                      style={{ willChange: "transform" }}
                    >
                      <source src="/videos/phone-preview.webm" type="video/webm" />
                      <source src="/videos/phone-preview.mp4" type="video/mp4" />
                    </video>
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none z-10" />
                    <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-gradient-to-r from-white/[0.04] to-transparent pointer-events-none z-10 skew-x-12 transform origin-top-left" />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneShowcase;
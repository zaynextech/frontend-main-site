"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { BatteryFull, Wifi } from "lucide-react";

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
    <section className={`py-12 md:py-16 min-h-screen w-full${className || ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-40 blur-[5px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/50" />

        {/* Decorative ambient radial glow */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>
        
        {/* Balanced container layout with constrained vertical padding */}
        <div className="group relative rounded-[2rem] border border-white/5 bg-[#080808]/50 p-6 sm:p-10 lg:p-14 backdrop-blur-3xl shadow-2xl overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
           {/* 1. Left Text Column */}
<div className="md:col-span-7 flex flex-col items-start gap-4">

  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[0.95] tracking-tighter text-white/90">
    Zaynex grows daily.{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
      Modern by design.
    </span>
  </h2>

  <p className="max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-zinc-200 font-light">
    Clean digital solutions for modern businesses.
  </p>

</div>

            {/* Right Phone Column: Limited to 5 columns with a strict container scale max */}
            <div className="md:col-span-5 flex justify-center md:justify-end w-full">
              <div className="relative group/phone select-none transform scale-[0.8] xs:scale-[0.85] sm:scale-90 md:scale-[0.85] lg:scale-100 origin-center md:origin-right transition-transform duration-500">
                
                {/* 3D Depth Frame */}
                <div className="absolute -inset-2 bg-black rounded-[46px] blur opacity-30 transition-all duration-700 group-hover/phone:opacity-100 group-hover/phone:blur-xl" />

                {/* iPhone Physical Mockup Frame: Strictly capped heights to stop vertical stretching */}
                <div className="relative w-[240px] h-[490px] sm:w-[260px] sm:h-[530px] bg-black border-[10px] border-[#00818F] rounded-[36px] shadow-2xl overflow-hidden antialiased">
                  
                  {/* Dynamic Island Cutout */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-5 bg-black rounded-b-xl z-40 flex items-center justify-center gap-2">
                    {/* Selfie Camera */}
                    <div className="relative flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner" />
                      <div className="absolute h-0.5 w-0.5 rounded-full bg-cyan-500/50 blur-[0.5px]" />
                    </div>
                    {/* Speaker */}
                    <div className="h-0.5 w-8 rounded-full bg-zinc-800 shadow-inner border border-zinc-700/50" />
                  </div>

                  {/* UPPER STATUS BAR LAYER (z-30) */}
                  <div className="absolute top-0 left-0 right-0 h-8 z-30 flex items-center justify-between px-4 pointer-events-none pt-1.5">
                    <span className="text-[10px] font-semibold tracking-tight text-white/90 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      {time}
                    </span>
                    
                    <div className="flex items-center gap-1 opacity-80 text-white scale-75 origin-right">
                      <Wifi className="w-3.5 h-3.5" />
                      <BatteryFull className="w-3.5 h-3.5" />
                    </div>
                  </div>


                  {/* SCREEN AREA */}
                  <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#030303]">
                    {/* Mockup Display Background Viewport */}
                    <img 
                      src="/showcase/phone.jpg" 
                      alt="Zaynex Mobile Interface" 
                      className="w-full h-full object-cover object-top antialiased"
                    />
                    
                    {/* PREMIUM GLARE & MATTE GRADIENT IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80 pointer-events-none z-10" />
                    
                    {/* Subtle Side Reflection Glare */}
                    <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none z-10 skew-x-12 transform origin-top-left" />
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
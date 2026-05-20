import React from 'react';
import PageShowcase from './PageShowcase';
import InteractiveGrid from '@/components/ui/interactive-grid';

export default function Template1() {
  return (
    <div className="min-h-screen w-full bg-[#030303] text-white flex items-center justify-center p-6 relative font-sans overflow-hidden">

      {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
              style={{
                backgroundImage: "url('/images/bg.jpg')",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#030303]/80 pointer-events-none" />

            <InteractiveGrid/>
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="w-full max-w-[1440px] grid grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Typography Headline */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center pl-4 lg:pl-12 select-none z-20">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white/90 leading-tight drop-shadow-sm">
            Professional <br />
            <span className="bg-gradient-to-b from-white via-white/90 to-white/20 bg-clip-text text-transparent">
              Templates
            </span>
          </h1>
          <p className="text-neutral-400 mt-4 text-sm max-w-xs leading-relaxed">
            Production-ready layouts fully optimized for high-conversion performance applications.
          </p>
        </div>

        {/* Center Overlay: The Animated Looping Arrow Line */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-30">
          <LoopingArrowSVG />
        </div>

         {/* Right Column: Mini Mockup Viewport Container */}
            <div className="col-span-12 md:col-span-8 flex justify-end items-center relative z-10">

              {/* Showcase Wrapper */}
              <div className="w-full transform scale-75 lg:scale-80 origin-right transition-all duration-700 ease-out hover:-translate-y-1">
                
                {/* Blurred Ambient Glow Underlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-amber-300/10 blur-3xl opacity-70 rounded-[32px] pointer-events-none transition-all duration-700 group-hover:opacity-100" />
                
                {/* Ultra-Glassy Container */}
                <div className="relative rounded-[32px] overflow-hidden backdrop-blur-md bg-white/[0.03] p-5 border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),_0_0_120px_rgba(6,182,212,0.15)] transition-all duration-700 ">

                  <PageShowcase />

    </div>
  </div>
</div>
                        

      </div>
    </div>
  );
}

/* ==========================================
   Perfected SVG Loop Arrow Component
   ========================================== */
function LoopingArrowSVG() {
  return (
    <svg 
      className="w-full h-full absolute top-0 left-0" 
      viewBox="0 0 1440 900" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Smooth multi-stop gradient tracing along the reference path flow */}
        <linearGradient id="arrowGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.8)" />    {/* Starts blue/cyan out of the template splash */}
          <stop offset="40%" stopColor="#fff" />   {/* Loops through a rich violet */}
          <stop offset="75%" stopColor="rgba(34,211,238,0.8)" />   {/* Transitions to hot pink */}
          <stop offset="100%" stopColor="rgba(34,211,238,0.8)" />  {/* Finishes amber/gold at the tip */}
        </linearGradient>
      </defs>

      {/* The Perfected Loop Path:
        - Starts inside the page thumbnail edge (X: 790, Y: 460)
        - Swings out and builds the vertical loop drop in the center (X: 630-730 region)
        - Curvaceously shoots out towards the left text block
      */}
      <path
  d="M 790,460 
     C 740,470 650,420 630,480 
     C 600,560 740,640 700,500 
     C 670,400 560,570 280,590"
  stroke="url(#arrowGradient)"
  strokeWidth="6"
  strokeLinecap="round"
  strokeDasharray="14 10"
/>

{/* Arrowhead perfectly aligned */}
<polygon
  points="280,590 312,575 304,607"
  fill="#fff"
/>
    </svg>
  );
}
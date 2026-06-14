"use client";

import { useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

import TechStackLeft from "./TechStackLeft";
import TechStackRight from "./TechStackRight";

const TechStack = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    // MOBILE BUFFER OPTIMIZATION: Skips tracking math calculations entirely on smaller viewports 
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-[2rem] bg-[#030303] px-3 py-8 xs:px-4 sm:px-6 sm:py-16 md:py-24 lg:px-8 group/section w-full"
    >
      {/* ================= BACKGROUND HIGH-SPEED VIDEO ENGINE ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none transform-gpu contain-strict">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover scale-105 opacity-100 filter brightness-[0.35] contrast-[1.15] blur-[3px] transform-gpu"
          style={{ willChange: "transform" }}
        >
          <source src="/videos/hourglass.webm" type="video/webm" />
          <source src="/videos/hourglass.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Layer Overlays */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Cyan Focus Glow Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />

        {/* Bottom Core Vignette Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#030303]/30" />

        {/* Left Readability Contrast Shield */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#030303] via-[#030303]/10 to-transparent" />
      </div>
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Header Typography Block */}
        <div className="mb-10 sm:mb-16 space-y-4 text-center md:text-left overflow-visible">
  
          <span className="text-cyan-400 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
            Technology
          </span>

          <h2 className="max-w-4xl text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05]">
            Built with{" "}
            <span className=" bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>

          <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-100">
            The tools behind fast, secure, and scalable digital solutions.
          </p>

        </div>

        {/* Dynamic Interactive Splits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center w-full">
          {/* Render Exploded Floating Left Column Assembly */}
          <TechStackLeft />

          {/* Render Premium Tab Console Right Column Assembly */}
          <TechStackRight mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
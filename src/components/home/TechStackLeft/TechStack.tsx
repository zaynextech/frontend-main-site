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
        {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dn39ukq3q/video/upload/so_1/hourglass_w7z9ch.jpg"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.6] contrast-[0.9] opacity-100"
          >
            <source
              src="https://res.cloudinary.com/dn39ukq3q/video/upload/f_auto,q_auto/hourglass_w7z9ch"
              type="video/mp4"
            />
          </video>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-black/30" />



       
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
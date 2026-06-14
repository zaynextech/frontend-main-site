"use client";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#030303] flex items-center select-none selection:bg-cyan-500/30"
      aria-label="Hero Section"
    >
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
        <div className="absolute inset-0 bg-black/10" />

        {/* Cyan Focus Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#030303]" />

        {/* Left Readability Overlay */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#030303] via-[#030303]/50 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-7xl
          flex-col lg:flex-row
          items-center justify-center lg:justify-between
          gap-12 lg:gap-10
          px-5 sm:px-8 lg:px-10
          pt-24 pb-16
          lg:py-0
        "
      >
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
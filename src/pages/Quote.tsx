"use client";

import QuoteForm from "@/components/Quote/QuoteForm";
import SEO from "@/components/SEO";
import InteractiveGrid from "@/components/ui/interactive-grid";

const Quote = () => {
  return (
    <div
      className="relative min-h-screen bg-[#FAFAFA] text-[#030303] overflow-hidden select-none sm:select-auto antialiased w-full font-sans pb-16"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        e.currentTarget.style.setProperty(
          "--x",
          `${e.clientX - rect.left}px`
        );

        e.currentTarget.style.setProperty(
          "--y",
          `${e.clientY - rect.top}px`
        );
      }}
    >
      <SEO
        title="Request a Project Quote | Zaynex"
        description="Get a custom quote for your website, web application, LMS, or business system."
        path="/quote"
      />
        
      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      {/* Perfectly aligns with the background branding across your entire ecosystem */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-30 mix-blend-multiply">
        <img 
          src="/watermark.jpg" 
          alt="" 
          role="presentation"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

     
      {/* Ambient Zaynex Cyber Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/[0.04] blur-[130px] rounded-full pointer-events-none select-none z-0" />

      {/* ─── Modern Radical Mouse Spotlight Tracker overlay ─── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-100 mix-blend-multiply"
        style={{
          background: `radial-gradient(450px circle at var(--x, 0px) var(--y, 0px), rgba(34, 211, 238, 0.04), transparent 80%)`
        }}
      />

      {/* FORM ELEMENT CONTAINER (ABOVE BACKGROUND & CLICKABLE) */}
      <div className="relative z-10 w-full h-full pt-16 sm:pt-24 px-4 max-w-4xl mx-auto mt-10">
        {/* Optional Editorial Micro Header */}
        <div className="mb-8 text-center select-none">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
            SYSTEM INTAKE NODE
          </span>
          <h1 className="mt-1 text-3xl sm:text-5xl font-black tracking-tighter uppercase text-[#030303]">
            Request Deployment
          </h1>
        </div>

        {/* The Quote form injects over the clean paper surface flawlessly */}
        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;
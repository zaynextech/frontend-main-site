"use client";

import React from 'react';
import PageShowcase from './PageShowcase';
import InteractiveGrid from '@/components/ui/interactive-grid';

export default function Template1() {
  return (
    /* ⚡ RESTRICTED RENDER MAP: HIDDEN ON SMALL MOBILE RATIOS */
    <div className="hidden md:flex min-h-[85vh] w-full bg-[#FAFAFA] text-[#030303] items-center justify-center p-6 lg:p-10 relative font-sans overflow-hidden select-none">

      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {/* Ambient Cyber Brand Accent Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-400/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-400/[0.02] blur-[120px] pointer-events-none" />

      {/* ─── MAIN INDUSTRIAL GRID LAYOUT (COMPACT CONSTRAINED MAX-WIDTH) ─── */}
      <div className="w-full max-w-[1280px] grid grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">

        {/* Left Content Column: Sharp Editorial Typography Headline */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center pl-4 lg:pl-6 text-left relative z-20">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-cyan-600 block mb-1">
            // UI INTERFACE PRESETS
          </span>

          <h1 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Professional <br />
            <span className="text-zinc-500">Templates</span>
          </h1>

          <div className="relative mt-3 max-w-[254px]">
            <div className="relative mt-4 max-w-[254px]">
            {/* ─── BRUTALIST EDITORIAL PORTFOLIO BUTTON ─── */}
            <button className="group inline-flex items-center justify-center gap-2 rounded-none border-2 border-[#030303] bg-[#030303] px-5 h-10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#030303] transition-colors duration-150 w-full">
              <span>View Full Portfolio</span>
            </button>

            {/* ─── 🎯 CONTEXTUAL ARROW CONNECTOR CONTAINER ─── */}
            {/* Positioned directly on the outer edge, pointing straight at the button */}
            <div className="absolute left-[104%] top-1/2 -translate-y-1/2 w-16 lg:w-20 pointer-events-none hidden md:block select-none mix-blend-multiply opacity-90">
              <img
                src="/arrow.png"
                alt="Directional Matrix Link"
                className="w-full h-auto object-contain animate-pulse duration-1000 rotate-180"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          
          </div>
        </div>

        {/* Right Preview Column: Widescreen Viewport Containment Box */}
        <div className="col-span-12 md:col-span-8 flex justify-end items-center relative z-10">

          {/* 16:9 Showcase Wrapper Framework */}
          <div className="group w-full max-w-[820px] transform scale-95 lg:scale-100 origin-right transition-all duration-300 ease-out">
            
            {/* Asymmetric Brutalist Grid Frame */}
            <div className="relative rounded-none border-2 border-[#030303] bg-[#F5F5F3] p-3 transition-all duration-300 shadow-[4px_4px_0px_rgba(3,3,3,1)] group-hover:shadow-[7px_7px_0px_rgba(3,3,3,1)] group-hover:bg-white">

              {/* Floating Layout Corner Stamp Descriptor */}
              <span className="absolute top-1.5 left-1.5 z-20 font-mono text-[8px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)]">
                SYS_PREVIEW_01
              </span>

              {/* 🎬 EXACT CINEMATIC 16:9 MOCKUP CANVAS VIEWPORT */}
              <div className="w-full aspect-video relative z-10 bg-white border border-zinc-200 overflow-hidden">
                <PageShowcase />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
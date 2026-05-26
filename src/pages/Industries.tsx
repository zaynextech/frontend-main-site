"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Imported external data matrix
import { industries } from "@/components/Industries/Industries";
import ServicesPreview from "@/components/home/ServicesPreview";

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredIndustries = activeTab === "all" 
    ? industries 
    : industries.filter((item) => item.slug === activeTab);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#030303] overflow-hidden relative selection:bg-cyan-500/20 selection:text-[#030303] antialiased font-sans pt-24 pb-32">
      
      {/* ─── 🖼️ BACKDROP WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-15 mix-blend-multiply">
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

     

      {/* Ambient Zaynex Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-cyan-400/[0.03] blur-[140px] pointer-events-none select-none" />

      {/* ─── HERO SECTION: MAGAZINE HEADER ARCHITECTURE ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div className="w-full border-b-4 border-[#030303] pb-8 flex flex-col md:flex-row justify-between items-end gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 select-none">
              // CORE SECTOR OVERLAYS // INDEX 2026
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-4xl font-black tracking-tighter uppercase leading-[0.85]">
              Domain <br />
              <span className="text-zinc-400">Verticals</span>
            </h1>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="font-mono text-[9px] font-bold text-zinc-950 uppercase tracking-widest leading-normal">
              Architecture protocol deployment node. Mapping custom operational engineering parameters onto global enterprise systems.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FILTER CONTROL TERMINAL ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 select-none">
        <div className="flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-none px-3 py-1.5 text-[9px] font-black uppercase tracking-widest border transition-all duration-150 ${
              activeTab === "all"
                ? "bg-[#030303] text-white border-[#030303]"
                : "bg-white text-zinc-500 border-zinc-200 hover:border-[#030303] hover:text-[#030303]"
            }`}
          >
            // Master Index
          </button>
          
          {industries.map((item) => (
            <button
              key={item.slug}
              onClick={() => setActiveTab(item.slug)}
              className={`rounded-none px-3 py-1.5 text-[9px] font-black uppercase tracking-widest border transition-all duration-150 ${
                activeTab === item.slug
                  ? "bg-[#030303] text-white border-[#030303]"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-[#030303] hover:text-[#030303]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* ─── ASYMMETRIC CHOPPED EDITORIAL MASONRY GRID ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8 lg:gap-12 w-full items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((item, index) => {
              const Icon = item.icon;

              // ─── THE MAGAZINE ASYMMETRIC RHYTHM GENERATOR ───
              // Alternates card width allocations dynamically for a high-end look
              let colSpan = "md:col-span-6"; // Default splits
              let layoutVariant = "normal";

              if (activeTab === "all") {
                const position = index % 6;
                if (position === 0) {
                  colSpan = "md:col-span-8 lg:col-span-7"; // Featured broad block
                  layoutVariant = "featured";
                } else if (position === 1) {
                  colSpan = "md:col-span-4 lg:col-span-5 md:mt-16"; // Secondary companion card offset down
                } else if (position === 2) {
                  colSpan = "md:col-span-5 lg:col-span-4"; // Tight stack anchor
                } else if (position === 3) {
                  colSpan = "md:col-span-7 lg:col-span-8"; // Long stretch anchor
                  layoutVariant = "wide-banner";
                } else if (position === 4) {
                  colSpan = "md:col-span-6 lg:col-span-5"; // Medium block left
                } else if (position === 5) {
                  colSpan = "md:col-span-6 lg:col-span-7 md:-mt-8"; // Pulled upward to overlap spacing gaps
                }
              } else {
                // If filtered down to a single card, make it look center-stage and prominent
                colSpan = "md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3";
                layoutVariant = "featured";
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  key={item.slug}
                  className={`group rounded-none border-2 border-[#030303] bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-[6px_6px_0px_rgba(3,3,3,1)] flex flex-col justify-between text-left relative ${colSpan}`}
                >
                  {/* Outer Frame Matrix ID Stamp */}
                  <div className="absolute top-3 right-4 font-mono text-[9px] font-black tracking-widest text-zinc-300 select-none group-hover:text-cyan-600 transition-colors">
                    SYS_NODE_M{(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div>
                    {/* Top Header Node */}
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-6">
                      <div className="w-10 h-10 rounded-none border border-[#030303] bg-white flex items-center justify-center shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
                        {Icon && <Icon className="text-[#030303] stroke-[1.75]" size={18} />}
                      </div>
                      <span className="font-mono text-[9px] font-black text-zinc-400 tracking-widest">
                        // CAPABILITY_CORE
                      </span>
                    </div>

                    {/* Dynamic Headline Scale Tuning */}
                    <h3 className={`font-black uppercase tracking-tight text-[#030303] leading-[0.95] ${
                      layoutVariant === "featured" ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.15em] text-cyan-600 select-none block">
                      // {item.shortDescription}
                    </p>

                    <p className={`mt-5 text-zinc-700 font-normal leading-relaxed text-xs sm:text-sm text-balance ${
                      layoutVariant === "featured" ? "max-w-xl text-base" : ""
                    }`}>
                      {item.description}
                    </p>

                    {/* Specialized Inner Sub-Grid Block Layout */}
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-zinc-200 space-y-3">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        Deployment Infrastructure Sub-Engine
                      </h4>
                      <ul className={`grid gap-x-6 gap-y-2 w-full ${
                        layoutVariant === "featured" || layoutVariant === "wide-banner" 
                          ? "grid-cols-2 sm:grid-cols-3" 
                          : "grid-cols-2"
                      }`}>
                        {item.solutions.map((sol) => (
                          <li
                            key={sol}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-zinc-800 group/sol"
                          >
                            <span className="w-1.5 h-1.5 bg-[#030303] shrink-0 group-hover/sol:bg-cyan-500 group-hover/sol:scale-125 transition-all duration-150" />
                            <span className="truncate group-hover/sol:text-black">{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Footer Redirection Trigger */}
                  <div className="pt-6 mt-8 border-t-2 border-[#030303] flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-zinc-400 hidden sm:inline">
                      STATUS // ACTIVE_PROPOSAL_NODE
                    </span>
                    <Link
                      to={`/quote?industry=${item.slug}`}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-none border-2 border-[#030303] bg-[#030303] px-5 h-10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#030303] transition-colors duration-150 w-full sm:w-auto"
                    >
                      <span>Initialize Solution</span>
                      <ArrowRight size={12} className="stroke-[2.5] transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}
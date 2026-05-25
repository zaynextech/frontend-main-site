"use client";

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "@/components/services/servicesData";
import InteractiveGrid from "@/components/ui/interactive-grid";

const PALETTE = {
  mainBg: "bg-[#FAFAFA]",             
  textMain: "text-[#030303]",          
  textBody: "text-zinc-700",           
  cardBorder: "border-[#030303]",      
};

export default function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className={`min-h-screen ${PALETTE.mainBg} ${PALETTE.textMain} flex flex-col items-center justify-center font-sans px-4 text-center`}>
        <p className="text-sm font-black uppercase tracking-wider">Service node not found.</p>
        <Link to="/services" className="mt-4 text-xs font-black uppercase tracking-widest border-2 border-[#030303] bg-[#030303] text-white px-5 py-2 hover:bg-white hover:text-[#030303] transition-colors">
          Return to Solutions
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className={`relative min-h-screen ${PALETTE.mainBg} ${PALETTE.textMain} pt-24 pb-24 selection:bg-cyan-500/20 selection:text-[#030303] antialiased overflow-x-hidden w-full font-sans`}>
      
      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-10 mix-blend-multiply">
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

      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
        <InteractiveGrid />
      </div>

      {/* Ambient Zaynex Cyber Accent */}
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ─── 🧭 UPDATED BACK BUTTON (POINTS TO SERVICES INTERFACE) ─── */}
        <Link
          to="/services"
          className="mb-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#030303] group"
        >
          <ArrowLeft size={14} className="stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
          <span>Back to solutions</span>
        </Link>

        {/* 2-Column Structural Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* LEFT COLUMN: ARCHITECTURE INFO BLOCK */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Brutalist Square Icon Box */}
              <div className="w-14 h-14 rounded-none border-2 border-[#030303] bg-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
                {Icon && <Icon className="text-[#030303] stroke-[2]" size={28} />}
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 block mb-1">
                // SOLUTION SPECIFICATION NODE
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                {service.title}
              </h1>

              <p className={`mt-5 text-sm sm:text-base font-normal leading-relaxed ${PALETTE.textBody} text-balance`}>
                {service.longDescription}
              </p>
            </div>

            {/* Core Features List Stack */}
            <div className="border-t-2 border-[#030303] pt-6 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">
                // System Capabilities
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 w-full">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#030303] group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0 transition-transform duration-150 group-hover/item:scale-125" />
                    <span className="text-zinc-800 transition-colors duration-150 group-hover/item:text-black">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: INDUSTRIAL IMAGE CONTAINER */}
          <div className="lg:col-span-5 relative">
            <div className={`relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square border-2 ${PALETTE.cardBorder} bg-[#F5F5F3] overflow-hidden p-4 sm:p-6 shadow-none hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-300 flex items-center justify-center`}>
              
              <span className="absolute top-2 left-2 z-20 font-mono text-[9px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)] select-none">
                IMG_NODE_PRVW
              </span>

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
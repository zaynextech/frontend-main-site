"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Layers, 
  LayoutDashboard, 
  Globe, 
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import InteractiveGrid from "../ui/interactive-grid";

type ThemeKey = "primary" | "accent";

interface ThemeStyles {
  dot: string;
  badge: string;
}

const themes: Record<ThemeKey, ThemeStyles> = {
  primary: {
    dot: "bg-zinc-400",
    badge: "text-zinc-600 border-zinc-300",
  },
  accent: {
    dot: "bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]",
    badge: "text-cyan-600 border-cyan-200 bg-cyan-50/50",
  }
};

interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
  featured: boolean;
  theme: ThemeKey;
}

const services: ServiceItem[] = [
  {
    title: "Business Website Development",
    desc: "Modern and responsive websites built for businesses and brands.",
    icon: Globe,
    tags: ["Next.js", "React", "Tailwind"],
    featured: true,
    theme: "accent",
  },
  {
    title: "Business Dashboards",
    desc: "Management systems and dashboards for tracking business operations.",
    icon: LayoutDashboard,
    tags: ["React", "Analytics", "Database"],
    featured: false,
    theme: "primary",
  },
  {
    title: "Website Maintenance",
    desc: "Website updates, performance improvements, and ongoing support.",
    icon: ShieldCheck,
    tags: ["Support", "Optimization", "Security"],
    featured: false,
    theme: "primary",
  },
  {
    title: "Custom Web Applications",
    desc: "Web-based platforms and dashboards tailored to business needs.",
    icon: Layers,
    tags: ["TypeScript", "PostgreSQL", "Node.js"],
    featured: true,
    theme: "accent",
  },
];

const ServicesPreview = () => {
  return (
    /* 🛡️ FORCEFUL ISOLATION OVERRIDE FROM HOMEPAGE BACKGROUNDS */
    <section className="relative w-full !bg-[#FAFAFA] !text-[#030303] mb-32 mx-auto max-w-7xl overflow-hidden rounded-none border-y-4 border-[#030303] px-4 py-20 antialiased sm:px-6 lg:px-10 select-none z-20">
      
      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.035] mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Structural Isolation Grid Sheet */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <InteractiveGrid />
      </div>

      {/* Local Cyan Atmospheric Accent Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/[0.02] blur-[130px] rounded-full pointer-events-none z-0" />

      {/* ─── HEADER TERMINAL INTERFACE ─── */}
      <header className="relative z-10 mb-14 border-b-4 border-[#030303] pb-6">
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end text-left">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 block">
              // RECONSTRUCTED PLATFORM CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-balance">
              Digital systems for <span className="text-zinc-400">modern brands.</span>
            </h2>
          </div>
          <div className="max-w-[240px] text-left hidden md:block pb-1">
            <p className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-normal">
              Zaynex builds scalable platforms, websites, and modern business systems optimized for high legibility performance.
            </p>
          </div>
        </div>
      </header>

      {/* ─── SERVICES GRID UNIFORM ARCHITECTURE ─── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 w-full items-stretch">
        {services.map((service, i) => {
          const style = themes[service.theme];
          const ServiceIcon = service.icon;

          // Maintains variable column weights without making sizes uneven within rows
          const gridSpans = service.featured
            ? "md:col-span-12 lg:col-span-8"
            : "md:col-span-6 lg:col-span-4";

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{
                delay: i * 0.03,
                duration: 0.35,
              }}
              style={{ willChange: "transform" }}
              className={`${gridSpans} w-full flex`}
            >
              <article className="w-full flex">
                <Card className="group relative w-full min-h-[200px] flex flex-col justify-between overflow-hidden rounded-none border-2 border-[#030303] bg-white p-5 sm:p-6 lg:p-7 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[6px_6px_0px_rgba(3,3,3,1)] hover:bg-[#FAF9F5] transition-all duration-200 text-left">
                  
                  {/* Local Content Elements */}
                  <div className="relative z-10 flex h-full flex-col justify-between gap-6 w-full">
                    <div>
                      {/* Top Action Indicators */}
                      <div className="mb-4 flex items-center justify-between gap-4 select-none">
                        
                        {/* Brutalist Square Icon Box Container */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 border-[#030303] bg-white text-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)] group-hover:bg-zinc-50 transition-colors">
                          <ServiceIcon
                            size={18}
                            className="stroke-[2.5]"
                            aria-hidden="true"
                          />
                        </div>

                        {/* Flat System Status Trace */}
                        <div className="flex items-center gap-1.5 font-mono text-[9px] font-black uppercase tracking-wider">
                          <span className="text-zinc-400">// STATUS:</span>
                          <span className="text-zinc-800">ACTIVE</span>
                          <div className={`h-1.5 w-1.5 rounded-none ${style.dot}`} />
                        </div>
                      </div>

                      {/* Descriptive Typography */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-tight text-[#030303] transition-colors group-hover:text-cyan-600">
                          {service.title}
                        </h3>
                        <p className="text-xs font-medium leading-relaxed text-zinc-600 max-w-xl text-balance">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Meta Technology Tag Tracks */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-zinc-100 w-full">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="select-none rounded-none border border-[#030303] bg-white px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-zinc-700 shadow-[1px_1px_0px_rgba(3,3,3,1)] group-hover:bg-zinc-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesPreview;
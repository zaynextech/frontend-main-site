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
  text: string;
  hoverText: string;
  bg: string;
  border: string;
  scan: string;
  dot: string;
}

const themes: Record<ThemeKey, ThemeStyles> = {
  primary: {
    text: "text-cyan-400",
    hoverText: "group-hover:text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    scan: "via-cyan-500/10",
    dot: "bg-cyan-400",
  },
  accent: {
    text: "text-cyan-400",
    hoverText: "group-hover:text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    scan: "via-cyan-500/10",
    dot: "bg-cyan-400",
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
    /* Reduced global max-width constraint to keep cards compactly contained */
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/5 bg-[#030303] px-4 py-12 antialiased sm:px-6 md:py-16 lg:px-8">
      
      {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-15 blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#030303]/40" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <InteractiveGrid />
      </div>

      {/* Header */}
      <header className="mb-10 flex flex-col items-center text-center md:mb-14 relative z-10">
        <h2 className="max-w-3xl text-2xl font-extrabold leading-[1.2] tracking-tighter text-white/90 sm:text-4xl md:text-5xl">
          Enterprise solutions engineered for{" "}
          <span className="bg-gradient-to-b from-white/90 via-white to-zinc-500 bg-clip-text text-transparent">
            modern businesses
          </span>
        </h2>

        <p className="mt-3 max-w-xl text-xs font-light leading-relaxed text-zinc-400 sm:text-sm md:mt-4">
          Zaynex designs scalable SaaS platforms, enterprise systems,
          high-performance websites, and modern digital infrastructure.
        </p>
      </header>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {services.map((service, i) => {
          const style = themes[service.theme];
          const ServiceIcon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
              }}
              style={{ willChange: "transform" }}
              className={
                service.featured
                  ? "col-span-1 md:col-span-2 lg:col-span-2 w-full mx-auto"
                  : "col-span-1 w-full max-w-sm md:max-w-none mx-auto"
              }
            >
              <article className="h-full w-full">
                {/* Reduced standard baseline height from 260px down to 220px to fix bulkiness */}
                <Card className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#080808]/50 p-5 shadow-xl backdrop-blur-3xl transition-all duration-500 hover:border-cyan-500/20 hover:bg-[#101010]/60 sm:p-6 lg:p-7">
                  
                  {/* Cyan Hover Radial Glow */}
                  <div className="pointer-events-none absolute top-0 left-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Animated Grid Scan */}
                  <div className={`pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent ${style.scan} to-transparent opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-full group-hover:opacity-100`} />

                  {/* Content Elements */}
                  <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                    <div>
                      {/* Top Action Indicators */}
                      <div className="mb-4 flex items-center justify-between gap-4">
                        {/* Icon Container */}
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-105 ${style.bg} ${style.text}`}>
                          <ServiceIcon
                            size={20}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Network Status Dot */}
                        <div className="flex items-center gap-1.5 select-none">
                          <span className="text-[8px] uppercase tracking-widest text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400 font-semibold">
                            Active
                          </span>
                          <div className={`h-1 w-1 rounded-full shadow-[0_0_6px_currentColor] ${style.dot}`} />
                        </div>
                      </div>

                      {/* Descriptive Typography */}
                      <div className="space-y-1.5">
                        <h3 className={`text-lg font-bold tracking-tight text-white transition-all duration-300 ${style.hoverText}`}>
                          {service.title}
                        </h3>
                        <p className="text-xs font-light leading-relaxed text-zinc-400">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Meta Technology Tag Tracks */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="select-none rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-zinc-400 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-zinc-200"
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
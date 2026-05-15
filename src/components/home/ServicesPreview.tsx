"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Layers, 
  LayoutDashboard, 
  Globe, 
  ShieldCheck,
  type LucideIcon, // 1. Import the official LucideIcon type token
} from "lucide-react";
import InteractiveGrid from "../ui/interactive-grid";

// Strict key type mapping contract
type ThemeKey = "primary" | "accent";

interface ThemeStyles {
  text: string;
  hoverText: string;
  bg: string;
  border: string;
  scan: string;
  dot: string;
}

// Explicitly type the configurations object to avoid implicit any index matching
const themes: Record<ThemeKey, ThemeStyles> = {
  primary: {
    text: "text-primary",
    hoverText: "group-hover:text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    scan: "via-primary/10",
    dot: "bg-primary",
  },
  accent: {
    text: "text-accent",
    hoverText: "group-hover:text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
    scan: "via-accent/10",
    dot: "bg-accent",
  }
};

interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon; // 2. Assign the clean native package interface type here
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
    <section
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#030303] px-4 py-16 antialiased sm:px-6 md:py-24 lg:px-10 lg:py-32"
      >
        
        {/* Background System */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          
          {/* Background Image */}
          <img
            src="/images/bg.jpg"
            alt=""
            role="presentation"
            loading="eager"
            className="h-full w-full object-cover scale-105 opacity-20 blur-[2px]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#030303]/30" />

          {/* Cyan Glow */}
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

          {/* Interactive Grid */}
          <InteractiveGrid />
        </div>

      {/* Header */}
      <header className="mb-12 flex flex-col items-center text-center md:mb-20 relative z-10">
        
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400 select-none"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Our Services
        </motion.span>

        <h2 className="max-w-5xl text-3xl font-black leading-tight tracking-tighter text-white sm:text-4xl md:text-6xl">
          Enterprise solutions engineered for{" "}
          <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            modern businesses
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-6">
          Zaynex designs scalable SaaS platforms, enterprise systems,
          high-performance websites, and modern digital infrastructure for
          growing companies worldwide.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        
        {services.map((service, i) => {
          const style = themes[service.theme];
          const ServiceIcon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
              }}
              className={
                service.featured
                  ? "col-span-1 md:col-span-2"
                  : "col-span-1"
              }
            >
              <article className="h-full">
                
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]/50 p-6 shadow-2xl backdrop-blur-3xl transition-all duration-500 hover:border-cyan-500/20 hover:bg-[#101010]/60 sm:p-8">
                  
                  {/* Cyan Glow */}
                  <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Animated Scan */}
                  <div
                    className={`pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-cyan-500/10 ${style.scan} to-transparent opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-full group-hover:opacity-100`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    
                    {/* Top */}
                    <div>
                      
                      {/* Header */}
                      <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
                        
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl ${style.bg} ${style.text}`}
                        >
                          <ServiceIcon
                            size={26}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2 select-none">
                          
                          <span className="mono text-[10px] uppercase tracking-widest text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                            Active
                          </span>

                          <div
                            className={`h-1.5 w-1.5 rounded-full shadow-[0_0_8px_currentColor] ${style.dot}`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="space-y-3 sm:space-y-4">
                        
                        <h3
                          className={`text-xl font-bold tracking-tight text-white transition-all duration-300 sm:text-2xl ${style.hoverText}`}
                        >
                          {service.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono select-none rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-zinc-400 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-zinc-200"
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
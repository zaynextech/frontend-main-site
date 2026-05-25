"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Globe,
  Layers3,
  Users,
  ArrowRight,
} from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Modern Innovation",
    description:
      "We build future-ready digital systems using modern technologies and scalable architecture.",
    icon: Rocket,
  },
  {
    title: "Business-Focused Solutions",
    description:
      "Every product and platform is designed to help businesses grow online professionally.",
    icon: Globe,
  },
  {
    title: "Scalable Systems",
    description:
      "Our systems are designed for long-term growth, stability, performance, and scalability.",
    icon: Layers3,
  },
  {
    title: "Security & Reliability",
    description:
      "We prioritize secure infrastructure, modern authentication, and enterprise-level reliability.",
    icon: ShieldCheck,
  },
];

const stats = [
  {
    value: "Modern",
    label: "Technology Stack",
  },
  {
    value: "Premium",
    label: "UI/UX Experience",
  },
  {
    value: "Scalable",
    label: "Architecture",
  },
  {
    value: "Business",
    label: "Focused Solutions",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#030303] overflow-hidden relative selection:bg-cyan-500/20 selection:text-[#030303] antialiased font-sans pb-24">
      
      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
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

      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
        <InteractiveGrid />
      </div>

      {/* Ambient Branded Cyber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.03] blur-[120px] pointer-events-none select-none" />

      {/* ─── HERO SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 select-none">
              <Users size={12} className="stroke-[2.5]" />
              <span>[ About Zaynex Matrix ]</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              Building Modern
              <span className="block text-zinc-400">Digital Solutions</span>
            </h1>

            <p className="text-zinc-700 leading-relaxed text-sm sm:text-base font-normal max-w-2xl text-balance">
              Zaynex is a modern digital solutions company focused on helping
              businesses build powerful online systems, scalable platforms, and
              premium digital experiences. We specialize in websites,
              enterprise systems, LMS platforms, branding, dashboards, and
              business-focused digital transformation.
            </p>

            {/* Micro-Scaled Features Capability Track */}
            <div className="border-t-2 border-[#030303] pt-5 space-y-2.5">
              {[
                "Modern scalable architecture",
                "Premium UI/UX systems",
                "Business-focused digital solutions",
                "Performance & SEO optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#030303] group/item"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0 transition-transform duration-150 group-hover/item:scale-125" />
                  <span className="text-zinc-800 transition-colors duration-150 group-hover/item:text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="group inline-flex items-center justify-center gap-2 rounded-none border-2 border-[#030303] bg-[#030303] px-6 h-11 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#030303] transition-all duration-150 active:scale-[0.99]">
                <span>Start Project</span>
                <ArrowRight
                  size={14}
                  className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT MEDIA GRAPHIC COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] border-2 border-[#030303] bg-[#F5F5F3] overflow-hidden p-4 shadow-none hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] transition-all duration-300 flex items-center justify-center">
              <span className="absolute top-2 left-2 z-20 font-mono text-[9px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)] select-none">
                SYS_VISUAL_01
              </span>
              <img
                src="/og-image.jpg"
                alt="About Zaynex Infrastructure Visualization"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-none border-2 border-[#030303] bg-white p-5 text-left transition-all duration-200 hover:shadow-[3px_3px_0px_rgba(3,3,3,1)]"
            >
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-cyan-600">
                {item.value}
              </h3>
              <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-zinc-500">
                // {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VALUES SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="text-left max-w-3xl border-b-2 border-[#030303] pb-6 mb-12">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 select-none mb-1">
            [ 02 / METRIC STANDARDS ]
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
            Why Businesses Choose Zaynex
          </h2>
          <p className="mt-3 text-sm sm:text-base font-normal text-zinc-600 text-balance">
            We focus on building premium digital systems that combine modern
            technology, clean design, business strategy, and scalable
            architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-none border-2 border-[#030303] bg-white p-6 transition-all duration-200 hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] flex flex-col justify-between text-left"
              >
                <div>
                  {/* Brutalist Icon Frame */}
                  <div className="w-11 h-11 rounded-none border-2 border-[#030303] bg-white flex items-center justify-center mb-5 shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
                    {Icon && <Icon className="text-[#030303] stroke-[2]" size={20} />}
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-wider text-[#030303] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 font-normal leading-relaxed text-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-12">
        <div className="relative overflow-hidden rounded-none border-2 border-[#030303] bg-white p-8 md:p-14 text-center shadow-none hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] transition-all duration-300">
          <div className="absolute inset-0 opacity-[0.015] bg-cyan-600 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 block mb-1">
              // INITIALIZE INTAKE TIMELINE
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              Ready to Build With Zaynex?
            </h2>

            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-600 text-balance">
              Let’s create scalable digital systems, modern websites, and
              premium business platforms that help your brand grow online.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link to="/quote" className="group inline-flex items-center justify-center gap-2 rounded-none border-2 border-[#030303] bg-[#030303] px-6 h-11 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#030303] transition-colors duration-150">
                <span>Start Project</span>
              </Link>

              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
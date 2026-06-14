"use client";

import { Link } from "react-router-dom";
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Hotel,
  ShoppingCart,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Education",
    desc: "Learning platforms and student portals.",
    link: "/services/lms-development",
    tag: "EDU TECH",
    icon: GraduationCap,
    color: "#06b6d4",
    sizeStyle: "col-span-1 md:col-span-2 lg:col-span-4 min-h-[160px] lg:mt-4",
    rotZ: "lg:rotate-[-2deg]",
    floatY: [-3, 3, -3],
    duration: 4.0,
  },
  {
    name: "Healthcare",
    desc: "Websites and systems for healthcare providers.",
    link: "/services/dashboard-systems",
    tag: "HEALTH TECH",
    icon: Stethoscope,
    color: "#10b981",
    sizeStyle: "col-span-1 md:col-span-1 lg:col-span-4 min-h-[160px] lg:-mt-4",
    rotZ: "lg:rotate-[3deg]",
    floatY: [4, -4, 4],
    duration: 4.8,
  },
  {
    name: "Business",
    desc: "ERP systems and business solutions.",
    link: "/services/web-development",
    tag: "ENTERPRISE",
    icon: Briefcase,
    color: "#f59e0b",
    sizeStyle: "col-span-1 md:col-span-1 lg:col-span-4 min-h-[160px] lg:mt-6",
    rotZ: "lg:rotate-[-4deg]",
    floatY: [-2, 4, -2],
    duration: 3.6,
  },
  {
    name: "Hospitality",
    desc: "Booking and hospitality platforms.",
    link: "/services/branding-digital-presence",
    tag: "HOSPITALITY",
    icon: Hotel,
    color: "#f43f5e",
    sizeStyle: "col-span-1 md:col-span-2 lg:col-span-3 min-h-[160px] lg:-mt-2",
    rotZ: "lg:rotate-[2deg]",
    floatY: [3, -3, 3],
    duration: 4.4,
  },
  {
    name: "Commerce",
    desc: "Online stores and payment solutions.",
    link: "/services/ecommerce-development",
    tag: "E-COMMERCE",
    icon: ShoppingCart,
    color: "#6366f1",
    sizeStyle: "col-span-1 md:col-span-1 lg:col-span-5 min-h-[160px] lg:mt-2",
    rotZ: "lg:rotate-[-3deg]",
    floatY: [-4, 3, -4],
    duration: 5.2,
  },
  {
    name: "Organizations",
    desc: "Digital solutions for NGOs and teams.",
    link: "/services/business-systems",
    tag: "GLOBAL",
    icon: Globe,
    color: "#8b5cf6",
    sizeStyle: "col-span-1 md:col-span-2 lg:col-span-4 min-h-[160px] lg:-mt-6",
    rotZ: "lg:rotate-[4deg]",
    floatY: [2, -2, 2],
    duration: 4.2,
  },
];
const IndustryEcosystem = () => {
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 1024 : false;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#030303] px-3 py-12 xs:px-4 sm:px-6 sm:py-20 lg:px-8 group/section contain-layout w-full select-none">
      
      {/* Background Video Engine */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none transform-gpu contain-strict">
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

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#030303]" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#030303] via-[#030303]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        
        {/* Header Block */}
        <header className="mb-12 sm:mb-20 flex flex-col items-center text-center md:items-start md:text-left gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <div className="hidden md:block h-px w-4 bg-cyan-500/70" />
            <span className="text-cyan-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
              Industries
            </span>
          </div>

          <h2 className="w-full text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] flex flex-col gap-2 pb-2">
            <span className="block">
              Solutions for
            </span>
            <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 bg-clip-text text-transparent pb-3">
              Every Industry
            </span>
          </h2>

          <div className="max-w-xl">
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-100 font-light">
              From startups and schools to restaurants and growing businesses, we create digital solutions tailored to your goals.
            </p>
          </div>
        </header>

        {/* Interlocking Grid Workspace */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 w-full py-4 min-h-[500px]"
          style={{ 
            perspective: isDesktop ? "2200px" : "none",
            transformStyle: isDesktop ? "preserve-3d" : "flat"
          }}
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              /* FIXED LAYER ARCHITECTURE: 
                 Using framer's semantic element renderer 'as="article"' ensures the browser compiles 
                 the code cleanly into hardware-accelerated 3D workspace zones without drops.
              */
              <motion.article
                key={index}
                initial={{ opacity: 0, scale: 0.92, z: isDesktop ? -120 : 0, rotateY: isDesktop ? 22 : 0, rotateX: isDesktop ? 12 : 0, skewY: isDesktop ? -3 : 0 }}
                whileInView={{ opacity: 1, scale: 1, z: 0, rotateY: isDesktop ? 22 : 0, rotateX: isDesktop ? 12 : 0, skewY: isDesktop ? -3 : 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ 
                  z: isDesktop ? 35 : 8,
                  rotateY: isDesktop ? 10 : 0,
                  rotateX: isDesktop ? 5 : 0,
                  scale: isDesktop ? 1 : 1.03,
                  borderColor: "rgba(6,182,212,0.4)",
                  boxShadow: "-15px 20px 35px rgba(0,0,0,0.85), 0 0 25px rgba(6,182,212,0.15)"
                }}
                transition={{ type: "spring", stiffness: 130, damping: 15 }}
                className={`relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-5 group/card transform-gpu will-change-transform flex flex-col justify-between ${item.sizeStyle} ${item.rotZ}`}
                style={{ 
                  transformStyle: isDesktop ? "preserve-3d" : "flat",
                  willChange: "transform, opacity"
                }}
              >
                {/* Isolated Floating Inner Sheet */}
                <motion.div
                  animate={{ y: item.floatY }}
                  transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full flex flex-col justify-between transform-gpu contain-strict relative"
                  style={{ transformStyle: isDesktop ? "preserve-3d" : "flat", willChange: "transform" }}
                >
                  {/* Micro Neon HUD Accent Lines */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/10 group-hover/card:border-cyan-400/40 transition-colors pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/10 group-hover/card:border-cyan-400/40 transition-colors pointer-events-none" />

                  <div className="flex flex-col gap-4">
                    {/* Top Meta Line Header */}
                    <div className="flex justify-between items-center w-full pointer-events-none" style={{ transform: isDesktop ? "translateZ(15px)" : "none" }}>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-100 transition-colors duration-300 group-hover/card:text-cyan-400">
                        {item.tag}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-100 select-none">
                        // 0{index + 1}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex items-start gap-4 mt-1">
                      {/* Structural Icon Container */}
                      <div 
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-neutral-950/60 shadow-2xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transform-gpu"
                        style={{ transform: isDesktop ? "translateZ(25px)" : "none" }}
                      >
                        <Icon size={18} style={{ color: item.color }} className="transition-transform duration-300 group-hover/card:scale-110" />
                      </div>

                      <div className="flex-1 text-left" style={{ transform: isDesktop ? "translateZ(20px)" : "none" }}>
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover/card:text-cyan-300 transition-colors duration-200">
                          {item.name}
                        </h3>
                        <p className="mt-1.5 text-base sm:text-lg leading-relaxed text-white font-light text-balance line-clamp-3 md:line-clamp-none">
                          {item.desc}
                        </p>
                        <Link
                            to={item.link}
                            className="mt-3 inline-flex items-center text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Learn More →
                          </Link>
                      </div>
                    </div>
                  </div>

                  {/* High-End Colored Side Border Trim */}
                  <div
                    className="absolute right-[-21px] top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full transition-all duration-500 ease-out group-hover/card:h-full opacity-60"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustryEcosystem;
"use client";

import React from "react";
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Hotel,
  ShoppingCart,
  Globe,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Education",
    desc: "Smart LMS, portals, and digital learning systems.",
    tag: "EDU TECH",
    icon: GraduationCap,
    color: "#06b6d4",
  },
  {
    name: "Healthcare",
    desc: "Modern systems for clinics, hospitals, and care management.",
    tag: "HEALTH",
    icon: Stethoscope,
    color: "#10b981",
  },
  {
    name: "Business",
    desc: "ERP platforms, dashboards, and workflow automation.",
    tag: "ENTERPRISE",
    icon: Briefcase,
    color: "#f59e0b",
  },
  {
    name: "Hospitality",
    desc: "Hotel booking and hospitality management platforms.",
    tag: "HOTELS",
    icon: Hotel,
    color: "#f43f5e",
  },
  {
    name: "Commerce",
    desc: "Scalable e-commerce and payment solutions.",
    tag: "E-COMMERCE",
    icon: ShoppingCart,
    color: "#6366f1",
  },
  {
    name: "Organizations",
    desc: "Secure systems for institutions and global operations.",
    tag: "GLOBAL",
    icon: Globe,
    color: "#8b5cf6",
  },
];

const IndustryEcosystem = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem]  bg-[#030303]/50 py-16">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="lazy"
          className="h-full w-full object-cover scale-105 opacity-20 blur-[2px]"
        />

        <div className="absolute inset-0 bg-[#030303]/50" />

        {/* Reduced Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/30 blur-[120px]" />

      
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Industry Ecosystem
          </motion.span>

          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tighter text-white md:text-5xl">
            Built for industries{" "}
            <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              across the global market.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            Zaynex develops scalable enterprise systems, modern platforms,
            and intelligent digital infrastructure tailored for industries
            operating in fast-growing global environments.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0">
          
          {/* Core */}
          <div className="relative z-20 flex flex-col items-center justify-center lg:w-1/3">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#080808]/60 shadow-[0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-3xl md:h-56 md:w-56"
            >
              
              <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-[-10px] rounded-full border border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite]" />

              <div className="absolute inset-[16px] rounded-full border border-cyan-500/30" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                
                <Logo />

                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-cyan-400">
                  CORE ENGINE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Connection */}
          <div className="relative z-10 hidden h-[520px] w-1/6 lg:block">
            
            <svg
              viewBox="0 0 200 650"
              className="h-full w-full fill-none stroke-white/70 stroke-[1.5]"
            >
              <path d="M0 325 C 100 325, 50 60, 200 60" />
              <path d="M0 325 C 100 325, 50 170, 200 170" />
              <path d="M0 325 L 200 280" />
              <path d="M0 325 L 200 390" />
              <path d="M0 325 C 100 325, 50 500, 200 500" />
              <path d="M0 325 C 100 325, 50 610, 200 610" />

              {[60, 170, 280, 390, 500, 610].map((y, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy={y}
                  r="3"
                  className="fill-cyan-400"
                />
              ))}
            </svg>
          </div>

          {/* Cards */}
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#080808]/50 p-4 backdrop-blur-3xl transition-all duration-500 hover:border-cyan-500/20 hover:bg-[#101010]/60"
                >
                  
                  {/* Glow */}
                  <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row">
                    
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 shadow-xl">
                      <Icon
                        size={20}
                        style={{ color: item.color }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                      
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        
                        <h3 className="text-lg font-bold tracking-tight text-white">
                          {item.name}
                        </h3>

                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#06b6d4] transition-colors duration-300 group-hover:text-white">
                          {item.tag}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {item.desc}
                      </p>
                    </div>

                    {/* Accent */}
                    <div
                      className="absolute right-0 top-1/2 hidden h-0 w-[2px] -translate-y-1/2 rounded-full transition-all duration-500 group-hover:h-full md:block"
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryEcosystem;
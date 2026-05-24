"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  ArrowRight,
  Send,
  ShieldCheck,
} from "lucide-react";

import InteractiveGrid from "@/components/ui/interactive-grid";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#030303] px-4 py-16 sm:px-6 lg:px-8">
      <SEO
        title="Contact Zaynex"
        description="Contact Zaynex for professional websites, web apps, SEO, branding, and digital solutions."
        path="/contact"
      />
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* BG Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          className="h-full w-full object-cover opacity-20 blur-[2px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#030303]/85" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Grid */}
        <InteractiveGrid />
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Contact Zaynex
          </motion.div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tighter text-white md:text-6xl">
            Let's build your{" "}
            <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              next digital system.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Contact our engineering team to discuss your software,
            SaaS platform, ERP system, LMS solution, or enterprise project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]/60 p-6 shadow-2xl backdrop-blur-3xl"
          >
            
            {/* Top */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Contact Information
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Reach out through our official communication channels.
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]">
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Mail size={20} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:support@zaynex.tech"
                    className="mt-1 block text-sm text-white transition-colors hover:text-cyan-400"
                  >
                    support@zaynex.tech
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]">
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Phone size={20} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919258885837"
                    className="mt-1 block text-sm text-white transition-colors hover:text-cyan-400"
                  >
                    +91 9258885837
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]">
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Globe size={20} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Website
                  </p>

                  <a
                    href="https://zaynex.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-white transition-colors hover:text-cyan-400"
                  >
                    www.zaynex.tech
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]">
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <MapPin size={20} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Operations
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Remote Global Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
              
              <ShieldCheck
                size={20}
                className="text-emerald-400"
              />

              <div>
                <p className="text-sm font-medium text-emerald-300">
                  Secure Infrastructure Active
                </p>

                <p className="text-xs text-emerald-400/80">
                  Enterprise-grade communication channels enabled.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]/60 p-6 shadow-2xl backdrop-blur-3xl"
          >
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Start a Project
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Submit your project details and our team will contact you.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Project Type
                </label>

                <input
                  type="text"
                  placeholder="Website, SaaS, ERP, LMS..."
                  className="w-full rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                  className="w-full resize-none rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-500/30"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
              >
                Submit Project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Bottom */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">
              
              <Send
                size={18}
                className="text-cyan-400"
              />

              <p className="text-xs leading-relaxed text-zinc-400">
                Average response time: less than 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
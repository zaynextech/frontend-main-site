"use client";
import SEO from "@/components/SEO";
import InteractiveGrid from "@/components/ui/interactive-grid";
import { motion } from "framer-motion";
import { ArrowRight, Construction, Sparkles } from "lucide-react";


const Industries = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-[2rem] border border-white/5 bg-[#030303] px-4 py-20 sm:px-6 lg:px-8">
      
      <SEO
      title="Industries We Serve | Zaynex"
      description="Digital solutions for businesses, schools, startups, creators, and modern brands."
      path="/industries"
/>
  {/* Background */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    
    {/* Background Image */}
    <img
      src="/images/bg.jpg"
      alt=""
      role="presentation"
      className="h-full w-full object-cover opacity-20 blur-[2px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#030303]/85" />

    {/* Glow */}
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

    {/* Grid */}
    <InteractiveGrid />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
    
    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative mb-8 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-cyan-500/20 bg-cyan-500/10 shadow-[0_0_60px_rgba(6,182,212,0.15)] backdrop-blur-3xl"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

      <Construction
        size={42}
        className="relative z-10 text-cyan-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
      />
    </motion.div>

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400"
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
      Under Construction
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="max-w-4xl text-4xl font-black tracking-tighter text-white md:text-6xl"
    >
      This experience is currently being
      <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
        {" "}engineered.
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
    >
      Our backend infrastructure and advanced systems are still under active development.
      We are building a high-performance experience designed for scalability, speed,
      and enterprise reliability.
    </motion.p>

    {/* Offer Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="mt-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]/60 p-6 shadow-2xl backdrop-blur-3xl"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
          <Sparkles className="text-cyan-400" size={24} />
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Early Access Opportunity
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            Submit your project architecture and business requirements.
            The top 10 selected clients will receive an exclusive
            <span className="font-bold text-cyan-400"> 20% discount </span>
            on development services.
          </p>
        </div>

        {/* CTA */}
        <button className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]">
          Submit Your Project

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  </div>
</section>
  )

};

export default Industries;
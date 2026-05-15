"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import InteractiveGrid from "@/components/ui/interactive-grid";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6 py-20 text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="h-full w-full scale-105 object-cover opacity-30 blur-[3px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

     

        

        {/* Interactive Grid */}
        <InteractiveGrid />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
      >

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Logo />
        </motion.div>

        {/* 404 */}
        <h1 className="bg-gradient-to-b from-white to-white/10 bg-clip-text text-[120px] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[180px]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Lost in the digital space
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s guide you back to something exceptional.
        </p>

       <div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <Link
    to="/"
    className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full border border-cyan-400 bg-transparent px-10 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300 hover:bg-cyan-400/20"
  >

    <span className="relative z-10">
      Back to Home
    </span>

    <div className="absolute inset-0 translate-y-full bg-transparent transition-transform duration-300 group-hover:translate-y-0" />
  </Link>

  <Link
    to="/portfolio"
    className="group flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-10 text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white/10"
  >
    View Projects
  </Link>

</div>

        {/* Footer */}
        <div className="mt-16 text-sm tracking-wide text-zinc-600">
          Zaynex Studio © {new Date().getFullYear()}
        </div>

      </motion.div>
    </main>
  );
}
"use client";

import { TestimonialsMarquee } from "@/components/testimonials/testimonials-marquee";
import { Star } from "lucide-react";

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#030303] py-8 sm:py-16 relative overflow-hidden">
      {/* <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/watermark.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}

      <div className="absolute top-0 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-cyan-400/[0.03] blur-[60px] sm:blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">
        <header className="mb-6 sm:mb-10 border-b-2 sm:border-b-4 border-[#030303] pb-4 sm:pb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Client Reviews
                </span>
                <div className="h-px w-6 sm:w-8 bg-primary/40" />
                <div className="flex items-center text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" className="sm:w-3 sm:h-3" />
                  ))}
                </div>
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Global Businesses</span>
              </h2>

              <p className="text-black text-xs sm:text-base max-w-xl leading-relaxed">
                Real feedback from clients who trusted Zaynex with their mission-critical websites, scalable infrastructure, and digital solutions.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-3 py-1.5 sm:px-5 sm:py-3 text-white font-semibold text-[11px] sm:text-sm rounded-md"
              >
                Google Reviews
              </a>

              <a
                href="https://www.trustpilot.com/review/zaynex.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00B67A] px-3 py-1.5 sm:px-5 sm:py-3 text-white font-semibold text-[11px] sm:text-sm rounded-md"
              >
                Trustpilot
              </a>
            </div>
          </div>
        </header>
      </div>

      <TestimonialsMarquee />
    </section>
  );
}
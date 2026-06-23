"use client";

import { TestimonialsMarquee } from "./testimonials-marquee";

export default function ClientTestimonials() {
  return (
    <section className="w-full !bg-[#FAFAFA] !text-[#030303] py-16 relative z-20 overflow-hidden antialiased font-sans">
      {/* Watermark */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-15 mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105"
          onError={(e) => {
            e.currentTarget.style.display =
              "none";
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="mb-10 md:mb-14 border-b-4 border-[#030303] pb-6">
          <div className="flex w-full flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600">
                CLIENT REVIEWS
              </span>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                Trusted by{" "}
                <span className="text-cyan-600">
                  Businesses
                </span>
              </h2>

              <p className="text-sm text-black max-w-lg">
                Real feedback from
                clients who trusted
                Zaynex with their
                websites and digital
                solutions.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Google Reviews
              </a>

              <a
                href="https://www.trustpilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#00B67A] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Trustpilot Reviews
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* Reviews */}
      <TestimonialsMarquee />
    </section>
  );
}
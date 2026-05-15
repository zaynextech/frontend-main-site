"use client";

import { useEffect, useMemo } from "react";
import { BadgeDollarSign, AlertTriangle } from "lucide-react";

export default function RefundPolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Digital Services Notice",
      content: [
        "Zaynex provides digital software and development services. Due to the nature of digital work, refunds are limited and subject to this policy.",
      ],
    },
    {
      title: "2. Non-Refundable Situations",
      content: ["Refunds will generally not be provided for:"],
      list: [
        "Completed milestones",
        "Approved work",
        "Custom software development",
        "Delivered digital assets",
        "Deployment/setup services",
        "Change-of-mind cancellations after work begins",
      ],
    },
    {
      title: "3. Eligible Refund Situations",
      content: ["Partial refunds may be considered if:"],
      list: [
        "Work has not started",
        "Milestones were not initiated",
        "Zaynex is unable to deliver agreed services",
        "Duplicate payments occurred",
      ],
      footer: "Approved refunds are processed within [Insert Timeframe].",
    },
    {
      title: "4. Deposit Policy",
      content: [
        "Project deposits reserve development time and resources and are generally non-refundable once project work has commenced.",
      ],
    },
    {
      title: "5. Subscription Services",
      content: ["For recurring SaaS services:"],
      list: [
        "Users may cancel future renewals anytime",
        "Active billing periods are generally non-refundable unless required by law",
      ],
    },
    {
      title: "6. Chargebacks",
      content: [
        "Clients agree to contact Zaynex before initiating chargebacks or payment disputes.",
        "Fraudulent chargebacks may result in:",
      ],
      list: ["Account suspension", "Service termination", "Legal action"],
    },
    {
      title: "7. Cancellation Requests",
      content: ["Cancellation requests must be submitted through:", "[Insert Support Email]"],
    },
    {
      title: "8. Exceptional Cases",
      content: ["Zaynex may provide goodwill refunds at its discretion."],
    },
    {
      title: "9. Legal Compliance",
      content: [
        "Certain jurisdictions may provide additional consumer rights.",
        "Professional legal review is recommended before production deployment.",
      ],
    },
  ], []);

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-[#020617] text-zinc-300 antialiased"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(0,255,255,0.08), transparent 60%)",
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-40 left-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        
        {/* Header - Semantic SEO Structure */}
        <header className="mb-12 md:mb-16 border-b border-cyan-500/10 pb-8 md:pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
              <BadgeDollarSign className="text-cyan-400" size={28} aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.35)] break-words">
              Refund Policy
            </h1>
          </div>

          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <span className="font-medium text-white">Effective Date:</span> May 15, 2026
            </p>

            <p>
              <span className="font-medium text-white">Company:</span> Zaynex
            </p>

            <p>
              <span className="font-medium text-white">Website:</span>{" "}
              <a href="https://zaynex.tech" rel="noopener" className="hover:text-cyan-400 transition-colors">
                zaynex.tech
              </a>
            </p>
          </div>
        </header>

        {/* Content Processing Section */}
        <main className="space-y-8 md:space-y-10" aria-label="Refund Policy Articles">
          {sections.map((section, index) => (
            <article
              key={index}
              className="rounded-2xl md:rounded-3xl border border-cyan-500/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,255,255,0.04)] transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] break-words"
            >
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-semibold tracking-tight text-cyan-100">
                {section.title}
              </h2>

              {section.content?.map((text, i) => (
                <p
                  key={i}
                  className="mb-4 leading-7 md:leading-8 tracking-wide text-zinc-400 text-sm md:text-base"
                >
                  {text}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 md:mt-5 space-y-3 md:space-y-4">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-300 text-sm md:text-base"
                    >
                      <AlertTriangle
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        aria-hidden="true"
                      />

                      <span className="leading-6 md:leading-7">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <footer className="mt-5 md:mt-6 leading-6 md:leading-7 text-zinc-500 text-xs md:text-sm border-t border-white/[0.02] pt-4">
                  <p>{section.footer}</p>
                </footer>
              )}
            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 border-t border-cyan-500/10 pt-8 md:pt-10 text-center">
          <p className="text-xs md:text-sm tracking-wide text-zinc-500">
            © {new Date().getFullYear()} Zaynex. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
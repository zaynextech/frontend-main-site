"use client";

import { useEffect, useMemo } from "react";
import { BadgeDollarSign, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

export default function RefundPolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Digital Services Notice",
      content: [
        "Zaynex provides digital software and development services. Due to the nature of custom digital work, refunds are limited and subject to this Refund Policy.",
        "Services are typically delivered based on approved quotations, project milestones, and mutually agreed project scopes.",
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
        "Deployment or setup services",
        "Change-of-mind cancellations after work begins",
      ],
    },
    {
      title: "3. Eligible Refund Situations",
      content: ["Partial or full refunds may be considered if:"],
      list: [
        "Work has not started",
        "Milestones were not initiated",
        "Zaynex is unable to deliver agreed services",
        "Duplicate payments occurred",
      ],
      footer:
        "Approved refunds are typically processed within 7–14 business days depending on the payment provider and banking institution.",
    },
    {
      title: "4. Deposit Policy",
      content: [
        "Project deposits reserve development time, resources, and scheduling commitments and are generally non-refundable once project work has commenced.",
      ],
    },
    {
      title: "5. Subscription Services",
      content: ["For recurring SaaS or platform services:"],
      list: [
        "Users may cancel future renewals at any time",
        "Cancellation will stop future billing cycles",
        "Active billing periods are generally non-refundable unless required by law",
      ],
    },
    {
      title: "6. Chargebacks & Payment Disputes",
      content: [
        "Clients agree to contact Zaynex before initiating chargebacks or payment disputes.",
        "Fraudulent or abusive chargebacks may result in:",
      ],
      list: [
        "Account suspension",
        "Service termination",
        "Restriction of platform access",
        "Legal recovery actions where applicable",
      ],
    },
    {
      title: "7. Cancellation Requests",
      content: [
        "Cancellation requests must be submitted through the official contact channels provided on the Zaynex website.",
      ],
    },
    {
      title: "8. Exceptional Cases",
      content: [
        "Zaynex may provide goodwill refunds or account credits at its sole discretion depending on the circumstances of the project or service.",
      ],
    },
    {
      title: "9. Legal Compliance",
      content: [
        "This Refund Policy shall be interpreted in accordance with applicable laws and consumer protection regulations of the Republic of India.",
        "Certain jurisdictions may provide additional consumer rights.",
      ],
    },
    {
      title: "10. Contact Information",
      content: [
        "For billing, cancellation, or refund inquiries, users may contact Zaynex through the official support or contact channels provided on the website.",
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
  <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FAFAFA] text-[#030303] antialiased selection:bg-cyan-500/20 selection:text-[#030303] font-sans pb-24 z-20">

    {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-20 mix-blend-multiply">
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
    {/* Local Cyber Ambient Glow Underlay */}
    <div className="absolute top-40 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.02] blur-[120px] pointer-events-none z-0" />

    <SEO
      title="Refund Policy | Zaynex"
      description="Read the Zaynex refund and cancellation policy."
      path="/refund-policy"
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      
      {/* ─── HEADER: INDUSTRIAL INTEL INTERFACE ─── */}
      <header className="mb-14 border-b-4 border-[#030303] pb-8 md:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-left">
          {/* Brutalist Square Icon Frame */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-[#030303] bg-white text-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
            <BadgeDollarSign size={24} className="stroke-[2.5]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Refund Policy
          </h1>
        </div>

        {/* Legal Node Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-[10px] font-black uppercase tracking-wider text-zinc-500">
          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-900 font-bold block mb-0.5">// EFFECTIVE DATE</span>
            <span className="text-[#030303]">May 15, 2026</span>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-900 font-bold block mb-0.5">// ISSUING SYSTEM</span>
            <span className="text-[#030303]">Zaynex Corporate</span>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-900 font-bold block mb-0.5">// DOMAIN ARCHIVE</span>
            <a href="https://zaynex.tech" rel="noopener" className="text-cyan-600 hover:text-black transition-colors block">
              zaynex.tech
            </a>
          </p>
        </div>
      </header>

      {/* ─── LEGAL COMPLIANCE ARTICLE ARTICLES STACK ─── */}
      <main className="space-y-6 md:space-y-8" aria-label="Refund Policy Articles">
        {sections.map((section, index) => (
          <article
            key={index}
            className="rounded-none border-2 border-[#030303] bg-white p-6 sm:p-8 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-200 text-left relative overflow-hidden group"
          >
            {/* Top Index Corner Marker */}
            <span className="absolute top-3 right-4 font-mono text-[9px] font-black tracking-widest text-zinc-700 group-hover:text-cyan-600 transition-colors select-none">
              SEC_LN_{(index + 1).toString().padStart(2, "0")}
            </span>

            <h2 className="mb-4 md:mb-5 text-lg md:text-xl font-black uppercase tracking-tight text-[#030303]">
              {section.title}
            </h2>

            {section.content?.map((text, i) => (
              <p
                key={i}
                className="mb-4 leading-relaxed text-zinc-700 font-normal text-xs sm:text-sm max-w-4xl text-balance last:mb-0"
              >
                {text}
              </p>
            ))}

            {/* Custom List Injection Node */}
            {section.list && (
              <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-4 w-full">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-800 font-medium text-xs sm:text-sm"
                  >
                    <AlertTriangle
                      size={14}
                      className="mt-0.5 shrink-0 text-cyan-600 stroke-[2.5]"
                      aria-hidden="true"
                    />
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Sub-Footer Meta Clause */}
            {section.footer && (
              <footer className="mt-6 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-700 border-t-2 border-dashed border-zinc-100 pt-4 leading-normal">
                <p>{section.footer}</p>
              </footer>
            )}
          </article>
        ))}
      </main>

      {/* ─── TERMINAL FOOTER LAYER ─── */}
      <footer className="mt-20 border-t-2 border-[#030303] pt-8 text-center select-none">
        <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
          © {new Date().getFullYear()} Zaynex Enterprise Matrix. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
  );
}

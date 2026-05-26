"use client";

import { useEffect, useMemo } from "react";
import { Shield } from "lucide-react";
import SEO from "@/components/SEO";

export default function PolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Introduction",
      content: [
        "Welcome to Zaynex. These Terms & Conditions govern the use of our website, software platforms, applications, and digital services.",
        "By accessing or using our services, you agree to comply with these Terms.",
        "Services are provided based on custom project quotations and mutually agreed project scopes.",
      ],
    },
    {
      title: "2. Services",
      list: [
        "Website development",
        "SaaS platform development",
        "ERP systems",
        "LMS systems",
        "Industrial management systems",
        "Business dashboards",
        "Client management systems",
        "Hosting and deployment assistance",
        "Technical consultation and support",
      ],
      footer:
        "All services are delivered digitally unless otherwise agreed in writing.",
    },
    {
      title: "3. User Accounts",
      content: [
        "Users may be required to create accounts to access certain services.",
      ],
      list: [
        "Provide accurate information",
        "Maintain account confidentiality",
        "Protect login credentials",
        "Notify us immediately of unauthorized access",
      ],
      footer:
        "Zaynex is not liable for losses caused by unauthorized account access resulting from user negligence.",
    },
    {
      title: "4. Acceptable Use Policy",
      content: ["Users may not:"],
      list: [
        "Use the platform for illegal activities",
        "Attempt unauthorized access",
        "Upload malicious software",
        "Disrupt platform functionality",
        "Reverse engineer proprietary systems",
        "Misuse communication systems",
      ],
      footer:
        "Violation of these terms may result in suspension or termination of services.",
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All platform designs, codebases, software systems, branding, UI/UX, documents, and proprietary technologies developed by Zaynex remain the intellectual property of Zaynex unless otherwise stated in a signed agreement.",
        "Upon full payment, clients may receive ownership or licensed usage rights depending on the project agreement.",
        "Third-party libraries and frameworks remain subject to their original licenses.",
      ],
    },
    {
      title: "6. Project Milestones & Payments",
      content: [
        "Projects may be divided into milestones based on the approved quotation and project scope.",
      ],
      list: [
        "Initial deposit",
        "Milestone-based payments",
        "Final delivery payment",
      ],
      footer:
        "Failure to complete payments may result in delayed delivery, service suspension, restricted access, or project termination. Invoices are payable within a maximum of 15 days. Refunds, if applicable, shall be governed by the Refund Policy.",
    },
    {
      title: "7. Revisions",
      list: [
        "Minor revisions are included within the agreed scope",
        "Major scope changes may incur additional charges",
        "Unused revisions do not carry forward",
      ],
      footer:
        "Excessive revisions outside the agreed scope may require a revised quotation.",
    },
    {
      title: "8. Hosting & Deployment Disclaimer",
      content: [
        "Zaynex may assist with deployment and hosting setup. However:",
      ],
      list: [
        "Third-party hosting providers remain independent entities",
        "We do not guarantee uninterrupted hosting availability",
        "Performance may depend on external infrastructure providers",
      ],
      footer:
        "Clients are responsible for maintaining active hosting subscriptions unless managed under a separate support agreement.",
    },
    {
      title: "9. Confidentiality",
      content: [
        "Both parties agree to protect confidential information including:",
      ],
      list: [
        "Business data",
        "Login credentials",
        "Internal documents",
        "Client records",
        "Source code",
        "Financial information",
      ],
      footer:
        "Confidential information shall not be disclosed without authorization unless required by law.",
    },
    {
      title: "10. Security Commitment",
      content: [
        "Zaynex implements industry-standard security measures including:",
      ],
      list: [
        "Authentication systems",
        "Access controls",
        "Encrypted communications where applicable",
        "Secure development practices",
      ],
      footer:
        "However, no digital platform or online system can guarantee absolute security.",
    },
    {
      title: "11. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, Zaynex shall not be liable for:",
      ],
      list: [
        "Indirect damages",
        "Business interruption",
        "Data loss",
        "Profit loss",
        "Third-party service failures",
        "Cyber incidents beyond reasonable control",
      ],
      footer:
        "Total liability shall not exceed the amount paid for the affected service.",
    },
    {
      title: "12. Cancellation & Termination",
      content: [
        "Either party may terminate services under written notice.",
        "Zaynex reserves the right to suspend services for:",
      ],
      list: [
        "Non-payment",
        "Abuse",
        "Fraudulent activity",
        "Policy violations",
      ],
      footer:
        "Outstanding balances remain payable after termination.",
    },
    {
      title: "13. Force Majeure",
      content: [
        "Zaynex shall not be responsible for delays or failures caused by events beyond reasonable control including:",
      ],
      list: [
        "Natural disasters",
        "Cyber attacks",
        "Government actions",
        "Power outages",
        "Internet failures",
        "War or civil unrest",
      ],
    },
    {
      title: "14. Governing Law",
      content: [
        "These Terms shall be governed and interpreted in accordance with the laws of the Republic of India.",
        "Disputes shall be subject to the jurisdiction of courts located in India.",
      ],
    },
    {
      title: "15. Contact Information",
      content: [
        "For support, billing, or legal inquiries, users may contact Zaynex through the official contact channels provided on the website.",
      ],
    },
  ], []);

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
      title="Terms & Conditions | Zaynex"
      description="Read the terms and conditions for using Zaynex services and platforms."
      path="/terms"
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      
      {/* ─── HEADER: INDUSTRIAL INTEL INTERFACE ─── */}
      <header className="mb-14 border-b-4 border-[#030303] pb-8 md:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-left">
          {/* Brutalist Square Icon Frame */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-[#030303] bg-white text-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
            <Shield size={24} className="stroke-[2.5]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Terms & Conditions
          </h1>
        </div>

        {/* Legal Node Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left font-mono text-[10px] font-black uppercase tracking-wider text-zinc-500">
          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-700 font-bold block mb-0.5">// EFFECTIVE DATE</span>
            <span className="text-[#030303]">May 15, 2026</span>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-700 font-bold block mb-0.5">// ISSUING SYSTEM</span>
            <span className="text-[#030303]">Zaynex Corporate</span>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-700 font-bold block mb-0.5">// DOMAIN ARCHIVE</span>
            <a href="https://zaynex.tech" rel="noopener" className="text-cyan-600 hover:text-black transition-colors block">
              zaynex.tech
            </a>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-700 font-bold block mb-0.5">// DIRECT SUPPORT</span>
            <a href="mailto:support@zaynex.tech" className="text-cyan-600 hover:text-black transition-colors block truncate">
              support@zaynex.tech
            </a>
          </p>
        </div>

        <div className="mt-4 font-mono text-[10px] font-black uppercase tracking-wider text-zinc-500 text-left border-l-2 border-zinc-200 pl-3">
          <span className="text-zinc-700 font-bold block mb-0.5">// OPERATIONS CENTER</span>
          <span className="text-[#030303]">Zaynex — Remote Global Operations</span>
        </div>
      </header>

      {/* ─── TERMS COMPLIANCE SECTION CORE STACK ─── */}
      <main className="space-y-6 md:space-y-8" aria-label="Terms and Conditions Elements">
        {sections.map((section, index) => (
          <article
            key={index}
            className="rounded-none border-2 border-[#030303] bg-white p-6 sm:p-8 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-200 text-left relative overflow-hidden group"
          >
            {/* Top Index Corner Marker */}
            <span className="absolute top-3 right-4 font-mono text-[9px] font-black tracking-widest text-zinc-700 group-hover:text-cyan-600 transition-colors select-none">
              TNC_NODE_{(index + 1).toString().padStart(2, "0")}
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

            {/* Symmetrical System Bullet List */}
            {section.list && (
              <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-4 w-full">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-800 font-medium text-xs sm:text-sm"
                  >
                    {/* Brutalist Hard Square Bullet Block Indicator */}
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-none bg-cyan-500 shadow-[0_0_6px_rgba(34,211,238,0.7)] shrink-0" aria-hidden="true" />
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
        <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900">
          © {new Date().getFullYear()} Zaynex Enterprise Matrix. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
);
}
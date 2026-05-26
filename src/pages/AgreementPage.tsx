"use client";

import { useEffect, useMemo } from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

export default function AgreementPage() {
  const sections = useMemo(() => [
    {
      title: "Service Agreement",
      content: [
        "This Service Agreement is entered into between Zaynex and the client requesting services.",
      ],
    },
    {
      title: "1. Scope of Services",
      content: [
        "Zaynex provides digital software and technology services including:",
      ],
      list: [
        "Custom software development",
        "SaaS platform solutions",
        "ERP systems",
        "LMS systems",
        "Business dashboards",
        "Client management systems",
        "Maintenance and technical support",
      ],
      footer:
        "Specific project scope, deliverables, timelines, and pricing shall be defined separately through quotations, proposals, or project agreements.",
    },
    {
      title: "2. Client Responsibilities",
      content: ["The client agrees to:"],
      list: [
        "Provide accurate project requirements",
        "Submit content, credentials, and assets on time",
        "Review and approve milestones promptly",
        "Maintain reasonable communication",
        "Complete payments according to the agreed schedule",
      ],
      footer:
        "Project delays caused by missing client information, approvals, or communication may affect delivery timelines.",
    },
    {
      title: "3. Project Timeline",
      content: [
        "Estimated delivery schedules are approximate and may depend on:",
      ],
      list: [
        "Client feedback and approvals",
        "Project scope changes",
        "Third-party service availability",
        "Technical limitations or infrastructure dependencies",
      ],
      footer:
        "Timelines may be adjusted where necessary based on project requirements or unforeseen circumstances.",
    },
    {
      title: "4. Milestones & Deliverables",
      content: ["Projects may include multiple phases such as:"],
      list: [
        "Planning and requirement analysis",
        "UI/UX design",
        "Development and implementation",
        "Testing and quality assurance",
        "Deployment and delivery",
      ],
      footer:
        "Milestone approvals may trigger invoice generation or payment requests.",
    },
    {
      title: "5. Payment Terms",
      content: ["Unless otherwise agreed in writing:"],
      list: [
        "Initial deposits reserve development resources and scheduling commitments",
        "Milestone payments must be completed before continuation of subsequent work",
        "Final deliverables may be withheld until outstanding balances are cleared",
      ],
      footer:
        "Late payments may result in project delays, temporary suspension, or restricted access to services. Refunds, where applicable, shall be governed by the Refund Policy.",
    },
    {
      title: "6. Revisions & Scope Changes",
      content: [
        "Minor revisions within the approved project scope may be included.",
      ],
      list: [
        "Feature additions",
        "Structural redesigns",
        "New integrations",
        "Additional functionality outside the original quotation",
      ],
      footer:
        "Major scope changes may require revised quotations, updated timelines, or separate agreements.",
    },
    {
      title: "7. Intellectual Property Rights",
      content: [
        "Before final payment, all project materials, systems, and deliverables remain the property of Zaynex unless otherwise agreed.",
        "Upon full payment, ownership or usage rights may transfer according to the applicable project agreement.",
        "Zaynex may retain ownership of:",
      ],
      list: [
        "Reusable frameworks",
        "Internal systems",
        "Templates",
        "Development utilities",
        "Proprietary tools and infrastructure",
      ],
    },
    {
      title: "8. Support & Maintenance",
      content: ["Support and maintenance services may include:"],
      list: [
        "Bug fixes",
        "Minor updates",
        "Security maintenance",
        "Technical assistance",
      ],
      footer:
        "Support scope, duration, and response times depend on the selected package, quotation, or maintenance agreement.",
    },
    {
      title: "9. Confidentiality",
      content: [
        "Both parties agree to maintain confidentiality regarding:",
      ],
      list: [
        "Business information",
        "Credentials and authentication data",
        "Source code",
        "Internal communications",
        "Financial records",
        "Project-related materials",
      ],
      footer:
        "Confidential information shall not be disclosed without authorization unless required by law.",
    },
    {
      title: "10. Warranties Disclaimer",
      content: [
        "Software services are provided on an “as-is” and “commercially reasonable efforts” basis.",
        "Zaynex does not guarantee:",
      ],
      list: [
        "Uninterrupted operation",
        "Completely error-free systems",
        "Compatibility with all third-party services or environments",
      ],
    },
    {
      title: "11. Limitation of Liability",
      content: ["To the maximum extent permitted by law, Zaynex shall not be liable for:"],
      list: [
        "Lost profits",
        "Data loss",
        "Indirect or consequential damages",
        "Third-party service failures",
        "Infrastructure outages beyond reasonable control",
      ],
      footer:
        "Total liability shall not exceed the total amount paid for the affected service.",
    },
    {
      title: "12. Termination",
      content: [
        "Either party may terminate services through written notice where applicable.",
        "Termination does not remove obligations related to:",
      ],
      list: [
        "Outstanding payments",
        "Confidentiality obligations",
        "Intellectual property protections",
      ],
      footer:
        "Outstanding balances and completed milestone obligations remain payable after termination.",
    },
    {
      title: "13. Governing Law",
      content: [
        "This Agreement shall be governed and interpreted in accordance with the laws of the Republic of India.",
        "Disputes arising under this Agreement shall be subject to the jurisdiction of courts located in India.",
      ],
    },
    {
      title: "14. Contact Information",
      content: [
        "For project inquiries, billing matters, support requests, or legal concerns, users may contact Zaynex through the official communication channels provided on the website.",
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
      title="Service Agreement | Zaynex"
      description="Official Zaynex client agreement and service policies."
      path="/agreement"
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      
      {/* ─── HEADER: INDUSTRIAL INTEL INTERFACE ─── */}
      <header className="mb-14 border-b-4 border-[#030303] pb-8 md:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-left">
          {/* Brutalist Square Icon Frame */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-[#030303] bg-white text-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
            <FileText size={24} className="stroke-[2.5]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Service Agreement
          </h1>
        </div>

        {/* Legal Node Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-[10px] font-black uppercase tracking-wider text-zinc-700">
          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-400 font-bold block mb-0.5">// ISSUING SYSTEM</span>
            <span className="text-[#030303]">Zaynex Corporate</span>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-400 font-bold block mb-0.5">// DOMAIN ARCHIVE</span>
            <a href="https://zaynex.tech" rel="noopener" className="text-cyan-600 hover:text-black transition-colors block">
              zaynex.tech
            </a>
          </p>

          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-700 font-bold block mb-0.5">// AGREEMENT TYPE</span>
            <span className="text-[#030303]">Digital Services Agreement</span>
          </p>
        </div>
      </header>

      {/* ─── AGREEMENT COMPLIANCE SECTION CORE STACK ─── */}
      <main className="space-y-6 md:space-y-8" aria-label="Agreement Sections">
        {sections.map((section, index) => (
          <article
            key={index}
            className="rounded-none border-2 border-[#030303] bg-white p-6 sm:p-8 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-200 text-left relative overflow-hidden group"
          >
            {/* Top Index Corner Marker */}
            <span className="absolute top-3 right-4 font-mono text-[9px] font-black tracking-widest text-zinc-700 group-hover:text-cyan-600 transition-colors select-none">
              AGR_NODE_{(index + 1).toString().padStart(2, "0")}
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

            {/* Symmetrical System Check List */}
            {section.list && (
              <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-4 w-full">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-800 font-medium text-xs sm:text-sm"
                  >
                    <CheckCircle2
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
        <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900">
          © {new Date().getFullYear()} Zaynex Enterprise Matrix. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
);
}
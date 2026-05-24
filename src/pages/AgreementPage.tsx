"use client";

import { useEffect, useMemo } from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

export default function AgreementPage() {
  const sections = useMemo(() => [
    {
      title: "Service Agreement",
      content: ["This Service Agreement is entered between:"],
      list: ["Zaynex and Client"],
    },
    {
      title: "1. Scope of Services",
      content: [
        "Zaynex agrees to provide digital software and technology services including:",
      ],
      list: [
        "Custom development",
        "SaaS solutions",
        "ERP systems",
        "LMS systems",
        "Dashboard systems",
        "Maintenance and support",
      ],
      footer:
        "Specific project scope shall be defined separately in proposals or quotations.",
    },
    {
      title: "2. Client Responsibilities",
      content: ["The client agrees to:"],
      list: [
        "Provide accurate project requirements",
        "Submit content and assets on time",
        "Approve milestones promptly",
        "Maintain communication",
        "Pay invoices according to schedule",
      ],
      footer:
        "Project delays caused by missing client input may affect delivery timelines.",
    },
    {
      title: "3. Project Timeline",
      content: [
        "Estimated delivery schedules are approximate and may depend on:",
      ],
      list: [
        "Client feedback",
        "Scope changes",
        "Third-party services",
        "Technical limitations",
      ],
    },
    {
      title: "4. Milestones & Deliverables",
      content: ["Projects may include:"],
      list: [
        "Planning phase",
        "UI/UX phase",
        "Development phase",
        "Testing phase",
        "Deployment phase",
      ],
      footer: "Milestone approvals may trigger invoice payments.",
    },
    {
      title: "5. Payment Terms",
      content: ["Unless otherwise agreed:"],
      list: [
        "Deposits are non-refundable after work begins",
        "Milestone payments must be completed before continuation",
        "Final deliverables may be withheld until payment completion",
      ],
      footer: "Late payments may result in project suspension.",
    },
    {
      title: "6. Revisions & Scope Changes",
      content: ["Minor revisions within scope may be included."],
      list: ["Feature additions", "Structural redesigns", "New integrations"],
      footer: "Major changes may require updated quotations and timelines.",
    },
    {
      title: "7. Intellectual Property Rights",
      content: [
        "Before Final Payment",
        "All materials remain property of Zaynex.",
        "After Full Payment",
        "Ownership or usage rights transfer according to the signed agreement.",
        "Zaynex may retain rights to:",
      ],
      list: ["Reusable frameworks", "Internal systems", "Templates", "Proprietary tools"],
    },
    {
      title: "8. Support & Maintenance",
      content: ["Support terms may include:"],
      list: ["Bug fixes", "Minor updates", "Security maintenance"],
      footer:
        "Support duration and scope depend on the selected package or contract.",
    },
    {
      title: "9. Confidentiality",
      content: ["Both parties shall maintain confidentiality regarding:"],
      list: [
        "Business information",
        "Credentials",
        "Source code",
        "Internal communications",
        "Financial records",
      ],
    },
    {
      title: "10. Warranties Disclaimer",
      content: [
        "Software services are provided on an “as-is” and “commercially reasonable efforts” basis.",
        "Zaynex does not guarantee:",
      ],
      list: ["Uninterrupted operation", "Error-free systems", "Third-party compatibility"],
    },
    {
      title: "11. Limitation of Liability",
      content: ["Zaynex shall not be liable for:"],
      list: ["Lost profits", "Data loss", "Indirect damages", "Third-party failures"],
      footer: "Maximum liability shall not exceed the total fees paid.",
    },
    {
      title: "12. Termination",
      content: [
        "Either party may terminate with written notice.",
        "Termination does not remove obligations related to:",
      ],
      list: ["Outstanding payments", "Confidentiality", "Intellectual property protections"],
    },
    {
      title: "13. Governing Law",
      content: ["This Agreement shall be governed by:", "These Terms shall be governed and interpreted in accordance with the laws of the Republic of India.",
      ],
    },
    {
      title: "14. Legal Review Recommendation",
      content: [
        "Independent legal review is recommended before commercial use.",
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
      <SEO
        title="Service Agreement | Zaynex"
        description="Official Zaynex client agreement and service policies."
        path="/agreement"
      />
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-40 left-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        
        {/* Header - Optimized for SEO Structure */}
        <header className="mb-12 md:mb-16 border-b border-cyan-500/10 pb-8 md:pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
              <FileText className="text-cyan-400" size={28} aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.35)] break-words">
              Service Agreement
            </h1>
          </div>

          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <span className="font-medium text-white">Company:</span> Zaynex
            </p>
            <p>
              <span className="font-medium text-white">Website:</span>{" "}
              <a href="https://zaynex.tech" className="hover:text-cyan-400 transition-colors">
                zaynex.tech
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Agreement Type:</span> Digital Services Agreement
            </p>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="space-y-8 md:space-y-10" aria-label="Agreement Sections">
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
                      <CheckCircle2
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
"use client";

import { useEffect, useMemo } from "react";
import { Shield } from "lucide-react";

export default function PolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Introduction",
      content: [
        "Welcome to Zaynex. These Terms & Conditions govern the use of our website, software platforms, applications, and digital services.",
        "By accessing or using our services, you agree to comply with these Terms.",
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
      footer: "All services are delivered digitally unless otherwise agreed in writing.",
    },
    {
      title: "3. User Accounts",
      content: ["Users may be required to create accounts to access certain services."],
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
      list: [
        "Use the platform for illegal activities",
        "Attempt unauthorized access",
        "Upload malicious software",
        "Disrupt platform functionality",
        "Reverse engineer proprietary systems",
        "Misuse communication systems",
      ],
      footer: "Violation may result in suspension or termination.",
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
      content: ["Projects may be divided into milestones."],
      list: ["Initial deposit", "Milestone-based payments", "Final delivery payment"],
      footer:
        "Failure to complete payments may result in delayed delivery, service suspension, restricted access, or project termination. Invoices are payable within maximum 15 days.",
    },
    {
      title: "7. Revisions",
      list: [
        "Minor revisions are included",
        "Major scope changes may incur additional charges",
        "Unused revisions do not carry forward",
      ],
      footer: "Excessive revisions outside the agreed scope may require a revised quotation.",
    },
    {
      title: "8. Hosting & Deployment Disclaimer",
      content: ["Zaynex may assist with deployment and hosting setup. However:"],
      list: [
        "Third-party hosting providers remain independent entities",
        "We do not guarantee uninterrupted hosting availability",
        "Performance may depend on external infrastructure providers",
      ],
      footer:
        "Clients are responsible for maintaining active hosting subscriptions unless managed under a support agreement.",
    },
    {
      title: "9. Confidentiality",
      content: ["Both parties agree to protect confidential information including:"],
      list: [
        "Business data",
        "Login credentials",
        "Internal documents",
        "Client records",
        "Source code",
        "Financial information",
      ],
      footer: "Confidential information shall not be disclosed without authorization unless required by law.",
    },
    {
      title: "10. Security Commitment",
      content: ["Zaynex implements commercially reasonable security measures including:"],
      list: [
        "Authentication systems",
        "Access controls",
        "Encrypted communications where applicable",
        "Secure development practices",
      ],
      footer: "However, no digital system can guarantee absolute security.",
    },
    {
      title: "11. Limitation of Liability",
      content: ["To the maximum extent permitted by law, Zaynex shall not be liable for:"],
      list: [
        "Indirect damages",
        "Business interruption",
        "Data loss",
        "Profit loss",
        "Third-party service failures",
        "Cyber incidents beyond reasonable control",
      ],
      footer: "Total liability shall not exceed the amount paid for the affected service.",
    },
    {
      title: "12. Cancellation & Termination",
      content: [
        "Either party may terminate services under written notice.",
        "Zaynex reserves the right to suspend services for:",
      ],
      list: ["Non-payment", "Abuse", "Fraudulent activity", "Policy violations"],
      footer: "Outstanding balances remain payable after termination.",
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
        "These Terms shall be governed by the laws of:",
        "These Terms shall be governed and interpreted in accordance with the laws of the Republic of India.",
        "Disputes shall be resolved in the courts of the applicable jurisdiction.",
      ],
    },
    {
      title: "15. Legal Review Recommendation",
      content: [
        "Laws and regulations vary by jurisdiction. Professional legal review is strongly recommended before production or commercial deployment.",
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

      {/* Glow Effect */}
      <div className="absolute top-40 left-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        
        {/* Header - Configured for SEO Data Spiders */}
        <header className="mb-12 md:mb-16 border-b border-cyan-500/10 pb-8 md:pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <div className="flex items-center justify-center h-12 w-12 shrink-0 rounded-xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
              <Shield className="text-cyan-400" size={28} aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_0_20px_rgba(0,255,255,0.35)] break-words">
              Terms & Conditions
            </h1>
          </div>

          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <span className="text-white font-medium">Effective Date:</span> May 15, 2026
            </p>

            <p>
              <span className="text-white font-medium">Company Name:</span> Zaynex
            </p>

            <p>
              <span className="text-white font-medium">Website:</span>{" "}
              <a href="https://zaynex.tech" rel="noopener" className="hover:text-cyan-400 transition-colors">
                zaynex.tech
              </a>
            </p>

            <p>
              <span className="text-white font-medium">Contact Email:</span>{" "}
              <a href="mailto:support@zaynex.tech" className="hover:text-cyan-400 transition-colors">
                support@zaynex.tech
              </a>
            </p>

            <p>
              <span className="text-white font-medium">Company Address:</span> Company Address: Zaynex — Remote Global Operations
            </p>
          </div>
        </header>

        {/* Content Node Container */}
        <main className="space-y-8 md:space-y-10" aria-label="Terms and Conditions Elements">
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
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" aria-hidden="true" />
                      <span className="leading-6 md:leading-7">{item}</span>
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

        {/* Global Footer */}
        <footer className="mt-16 md:mt-20 border-t border-cyan-500/10 pt-8 md:pt-10 text-center">
          <p className="text-xs md:text-sm tracking-wide text-zinc-500">
            © {new Date().getFullYear()} Zaynex. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
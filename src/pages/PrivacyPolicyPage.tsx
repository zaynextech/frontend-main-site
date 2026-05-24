"use client";

import { useEffect, useMemo } from "react";
import { ShieldCheck, Lock } from "lucide-react";
import SEO from "@/components/SEO";

export default function PrivacyPolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Overview",
      content: [
        "Zaynex respects user privacy and is committed to protecting personal and business data.",
        "This Privacy Policy explains how information is collected, used, stored, and protected.",
      ],
    },
    {
      title: "2. Information We Collect",
      content: ["We may collect:"],
      groups: [
        {
          heading: "Personal Information",
          items: ["Name", "Email address", "Phone number", "Company details"],
        },
        {
          heading: "Technical Information",
          items: ["IP address", "Browser type", "Device information", "Usage logs"],
        },
        {
          heading: "Project Information",
          items: ["Uploaded files", "Messages", "Payment records", "Project documents"],
        },
      ],
    },
    {
      title: "3. How We Use Information",
      content: ["We use collected data to:"],
      list: [
        "Provide services",
        "Manage projects",
        "Process payments",
        "Improve platform performance",
        "Communicate with clients",
        "Maintain security",
      ],
    },
    {
      title: "4. Authentication & Security",
      content: [
        "We implement industry-standard practices to protect data including:",
      ],
      list: [
        "Secure authentication",
        "Access restrictions",
        "Encrypted transmission where applicable",
        "Role-based access controls",
      ],
      footer: "Users remain responsible for protecting account credentials.",
    },
    {
      title: "5. Data Sharing",
      content: ["We do not sell personal information.", "Data may be shared with:"],
      list: [
        "Hosting providers",
        "Payment processors",
        "Infrastructure providers",
        "Legal authorities where required",
      ],
    },
    {
      title: "6. Cookies & Analytics",
      content: ["The website may use:"],
      list: ["Cookies", "Session tracking", "Analytics tools"],
      footer: "Users may disable cookies through browser settings.",
    },
    {
      title: "7. Data Retention",
      content: ["Information is retained only as necessary for:"],
      list: [
        "Service delivery",
        "Legal obligations",
        "Security purposes",
        "Operational requirements",
      ],
    },
    {
      title: "8. User Rights",
      content: ["Depending on jurisdiction, users may have rights to:"],
      list: ["Access personal data", "Request corrections", "Request deletion", "Withdraw consent"],
      footer: "Requests may be submitted to: [Insert Privacy Email]",
    },
    {
      title: "9. Third-Party Services",
      content: ["Zaynex may integrate with third-party services including:"],
      list: [
        "Payment gateways",
        "Hosting providers",
        "Analytics providers",
        "Cloud storage systems",
      ],
      footer: "We are not responsible for third-party privacy practices.",
    },
    {
      title: "10. International Data Processing",
      content: [
        "Data may be processed in different jurisdictions depending on infrastructure providers and service requirements.",
      ],
    },
    {
      title: "11. Children’s Privacy",
      content: [
        "Services are not intended for users under the applicable legal age in their jurisdiction.",
      ],
    },
    {
      title: "12. Policy Updates",
      content: [
        "We may update this Privacy Policy periodically.",
        "Continued use of services indicates acceptance of updated policies.",
      ],
    },
    {
      title: "13. Legal Recommendation",
      content: [
        "Privacy laws vary internationally. Professional legal review is recommended before commercial deployment.",
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
        title="Privacy Policy | Zaynex"
        description="Read the Zaynex privacy policy and how we protect user and client information."
        path="/privacy"
      />
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-40 left-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        
        {/* Header - Semantic SEO Structure */}
        <header className="mb-12 md:mb-16 border-b border-cyan-500/10 pb-8 md:pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
              <ShieldCheck className="text-cyan-400" size={28} aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.35)] break-words">
              Privacy Policy
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

        {/* Sections Containment */}
        <main className="space-y-8 md:space-y-10" aria-label="Privacy Policy Contents">
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

              {section.groups && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {section.groups.map((group, idx) => (
                    <section
                      key={idx}
                      className="rounded-2xl border border-cyan-500/10 bg-black/20 p-5 sm:p-6"
                    >
                      <h3 className="mb-4 text-base sm:text-lg font-semibold text-white">
                        {group.heading}
                      </h3>

                      <ul className="space-y-3">
                        {group.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-zinc-300 text-sm"
                          >
                            <Lock
                              size={16}
                              className="mt-1 shrink-0 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              aria-hidden="true"
                            />
                            <span className="leading-5">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="mt-4 md:mt-5 space-y-3 md:space-y-4">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-300 text-sm md:text-base"
                    >
                      <Lock
                        size={16}
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
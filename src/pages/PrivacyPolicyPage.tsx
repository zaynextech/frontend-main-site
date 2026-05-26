"use client";

import { useEffect, useMemo } from "react";
import { ShieldCheck, Lock } from "lucide-react";
import SEO from "@/components/SEO";

export default function PrivacyPolicyPage() {
  const sections = useMemo(() => [
    {
      title: "1. Overview",
      content: [
        "Zaynex respects user privacy and is committed to protecting personal, business, and project-related data.",
        "This Privacy Policy explains how information is collected, used, stored, and protected when using our websites, platforms, applications, and services.",
      ],
    },
    {
      title: "2. Information We Collect",
      content: ["We may collect the following categories of information:"],
      groups: [
        {
          heading: "Personal Information",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "Company or organization details",
          ],
        },
        {
          heading: "Technical Information",
          items: [
            "IP address",
            "Browser type",
            "Device information",
            "Operating system",
            "Usage logs",
          ],
        },
        {
          heading: "Project Information",
          items: [
            "Uploaded files",
            "Messages and communications",
            "Project requirements",
            "Invoices and payment records",
            "Project-related documents",
          ],
        },
      ],
    },
    {
      title: "3. How We Use Information",
      content: ["Collected information may be used to:"],
      list: [
        "Provide and manage services",
        "Review project quotations and requirements",
        "Manage client accounts and dashboards",
        "Process invoices and payments",
        "Communicate with users and clients",
        "Improve platform functionality and performance",
        "Maintain operational security",
        "Comply with legal obligations",
      ],
    },
    {
      title: "4. Authentication & Security",
      content: [
        "Zaynex implements industry-standard security measures designed to protect user and project data including:",
      ],
      list: [
        "Secure authentication systems",
        "Access restrictions",
        "Encrypted communications where applicable",
        "Role-based access controls",
        "Secure development and deployment practices",
      ],
      footer:
        "Users remain responsible for protecting their own account credentials and devices.",
    },
    {
      title: "5. Data Sharing",
      content: [
        "Zaynex does not sell personal information.",
        "Information may be shared with trusted third-party providers where necessary for service delivery including:",
      ],
      list: [
        "Hosting providers",
        "Payment processors",
        "Cloud infrastructure providers",
        "Analytics providers",
        "Legal authorities where required by law",
      ],
    },
    {
      title: "6. Cookies & Analytics",
      content: ["Our platforms may use:"],
      list: [
        "Cookies",
        "Session tracking technologies",
        "Performance analytics tools",
      ],
      footer:
        "Users may disable cookies through browser settings, though certain features may become unavailable.",
    },
    {
      title: "7. Data Retention",
      content: ["Information may be retained as reasonably necessary for:"],
      list: [
        "Service delivery",
        "Project management",
        "Security and fraud prevention",
        "Legal and financial compliance",
        "Operational and backup purposes",
      ],
    },
    {
      title: "8. User Rights",
      content: [
        "Depending on applicable laws and jurisdiction, users may have rights to:",
      ],
      list: [
        "Access personal information",
        "Request corrections",
        "Request deletion of certain data",
        "Withdraw consent where applicable",
      ],
      footer:
        "Privacy-related requests may be submitted through the official contact channels provided on the website.",
    },
    {
      title: "9. Third-Party Services",
      content: [
        "Zaynex may integrate with third-party services including:",
      ],
      list: [
        "Payment gateways",
        "Hosting providers",
        "Analytics services",
        "Cloud storage systems",
      ],
      footer:
        "Third-party services operate independently and may have separate privacy policies and practices.",
    },
    {
      title: "10. International Data Processing",
      content: [
        "Data may be processed or stored in different jurisdictions depending on infrastructure providers, hosting services, and operational requirements.",
      ],
    },
    {
      title: "11. Children's Privacy",
      content: [
        "Zaynex services are not intended for users under the applicable legal age in their jurisdiction.",
      ],
    },
    {
      title: "12. Policy Updates",
      content: [
        "This Privacy Policy may be updated periodically.",
        "Continued use of the services after updates constitutes acceptance of the revised policy.",
      ],
    },
    {
      title: "13. Contact Information",
      content: [
        "For privacy-related inquiries, support requests, or data-related concerns, users may contact Zaynex through the official contact channels provided on the website.",
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
      title="Privacy Policy | Zaynex"
      description="Read the Zaynex privacy policy and how we protect user and client information."
      path="/privacy"
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      
      {/* ─── HEADER: INDUSTRIAL INTEL INTERFACE ─── */}
      <header className="mb-14 border-b-4 border-[#030303] pb-8 md:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-left">
          {/* Brutalist Square Icon Frame */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-[#030303] bg-white text-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)] select-none">
            <ShieldCheck size={24} className="stroke-[2.5]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Privacy Policy
          </h1>
        </div>

        {/* Legal Node Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono text-[10px] font-black uppercase tracking-wider text-zinc-700">
          <p className="border-l-2 border-zinc-200 pl-3">
            <span className="text-zinc-400 font-bold block mb-0.5">// EFFECTIVE DATE</span>
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
        </div>
      </header>

      {/* ─── PRIVACY COMPLIANCE SECTION CORE STACK ─── */}
      <main className="space-y-6 md:space-y-8" aria-label="Privacy Policy Contents">
        {sections.map((section, index) => (
          <article
            key={index}
            className="rounded-none border-2 border-[#030303] bg-white p-6 sm:p-8 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-200 text-left relative overflow-hidden group"
          >
            {/* Top Index Corner Marker */}
            <span className="absolute top-3 right-4 font-mono text-[9px] font-black tracking-widest text-zinc-300 group-hover:text-cyan-600 transition-colors select-none">
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

            {/* Sub-Group Grid Node Processing */}
            {section.groups && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 border-t border-zinc-100 pt-5">
                {section.groups.map((group, idx) => (
                  <section
                    key={idx}
                    className="rounded-none border border-[#030303] bg-zinc-50 p-4 sm:p-5 shadow-[2px_2px_0px_rgba(3,3,3,1)] flex flex-col justify-between"
                  >
                    <h3 className="mb-3 text-xs font-black uppercase tracking-wide text-[#030303]">
                      {group.heading}
                    </h3>

                    <ul className="space-y-2.5">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-zinc-800 font-medium text-xs"
                        >
                          <Lock
                            size={12}
                            className="mt-0.5 shrink-0 text-cyan-600 stroke-[2.5]"
                            aria-hidden="true"
                          />
                          <span className="leading-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}

            {/* Standard Bullet List Sub-Interface */}
            {section.list && (
              <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-4 w-full">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-800 font-medium text-xs sm:text-sm"
                  >
                    <Lock
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
              <footer className="mt-6 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-900 border-t-2 border-dashed border-zinc-100 pt-4 leading-normal">
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
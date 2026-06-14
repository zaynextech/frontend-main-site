"use client";

import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  // SEO optimization: Keyword-rich labeling structures
  Services: [
    { name: "Website Development", path: "/services/web-development" },
    { name: "Custom Software", path: "/services/custom-software" },
    { name: "Business Systems", path: "/services/business-systems" },
    { name: "SEO Services", path: "/services/seo-optimization" },
    { name: "UI/UX Design", path: "/services/uiux-design" },
  ],

  Company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Business Profile", path: "https://g.page/r/zaynextech-placeholder", isExternal: true },
    { name: "Blog", path: "/blog" },
    { name: "Client Site", path: "https://client.zaynex.tech/", isExternal: true }
  ],

  Resources: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Service Agreement", path: "/agreement" },
    { name: "Refund Policy", path: "/refund-policy" },
  ],
};

const Footer = () => {
  return (
   <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#07111A] px-4 py-12 w-full antialiased sm:px-6 md:py-16 lg:px-10">

  {/* Cyan Glow */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />
      
      {/* ================= INJECTED ORGANIZATION SCHEMA ENGINE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zaynex",
            "url": "https://zaynex.tech",
            "logo": "https://zaynex.tech/logo.png",
            "email": "hello@zaynex.tech",
            "telephone": "+919258885837",
            "sameAs": [
              "https://www.linkedin.com/company/zaynextech/",
              "https://www.instagram.com/zaynex.tech"
            ]
          }),
        }}
      />

      {/* ================= PREMIUM BACKGROUND GRAPHICS ENGINE ================= */}
   
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        
        {/* Main Columns Layout Workspace: Modified grid rules for exact mobile splitting */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 xl:gap-10 items-start">
          
          {/* LEFT INTERFACE COLUMN: Full-width span on mobile, standard layout proportions on desktop panels */}
          <div className="space-y-6 col-span-2 md:col-span-3 lg:col-span-2 relative z-10 contain-layout px-4 py-6 bg-neutral-950/20 backdrop-blur-[1px] rounded-2xl border border-white/5 group/brand">
            
            {/* ================= PREMIUM NEON HUD GLOW FRAME ================= */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none text-cyan-500/40 transform-gpu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <defs>
                <filter id="footer-neon-glow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect
                x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="16" ry="16"
                stroke="currentColor" strokeWidth="1.5" strokeDasharray="500 100 1500"
                filter="url(#footer-neon-glow)"
                className="text-cyan-500/70 sm:text-cyan-400/70 transition-opacity duration-200"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Hardware Geometric Accent Tag shifted to the breakout gap */}
            <div className="absolute top-0 right-8 -translate-y-1/2 flex gap-1 items-center px-2 py-0.5 bg-[#030303] border border-cyan-500/30 rounded-full scale-75">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              <span className="text-[7px] font-mono tracking-widest text-white uppercase">SYS.INFO</span>
            </div>
            {/* ============================================================ */}

            {/* Brand Representation Block */}
            <div className="space-y-4 relative z-10">
              <div className="flex items-center text-white transition-colors duration-300 group-hover/brand:text-cyan-400">
                <Logo />
              </div>
              <p className="break-words text-xs sm:text-sm leading-relaxed text-zinc-100">
                Zaynex builds professional websites, custom software, and digital solutions that help businesses grow online.
              </p>
            </div>

            {/* Search Engine Optimized Contact Telemetry Layer */}
            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-100 font-mono relative z-10">
              <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span className="text-cyan-500/80 text-[11px]">//</span> hello@zaynex.tech
              </p>
           
              <p className="flex items-center gap-2 text-zinc-100 select-none">
                <span className="text-zinc-100 text-[11px]">//</span> Serving clients worldwide
              </p>
            </div>

            {/* Social Media Vectors Row */}
            <address className="flex flex-wrap gap-2.5 not-italic relative z-10" aria-label="Social Media Links">
              <a
                href="https://www.instagram.com/zaynex.tech?igsh=aW1vdGxsaW4waHQy"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-2 text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/20 hover:text-pink-400"
              >
                <FaInstagram size={14} className="relative z-10 transition-transform duration-300 group-hover/icon:scale-110" />
              </a>

              <a
                href="https://www.facebook.com/share/1CekcyqqMx/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-2 text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:text-blue-400"
              >
                <FaFacebook size={14} className="relative z-10 transition-transform duration-300 group-hover/icon:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/company/zaynextech/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-2 text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/20 hover:text-cyan-400"
              >
                <FaLinkedin size={14} className="relative z-10 transition-transform duration-300 group-hover/icon:scale-110" />
              </a>
            </address>
          </div>

          {/* RIGHT COLUMNS: Navigation links stack as 2 clean rows on phone layouts, uniform on desktop */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav 
              key={title} 
              className="space-y-4 col-span-1 mt-2 md:mt-0 lg:mt-4" 
              aria-label={`${title} Links`}
            >
              <h4 className="text-[13px] sm:text-[15px] font-bold font-mono uppercase tracking-[0.2em] text-cyan-400 select-none">
                {title}
              </h4>

              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {"isExternal" in link && link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center overflow-hidden text-xs sm:text-sm text-zinc-100 transition-all duration-200 hover:text-white break-words"
                      >
                        <span className="relative h-5 overflow-hidden">
                          <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
                            <span className="flex items-center h-5 text-zinc-100 group-hover:text-white">{link.name}</span>
                            <span className="flex items-center h-5 text-cyan-400 font-medium">{link.name}</span>
                          </span>
                        </span>
                        <ArrowUpRight size={12} className="ml-0.5 shrink-0 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 text-cyan-400" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="group relative inline-flex items-center overflow-hidden text-xs sm:text-sm text-zinc-400 transition-all duration-200 hover:text-white break-words"
                      >
                        <span className="relative h-5 overflow-hidden">
                          <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
                            <span className="flex items-center h-5 text-zinc-100 group-hover:text-white">{link.name}</span>
                            <span className="flex items-center h-5 text-cyan-400 font-medium">{link.name}</span>
                          </span>
                        </span>
                        <ArrowUpRight size={12} className="ml-0.5 shrink-0 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 text-cyan-400" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Metadata Block */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/5 pt-8 md:mt-16 text-center select-none pointer-events-none">
          <p className="text-[12px] font-mono tracking-wider text-zinc-100 uppercase">
            © {new Date().getFullYear()} ZAYNEX // DIGITAL PLATFORM CORP. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
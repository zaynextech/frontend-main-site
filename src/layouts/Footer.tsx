import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import {

  ArrowUpRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  Solutions: [
    { name: "Custom Software", path: "/services" },
    { name: "SaaS Platforms", path: "/services" },
    { name: "ERP Systems", path: "/services" },
    { name: "LMS Solutions", path: "/services" },
    { name: "Cloud Infrastructure", path: "/services" },
  ],

  Company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ],

  Legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Service Agreement", path: "/agreement" },
    { name: "Refund Policy", path: "/refund-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#030303] px-4 py-12 antialiased w-full sm:px-6 md:py-16 lg:px-10">
      
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 xl:gap-10">
          
          {/* Brand */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-2">
            
            <div className="flex items-center">
              <Logo />
            </div>

            <p className="max-w-sm break-words text-sm leading-7 text-slate-400">
              Zaynex designs and develops modern websites, SaaS platforms, and business systems for companies looking to grow online..
            </p>

            {/* Contact */}
            <address
                className="flex flex-wrap gap-4 not-italic"
                aria-label="Social Media Links"
              >
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/zaynex.tech?igsh=aW1vdGxsaW4waHQy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Zaynex Instagram"
                  className="group relative overflow-hidden rounded-2xl border border-pink-500/10 bg-white/[0.03] p-3 text-slate-400 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <FaInstagram
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1CekcyqqMx/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Zaynex Facebook"
                  className="group relative overflow-hidden rounded-2xl border border-blue-500/10 bg-white/[0.03] p-3 text-slate-400 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <FaFacebook
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/zaynextech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Zaynex LinkedIn"
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-white/[0.03] p-3 text-slate-400 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <FaLinkedin
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Zaynex YouTube"
                  className="group relative overflow-hidden rounded-2xl border border-red-500/10 bg-white/[0.03] p-3 text-slate-400 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <FaYoutube
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </a>
              </address>
          </div>

          {/* Navigation */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav
              key={title}
              className="space-y-6"
              aria-label={`${title} Links`}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/90">
                {title}
              </h4>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group relative inline-flex items-center overflow-hidden text-sm text-slate-400 transition-all duration-300 hover:text-white break-words"
                    >
                      {/* Animated Text */}
                      <span className="relative h-5 overflow-hidden">
                        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
                          
                          <span className="flex items-center">
                            {link.name}
                          </span>

                          <span className="flex items-center text-cyan-500">
                            {link.name}
                          </span>
                        </span>
                      </span>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={14}
                        className="ml-1 shrink-0 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom */}
          <div className="mt-12 flex items-center justify-center border-t border-cyan-500/10 pt-8 md:mt-16">
            
            <p className="text-center text-xs tracking-wide text-slate-400">
              © {new Date().getFullYear()} Zaynex. All rights reserved.
            </p>

          </div>
      </div>
    </footer>
  );
};

export default Footer;
import GlobalPresence from "@/components/home/GlobalPresence";
import ServicesPreview from "@/components/home/ServicesPreview";
import { motion } from "framer-motion";

import {
  Globe,
  ShoppingCart,
  GraduationCap,
  Building2,
  Search,
  Palette,
  LayoutDashboard,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

interface SolutionItem {
  slug: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  reverse: boolean;
}

// ==========================================
// 🎨 BRAND CENTRAL COLOR PALETTE CONFIGURATION
// ==========================================
const PALETTE = {
  mainBg: "bg-[#030303]",
  textMain: "text-white",
  textMuted: "text-zinc-300",
  textFeatures: "text-zinc-300",

  accentGradient:
    "from-white via-white to-white/20",

  accentSolidBtn:
    "border-2 border-cyan-500 bg-transparent hover:bg-cyan-500/10 text-white",

  accentIconColor:
    "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]",

  glowOverlay: "bg-cyan-500/5",
  emeraldGlow: "bg-emerald-500/5",
};

const solutions: SolutionItem[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "Modern high-performance websites designed for businesses, startups, and brands with premium UI and scalable architecture.",
    icon: Globe,
    image: "/images/web-dev.png",
    reverse: false,
  },

  {
    slug: "ecommerce-development",
    number: "02",
    title: "E-commerce Development",
    description:
      "Professional online stores with secure payments, product management, and optimized customer experiences.",
    icon: ShoppingCart,
    image: "/images/ecommerce.png",
    reverse: true,
  },

  {
    slug: "lms-development",
    number: "03",
    title: "LMS Development",
    description:
      "Advanced learning management systems for schools, creators, and modern education platforms.",
    icon: GraduationCap,
    image: "/images/lms.png",
    reverse: false,
  },

  {
    slug: "business-systems",
    number: "04",
    title: "Business Systems",
    description:
      "Custom ERP systems, automation tools, and enterprise dashboards built for scalable business operations.",
    icon: Building2,
    image: "/images/business.png",
    reverse: true,
  },

  {
    slug: "seo-optimization",
    number: "05",
    title: "SEO Optimization",
    description:
      "Improve search visibility, rankings, and digital growth using modern SEO strategies and optimization.",
    icon: Search,
    image: "/images/seo.png",
    reverse: false,
  },

  {
    slug: "uiux-design",
    number: "06",
    title: "UI/UX Design",
    description:
      "Premium interfaces with modern layouts, smooth experiences, and conversion-focused design systems.",
    icon: Palette,
    image: "/images/uiux.png",
    reverse: true,
  },

  {
    slug: "dashboard-systems",
    number: "07",
    title: "Dashboard Systems",
    description:
      "Secure admin dashboards and analytics systems for teams, businesses, and enterprise workflows.",
    icon: LayoutDashboard,
    image: "/images/dashboard.png",
    reverse: false,
  },

  {
    slug: "branding-digital-presence",
    number: "08",
    title: "Branding & Digital Presence",
    description:
      "Build a strong online identity with premium branding and professional digital presence strategies.",
    icon: BadgeCheck,
    image: "/images/branding.png",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <main className={`min-h-screen ${PALETTE.mainBg} ${PALETTE.textMain} overflow-hidden relative antialiased`}>
       {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-50 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/60" />
 
      </div>
      
      {/* ─── ZAYNEX BRAND BACKGROUND SYSTEM ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Primary Centered Glow */}
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />
        
        {/* Accent Glow */}
        <div className={`absolute right-[10%] bottom-[20%] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full ${PALETTE.emeraldGlow} blur-[130px]`} />

        {/* Standard Zaynex Radial Dotted Layout Grid Mask */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      {/* SECTION HEADER */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-[1.1]">
          Our{" "}
          <span className={`bg-gradient-to-b ${PALETTE.accentGradient} bg-clip-text text-transparent`}>
            Solutions
          </span>
        </h1>
        <p className={`mt-6 max-w-2xl mx-auto ${PALETTE.textMuted} antialiased leading-relaxed text-sm sm:text-sm`}>
          Modern digital solutions designed for businesses that want scalable systems, premium branding, and a strong online presence.
        </p>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-40">
        {solutions.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-120px" }}
              className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative"
            >
              
              {/* IMAGE HOUSING LAYER */}
              <div className={`relative flex justify-center w-full ${item.reverse ? "md:order-last" : "md:order-first"} order-first`}>
                <div className="w-full max-w-md aspect-[4/3] flex items-center justify-center relative">
                  
                  {/* Subtle dynamic background glow focused right behind image */}
                  <div className="absolute w-64 h-64 bg-cyan-500/[0.03] blur-3xl rounded-full pointer-events-none" />

                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[350px] object-contain drop-shadow-[0_20px_40px_rgba(6,182,212,0.15)] z-10 relative"
                    loading="lazy"
                    onLoad={(e) => {
                      // Simple safe fade-in when dynamic images finish fetching
                      e.currentTarget.style.opacity = "1";
                    }}
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                    }}
                  />

                  {/* ─── CONNECTOR ARROWS FROM PUBLIC/ ─── */}
                  <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
                    {!item.reverse ? (
                      <img 
                        src="/right.png" 
                        alt="" 
                        role="presentation"
                        className="absolute top-1/2 left-[80%] w-32 max-w-none transform -translate-y-1/2 opacity-80 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    ) : (
                      <img 
                        src="/left.png" 
                        alt="" 
                        role="presentation"
                        className="absolute top-1/2 right-[80%] w-32 max-w-none transform -translate-y-1/2 opacity-80 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    )}
                  </div>

                </div>
              </div>

              {/* CONTENT INFO BLOCK */}
              <div className="space-y-6 text-left relative z-10">
                {/* Brand Number Badge */}
                <div className="inline-flex w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 items-center justify-center text-cyan-400 font-bold text-sm shadow-sm backdrop-blur-md">
                  {item.number}
                </div>

                {/* Subtitle Title Text with Soft Matte Shine */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  {item.title}
                </h2>

                <p className={`${PALETTE.textMuted} antialiased leading-relaxed text-sm sm:text-base`}>
                  {item.description}
                </p>

                {/* Checklist Bullet Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    "Modern enterprise UI",
                    "Scalable architecture",
                    "Fast performance",
                    "Responsive design",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 ${PALETTE.textFeatures} text-xs sm:text-sm antialiased`}
                    >
                      <CheckCircle2
                        size={16}
                        className={`${PALETTE.accentIconColor} flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Brand Action CTA Trigger Button */}
                <div className="pt-4">
            <Link
              to={`/services/${item.slug}`}
              className={`group relative inline-flex items-center justify-center gap-2 ${PALETTE.accentSolidBtn} overflow-hidden rounded-full h-11 px-8 text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-500/10 blur-xl" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

              {/* Content */}
              <span className="relative z-10 flex items-center">
                Learn More

                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
                </div>
              </div>

            </motion.div>
          );
        })}

      </section>
      <GlobalPresence />

      <ServicesPreview />
    </main>
  );
}
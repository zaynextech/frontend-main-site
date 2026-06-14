"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa6";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite,
  SiNodedotjs, SiNestjs, SiLaravel, SiPython,
  SiPostgresql,
  SiDocker, SiKubernetes, SiGithubactions,
  SiOpenai, SiLangchain, SiApachekafka
} from "react-icons/si";
import { TbDatabaseSearch } from "react-icons/tb";

const scatteredTools = [
  { name: "React", icon: SiReact, color: "#61DAFB", delay: 0.01, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-2 lg:mt-4", rotZ: "rotate-[-4deg]", floatY: [-3, 3, -3], duration: 4.2 },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", delay: 0.02, sizeStyle: "w-20 h-20 xs:w-22 xs:h-22 sm:w-28 sm:h-28 mt-0 lg:-mt-6", rotZ: "rotate-[6deg]", floatY: [4, -4, 4], duration: 5.0 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", delay: 0.03, sizeStyle: "w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mt-4 lg:mt-8", rotZ: "rotate-[-8deg]", floatY: [-2, 2, -2], duration: 3.8 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", delay: 0.04, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-1 lg:-mt-2", rotZ: "rotate-[3deg]", floatY: [3, -3, 3], duration: 4.6 },
  { name: "Vite", icon: SiVite, color: "#646CFF", delay: 0.05, sizeStyle: "w-20 h-20 xs:w-22 xs:h-22 sm:w-26 sm:h-26 mt-5 lg:mt-12", rotZ: "rotate-[5deg]", floatY: [-4, 3, -4], duration: 4.8 },
  { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF", delay: 0.06, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-22 sm:h-22 mt-0 lg:-mt-10", rotZ: "rotate-[-6deg]", floatY: [4, -3, 4], duration: 5.2 },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C", delay: 0.07, sizeStyle: "w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mt-2 lg:mt-2", rotZ: "rotate-[2deg]", floatY: [-3, 3, -3], duration: 4.0 },
  { name: "Vector DB", icon: TbDatabaseSearch, color: "#FF9E0F", delay: 0.08, sizeStyle: "w-16 h-16 xs:w-18 xs:h-18 sm:w-18 sm:h-18 mt-1 lg:-mt-4", rotZ: "rotate-[-3deg]", floatY: [2, -4, 2], duration: 4.4 },
  { name: "AWS", icon: FaAws, color: "#FF9900", delay: 0.09, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-3 lg:mt-6", rotZ: "rotate-[8deg]", floatY: [-4, 4, -4], duration: 4.9 },
  { name: "Docker", icon: SiDocker, color: "#2496ED", delay: 0.10, sizeStyle: "w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mt-0 lg:-mt-8", rotZ: "rotate-[-4deg]", floatY: [3, -3, 3], duration: 4.1 },
  { name: "K8s", icon: SiKubernetes, color: "#326CE5", delay: 0.11, sizeStyle: "w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mt-4 lg:mt-10", rotZ: "rotate-[7deg]", floatY: [-4, 2, -4], duration: 5.4 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", delay: 0.12, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-22 sm:h-22 mt-0 lg:-mt-10", rotZ: "rotate-[-2deg]", floatY: [2, -2, 2], duration: 3.6 },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", delay: 0.13, sizeStyle: "w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 mt-2 lg:mt-4", rotZ: "rotate-[4deg]", floatY: [-3, 4, -3], duration: 4.5 },
  { name: "Python", icon: SiPython, color: "#3776AB", delay: 0.14, sizeStyle: "w-20 h-20 xs:w-24 xs:h-24 sm:w-26 sm:h-26 mt-0 lg:-mt-12", rotZ: "rotate-[-5deg]", floatY: [5, -5, 5], duration: 4.7 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", delay: 0.15, sizeStyle: "w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mt-3 lg:mt-8", rotZ: "rotate-[3deg]", floatY: [-2, 3, -2], duration: 3.9 },
  { name: "Kafka", icon: SiApachekafka, color: "#FFFFFF", delay: 0.16, sizeStyle: "w-16 h-16 xs:w-18 xs:h-18 sm:w-22 sm:h-22 mt-0 lg:-mt-4", rotZ: "rotate-[-7deg]", floatY: [3, -3, 3], duration: 4.3 },
];

export default function TechStackLeft() {
  return (
    <>
      {/* 1. MOBILE/TABLET VIEWPORT ENGINE */}
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 xs:gap-x-3 xs:gap-y-6 sm:gap-x-6 sm:gap-y-12 relative order-2 lg:order-none py-6 max-w-[580px] mx-auto contain-layout lg:hidden">
        {scatteredTools.map((tool) => (
          <motion.div
            key={`mobile-${tool.name}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10px" }}
            /* Added group/card utility back here */
            whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.6)" }}
            transition={{ type: "spring", stiffness: 140, damping: 15, delay: tool.delay }}
            className={`relative rounded-lg border-2 border-cyan-400/50 bg-white/[0.04] backdrop-blur-md shadow-sm select-none transform-gpu group/card ${tool.sizeStyle} ${tool.rotZ}`}
          >
            <motion.div
              animate={{ y: tool.floatY }}
              transition={{ duration: tool.duration, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex flex-col items-center justify-center p-1.5 transform-gpu contain-strict"
            >
              <div className="absolute top-1.5 left-1.5 w-1 h-1 border-t border-l border-cyan-400/40" />
              <div className="absolute bottom-1.5 right-1.5 w-1 h-1 border-b border-r border-cyan-400/40" />
              
              <div className="transform-gpu filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                <tool.icon style={{ color: tool.color }} className="text-xl sm:text-2xl" />
              </div>

              <span className="absolute bottom-1 text-[7px] sm:text-[8.5px] font-mono tracking-widest text-zinc-300 font-bold uppercase opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                {tool.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 2. DESKTOP ISOMORPHIC 3D VIEWPORT ENGINE */}
      <div 
        className="hidden lg:flex flex-wrap justify-center items-center gap-x-4 gap-y-12 lg:col-span-7 relative order-2 lg:order-none transform-gpu py-12 max-w-[580px] mx-auto lg:mx-0 contain-layout"
        style={{ 
          perspective: "2000px",
          transformStyle: "preserve-3d"
        }}
      >
        {scatteredTools.map((tool) => (
          <motion.div
            key={`desktop-${tool.name}`}
            initial={{ opacity: 0, z: -100, rotateY: 26, rotateX: 14, skewY: -5 }}
            whileInView={{ opacity: 1, z: 0, rotateY: 26, rotateX: 14, skewY: -5 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ 
              z: 40,
              rotateY: 12,
              rotateX: 6,
              borderColor: "rgba(6,182,212,0.5)",
              boxShadow: "-20px 25px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(6,182,212,0.25)"
            }}
            transition={{ type: "spring", stiffness: 130, damping: 13, delay: tool.delay }}
            /* Added group/card utility layer context back cleanly */
            className={`relative rounded-lg border-2 border-cyan-400/60 bg-white/[0.04] backdrop-blur-md shadow-sm select-none transform-gpu group/card ${tool.sizeStyle} ${tool.rotZ}`}
            style={{ 
              transformStyle: "preserve-3d",
              willChange: "transform, opacity"
            }}
          >
            <motion.div
              animate={{ y: tool.floatY }}
              transition={{ duration: tool.duration, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex flex-col items-center justify-center p-1.5 transform-gpu contain-strict"
              style={{ 
                transformStyle: "preserve-3d",
                willChange: "transform"
              }}
            >
              <div className="absolute top-1.5 left-1.5 w-1 h-1 border-t border-l border-cyan-400/40" />
              <div className="absolute bottom-1.5 right-1.5 w-1 h-1 border-b border-r border-cyan-400/40" />

              <div 
                className="transform-gpu transition-transform duration-200 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                style={{ transform: "translateZ(25px)" }}
              >
                <tool.icon style={{ color: tool.color }} className="text-2xl" />
              </div>

              <span 
                className="absolute bottom-1 text-[8.5px] font-mono tracking-widest text-zinc-300 font-bold uppercase opacity-0 group-hover/card:opacity-100 transition-opacity duration-200"
                style={{ 
                  transform: "translateZ(10px)",
                  contentVisibility: "auto"
                }}
              >
                {tool.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
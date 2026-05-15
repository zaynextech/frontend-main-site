import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { FaAws } from "react-icons/fa6";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite,
  SiNodedotjs, SiNestjs, SiLaravel, SiPython,
  SiPostgresql,
  SiDocker, SiKubernetes, SiGithubactions,
  SiOpenai, SiLangchain, SiApachekafka
} from "react-icons/si";
import { TbDatabaseSearch } from "react-icons/tb";
import InteractiveGrid from "../ui/interactive-grid";

const categories = [
  {
    title: "Frontend",
    gridClass: "md:col-span-2",
    tools: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    title: "AI & Intelligence",
    gridClass: "md:col-span-1",
    tools: [
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "Vector DB", icon: TbDatabaseSearch, color: "#FF9E0F" },
    ],
  },
  {
    title: "Infrastructure",
    gridClass: "md:col-span-1",
    tools: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "K8s", icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub", icon: SiGithubactions, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend Systems",
    gridClass: "md:col-span-2",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Kafka", icon: SiApachekafka, color: "#FFFFFF" },
    ],
  },
];

const ToolCard = ({ category, index }: { category: typeof categories[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04] ${category.gridClass}`}
    >
      {/* Brand-Aligned Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15), /* Nexa Cyan Glow */
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-500">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-4">
          {category.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-5 py-3 backdrop-blur-md transition-colors"
            >
              <tool.icon style={{ color: tool.color }} className="text-2xl drop-shadow-md" />
              <span className="text-sm font-semibold text-zinc-200">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
const TechStack = () => {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem]  bg-[#030303] px-6 py-24 md:py-32">
      
      {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="lazy"
          className="h-full w-full object-cover scale-105 opacity-20 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/80" />

        {/* Cyan Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Grid */}
        <InteractiveGrid />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 space-y-5 text-center md:text-left">
          
         

          <h2 className="max-w-5xl text-4xl font-black tracking-tighter text-white md:text-6xl lg:text-5xl">
            Engineering systems built for{" "}
            <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              scale and performance.
            </span>
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            Zaynex leverages modern frameworks, AI infrastructure,
            enterprise-grade backend systems, and cloud-native technologies
            to build secure, scalable, and future-ready digital platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((category, idx) => (
            <ToolCard
              key={category.title}
              category={category}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
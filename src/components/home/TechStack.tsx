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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.04] ${category.gridClass}`}
    >
      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {category.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.06)" }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-2 rounded-xl border border-white/[0.04] bg-black/20 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md transition-colors"
            >
              <tool.icon
                style={{ color: tool.color }}
                className="text-base sm:text-lg md:text-xl"
              />

              <span className="text-[11px] font-medium text-zinc-200 sm:text-xs md:text-sm">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#030303] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="lazy"
          className="h-full w-full scale-105 object-cover opacity-15 blur-[2px]"
        />

        <div className="absolute inset-0 bg-[#030303]/85" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <InteractiveGrid />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 space-y-4 text-center md:mb-16 md:text-left">

          <h2 className="max-w-4xl text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              scale & performance.
            </span>
          </h2>

          <p className="max-w-xl text-xs leading-relaxed text-zinc-400 sm:text-sm">
            Modern frameworks, scalable systems, and cloud-ready technologies for fast digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
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
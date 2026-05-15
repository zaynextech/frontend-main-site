import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { 
    value: "Next.js", 
    label: "Modern Frontend", 
    sub: "Fast & SEO Optimized", 
    highlight: true 
  },

  { 
    value: "TypeScript", 
    label: "Clean Code", 
    sub: "Scalable & Maintainable", 
    highlight: false 
  },

  { 
    value: "Responsive", 
    label: "UI Experience", 
    sub: "Mobile & Desktop Ready", 
    highlight: false 
  },

  { 
    value: "24/7", 
    label: "Client Support", 
    sub: "Remote Collaboration", 
    highlight: false 
  },
];
const Stats = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 bg">
      
      {/* Subtle Background Glow for the Stats row */}
      <div className="absolute inset-0 top-1/2 -z-10 " />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card className="group relative overflow-hidden border-white/5 bg-zinc-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-zinc-800/60">

              {/* Top Glow */}
              <div 
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${stat.highlight ? 'via-accent' : 'via-primary'} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60`} 
              />

              <div className="flex flex-col gap-1.5">

                {/* Value */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>

                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${stat.highlight ? 'bg-accent' : 'bg-primary'}`} />
                </div>

                {/* Label */}
                <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${stat.highlight ? 'text-accent' : 'text-primary'}`}>
                  {stat.label}
                </span>

                {/* Subtext */}
                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-400">
                  {stat.sub}
                </span>
              </div>

            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
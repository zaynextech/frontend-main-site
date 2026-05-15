import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";
import api from "@/lib/axios";

interface PortfolioProject {
  id: string;
  slug: string;
  projectName: string;
  category: string;
  shortDescription: string;
  rating: string;
  liveDemoUrl: string;
  thumbnailImage: string;
  bookingEnabled: boolean;
}

const Portfolio = () => {
const [projects, setProjects] = useState<PortfolioProject[]>([]);

useEffect(() => {
  let isMounted = true;

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/portfolio");

      if (isMounted) {
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.error(
        "Failed to fetch portfolio:",
        error
      );
    }
  };

  fetchProjects();

  return () => {
    isMounted = false;
  };
}, []);
  return (
    <section className="relative overflow-hidden bg-[#030303]/50 px-10 py-5 text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <img
          src="/images/bg.jpg"
          alt="Background"
          className="h-full w-full scale-105 object-cover opacity-20 blur-[4px]"
        />

        <div className="absolute inset-0 bg-[#030303]/30" />

        
        <InteractiveGrid />
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mb-14 text-center"
>

  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
    Portfolio
  </span>

 <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
  Featured Projects
</h1>

<p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
  Modern websites and frontend experiences built with clean UI and performance in mind.
</p>

</motion.div>

        {/* Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
  {projects.map((demo) => (
    <Card
      key={demo.id}
      className="group rounded-[2rem] border-white/5 bg-[#080808] p-0 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Responsive Aspect Ratio Image */}
      <div
        className="h-52 sm:h-64 md:h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${demo.thumbnailImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-10" />
      </div>

      <div className="p-6 sm:p-8">
        {/* Rating Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Star size={14} className="fill-accent text-accent" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent/90">
            {demo.rating} Client Rated
          </span>
        </div>

        {/* Title & Category */}
        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
          {demo.projectName}
        </h3>
        <p className="text-primary/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
          {demo.category}
        </p>

        {/* Description - Clamped for consistency */}
        <p className="mt-4 text-zinc-400 text-sm leading-relaxed line-clamp-3 font-light">
          {demo.shortDescription}
        </p>

        {/* BUTTON SECTION: Grid-based responsiveness */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href={`/portfolio/${demo.slug}`} className="w-full">
            <Button 
              variant="outline" 
              className="w-full rounded-xl border-white/10 bg-transparent text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Details
            </Button>
          </a>

          <a href={demo.liveDemoUrl} target="_blank" className="w-full">
            <Button 
              className="w-full rounded-xl bg-primary text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-primary/10"
            >
              Live Demo
            </Button>
          </a>

          {demo.bookingEnabled && (
            <a href="/quote" className="w-full sm:col-span-2">
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all"
              >
                Book This System
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  ))}
</div>
      </div>
    </section>
  );
};

export default Portfolio;
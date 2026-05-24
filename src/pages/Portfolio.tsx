import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";
import api from "@/lib/axios";
import SEO from "@/components/SEO";

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
        console.error("Failed to fetch portfolio:", error);
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#030303]/50 px-3 py-8 text-white sm:px-4 lg:px-6">
      <SEO
        title="Our Portfolio | Zaynex"
        description="Explore modern websites, dashboards, web applications, and digital systems built by Zaynex."
        path="/portfolio"
      />
      {/* Background */}
      <div className="absolute inset-0 z-0">

        <img
          src="/images/bg.jpg"
          alt="Background"
          className="h-full w-full scale-105 object-cover opacity-60 blur-[4px]"
        />

        <div className="absolute inset-0 bg-[#030303]/40" />

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
          className="mb-8 text-center md:mb-10"
        >

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Portfolio
          </span>

          <h1 className="mx-auto mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
            Modern websites and digital systems built with clean UI and performance in mind.
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

          {projects.map((demo) => (
            <Card
              key={demo.id}
              className="group overflow-hidden rounded-[1.5rem] border-white/[0.05] bg-[#080808]/60 p-0 transition-all duration-500 hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5"
            >

              {/* Image */}
              <div
                className="relative h-44 overflow-hidden sm:h-48"
                style={{
                  backgroundImage: `url(${demo.thumbnailImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">

                {/* Rating */}
                <div className="mb-3 flex items-center gap-2">

                  <Star
                    size={12}
                    className="fill-accent text-accent"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent/90 sm:text-[10px]">
                    {demo.rating} Client Rated
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black tracking-tight text-white/80 transition-colors group-hover:text-primary sm:text-xl">
                  {demo.projectName}
                </h3>

                {/* Category */}
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary/80 sm:text-[10px]">
                  {demo.category}
                </p>

                {/* Description */}
                <p className="mt-4 line-clamp-2 text-xs font-light leading-relaxed text-zinc-300">
                  {demo.shortDescription}
                </p>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                  <a
                    href={`/portfolio/${demo.slug}`}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-lg border-white/10 bg-transparent text-[9px] font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-black sm:text-[10px]"
                    >
                      Details
                    </Button>
                  </a>

                  <a
                    href={demo.liveDemoUrl}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      className="w-full rounded-lg bg-primary/90 text-[9px] font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-white sm:text-[10px]"
                    >
                      Live Demo
                    </Button>
                  </a>

                  {demo.bookingEnabled && (
                    <a
                      href="/quote"
                      className="w-full sm:col-span-2"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-lg border-primary/20 bg-primary/5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary transition-all hover:bg-primary hover:text-black sm:text-[10px]"
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
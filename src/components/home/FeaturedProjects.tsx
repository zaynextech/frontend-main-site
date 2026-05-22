"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Layers } from "lucide-react";
import api from "@/lib/axios";

interface Project {
  id: string;
  slug: string;
  projectName: string;
  category: string;
  shortDescription: string;
  thumbnailImage: string;
  rating?: string;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  let isMounted = true;

  const fetchFeaturedProjects = async () => {
    try {
      const { data } = await api.get("/portfolio/featured/homepage");

      if (isMounted) {
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.error(
        "Failed to fetch featured projects:",
        error
      );
    } finally {
      if (isMounted) {
        setIsLoading(false);
      }
    }
  };

  fetchFeaturedProjects();

  return () => {
    isMounted = false;
  };
}, []);

  return (
    <section className="bg-[#030303] px-4 sm:px-6 py-16 md:py-24 lg:py-32 lg:px-10 relative overflow-hidden antialiased w-full">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Header - Semantic Search Optimization */}
        <header className="mb-12 md:mb-20">
          <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-end border-b border-white/10 pb-8 md:pb-12">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl">     
              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-100 text-balance leading-[1.05] md:leading-[0.95] antialiased">
                We build <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-zinc-200 to-zinc-500">smart business</span> solutions.
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6 shrink-0">
              <div className="hidden md:flex flex-col items-end text-right select-none">
                <span className="text-5xl font-black text-zinc-800 font-mono tracking-tighter italic leading-none">04</span>
                <p className="text-sm text-zinc-300 font-medium max-w-[220px] leading-relaxed mt-2">
                  Engineering scalable infrastructure for <span className="text-white/70 border-b border-cyan-500/30">enterprise brands.</span>
                </p>
              </div>

              {/* Link */}
              <Link 
                to="/portfolio" 
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-black text-white/80 transition-all hover:text-cyan-400"
                aria-label="Explore global portfolio archive"
              >
                <span className="relative">
                  Explore Archive
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full" />
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2 text-cyan-500 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        {/* Dynamic State Management Renderer Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col gap-6 animate-pulse" aria-hidden="true">
                <div className="aspect-[16/10] w-full rounded-2xl bg-white/5 border border-white/5" />
                <div className="space-y-3">
                  <div className="h-3 w-20 rounded bg-white/30" />
                  <div className="h-8 w-3/4 rounded bg-white/30" />
                  <div className="h-4 w-full rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.id} className="h-full">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group relative flex flex-col h-full outline-none transition-all duration-500"
                >
                  {/* Image Wrap with Architectural Proportions */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10 group-hover:-translate-y-2">
                    <img
                      src={project.thumbnailImage}
                      alt={`Showcase thumbnail for ${project.projectName}`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0"
                    />
                    
                    {/* Glassmorphism Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                    
                    {/* Category Badge - Anchored to Image */}
                    <div className="absolute top-4 left-4 transform -translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 select-none">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-widest font-bold text-white/90">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="mt-6 sm:mt-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-3 select-none">
                        <Layers className="h-3 w-3 text-cyan-500 shrink-0" aria-hidden="true" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-2000">
                          Project Case // 0{index + 1}
                        </span>
                        
                        {project.rating && (
                          <div className="ml-auto flex items-center gap-1 text-[10px] font-bold text-cyan-400/80" aria-label={`Project rated at ${project.rating} stars`}>
                            <Star className="h-3 w-3 fill-cyan-400/20 text-cyan-400 shrink-0" aria-hidden="true" />
                            {project.rating}
                          </div>
                        )}
                      </div>

                      <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white/90 transition-colors group-hover:text-cyan-400 break-words">
                        {project.projectName}
                      </h3>

                      <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-zinc-200 line-clamp-2 font-light">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-hover:text-white transition-colors select-none">
                      <span className="w-8 h-[1px] bg-zinc-800 transition-all group-hover:w-12 group-hover:bg-cyan-500" aria-hidden="true" />
                      View Case Study
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
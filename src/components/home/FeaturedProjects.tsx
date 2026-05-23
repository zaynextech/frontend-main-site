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
        console.error("Failed to fetch featured projects:", error);
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
    <section className="bg-[#030303] px-4 sm:px-6 py-12 md:py-16 lg:px-8 relative overflow-hidden antialiased w-full">
      
      {/* Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-40 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/60" />

        {/* Decorative ambient radial glow */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-10 md:mb-14">
          <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-white/5 pb-6 md:pb-8">
            <div className="flex flex-col gap-3 max-w-2xl"> 
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-zinc-300 text-balance leading-[1.1] antialiased">
                We build <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/90 via-zinc-200 to-zinc-500">smart business</span> solutions.
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            
              {/* Link */}
              <Link 
                to="/portfolio" 
                className="group flex items-center gap-2 text-[15px] uppercase tracking-[0.2em] font-bold text-white/80 transition-all hover:text-cyan-400"
                aria-label="Explore global portfolio archive"
              >
                <span className="relative">
                  Explore Archive
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full" />
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5 text-cyan-400 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        {/* Dynamic Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col gap-4 max-w-sm mx-auto w-full animate-pulse" aria-hidden="true">
                <div className="aspect-[16/10] w-full rounded-xl bg-white/5 border border-white/5" />
                <div className="space-y-2">
                  <div className="h-2.5 w-16 rounded bg-white/20" />
                  <div className="h-6 w-3/4 rounded bg-white/20" />
                  <div className="h-3 w-full rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map((project, index) => (
              <article key={project.id} className="col-span-1 w-full max-w-sm lg:max-w-none mx-auto h-full">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group relative flex flex-col h-full outline-none transition-all duration-500"
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900 shadow-xl transition-all duration-500 group-hover:border-cyan-500/20 group-hover:shadow-cyan-500/5 group-hover:-translate-y-1">
                    <img
                      src={project.thumbnailImage}
                      alt={`Showcase thumbnail for ${project.projectName}`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[0.1] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 transform -translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 select-none">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] uppercase tracking-widest font-bold text-white/90">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="mt-4 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 select-none">
                        <Layers className="h-3 w-3 text-cyan-500 shrink-0" aria-hidden="true" />
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                          Project Case // 0{index + 1}
                        </span>
                        
                        {project.rating && (
                          <div className="ml-auto flex items-center gap-1 text-[9px] font-bold text-cyan-400/80" aria-label={`Project rated at ${project.rating} stars`}>
                            <Star className="h-2.5 w-2.5 fill-cyan-400/10 text-cyan-400 shrink-0" aria-hidden="true" />
                            {project.rating}
                          </div>
                        )}
                      </div>

                      <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-white/80 transition-colors group-hover:text-cyan-400 break-words">
                        {project.projectName}
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-200 line-clamp-1 font-light">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-white transition-colors select-none">
                      <span className="w-6 h-[1px] bg-zinc-800 transition-all group-hover:w-9 group-hover:bg-cyan-500" aria-hidden="true" />
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
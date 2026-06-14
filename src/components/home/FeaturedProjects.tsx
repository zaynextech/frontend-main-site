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
    /* 
      ─── 🛡️ ISOLATION SHIELD BASE ─── 
      Added '!bg-[#FAFAFA]' and '!text-[#030303]' with explicit 'w-full relative z-20' 
      to forcefully break out of any inherited dark theme classes from the home screen layout tree.
    */
    <section className="w-full !bg-[#FAFAFA] !text-[#030303] px-4 sm:px-6 py-20 lg:px-10 relative z-20 overflow-hidden antialiased font-sans select-none">
      
      {/* ─── 🖼️ BACKDROP WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-15 mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      

      {/* Local Cyan Atmospheric Accent Layer */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* ─── HERO HEADER ─── */}
        <header className="mb-14 border-b-4 border-[#030303] pb-6">
          <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end text-left">
            <div className="flex flex-col gap-2 max-w-2xl"> 
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 block">
                // FEATURED TEMPLATES
              </span>
              <h2 className="text-4xl sm:text-4xl font-black tracking-tighter uppercase leading-[0.95] text-balance">
                We craft <span className="text-cyan-600">premium digital</span> experiences.
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 shrink-0 pb-1">
              <Link 
              to="/portfolio" 
              className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#030303] transition-colors"
              aria-label="Explore featured projects"
            >
              <span>View Showcase</span>

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-cyan-600 shrink-0 stroke-[3]"
                aria-hidden="true"
              />
            </Link>
            </div>
          </div>
        </header>

        {/* ─── UNIFORM SYMMETRICAL CARDS GRID ─── */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col gap-4 w-full max-w-sm mx-auto animate-pulse" aria-hidden="true">
                <div className="aspect-[16/10] w-full rounded-none bg-zinc-200 border-2 border-[#030303]" />
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-zinc-300" />
                  <div className="h-6 w-3/4 bg-zinc-300" />
                  <div className="h-4 w-full bg-zinc-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map((project, index) => (
              <article key={project.id} className="col-span-1 w-full max-w-sm lg:max-w-none mx-auto h-full">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group relative flex flex-col h-full outline-none"
                >
                  
                  {/* BRUTALIST UNIFORM IMAGE CONTAINER */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-none border-2 border-[#030303] bg-[#F5F5F3] shadow-[3px_3px_0px_rgba(3,3,3,1)] group-hover:shadow-[6px_6px_0px_rgba(3,3,3,1)] transition-all duration-300">
                    <img
                      src={project.thumbnailImage}
                      alt={`Showcase thumbnail for ${project.projectName}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                    />
                    
                    <div className="absolute top-2 left-2 z-20 select-none">
                      <span className="px-2 py-0.5 border border-[#030303] bg-white text-[8px] uppercase tracking-widest font-black text-[#030303] shadow-[1px_1px_0px_rgba(3,3,3,1)]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* INFO DATA INTERFACE BLOCK */}
                  <div className="mt-4 flex flex-col flex-grow justify-between text-left">
                    <div>
                      <div className="flex items-center gap-2 select-none border-b border-zinc-100 pb-2">
                        <Layers className="h-3 w-3 text-[#030303] shrink-0 stroke-[2.5]" aria-hidden="true" />
                        <span className="text-[9px] uppercase tracking-[0.15em] font-black text-zinc-600">
                          // Matrix case _ 0{index + 1}
                        </span>
                        
                        {project.rating && (
                          <div className="ml-auto flex items-center gap-1 text-[9px] font-black text-cyan-600" aria-label={`Project rated at ${project.rating} stars`}>
                            <Star className="h-2.5 w-2.5 fill-cyan-500/20 text-cyan-600 shrink-0 stroke-[2.5]" aria-hidden="true" />
                            <span>{project.rating}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-[#030303] transition-colors group-hover:text-cyan-600 break-words leading-tight">
                        {project.projectName}
                      </h3>
                      <p className="mt-1.5 text-xs font-medium leading-relaxed text-black line-clamp-2 text-balance">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900 group-hover:text-[#030303] transition-colors select-none">
                      <span className="text-zinc-300 font-normal group-hover:text-cyan-600 transition-colors">//</span>
                      <span>View Case Study</span>
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
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
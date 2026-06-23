"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string | null;
  thumbnail_url: string | null;
  featured: boolean;
  published: boolean;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProjects() {
      try {
        const { data, error } = await supabase
          .from("portfolio_projects")
          .select("*")
          .eq("featured", true)
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(8);

        if (error) throw error;

        if (mounted) {
          setProjects(data ?? []);
        }
      } catch (error) {
        console.error("Failed to load portfolio:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-white text-zinc-900 py-8 sm:py-20 border-t border-zinc-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-5 sm:mb-12">
        
        {/* Header Layout Block */}
        <header className="border-b border-zinc-100 pb-4 sm:pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                  Our Work
                </span>
                <div className="h-px w-6 sm:w-8 bg-cyan-600/30" />
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                Featured <span className="text-cyan-600">Projects</span>
              </h2>
            </div>

            {/* Custom Premium Offset Shadow Button Design */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link
                to="/portfolio"
                className="group/btn relative inline-flex items-center justify-center rounded-xl bg-[#030303] text-white px-8 h-14 text-sm font-bold tracking-tight transition-all duration-300 active:scale-95 hover:bg-cyan-600 hover:text-white w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full rounded-xl border border-zinc-900 translate-x-1.5 translate-y-1.5 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none -z-10 bg-white" />
                <span>View All Projects</span>
                <svg 
                  className="ml-2.5 h-4 w-4 transition-all duration-300 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* States Rendering Manager */}
      {isLoading ? (
        <div className="flex gap-3 sm:gap-6 px-3 max-w-7xl mx-auto overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse border border-zinc-100 bg-zinc-50/50 rounded-xl sm:rounded-2xl w-[210px] sm:w-[360px] shrink-0 h-[240px] sm:h-[380px] p-3 sm:p-5 flex flex-col justify-between">
              <div className="w-full h-24 sm:h-44 bg-zinc-200 rounded-lg sm:rounded-xl" />
              <div className="space-y-1.5 mt-2 flex-1">
                <div className="h-2.5 w-1/4 bg-zinc-200 rounded" />
                <div className="h-3.5 w-3/4 bg-zinc-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="mx-auto max-w-7xl px-3">
          <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 sm:p-12 text-center max-w-xs sm:max-w-md mx-auto flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            <div className="p-2 sm:p-3 bg-zinc-100 rounded-lg sm:rounded-xl border border-zinc-200 text-zinc-400">
              <Layers size={20} className="sm:hidden" />
              <Layers size={24} className="hidden sm:block" />
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <h4 className="font-bold text-sm sm:text-base text-zinc-900">No featured projects found</h4>
              <p className="text-[11px] sm:text-sm text-zinc-500 max-w-xs">We are currently updating our portfolio catalog. Check back soon.</p>
            </div>
          </div>
        </div>
      ) : (
        /* Infinite Marquee Strip Track */
        <div className="relative w-full flex overflow-x-hidden group/marquee py-1">
          {/* Edge Vignette Overlays for Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Dual Render Track Loops */}
          <div className="flex gap-3 sm:gap-6 shrink-0 animate-marquee min-w-full justify-around items-center group-hover/marquee:[animation-play-state:paused]">
            {[...projects, ...projects].map((project, idx) => (
              <Link
                key={`${project.id}-${idx}`}
                to={`/portfolio/${project.slug}`}
                className="group/card flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-100 bg-zinc-50/40 hover:bg-white hover:border-zinc-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 w-[210px] sm:w-[360px] shrink-0"
              >
                <div>
                  {/* Scaled Down Mobile Image Canvas */}
                  {project.thumbnail_url ? (
                    <div className="relative w-full h-24 sm:h-48 overflow-hidden bg-zinc-100 border-b border-zinc-100">
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-102"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-24 sm:h-48 bg-zinc-100 border-b border-zinc-100 flex items-center justify-center text-zinc-300">
                      <Layers size={18} className="sm:hidden" />
                      <Layers size={32} className="hidden sm:block" />
                    </div>
                  )}

                  {/* Compact Mobile Layout Typography */}
                  <div className="p-3 sm:p-5 space-y-1">
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-1.5 py-0.5 inline-block">
                      {project.category}
                    </span>

                    <h3 className="text-xs sm:text-base font-bold tracking-tight text-zinc-900 group-hover/card:text-cyan-600 transition-colors truncate">
                      {project.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed h-6 sm:h-8">
                      {project.short_description}
                    </p>
                  </div>
                </div>

                <div className="px-3 sm:px-5 pb-3 pt-0.5 flex items-center justify-end text-[9px] sm:text-[11px] font-bold text-zinc-400 group-hover/card:text-cyan-600 transition-colors gap-0.5">
                  <span>Explore Case Study</span>
                  <ArrowRight size={10} className="transition-transform duration-300 group-hover/card:translate-x-0.5 sm:w-3 sm:h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Tag, Compass } from "lucide-react";

import { getPortfolioProject } from "@/lib/portfolio";
import type { PortfolioProject } from "@/types/portfolio";
import SEO from "@/components/SEO";
import PortfolioGallery from "@/components/portfolio/portfolio-gallery";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    let mounted = true;
    getPortfolioProject(slug)
      .then((data) => {
        if (mounted) setProject(data);
      })
      .catch((err) => console.error("Error fetching project:", err))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  // Premium skeleton loader to maintain fluid UI transitions
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white text-zinc-900 py-12 sm:py-20 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="h-4 w-32 bg-zinc-100 rounded-lg" />
          <div className="w-full h-[300px] sm:h-[450px] bg-zinc-100 rounded-2xl" />
          <div className="h-8 w-2/3 bg-zinc-100 rounded-lg" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-100 rounded" />
            <div className="h-4 w-5/6 bg-zinc-100 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-white text-zinc-900 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="p-4 bg-zinc-50 border border-zinc-100 text-zinc-400 rounded-2xl inline-block shadow-sm">
            <Compass size={32} className="animate-spin-slow" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Project Not Found</h1>
            <p className="text-sm text-zinc-500">The project folder or case study link you requested does not exist or has been archived.</p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-98 shadow-sm"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Zaynex`}
        description={
          project.short_description ||
          project.full_description ||
          "Portfolio project by Zaynex"
        }
        image={project.thumbnail_url || "/og-image.jpg"}
        path={`/portfolio/${project.slug}`}
      />

      <div className="w-full bg-white text-zinc-900 py-12 sm:py-20 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          {/* Navigation Path Header */}
          <div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-cyan-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Portfolio
            </Link>
          </div>

          {/* Hero Thumbnail Stage Banner */}
          {project.thumbnail_url && (
            <div className="relative w-full h-[260px] sm:h-[450px] overflow-hidden rounded-2xl border border-zinc-100 shadow-sm bg-zinc-50">
              <img
                src={project.thumbnail_url}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Core Case Study Workspace (Modern Split-Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Primary Details Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-0.5 select-none">
                  {project.category}
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                  {project.title}
                </h1>
              </div>

              {project.short_description && (
                <p className="text-base sm:text-lg font-medium text-zinc-500 leading-relaxed max-w-3xl">
                  {project.short_description}
                </p>
              )}

              <hr className="border-zinc-100" />

              <div className="space-y-3">
                <h2 className="text-lg font-bold tracking-tight text-zinc-900">
                  Project Overview
                </h2>
                <p className="whitespace-pre-wrap text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  {project.full_description}
                </p>
              </div>
            </div>

            {/* Sidebar Metadata & Quick Actions Box */}
            <div className="bg-zinc-50/60 border border-zinc-100 p-5 sm:p-6 rounded-2xl space-y-6 backdrop-blur-sm shadow-sm lg:sticky lg:top-6">
              <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400">
                Metadata Specs
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-zinc-600">
                  <Tag size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">Category</p>
                    <p className="font-medium text-zinc-800">{project.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-zinc-600">
                  <Calendar size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">Verified Deployment</p>
                    <p className="font-medium text-zinc-800">Production Ready</p>
                  </div>
                </div>
              </div>

              <hr className="border-zinc-200/60" />

              {/* Dynamic CTA Operations Anchor Bar */}
              <div className="flex flex-col gap-2.5 w-full">
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white px-5 h-11 text-sm font-semibold transition-all shadow active:scale-98 w-full"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} className="opacity-60 group-hover/demo:opacity-100 group-hover/demo:translate-x-0.5 transition-transform" />
                  </a>
                )}

                <a
                    href={`https://client.zaynex.tech/start-project?project=${encodeURIComponent(
                      project.title
                    )}`}
                    className="group/request inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-cyan-500 px-5 h-11 text-sm font-semibold text-black transition-all hover:bg-cyan-400 shadow active:scale-98 w-full"
                  >
                    <span>Start This Project</span>

                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover/request:translate-x-0.5"
                    />
                  </a>
              </div>
            </div>

          </div>

          {/* Premium Mosaic Lightbox Gallery Strip */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-8 sm:pt-12 border-t border-zinc-100 space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                Media Showcase
              </h2>
              <PortfolioGallery images={project.gallery} />
            </div>
          )}

        </div>
      </div>
    </>
  );
}
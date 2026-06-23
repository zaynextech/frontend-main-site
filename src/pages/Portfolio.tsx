"use client";

import { useEffect, useState } from "react";
import { AlertCircle, FolderGit2 } from "lucide-react";

import PortfolioGrid from "@/components/portfolio/portfolio-grid"; // Your premium filtered grid component
import { getPortfolioProjects } from "@/lib/portfolio";
import type { PortfolioProject } from "@/types/portfolio";
import SEO from "@/components/SEO";

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await getPortfolioProjects();
        if (mounted) {
          setProjects(data ?? []);
        }
      } catch (err) {
        console.error("Portfolio Error:", err);
        if (mounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load portfolio database"
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // Premium grid skeleton to prevent content shift
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white text-zinc-900 py-12 sm:py-20 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-zinc-100 rounded-xl" />
            <div className="h-4 w-96 bg-zinc-100 rounded-lg" />
          </div>
          <div className="h-px w-full bg-zinc-100" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-zinc-100 rounded-2xl h-[380px] p-5 space-y-4">
                <div className="w-full h-48 bg-zinc-100 rounded-xl" />
                <div className="h-4 w-1/3 bg-zinc-100 rounded" />
                <div className="h-5 w-2/3 bg-zinc-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-white text-zinc-900 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="p-4 bg-red-50 border border-red-100 text-red-500 rounded-2xl inline-block shadow-sm">
            <AlertCircle size={32} />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900">Portfolio Data Error</h1>
            <p className="text-sm text-zinc-500">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-98"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Portfolio | Zaynex"
        description="Explore websites, web applications, e-commerce stores, dashboards, and digital solutions built by Zaynex."
        path="/portfolio"
      />

      <div className="w-full bg-white text-zinc-900 py-12 sm:py-20 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Header Typography Block */}
          <header className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                Case Studies
              </span>
              <div className="h-px w-8 bg-cyan-600/30" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                  Our Complete <span className="text-cyan-600">Portfolio</span>
                </h1>
                <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
                  Explore robust engineering projects, crisp digital storefronts, customized portals, 
                  and user-centric software solutions shipped across production environments.
                </p>
              </div>

              {/* Refined, cleaner inline counter badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-600 self-start md:self-auto">
                <FolderGit2 size={14} className="text-zinc-400" />
                <span>Index: {projects.length} Records</span>
              </div>
            </div>
          </header>

          {/* Integrated Filterable Showcase Grid */}
          <PortfolioGrid projects={projects} />

        </div>
      </div>
    </>
  );
}
"use client";

import { useState, useMemo } from "react";
import { PortfolioCard } from "./portfolio-card";
import { Layers } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";

interface Props {
  projects: PortfolioProject[];
}

export default function PortfolioGrid({ projects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically calculate distinct categories available across current engineering records
  const categories = useMemo(() => {
    const list = new Set(projects.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(list)];
  }, [projects]);

  // Compute targeted array matching current user interactive selections
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  if (!projects || projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
        <div className="p-3 bg-white rounded-xl border border-zinc-200 text-zinc-400 shadow-sm">
          <Layers size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-zinc-900">No projects to display</h4>
          <p className="text-sm text-zinc-500">The current project index configuration directory contains no entries.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full bg-white">
      {/* Category Inline Selector Ribbon Bar */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-zinc-100">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`h-9 px-4 text-xs font-semibold rounded-lg transition-all duration-200 border transform active:scale-95 ${
                  isActive
                    ? "bg-zinc-900 border-zinc-900 text-white shadow-sm"
                    : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Production Case Study Visual Grid Block */}
      {filteredProjects.length === 0 ? (
        <div className="py-12 text-center text-sm text-zinc-400">
          No records match the selected system category filter.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-300">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id || project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
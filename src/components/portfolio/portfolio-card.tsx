import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";

interface Props {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: Props) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50/40 hover:bg-white hover:border-zinc-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50"
    >
      <div>
        {/* Thumbnail Cover Image Area */}
        {project.thumbnail_url ? (
          <div className="relative w-full h-52 overflow-hidden bg-zinc-100 border-b border-zinc-100">
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-52 bg-zinc-100 border-b border-zinc-100 flex items-center justify-center text-zinc-300">
            <Layers size={32} />
          </div>
        )}

        {/* Core Information Content Block */}
        <div className="p-5 sm:p-6 space-y-2">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-0.5">
            {project.category}
          </span>

          <h3 className="text-lg font-bold tracking-tight text-zinc-900 group-hover:text-cyan-600 transition-colors pt-1">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
            {project.short_description}
          </p>
        </div>
      </div>

      {/* Micro-Interaction Read Anchor Tray */}
      <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-end text-xs font-bold text-zinc-400 group-hover:text-cyan-600 transition-colors gap-1">
        <span>Explore Case Study</span>
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
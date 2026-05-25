"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowUpRight, Menu } from "lucide-react";
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

const PALETTE = {
  mainBg: "bg-[#FAFAFA]",             
  textMain: "text-[#030303]",          
  textMuted: "text-zinc-500",          
  textBody: "text-zinc-700",           
  cardBg: "bg-[#FFFFFF]",              
  cardBorder: "border-[#030303]",      
};

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

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
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen ${PALETTE.mainBg} flex flex-col antialiased w-full font-sans pb-0 overflow-x-hidden relative`}>
      <SEO
        title="Our Portfolio | Zaynex"
        description="Explore modern websites, dashboards, web applications, and digital systems built by Zaynex."
        path="/portfolio"
      />

      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      {/* Placed at the root level using absolute tracking so it runs down the entire page height seamlessly */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-50 mix-blend-multiply">
        <img 
          src="/watermark.jpg" 
          alt="" 
          role="presentation"
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* ─── 🧭 NAVBAR ─── */}
      

      {/* ─── MAIN PORTFOLIO INTERFACE BODY ─── */}
      <main className="flex-grow relative z-10 px-3 sm:px-6 lg:px-8 pt-2- pb-20 max-w-6xl mx-auto w-full">
        
        {/* Ambient Zaynex Cyber Accent */}
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-cyan-400/[0.04] blur-[100px] rounded-full pointer-events-none select-none z-0" />
        

        <div className="relative z-10 w-full mt-24">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-left border-b-2 border-[#030303] pb-4 flex items-baseline justify-between"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-600">
                SYSTEM INTERFACES
              </span>
              <h1 className={`mt-0.5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter ${PALETTE.textMain} uppercase`}>
                ARCHIVE
              </h1>
            </div>

            {!isLoading && (
              <span className="text-xs font-black border-2 border-[#030303] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white shadow-[1.5px_1.5px_0px_rgba(3,3,3,1)]">
                {filteredProjects.length}
              </span>
            )}
          </motion.div>

          {/* EDITORIAL FILTERS */}
          {!isLoading && projects.length > 0 && (
            <div className="flex items-center gap-1.5 mb-8 border-b border-zinc-200/80 pb-4 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap -mx-3 px-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-block px-3.5 py-1.5 text-[9px] font-black uppercase tracking-widest border-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-[#030303] bg-[#030303] text-white shadow-[2px_2px_0px_rgba(34,211,238,0.2)]"
                      : "border-zinc-200 text-zinc-600 bg-white hover:border-[#030303] hover:text-[#030303]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* 📱 2-COLUMN RESPONSIVE GRID */}
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full">
              {[1, 2, 4].map((sIndex) => (
                <div key={sIndex} className="flex flex-col border-2 border-[#030303] bg-white p-0 aspect-[4/5] animate-pulse">
                  <div className="h-28 sm:h-48 bg-zinc-100 border-b-2 border-[#030303]" />
                  <div className="p-2 sm:p-4 space-y-2">
                    <div className="h-3 w-1/4 bg-zinc-200 rounded" />
                    <div className="h-4 w-3/4 bg-zinc-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((demo) => (
                  <motion.div
                    layout
                    key={demo.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex"
                  >
                    <Card className={`group bg-white overflow-hidden rounded-none border-2 ${PALETTE.cardBorder} p-0 shadow-none hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] hover:border-cyan-500 transition-all duration-300 flex flex-col h-full w-full relative`}>
                      
                      {/* Thumbnail Image display box */}
                      <div className="relative h-28 sm:h-44 md:h-52 overflow-hidden w-full border-b-2 border-[#030303] bg-[#F5F5F3] flex items-center justify-center p-2 sm:p-4">
                        <img 
                          src={demo.thumbnailImage} 
                          alt={demo.projectName}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Info Block */}
                      <div className="p-2.5 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-zinc-400">
                            <span className="truncate max-w-[70%]">{demo.category}</span>
                            {demo.rating && (
                              <div className="flex items-center gap-0.5 text-cyan-600 shrink-0">
                                <Star size={8} className="fill-cyan-500 text-cyan-500 sm:w-2.5 sm:h-2.5" />
                                <span className="font-bold">{demo.rating}</span>
                              </div>
                            )}
                          </div>

                          <h3 className={`text-sm sm:text-lg md:text-xl font-black uppercase tracking-tight ${PALETTE.textMain} transition-colors group-hover:text-cyan-600 duration-200 line-clamp-1`}>
                            {demo.projectName}
                          </h3>

                          <p className={`text-[10px] sm:text-xs font-normal leading-normal sm:leading-relaxed ${PALETTE.textBody} line-clamp-2 pt-0.5`}>
                            {demo.shortDescription}
                          </p>
                        </div>

                        {/* Interactive Buttons Layout */}
                        <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between border-t border-zinc-100 pt-2 sm:pt-4 gap-2">
                          <a href={`/portfolio/${demo.slug}`} className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:text-cyan-500 transition-colors flex items-center gap-0.5 group/link">
                            <span>Case study</span>
                            <ArrowUpRight size={10} className="stroke-[2.5] sm:w-3 sm:h-3" />
                          </a>

                          <a href={demo.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button className="h-7 sm:h-8 w-full sm:w-auto rounded-none border-2 border-[#030303] bg-[#030303] text-white hover:bg-white hover:text-[#030303] hover:border-[#030303] text-[8px] sm:text-[9px] font-black uppercase tracking-widest transition-colors duration-200 px-2 sm:px-4 shadow-none">
                              Launch
                            </Button>
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      {/* ─── ✂️ SERRATED TORN PAPER TERMINATOR ─── */}
      {/* <div className="relative w-full h-10 sm:h-16 z-20 pointer-events-none select-none mt-12 bg-transparent">
        <img 
          src="/torn-edge.png" 
          alt="" 
          role="presentation"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
            }
          }}
        />
        <div className="hidden absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-zinc-200 to-transparent border-b-4 border-[#030303]" />
      </div> */}

    </div>
  );
};

export default Portfolio;
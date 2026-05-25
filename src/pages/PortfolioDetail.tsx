"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  Tag, 
  Layers, 
  Loader, 
  Star 
} from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";
import TechLogo from "@/components/ui/tech-logo";
import FeatureBadge from "@/components/ui/feature-badge";
import api from "@/lib/axios";
import SEO from "@/components/SEO";

interface Project {
  projectName: string;
  category: string;
  longDescription: string;
  rating: string;
  liveDemoUrl: string;
  thumbnailImage: string;
  showcaseImage1: string;
  showcaseImage2: string;
  showcaseImage3: string;
  features: string;
  techStack: string;
  suitableFor: string;
  deploymentTime: string;
  startingPrice: string;
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

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let isMounted = true;

    const fetchProject = async () => {
      try {
        const { data } = await api.get(`/portfolio/${slug}`);
        if (isMounted) {
          setProject(data.project);
        }
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally { // ⚡ TYPO FIXED HERE (Double 'l')
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA]">
        <div className="flex items-center justify-center flex-col gap-3">
          <Loader className="animate-spin text-cyan-600 w-8 h-8 stroke-[2.5]" />
          <span className="text-xs font-black tracking-widest text-zinc-400 uppercase">Loading Node...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA] text-zinc-800 font-sans px-4 text-center">
        <p className="text-lg font-black uppercase tracking-wider">Project not found.</p>
        <Link to="/portfolio" className="mt-4 text-xs font-black uppercase tracking-widest border-2 border-[#030303] bg-[#030303] text-white px-5 py-2 hover:bg-white hover:text-[#030303] transition-colors">
          Return to portfolio
        </Link>
      </div>
    );
  }

  const featuresList = project.features ? project.features.split(",").map(f => f.trim()) : [];
  const techStackList = project.techStack ? project.techStack.split(",").map(t => t.trim()) : [];

  return (
    <main className={`relative min-h-screen ${PALETTE.mainBg} ${PALETTE.textMain} pt-12 pb-32 selection:bg-cyan-500/20 selection:text-[#030303] antialiased overflow-x-hidden w-full font-sans`}>
      <SEO
        title={`${project.projectName} | Zaynex`}
        description={project.longDescription}
        path={`/portfolio/${slug}`}
        image={project.thumbnailImage}
      />

      {/* ─── 🖼️ FULL-PAGE WATERMARK BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-20 mix-blend-multiply">
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

      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
        <InteractiveGrid />
      </div>

      {/* Ambient Zaynex Cyber Accent */}
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/portfolio"
          className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#030303] group"
        >
          <ArrowLeft size={14} className="stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
          <span>Back to archive</span>
        </Link>

        {/* Header Section */}
        <header className="mb-10 max-w-3xl text-left">
          <div className="mb-4 flex flex-wrap items-center gap-3 select-none">
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-[#030303] bg-white shadow-[2px_2px_0px_rgba(3,3,3,1)]">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-cyan-600">
              <Star size={12} className="fill-cyan-500 text-cyan-500" />
              <span>{project.rating} / 5.0 Rated</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
            {project.projectName}
          </h1>
        </header>

        {/* Main Hero Image Frame - Fixed Object Fit Resolution */}
        <div className="mb-12 aspect-[21/9] w-full overflow-hidden border-2 border-[#030303] bg-[#F5F5F3] p-2 sm:p-4">
          <img
            src={project.thumbnailImage}
            alt={`${project.projectName} Showcase`}
            loading="eager"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Split Details Workspace Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Story & Visuals */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
                    <section className="border-t-4 border-[#030303] pt-8 pb-4 relative">
          {/* Tactical Index Marker for high visual clarity */}
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 select-none">
            <span>[ 01 ]</span>
            <span className="w-8 h-[2px] bg-[#030303]" />
            <span>Ecosystem Context</span>
          </div>

          {/* Ultra-bold, highly visible brutalist header */}
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-[#030303] mb-5 leading-none">
            Project Overview
          </h2>

          {/* Brighter, highly legible description body block */}
          <p className="text-sm sm:text-base font-normal leading-relaxed text-black text-justify max-w-none antialiased">
            {project.longDescription}
          </p>
        </section>

            <section className="border-t-2 border-[#030303] pt-6">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-6">
                Core Architecture & Features
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featuresList.map((feature, i) => (
                  <FeatureBadge key={i} name={feature} />
                ))}
              </ul>
            </section>

            <section className="border-t-2 border-[#030303] pt-5 pb-2 text-left">
  {/* Ultra-sharp, tightly packed typography header */}
  <h2 className="text-sm sm:text-base font-black uppercase tracking-[0.18em] text-[#030303] mb-5">
    // Interface Previews
  </h2> 

  <div className="space-y-4">
    {/* Large Image Preview Container */}
    <div className="group relative aspect-[16/9] w-full overflow-hidden border-2 border-[#030303] bg-[#F5F5F3] p-2 transition-all duration-300 hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] hover:bg-white">
      {/* Editorial Mini Corner Counter */}
      <span className="absolute top-2 left-2 z-20 font-mono text-[9px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)]">
        PRVW_01
      </span>
      <img
        src={project.showcaseImage1}
        alt="Main System Interface Showcase"
        loading="lazy"
        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
      />
    </div>

    {/* Small Multi-Previews Grid Track */}
    <div className="grid grid-cols-2 gap-4">
      {/* Small Preview 1 */}
      <div className="group relative aspect-[4/3] overflow-hidden border-2 border-[#030303] bg-[#F5F5F3] p-1.5 transition-all duration-300 hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] hover:bg-white">
        <span className="absolute top-2 left-2 z-20 font-mono text-[9px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)]">
          PRVW_02
        </span>
        <img
          src={project.showcaseImage2}
          alt="Secondary Dashboard Perspective"
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

      {/* Small Preview 2 */}
      <div className="group relative aspect-[4/3] overflow-hidden border-2 border-[#030303] bg-[#F5F5F3] p-1.5 transition-all duration-300 hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] hover:bg-white">
        <span className="absolute top-2 left-2 z-20 font-mono text-[9px] font-black uppercase tracking-widest bg-white border border-[#030303] px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(3,3,3,1)]">
          PRVW_03
        </span>
        <img
          src={project.showcaseImage3}
          alt="Alternative View Workflow Node"
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
    </div>
  </div>
</section>
          </div>

          {/* Right Column: Sticky Metadata & Actions */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-5 border-2 border-[#030303] bg-white p-4 sm:p-5 shadow-none hover:shadow-[4px_4px_0px_rgba(3,3,3,1)] transition-all duration-300 text-left">
              
              {/* Technology Stack Wrapper */}
              <div>
                <h3 className="mb-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#030303]">
                  // Technology Stack
                </h3>
                <div className="flex flex-wrap gap-1">
                  {techStackList.map((tech, i) => (
                    <TechLogo key={i} name={tech} />
                  ))}
                </div>
              </div>

              {/* Hard Brutalist Divider Line */}
              <div className="h-[2px] w-full bg-[#030303]" />

              {/* Core Specifications List */}
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-xs font-medium text-[#030303] group/spec">
                  {/* High-visibility cyber bullet indicator block */}
                  <span className="w-1.5 h-1.5 bg-cyan-500 mt-1.5 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0" />
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Ideal For</p>
                    <p className="mt-0.5 font-extrabold uppercase tracking-wide text-zinc-900">{project.suitableFor}</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 text-xs font-medium text-[#030303] group/spec">
                  <span className="w-1.5 h-1.5 bg-cyan-500 mt-1.5 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0" />
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Typical Deployment</p>
                    <p className="mt-0.5 font-extrabold uppercase tracking-wide text-zinc-900">{project.deploymentTime}</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 text-xs font-medium text-[#030303] group/spec">
                  <span className="w-1.5 h-1.5 bg-cyan-500 mt-1.5 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0" />
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Licensing / Pricing</p>
                    <p className="mt-0.5 font-extrabold uppercase tracking-wide text-zinc-900">{project.startingPrice}</p>
                  </div>
                </li>
              </ul>

              <div className="h-[2px] w-full bg-[#030303]" />

              {/* High-Contrast Action Terminal Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full h-10 rounded-none border-2 border-[#030303] bg-[#030303] text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#030303] hover:border-[#030303] transition-colors duration-200 shadow-none">
                    <span>Launch live system</span>
                    <ExternalLink size={12} className="ml-1.5 stroke-[2.5]" />
                  </Button>
                </a>

                {project.bookingEnabled && (
                  <Link to={`/quote?project=${slug}`} className="w-full">
                    <Button variant="outline" className="w-full h-10 rounded-none border-2 border-[#030303] bg-white text-xs font-black uppercase tracking-widest text-[#030303] hover:bg-[#030303] hover:text-white transition-colors duration-200 shadow-none">
                      Request a deployment
                    </Button>
                  </Link>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>


    </main>
  );
};

export default PortfolioDetail;
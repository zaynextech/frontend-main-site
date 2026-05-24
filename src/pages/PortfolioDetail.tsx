import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink,  Clock, Tag, Layers, Loader } from "lucide-react";
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

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Scroll to top on load
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  let isMounted = true;

  const fetchProject = async () => {
    try {
      const { data } = await api.get(
        `/portfolio/${slug}`
      );

      if (isMounted) {
        setProject(data.project);
      }
    } catch (error) {
      console.error(
        "Failed to fetch project:",
        error
      );
    } finally {
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
      <div className="flex min-h-screen items-center justify-center bg-[#030303]">
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#030303] text-zinc-400">
        <p>Project not found.</p>
        <Link to="/portfolio" className="mt-4 text-sm text-zinc-100 hover:underline">
          Return to portfolio
        </Link>
      </div>
    );
  }

  // Safely parse comma-separated strings
  const featuresList = project.features ? project.features.split(",").map(f => f.trim()) : [];
  const techStackList = project.techStack ? project.techStack.split(",").map(t => t.trim()) : [];

  return (
  <main className="relative min-h-screen bg-[#030303] pt-24 pb-32 selection:bg-cyan-500/30 selection:text-cyan-100">
   <SEO
      title={`${project.projectName} | Zaynex`}
      description={project.longDescription}
      path={`/portfolio/${slug}`}
      image={project.thumbnailImage}
    />
    <InteractiveGrid />

    <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">

      {/* Breadcrumb / Back Link */}
      <Link
        to="/portfolio"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back to all projects
      </Link>

        {/* Header Section */}
        <header className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              {project.category}
            </span>
            <span className="text-sm font-medium text-zinc-500">
              ⭐ {project.rating} / 5.0
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl md:text-6xl text-balance">
            {project.projectName}
          </h1>
        </header>

      {/* Main Hero Image */}
          <div className="mb-16 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <img
              src={project.thumbnailImage}
              alt={`${project.projectName} by Zaynex`}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>

        {/* 
          The Sticky Sidebar Layout: 
          On desktop, the content is split 8 columns (left) to 4 columns (right).
          The right column sticks to the screen as you scroll the left side.
        */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Story & Visuals */}
          <div className="lg:col-span-8">
            <section className="prose prose-invert prose-zinc max-w-none">
              <h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400 text-balance">
                {project.longDescription}
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-6">
                Core Architecture & Features
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featuresList.map((feature, i) => (
                  <FeatureBadge key={i} name={feature} />
                ))}
              </ul>
            </section>

           <section className="mt-16 space-y-6">
              <h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-6">
                Interface Previews
              </h2>

              {/* Large Preview */}
              <div className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                <img
                  src={project.showcaseImage1}
                  alt={`${project.projectName} showcase preview 1`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small Previews */}
              <div className="grid grid-cols-2 gap-6">

                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <img
                    src={project.showcaseImage2}
                    alt={`${project.projectName} showcase preview 2`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <img
                    src={project.showcaseImage3}
                    alt={`${project.projectName} showcase preview 3`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            </section>
          </div>

          {/* Right Column: Sticky Metadata & Actions */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8 rounded-2xl border border-white/10 bg-[#030303] p-6 lg:p-8">
              
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                 {techStackList.map((tech, i) => (
                  <TechLogo key={i} name={tech} />
                ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Layers size={20} className="text-zinc-500 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-zinc-500">Ideal For</p>
                    <p className="mt-1 text-sm font-medium text-zinc-200">{project.suitableFor}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={20} className="text-zinc-500 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-zinc-500">Typical Deployment</p>
                    <p className="mt-1 text-sm font-medium text-zinc-200">{project.deploymentTime}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Tag size={20} className="text-zinc-500 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-zinc-500">Licensing / Pricing</p>
                    <p className="mt-1 text-sm font-medium text-zinc-200">{project.startingPrice}</p>
                  </div>
                </li>
              </ul>

              <div className="h-px w-full bg-white/10" />

              <div className="flex flex-col gap-3">
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-11 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-900 transition-colors hover:bg-white">
                    View live system
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>

                {project.bookingEnabled && (
                  <Link to={`/quote?project=${slug}`}>
                    <Button variant="outline" className="w-full h-11 rounded-lg border-white/10 bg-transparent text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-zinc-100">
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
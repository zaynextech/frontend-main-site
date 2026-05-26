import Hero from "../components/home/Hero";
// import Stats from "../components/home/Stats";
import TechStack from "../components/home/TechStack";
import IndustriesPreview from "../components/home/IndustriesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GlobalPresence from "@/components/home/GlobalPresence";
import InteractiveGrid from "@/components/ui/interactive-grid";
import PhoneShowcase from "@/components/home/PhoneShowcase";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Template1 from "@/components/home/Templates/Template1";
import SEO from "@/components/SEO";

const Home = () => {
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    // Locked in the #030303 background for maximum contrast
    <main className="relative flex min-h-screen flex-col bg-[#030303] text-zinc-200 antialiased">
       <SEO
        title="Zaynex — Websites & Digital Solutions for Modern Businesses"
        description="Helping businesses build a strong online presence with modern websites and digital solutions."
        path="/"
      />
     <InteractiveGrid />

     {showScrollTop && (
  <button
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
    className="group fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/90 bg-[#081120]/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
    aria-label="Scroll to top"
  >
          <ArrowUp
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      )}

   
      <Hero />
      

      <FeaturedProjects />
      <PhoneShowcase />
      <Template1 />
      <GlobalPresence />
      <TechStack />
      <IndustriesPreview />
    
        {/* <Stats /> */}

      
      
    </main>
  );
};

export default Home;
"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  rating: number;
  reviewText: string;
  avatarImage: string;
}

const ClientTestimonials = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: "t1",
      clientName: "Sandra Blake",
      role: "CEO",
      company: "Digital Agency",
      rating: 5.0,
      reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
      avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "t2",
      clientName: "Paula Reynolds",
      role: "CEO",
      company: "Flower Delivery App",
      rating: 5.0,
      reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
      avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "t3",
      clientName: "Kathryn Murphy",
      role: "CEO",
      company: "Coffee Shop App",
      rating: 5.0,
      reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
      avatarImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "t4",
      clientName: "Robert Fox",
      role: "CEO",
      company: "Pet Food App",
      rating: 5.0,
      reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
  ]);

  return (
    /* ─── 🛡️ ISOLATION SHIELD BASE ─── */
    <section className="w-full !bg-[#FAFAFA] !text-[#030303] py-16 relative z-20 overflow-hidden antialiased font-sans select-none">
      
      {/* Hardware accelerated hardware matrix translation loops.
        We target -50% because the train inner container width holds exactly 2 matched sets.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeInfinity {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-infinity {
          display: flex;
          width: max-content;
          animation: marqueeInfinity 30s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-infinity { 
          animation-play-state: paused; 
        }
      `}} />

      {/* Backdrop Decorative Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-15 mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>


      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ─── HEADER CONTAINER ─── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="mb-10 md:mb-14 border-b-4 border-[#030303] pb-6">
  <div className="flex w-full flex-col md:flex-row md:items-end md:justify-between gap-6">
    
    <div className="flex flex-col gap-2 max-w-2xl">
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600">
        CLIENT REVIEWS
      </span>

      <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
        Trusted by <span className="text-cyan-600">Businesses</span>
      </h2>

      <p className="text-sm text-black max-w-lg">
        Real feedback from clients who trusted Zaynex with their websites and digital solutions.
      </p>
    </div>

    <a
      href="https://g.page/r/Cd07YvTtfQPgEAE/review"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center  border-spacing-x-3 border-cyan-600 bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-700"
    >
      View Google Reviews
    </a>

  </div>
</header>
      </div>

      {/* ─── TRUE EDGE-TO-EDGE MARQUEE FRAME CONTAINER ─── */}
      <div className="relative w-full overflow-hidden py-4 z-10 pause-on-hover before:absolute before:left-0 before:top-0 before:z-30 before:h-full before:w-12 sm:before:w-32 before:bg-gradient-to-r before:from-[#FAFAFA] before:to-transparent after:absolute after:right-0 after:top-0 after:z-30 after:h-full after:w-12 sm:after:w-32 after:bg-gradient-to-l after:from-[#FAFAFA] after:to-transparent">
        
        {/* Continuous Train Carriage wrapper */}
        <div className="animate-marquee-infinity will-change-transform gap-4 sm:gap-6 pr-4 sm:pr-6">
          
          {/* ─── CARRIAGE BLOCK A: Set 1 ─── */}
          <div className="flex gap-4 sm:gap-6 shrink-0">
            {testimonials.map((item, index) => (
              <CardStructure key={`set1-${item.id}`} item={item} index={index} />
            ))}
          </div>
          
          {/* ─── CARRIAGE BLOCK B: Set 2 (Glued right behind Set A) ─── */}
          <div className="flex gap-4 sm:gap-6 shrink-0" aria-hidden="true">
            {testimonials.map((item, index) => (
              <CardStructure key={`set2-${item.id}`} item={item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

/* ─── MINI CARD STRUCTURAL LAYOUT COMPONENT ─── */
const CardStructure = ({ item, index }: { item: Testimonial; index: number }) => {
  return (
    <article className="w-[260px] sm:w-[360px] bg-white relative border-2 border-[#030303] p-4 sm:p-6 shadow-[3px_3px_0px_rgba(3,3,3,1)] hover:shadow-[5px_5px_0px_rgba(3,3,3,1)] transition-all duration-300 flex flex-col justify-between shrink-0 group">
      
      <div className="absolute top-4 right-4 text-orange-500 opacity-80 group-hover:scale-105 transition-transform duration-300">
        <Quote className="h-5 w-5 sm:h-6 sm:w-6 fill-orange-500 stroke-none" />
      </div>

      <div>
        <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#030303] bg-[#F5F5F3]">
            <img
              src={item.avatarImage}
              alt={item.clientName}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-left">
            <h3 className="text-xs sm:text-base font-black uppercase tracking-tight text-[#030303] truncate max-w-[140px] sm:max-w-[200px]">
              {item.clientName}
            </h3>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wide mt-0.5 truncate max-w-[140px] sm:max-w-[200px]">
              {item.role}, <span className="text-cyan-600">{item.company}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 py-2.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5] ${
                  i < item.rating 
                    ? "fill-orange-500 text-orange-500" 
                    : "text-zinc-200 fill-zinc-100"
                }`} 
              />
            ))}
          </div>
          <span className="text-[9px] sm:text-[10px] font-black text-[#030303] ml-1">
            {item.rating.toFixed(1)}
          </span>
        </div>

        <p className="text-[11px] sm:text-xs font-medium leading-relaxed text-zinc-800 text-left text-balance line-clamp-3 sm:line-clamp-4">
          "{item.reviewText}"
        </p>
      </div>

      <div className="mt-4 pt-2.5 border-t border-zinc-50 flex items-center">
        <span className="text-[8px] uppercase tracking-[0.2em] font-black text-zinc-400">
          // verified client _ 0{index + 1}
        </span>
      </div>



    </article>
  );
};

export default ClientTestimonials;
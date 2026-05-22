import React from "react";



type PhoneShowcaseProps = {
  className?: string;
};

const PhoneShowcase = ({ className }: PhoneShowcaseProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* The Container Card - Premium Glassmorphism */}
        <div className="group relative rounded-[2rem] border border-white/5 bg-[#080808]/50 p-12 backdrop-blur-3xl shadow-2xl overflow-hidden">
          
          {/* Subtle decorative glow behind the phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* 1. Left Text Column */}
            <div className="md:col-span-7 flex flex-col items-start gap-6">
           

              <h2 className="text-4xl lg:text-6xl font-black leading-none tracking-tighter text-white/90">
                Perfect on desktop.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
                  Powerful on mobile.
                </span>
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-xl font-light">
                Every Zaynex platform is engineered with fully responsive architecture,
                delivering seamless performance across phones, tablets, laptops, and
                ultra-wide displays. Fast, fluid, and optimized for every screen size.
              </p>
            </div>
            {/* 2. Right Phone Column - This is the core showcase */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative group/phone">
                
                {/* 3D Depth Frame (Optional shadow for "lift") */}
                <div className="absolute -inset-2 bg-black rounded-[42px] blur opacity-30 transition-all duration-700 group-hover/phone:opacity-100 group-hover/phone:blur-xl" />

                 {/* iPhone Physical Mockup */}
                <div className="relative w-[300px] h-[610px] bg-sky-200 border-[14px] border-[#00818F] rounded-[40px] shadow-2xl overflow-hidden antialiased">
                  
                 {/* Speaker and Camera Cutout */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-3">
              
              {/* Selfie Camera */}
              <div className="relative flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-zinc-900 border border-zinc-700 shadow-inner" />
                
                {/* Camera Lens Glow */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/70 blur-[1px]" />
              </div>

              {/* Speaker */}
              <div className="h-1.5 w-12 rounded-full bg-zinc-800 shadow-inner border border-zinc-700" />
            </div>

            {/* The Screen Content Area */}
            <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#030303]">
                                <img 
                      src="/showcase/project.png" 
                      alt="Zaynex Mobile Interface" 
                      className="w-full h-full object-cover object-top antialiased"
                    />
                    
                    {/* Interior glow reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneShowcase;
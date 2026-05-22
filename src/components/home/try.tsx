import React from 'react';
import { Menu, Facebook, Twitter, Instagram } from 'lucide-react';

// ==========================================
// 🌊 CENTRAL COLOR PALETTE CONFIGURATION
// Change these values to shift the theme instantly!
// ==========================================
const COLOR_PALETTE = {
  // Screen background surrounding the preview card
  outerBg: '#13282f', 
  
  // Ocean base tints (Used for fallbacks, borders, overlays)
  cardBg: '#093644',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.4)',
  
  // Interactive accents
  linkActive: '#ffffff',
  borderLight: 'rgba(255, 255, 255, 0.15)',
  
  // Image reference matching background
  // Replace this placeholder link with your actual ocean/surf background path if hosted locally!
  bgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80'
};

export default function TryPage() {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-12 font-sans selection:bg-cyan-700 selection:text-white"
      style={{ backgroundColor: COLOR_PALETTE.outerBg }}
    >
      {/* Main Container Card */}
      <div 
        className="relative w-full max-w-5xl aspect-[16/11] min-h-[550px] rounded-[24px] overflow-hidden flex flex-col justify-between p-8 md:p-12 shadow-2xl bg-cover bg-center"
        style={{
          backgroundColor: COLOR_PALETTE.cardBg,
          backgroundImage: `linear-gradient(to right, rgba(9, 54, 68, 0.35), rgba(4, 21, 27, 0.55)), url(${COLOR_PALETTE.bgImage})`
        }}
      >
        
        {/* --- Header Navigation --- */}
        <header className="flex items-center justify-between w-full z-10">
          {/* Brand Logo */}
          <div 
            className="text-2xl font-bold tracking-wide italic font-serif"
            style={{ color: COLOR_PALETTE.textPrimary }}
          >
            Amwaj
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#home" className="pb-1 border-b-2 transition-colors" style={{ color: COLOR_PALETTE.linkActive, borderColor: COLOR_PALETTE.linkActive }}>Home</a>
            <a href="#about" className="hover:text-white transition-colors" style={{ color: COLOR_PALETTE.textSecondary }}>About</a>
            <a href="#products" className="hover:text-white transition-colors" style={{ color: COLOR_PALETTE.textSecondary }}>Products</a>
            <a href="#service" className="hover:text-white transition-colors" style={{ color: COLOR_PALETTE.textSecondary }}>Service</a>
            <a href="#contact" className="hover:text-white transition-colors" style={{ color: COLOR_PALETTE.textSecondary }}>Contact</a>
          </nav>

          {/* Burger Menu Button */}
          <button className="p-1 hover:opacity-80 transition-opacity" style={{ color: COLOR_PALETTE.textPrimary }}>
            <Menu className="w-6 h-6 stroke-[2]" />
          </button>
        </header>

        {/* --- Main Content Section --- */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto z-10 w-full">
          
          {/* Left Column: Subtext and Small Messaging */}
          <div className="md:col-span-5 md:pt-16 flex flex-col items-start text-left">
            {/* Minimal Surfer Indicator Accent (Simulating the icon/graphic) */}
            <div className="w-8 h-2 rounded-full mb-6 opacity-80" style={{ backgroundColor: COLOR_PALETTE.textPrimary }} />

            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-wide mb-4" style={{ color: COLOR_PALETTE.textPrimary }}>
              Happiness <br />
              comes <br />
              in waves
            </h2>
            
            <p className="text-xs font-light leading-relaxed mb-6 max-w-xs" style={{ color: COLOR_PALETTE.textSecondary }}>
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was.
            </p>

            <button 
              className="text-xs font-bold tracking-widest uppercase bg-transparent border py-2.5 px-6 rounded-xs hover:bg-white hover:text-cyan-950 transition-all duration-300"
              style={{ borderColor: COLOR_PALETTE.textPrimary, color: COLOR_PALETTE.textPrimary }}
            >
              Read More
            </button>
          </div>

          {/* Right Column: Giant Overlay Header Typography */}
          <div className="md:col-span-7 flex flex-col items-end text-right select-none">
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider uppercase leading-[0.85] text-transparent bg-clip-text bg-cover bg-center drop-shadow-md"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6)), url(${COLOR_PALETTE.bgImage})`,
                WebkitBackgroundClip: 'text'
              }}
            >
              FLOW <br />
              WITH <br />
              IT
            </h1>
          </div>
        </main>

        {/* --- Footer Status and Socials Row --- */}
        <footer className="w-full flex items-end justify-between z-10 pt-4 border-t border-white/5">
          {/* Pagination/Slide Index Indicators */}
          <div className="flex items-center gap-3 text-sm font-light" style={{ color: COLOR_PALETTE.textPrimary }}>
            <span className="text-lg font-bold tracking-wider">01</span>
            <span style={{ color: COLOR_PALETTE.textMuted }}>/</span>
            <span className="text-xs tracking-widest" style={{ color: COLOR_PALETTE.textMuted }}>03</span>
            <div className="w-16 h-[1px] ml-2 opacity-30" style={{ backgroundColor: COLOR_PALETTE.textPrimary }} />
          </div>

          {/* Floating Sidebar-Style Right Social Icons Container */}
          <div className="flex items-center gap-4 md:absolute md:right-12 md:bottom-32 md:flex-col md:gap-6 md:border-r md:pr-4" style={{ borderColor: COLOR_PALETTE.borderLight }}>
            <a href="#facebook" className="hover:opacity-70 transition-opacity" style={{ color: COLOR_PALETTE.textPrimary }}>
              <Facebook className="w-3.5 h-3.5 fill-current stroke-none" />
            </a>
            <a href="#twitter" className="hover:opacity-70 transition-opacity" style={{ color: COLOR_PALETTE.textPrimary }}>
              <Twitter className="w-3.5 h-3.5 fill-current stroke-none" />
            </a>
            <a href="#instagram" className="hover:opacity-70 transition-opacity" style={{ color: COLOR_PALETTE.textPrimary }}>
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
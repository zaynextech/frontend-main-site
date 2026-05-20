import React from 'react';
import { Plus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageShowcase() {
  return (
    /* Cleaned up wrapper: No screen boundaries, no background colors. 
       Takes full width/height of its parent wrapper container seamlessly. */
    <div className="w-full h-full font-sans select-none flex items-center justify-center">
      {/* Main Container Card */}
      <div className="relative w-full max-w-[1200px] bg-gradient-to-br from-[#F5F5F5] to-[#E2E2E2] rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[550px] md:aspect-[16/11]">
        
        {/* BACKGROUND 3D ELEMENTS REPLICATION */}
        {/* Liquid Splash and Butterflies (Background Image layer) */}
        <div className="absolute right-[-5%] top-[10%] w-[65%] h-[80%] pointer-events-none mix-blend-multiply opacity-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/80 to-transparent rounded-full blur-3xl transform rotate-45"></div>
        </div>
        
        {/* Header / Navbar */}
        <header className="relative z-10 flex justify-between items-center w-full">
          <div className="text-xl sm:text-2xl font-black tracking-wider text-[#1A1A1A]">BROWN</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-medium text-[#4A4A4A]">
            <a href="#home" className="text-[#1A1A1A] font-semibold border-b-2 border-black pb-0.5">Home</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#beauty-products" className="hover:text-black transition-colors">Beauty Products</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="bg-black text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium hover:bg-neutral-800 transition-all text-xs tracking-wide">
              Login
            </button>
            {/* Mobile Nav Icon (visual placeholder) */}
            <button className="block md:hidden text-black p-1">
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* Hero Body Content */}
        <main className="relative z-10 grid grid-cols-12 gap-y-6 md:gap-y-0 items-center flex-grow mt-6 md:mt-4 mb-6 md:mb-0">
          
          {/* Left Column Text Content */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-left items-center md:items-start pr-0 md:pr-4 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-[#1A1A1A] leading-[1.1] mb-1">
              Cosmetics that
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-light text-[#555555] leading-tight mb-4 md:mb-6">
              Everyone loves!
            </h2>
            <p className="text-xs text-[#777777] leading-relaxed max-w-[340px] mb-6 md:mb-8">
              We have Huge collection fo cosmetics in Paris Branch our Products are always Quality products.
            </p>
            <Link
              to="https://demo1.zaynex.tech"
              target="_blank"
              rel="noopener noreferrer"
            className="w-fit bg-black text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-medium text-xs sm:text-sm tracking-wide hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10">
              View Live Site
            </Link>
          </div>

          {/* Right Column Featured Hero Product Showcase */}
          <div className="col-span-12 md:col-span-7 relative h-48 sm:h-64 md:h-full flex items-center justify-center order-1 md:order-2">
            {/* Main Product Perfume Image Wrapper */}
            <div className="relative z-20 transform translate-x-0 md:translate-x-10 -translate-y-0 md:-translate-y-4 max-w-[65%] sm:max-w-[50%] md:max-w-full">
              <img 
                src="/templetes/Big.png" 
                alt="Main Brown Cosmetics Bottle" 
                className="w-full max-w-[480px] h-auto object-contain drop-shadow-[25px_35px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </main>

        {/* Footer / Lower Product Cards Section */}
        <footer className="relative z-10 flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-end w-full pt-4 md:pt-0 border-t border-black/5 sm:border-none">
          
          {/* Mini Product Cards Container */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 lg:gap-6 w-full sm:w-auto items-center sm:items-stretch">
            
            {/* Card 1 - Body Wash */}
            <div className="bg-white/70 backdrop-blur-md rounded-[24px] pl-4 pr-4 sm:pr-6 py-3 sm:py-4 flex items-center gap-4 shadow-lg shadow-black/[0.03] border border-white/60 w-full max-w-[260px] sm:w-[200px] lg:w-[240px] relative overflow-visible mt-4 sm:mt-0">
              {/* Product Image Layer breaking outward */}
              <div className="w-[50px] lg:w-[60px] h-[90px] lg:h-[110px] relative -top-6 sm:-top-8 flex items-end justify-center flex-shrink-0">
                <img 
                  src="/templetes/small2.png" 
                  alt="Body Wash" 
                  className="max-w-full max-h-full object-contain drop-shadow-[5px_10px_10px_rgba(0,0,0,0.15)]"
                />
              </div>
              {/* Info text */}
              <div className="flex flex-col justify-center flex-grow -ml-1">
                <span className="text-[10px] text-neutral-400 font-medium">Body Wash</span>
                <span className="text-xs lg:text-sm font-bold text-[#1A1A1A]">$25.50</span>
                <span className="text-[9px] text-neutral-400 font-semibold mt-0.5">-35%</span>
              </div>
              {/* Action Button */}
              <button className="bg-black text-white p-1 rounded-full hover:bg-neutral-800 transition-colors flex-shrink-0">
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>

            {/* Card 2 - Daily Face Wash */}
            <div className="bg-white/70 backdrop-blur-md rounded-[24px] pl-4 pr-4 sm:pr-6 py-3 sm:py-4 flex items-center gap-4 shadow-lg shadow-black/[0.03] border border-white/60 w-full max-w-[260px] sm:w-[200px] lg:w-[240px] relative overflow-visible mt-4 sm:mt-0">
              {/* Product Image Layer breaking outward */}
              <div className="w-[50px] lg:w-[60px] h-[80px] lg:h-[100px] relative -top-6 flex items-end justify-center flex-shrink-0">
                <img 
                  src="/templetes/small1.png" 
                  alt="Daily Face Wash" 
                  className="max-w-full max-h-full object-contain drop-shadow-[5px_10px_10px_rgba(0,0,0,0.15)]"
                />
              </div>
              {/* Info text */}
              <div className="flex flex-col justify-center flex-grow -ml-1">
                <span className="text-[10px] text-neutral-400 font-medium">Daily Face Wash</span>
                <span className="text-xs lg:text-sm font-bold text-[#1A1A1A]">$18.00</span>
                <span className="text-[9px] text-neutral-400 font-semibold mt-0.5">-35%</span>
              </div>
              {/* Action Button */}
              <button className="bg-black text-white p-1 rounded-full hover:bg-neutral-800 transition-colors flex-shrink-0">
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>

          </div>

          {/* Right Layout Info Blocks */}
          <div className="hidden lg:flex items-end gap-12">
            {/* Center-Right: Scroll Down Indicator */}
            <div className="flex flex-col items-center gap-2 translate-y-2">
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-medium transform -rotate-90 origin-bottom mb-6 whitespace-nowrap">
                Scroll Down
              </span>
              <div className="w-5 h-9 border-2 border-neutral-700 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-neutral-700 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Far Right: Vertical Social Links */}
            <div className="text-[10px] font-semibold text-neutral-800 tracking-widest flex items-center gap-1 transform rotate-90 origin-bottom-right translate-x-[-12px] translate-y-[-24px] whitespace-nowrap">
              <span>Follow us</span>
              <span className="text-neutral-400 mx-1">-</span>
              <a href="#fb" className="hover:text-black transition-colors">Fb.</a>
              <span className="text-neutral-400">/</span>
              <a href="#tw" className="hover:text-black transition-colors">Tw.</a>
              <span className="text-neutral-400">/</span>
              <a href="#inst" className="hover:text-black transition-colors">Inst.</a>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
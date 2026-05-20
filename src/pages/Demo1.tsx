import React, { useState } from 'react';
import { Plus, Menu, X } from 'lucide-react';

export default function CosmeticsLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E2E2E2] font-sans select-none flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 relative overflow-hidden">
      
      {/* BACKGROUND 3D ELEMENTS */}
      <div className="absolute right-[-10%] top-[5%] md:top-[10%] w-[75%] md:w-[65%] h-[55%] md:h-[75%] pointer-events-none mix-blend-multiply opacity-70 md:opacity-80 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/80 to-transparent rounded-full blur-3xl rotate-45" />
      </div>
      
      {/* Header / Navbar */}
      <header className="relative z-50 flex justify-between items-center w-full max-w-[1400px] mx-auto py-2">
        
        <div className="text-xl sm:text-2xl font-black tracking-wider text-[#1A1A1A]">
          BROWN
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-[#4A4A4A]">
          <a href="#home" className="text-[#1A1A1A] font-semibold border-b-2 border-black pb-0.5">
            Home
          </a>

          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>

          <a href="#beauty-products" className="hover:text-black transition-colors">
            Beauty Products
          </a>

          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-neutral-800 transition-all text-xs tracking-wide">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="block md:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center gap-6 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-6 text-lg font-medium text-[#4A4A4A]">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-black font-semibold">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">About</a>
          <a href="#beauty-products" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Beauty Products</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Contact</a>
        </nav>
        <button className="bg-black text-white px-8 py-2.5 rounded-full font-medium text-sm tracking-wide mt-4">
          Login
        </button>
      </div>

      {/* Hero Body Content */}
      <main className="relative z-10 grid grid-cols-12 gap-y-8 md:gap-y-0 items-center flex-grow max-w-[1400px] w-full mx-auto my-8 md:my-4">
        
        {/* Left Column Text Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-center md:text-left items-center md:items-start order-2 md:order-1 px-2 sm:px-6 md:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] mb-2">
            Cosmetics that
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-light text-[#555555] leading-tight mb-6">
            Everyone loves!
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] leading-relaxed max-w-[340px] mb-8">
            We have Huge collection fo cosmetics in Paris Branch our Products are always Quality products.
          </p>
          <button className="w-fit bg-black text-white px-8 py-4 rounded-full font-medium text-xs sm:text-sm tracking-wide hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10">
            Explore Products
          </button>
        </div>

        {/* Right Column Featured Hero Product Showcase */}
<div className="col-span-12 md:col-span-7 relative flex items-center justify-center order-1 md:order-2 h-56 sm:h-72 md:h-auto">

  {/* Main Product Perfume Image Wrapper */}
  <div className="relative z-20 transform md:translate-x-6 lg:translate-x-10 md:-translate-y-4 max-w-[75%] sm:max-w-[60%] md:max-w-[100%] lg:max-w-[110%]">

    <img 
      src="/templetes/Big.png" 
      alt="Main Brown Cosmetics Bottle" 
      className="w-full max-w-[620px] lg:max-w-[720px] h-auto object-contain drop-shadow-[25px_35px_40px_rgba(0,0,0,0.18)] sm:drop-shadow-[25px_35px_40px_rgba(0,0,0,0.25)]"
    />

  </div>
</div>
      </main>

      {/* Footer / Lower Product Cards Section */}
      <footer className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-center sm:items-end w-full max-w-[1400px] mx-auto mt-auto pt-6 sm:pt-0">
        
        {/* Mini Product Cards */}
        <div className="flex flex-row flex-nowrap gap-4 lg:gap-6 w-full sm:w-auto items-center justify-center sm:justify-start overflow-x-auto">
          
          {/* Card 1 - Body Wash */}
          <div className="bg-white/70 backdrop-blur-md rounded-[24px] pl-4 pr-5 py-3 sm:py-4 flex items-center gap-4 shadow-lg shadow-black/[0.03] border border-white/60 w-full max-w-[260px] xs:w-[210px] lg:w-[240px] relative overflow-visible mt-4 xs:mt-0">
            {/* Product Image Layer breaking outward */}
            <div className="w-[50px] lg:w-[60px] h-[90px] lg:h-[110px] relative -top-7 sm:-top-8 flex items-end justify-center flex-shrink-0">
              <img 
                src="/templeletes/small2.png" 
                alt="Body Wash" 
                className="max-w-full max-h-full object-contain drop-shadow-[5px_10px_10px_rgba(0,0,0,0.15)]"
              />
            </div>
            {/* Info text */}
            <div className="flex flex-col justify-center flex-grow -ml-1">
              <span className="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Body Wash</span>
              <span className="text-sm font-bold text-[#1A1A1A]">$25.50</span>
              <span className="text-[9px] text-neutral-400 font-semibold mt-0.5">-35%</span>
            </div>
            {/* Action Button */}
            <button className="bg-black text-white p-1 rounded-full hover:bg-neutral-800 transition-colors flex-shrink-0">
              <Plus size={12} strokeWidth={3} />
            </button>
          </div>

          {/* Card 2 - Daily Face Wash */}
          <div className="bg-white/70 backdrop-blur-md rounded-[24px] pl-4 pr-5 py-3 sm:py-4 flex items-center gap-4 shadow-lg shadow-black/[0.03] border border-white/60 w-full max-w-[260px] xs:w-[210px] lg:w-[240px] relative overflow-visible mt-4 xs:mt-0">
            {/* Product Image Layer breaking outward */}
            <div className="w-[50px] lg:w-[60px] h-[80px] lg:h-[100px] relative -top-5 sm:-top-6 flex items-end justify-center flex-shrink-0">
              <img 
                src="/templetes/small1.png" 
                alt="Daily Face Wash" 
                className="max-w-full max-h-full object-contain drop-shadow-[5px_10px_10px_rgba(0,0,0,0.15)]"
              />
            </div>
            {/* Info text */}
            <div className="flex flex-col justify-center flex-grow -ml-1">
              <span className="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Daily Face Wash</span>
              <span className="text-sm font-bold text-[#1A1A1A]">$18.00</span>
              <span className="text-[9px] text-neutral-400 font-semibold mt-0.5">-35%</span>
            </div>
            {/* Action Button */}
            <button className="bg-black text-white p-1 rounded-full hover:bg-neutral-800 transition-colors flex-shrink-0">
              <Plus size={12} strokeWidth={3} />
            </button>
          </div>

        </div>

        {/* Desktop Structural Accent Blocks */}
        <div className="hidden md:flex items-end gap-8 lg:gap-16">
          {/* Center-Right: Scroll Down Indicator */}
          <div className="flex flex-col items-center gap-2 translate-y-2">
            <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-medium transform -rotate-90 origin-bottom mb-6 whitespace-nowrap">
              Scroll Down
            </span>
            <div className="w-5 h-9 border-2 border-neutral-700 rounded-full flex justify-center p-1 m-5">
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
  );
}
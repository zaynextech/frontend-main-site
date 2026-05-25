import React from 'react';
import { Plus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageShowcase() {
  return (
    <div className="w-full h-full flex items-center justify-center">

      {/* Main 16:9 Layout */}
      <div className="relative w-full h-full aspect-[16/9] bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] overflow-hidden rounded-[22px] font-sans flex flex-col justify-between px-6 sm:px-8 lg:px-14 py-5 lg:py-8">

        {/* Background Glow */}
        <div className="absolute right-[-8%] top-[5%] w-[65%] h-[80%] opacity-80 pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-white/70 to-transparent blur-3xl rotate-45" />
        </div>

        {/* Header */}
        <header className="relative z-20 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl lg:text-2xl font-black tracking-[0.2em] text-[#111]">
            BROWN
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[13px] font-medium text-[#555]">

            <a
              href="#home"
              className="text-black border-b border-black pb-1"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-black transition-colors"
            >
              About
            </a>

            <a
              href="#beauty-products"
              className="hover:text-black transition-colors"
            >
              Beauty Products
            </a>

            <a
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <button className="bg-black text-white px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-neutral-800 transition-all">
              Login
            </button>

            <button className="block md:hidden text-black">
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* Main Hero */}
        <main className="relative z-10 grid grid-cols-12 items-center flex-grow gap-4">

          {/* Left Content */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.02] text-[#111]">
              Cosmetics that
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#666] mt-1">
              Everyone loves!
            </h2>

            <p className="text-[13px] text-[#777] leading-relaxed max-w-[420px] mt-5 mb-7">
              We have huge collection of cosmetics in Paris Branch.
              Our products are always premium quality products
              loved by everyone.
            </p>

            <Link
              to="https://demo1.zaynex.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-black/10"
            >
              View Live Site
            </Link>
          </div>

          {/* Right Image */}
          <div className="col-span-12 md:col-span-7 relative h-full flex items-center justify-center">

            <div className="relative z-20 md:translate-x-8">

              <img
                src="/templetes/Big.png"
                alt="Main Brown Cosmetics Bottle"
                className="w-full max-w-[560px] object-contain drop-shadow-[20px_30px_35px_rgba(0,0,0,0.22)]"
              />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
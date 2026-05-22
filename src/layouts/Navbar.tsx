"use client";

import { NavLink } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Capabilities", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Prevent background scrolling when mobile menu drawer opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* FIXED INSET POSITIONING KEEPS IT MOUNTED AT THE TOP AT ALL TIMES */}
      <header className="fixed inset-x-0 top-0 md:top-6 z-[100] w-full px-4 sm:px-6 lg:px-10 transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between md:h-12">
          
          {/* Logo Section - Raw & background-free */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Desktop Links - Isolated rounded floating background capsule */}
          <nav 
            className="hidden items-center gap-1 md:flex bg-[#030303]/80 border border-white/20 backdrop-blur-xl px-2 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] selection:bg-cyan-500/30"
            onMouseLeave={() => setHoveredPath(null)}
            aria-label="Main Desktop Directory"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 antialiased rounded-full",
                    isActive ? "text-cyan-400" : "text-zinc-300 hover:text-white"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Hover Pill Background */}
                    <AnimatePresence>
                      {hoveredPath === link.path && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 z-0 rounded-full bg-white/[0.04] border border-white/5"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Active Pill Accent Border Line */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-border"
                        className="absolute inset-0 z-0 rounded-full border border-cyan-500/30 bg-cyan-500/[0.03] shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Mobile Toggle Area */}
          <div className="flex items-center gap-4 md:w-[78px] md:justify-end"> 
            {/* Mobile Menu Toggle button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close configuration menu" : "Open navigational options menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#030303]/80 backdrop-blur-md text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden shrink-0"
            >
              {isOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Component Stack */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Blur Backdrop Mask overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-[#030303]/50 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />
            
            {/* Mobile Menu Content Panel Side-Drawer */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed bottom-0 right-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-full max-w-[280px] flex-col border-l border-white/5 bg-[#030303] p-6 shadow-2xl md:hidden"
            >
              {/* Navigation Link Lists */}
              <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile Navigation Context Links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex w-full items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                        isActive 
                          ? "bg-cyan-500/[0.04] text-cyan-400 border border-cyan-500/20" 
                          : "text-zinc-300 hover:bg-white/[0.02] hover:text-white"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto space-y-4 border-t border-white/5 pt-6" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
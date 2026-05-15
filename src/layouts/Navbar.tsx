"use client";

import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
      <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl selection:bg-cyan-500/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - Enhanced Hover Logic */}
          <nav 
            className="hidden items-center gap-2 md:flex"
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
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 antialiased",
                    isActive ? "text-cyan-500 rounded-full border-[2px] border-cyan-500" : "text-zinc-100 hover:text-zinc-50"
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
                          className="absolute inset-0 z-0 rounded-full border-[2px] border-zinc-300"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Active Indicator - Premium Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0"
                        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              to="/login" 
              className="group hidden items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white lg:flex whitespace-nowrap"
            >
              Client portal
              <ArrowUpRight size={14} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            
            <Link to="/quote" className="hidden sm:block shrink-0">
              <Button className="group relative h-10 rounded-full bg-white px-6 text-sm font-bold text-black transition-all active:scale-95 hover:bg-zinc-200">
                Request quote
              </Button>
            </Link>

            {/* Mobile Menu Toggle button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close configuration menu" : "Open navigational options menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden shrink-0"
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
                          ? "bg-white/5 text-cyan-400 border border-cyan-500/20" 
                          : "text-zinc-300 hover:bg-white/[0.02] hover:text-white"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Bottom Mobile Action buttons */}
              <div className="mt-auto space-y-4 border-t border-white/5 pt-6">
                <Link 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1 w-full py-2.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Client portal
                  <ArrowUpRight size={14} className="shrink-0" />
                </Link>

                <Link 
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full"
                >
                  <Button className="w-full h-11 rounded-full bg-white text-sm font-bold text-black hover:bg-zinc-200 transition-colors active:scale-[0.98]">
                    Request quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
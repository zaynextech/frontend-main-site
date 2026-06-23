"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Start Project", path: "https://client.zaynex.tech/start-project" },
];

const Navbar = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll position to trigger morph effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (!location.pathname.startsWith("http")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  // Clean dual-strategy router navigation handler
  const handleNavigation = (path: string) => {
    setIsOpen(false);

    if (path.startsWith("http")) {
      window.location.href = path;
      return;
    }

    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      {/* ================= NAVBAR CONTAINER ================= */}
      <header className="fixed inset-x-0 top-0 z-[100] w-full px-3 pt-3 sm:px-6 lg:px-10 pointer-events-none">
        
        {/* Morphed Background Active Pill Layer */}
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "mx-auto flex h-11 sm:h-14 items-center justify-between rounded-xl sm:rounded-2xl border border-white/[0.05] bg-[#030303]/70 px-3 sm:px-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] pointer-events-auto",
            isScrolled ? "max-w-[110px] sm:max-w-[140px] justify-center" : "max-w-7xl"
          )}
        >
          {/* Logo Identity Node */}
          <motion.div layout className="shrink-0">
            <Logo />
          </motion.div>

          {/* ================= DESKTOP NAV ================= */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.nav
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.2 }}
                className="hidden items-center gap-0.5 sm:gap-1 md:flex"
                onMouseLeave={() => setHoveredPath(null)}
              >
                {navLinks.map((link) => {
                  const isActive = !link.path.startsWith("http") && location.pathname === link.path;

                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavigation(link.path)}
                      onMouseEnter={() => setHoveredPath(link.path)}
                      className={cn(
                        "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-300",
                        isActive ? "text-cyan-400" : "text-zinc-200 hover:text-white"
                      )}
                    >
                      <span className="relative z-10">{link.name}</span>

                      {/* Hover Pill Spotlight Track */}
                      <AnimatePresence>
                        {hoveredPath === link.path && (
                          <motion.span
                            layoutId="nav-hover"
                            className="absolute inset-0 rounded-full bg-white/[0.04]"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{
                              type: "spring",
                              duration: 0.3,
                              bounce: 0,
                            }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Active Route Identifier Accent */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full border border-cyan-500/20 bg-cyan-500/[0.04]"
                          transition={{
                            type: "spring",
                            duration: 0.35,
                            bounce: 0,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* ================= MOBILE MENU TRIGGER TRIGGER ================= */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-white/[0.06] bg-white/[0.02] text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {isOpen ? <X size={15} /> : <Menu size={15} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* ================= MOBILE EXTENDED DRAWER OVERLAY ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Mask Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Floating Container Drawer Grid */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-3 top-[60px] z-50 overflow-hidden rounded-xl border border-white/[0.05] bg-[#050505]/80 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col gap-0.5">
                {navLinks.map((link) => {
                  const isActive = !link.path.startsWith("http") && location.pathname === link.path;

                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavigation(link.path)}
                      className={cn(
                        "rounded-lg px-3.5 py-2.5 text-left text-xs font-semibold tracking-tight transition-all duration-200",
                        isActive
                          ? "bg-cyan-500/[0.06] text-cyan-400"
                          : "text-zinc-200 hover:bg-white/[0.04] hover:text-white"
                      )}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
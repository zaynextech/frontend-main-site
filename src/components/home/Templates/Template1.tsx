"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function PremiumQuoteHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing Effect Engine Configuration
  const words = ["grow.", "succeed.", "scale.", "thrive."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse move spotlight tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Precise Typing and Deleting State Loop
  useEffect(() => {
    const currentFullWord = words[currentWordIndex];
    let speed = isDeleting ? 40 : 100; // Speed parameters in ms

    if (!isDeleting && displayText === currentFullWord) {
      // Pause when word is completely typed out
      speed = 1800;
      const timeout = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      // Switch cleanly to next word when deleted
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullWord.substring(0, displayText.length - 1)
          : currentFullWord.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen bg-white text-[#030303] flex items-center relative overflow-hidden border-t border-b border-zinc-100 group/section"
    >
      {/* Background Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
      
      {/* Dynamic Cursor Spotlight Effect */}
      <div 
        className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-cyan-300/20 via-blue-200/10 to-transparent blur-[80px] rounded-full pointer-events-none transition-transform duration-500 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x - 225}px, ${mousePos.y - 225}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Layout Split Track Grid */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 lg:gap-12">
          
          {/* Main Copy Typography Column */}
          <div className="max-w-4xl text-left">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] text-[#030303] select-none">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-700 bg-[size:200%_auto] hover:bg-right transition-all duration-1000 cursor-default">
                digital solutions
              </span>{" "}
              that help businesses{" "}
              
              {/* Layout Anchor Container preventing layout shifting */}
              <span className="relative inline-block min-w-[4.5ch]">
                {/* Invisible element holding max layout block width to secure static spacing */}
                <span className="invisible opacity-0 pointer-events-none select-none">succeed.</span>
                
                {/* Active animated text output layout container */}
                <span className="absolute left-0 top-0 text-cyan-600 inline-flex items-center">
                  {displayText}
                  {/* Blinking Premium Caret Cursor Indicator */}
                  <span className="w-[3px] h-[0.85em] bg-cyan-600 ml-0.5 animate-[pulse_0.8s_infinite] opacity-80" />
                </span>
              </span>
            </h2>
          </div>

          {/* Action Trigger Block containing your Offset Shadow Button Design */}
<div className="flex-shrink-0 w-full md:w-auto">
  <a
    href="https://client.zaynex.tech/book-meeting"
    target="_blank"
    rel="noopener noreferrer"
    className="group/btn relative inline-flex items-center justify-center rounded-xl bg-[#030303] text-white px-8 h-14 text-sm font-bold tracking-tight transition-all duration-300 active:scale-95 hover:bg-cyan-600 hover:text-white w-full sm:w-auto"
  >
    <div className="absolute inset-0 w-full h-full rounded-xl border border-zinc-900 translate-x-1.5 translate-y-1.5 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none -z-10 bg-white" />

    <span>Book a Meeting</span>

    <svg
      className="ml-2.5 h-4 w-4 transition-all duration-300 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
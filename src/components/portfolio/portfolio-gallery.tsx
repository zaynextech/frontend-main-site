"use client";

import { useState } from "react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";

interface Props {
  images: string[];
}

export default function PortfolioGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center flex flex-col items-center justify-center space-y-3">
        <div className="p-3 bg-white rounded-xl border border-zinc-200 text-zinc-400 shadow-sm">
          <ImageIcon size={24} />
        </div>
        <p className="text-sm font-medium text-zinc-500">No showcase gallery images available</p>
      </div>
    );
  }

  return (
    <>
      {/* Interactive Production Layout Grid Grid */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            onClick={() => setActiveImage(image)}
            className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-zinc-200/40"
          >
            {/* Visual Hover Micro-Overlay Controls */}
            <div className="absolute inset-0 z-10 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 bg-white/90 backdrop-blur-md rounded-xl text-zinc-900 shadow-lg">
                <Maximize2 size={16} className="stroke-[2.5]" />
              </div>
            </div>

            {/* Core Imagery Render Asset Layer */}
            <img
              src={image}
              alt={`Gallery showcase frame ${index + 1}`}
              className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Backdrop Portal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-md animate-in fade-in duration-200 p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          {/* Dismiss Static Window Layer Controls */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md active:scale-95 border border-white/10"
            aria-label="Close interactive modal display overlay"
          >
            <X size={20} />
          </button>

          {/* Expanded High Resolution Asset Projection Container */}
          <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center animate-in zoom-in-95 duration-300">
            <img
              src={activeImage}
              alt="Expanded high-resolution portfolio projection look"
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl border border-white/5"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
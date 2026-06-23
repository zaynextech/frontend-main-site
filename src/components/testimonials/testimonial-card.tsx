"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/testimonial";

interface Props {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: Props) {
  const isTrustpilot = testimonial.rating_type === "TRUSTPILOT";

  return (
    <article className="w-[220px] sm:w-[360px] relative p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-borderSoft bg-[#030303] flex flex-col justify-between shrink-0 transition-all duration-300 hover:border-muted/30 shadow-md group">
      
      {/* Absolute Layer Watermark Accent Icon */}
      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 opacity-25 transition-opacity group-hover:opacity-40">
        <Quote
          className={cn(
            "h-3.5 w-3.5 sm:h-5 sm:w-5 rotate-180",
            isTrustpilot ? "fill-[#00B67A] text-[#00B67A]" : "fill-primary text-primary"
          )}
        />
      </div>

      <div className="space-y-2.5 sm:space-y-4">
        {/* Profile Grid Row */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-borderSoft pb-2.5 sm:pb-4">
          <div
            className={cn(
              "flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border bg-dark/40 font-bold text-xs sm:text-base shadow-inner",
              isTrustpilot ? "border-[#00B67A]/30 text-[#00B67A]" : "border-primary/30 text-primary"
            )}
          >
            {testimonial.client_name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h3 className="font-bold text-xs sm:text-base tracking-tight text-foreground truncate">
              {testimonial.client_name}
            </h3>
            <p className="text-[10px] sm:text-xs text-muted truncate">
              {testimonial.role}
              {testimonial.company && `, ${testimonial.company}`}
            </p>
          </div>
        </div>

        {/* Rating Metrics Accent Strip */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11} // Shrunk from 14
                className={cn(
                  i < testimonial.rating
                    ? "fill-accent text-accent"
                    : "text-zinc-700 fill-zinc-800"
                )}
              />
            ))}
          </div>

          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider select-none border",
              isTrustpilot 
                ? "bg-[#00B67A]/10 border-[#00B67A]/20 text-[#00B67A]" 
                : "bg-primary/10 border-primary/20 text-primary"
            )}
          >
            {isTrustpilot ? "Trustpilot" : "Google"}
          </span>
        </div>

        {/* Core Description Text Block */}
        <p className="text-[11px] sm:text-sm text-foreground/90 leading-relaxed font-normal italic">
          &ldquo;{testimonial.review_text}&rdquo;
        </p>
      </div>

      {/* Footer Audit Trailing */}
      <div className="mt-3.5 sm:mt-5 border-t border-borderSoft pt-2 sm:pt-3 flex items-center justify-between text-[9px] sm:text-[10px] font-semibold text-muted/60 tracking-wider uppercase select-none">
        <span>Verified Review</span>
        <span>#{index + 1}</span>
      </div>
    </article>
  );
}
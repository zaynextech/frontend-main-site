"use client";

import { useEffect, useState } from "react";

import { getTestimonials } from "@/lib/testimonials";

import { TestimonialCard } from "./testimonial-card";

import type {
  Testimonial,
} from "@/types/testimonial";

export function TestimonialsMarquee() {
  const [
    testimonials,
    setTestimonials,
  ] = useState<
    Testimonial[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    getTestimonials()
      .then(
        setTestimonials
      )
      .finally(() =>
        setLoading(false)
      );
  }, []);

  if (
    loading ||
    testimonials.length === 0
  ) {
    return null;
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marqueeInfinity {
              0% {
                transform: translate3d(0,0,0);
              }

              100% {
                transform: translate3d(-50%,0,0);
              }
            }

            .animate-marquee-infinity {
              display: flex;
              width: max-content;
              animation: marqueeInfinity 30s linear infinite;
            }

            .pause-on-hover:hover .animate-marquee-infinity {
              animation-play-state: paused;
            }
          `,
        }}
      />

      <div className="relative w-full overflow-hidden py-4 z-10 pause-on-hover before:absolute before:left-0 before:top-0 before:z-30 before:h-full before:w-12 sm:before:w-32 before:bg-gradient-to-r before:from-[#FAFAFA] before:to-transparent after:absolute after:right-0 after:top-0 after:z-30 after:h-full after:w-12 sm:after:w-32 after:bg-gradient-to-l after:from-[#FAFAFA] after:to-transparent">
        <div className="animate-marquee-infinity gap-4 sm:gap-6 pr-4 sm:pr-6">
          <div className="flex gap-4 sm:gap-6 shrink-0">
            {testimonials.map(
              (
                testimonial,
                index
              ) => (
                <TestimonialCard
                  key={
                    testimonial.id
                  }
                  testimonial={
                    testimonial
                  }
                  index={index}
                />
              )
            )}
          </div>

          <div
            className="flex gap-4 sm:gap-6 shrink-0"
            aria-hidden="true"
          >
            {testimonials.map(
              (
                testimonial,
                index
              ) => (
                <TestimonialCard
                  key={`clone-${testimonial.id}`}
                  testimonial={
                    testimonial
                  }
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Base
        "group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#030303]/20 p-5 sm:p-6 transition-all duration-300",

        // Hover
        "hover:-translate-y-0.5 hover:border-white/[0.08] hover:shadow-[0_0_30px_-12px_rgba(255,255,255,0.08)]",

        className
      )}
      {...props}
    >
      {/* Atmospheric Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at center, rgba(255,255,255,0.05), transparent 40%)",
        }}
      />

      {/* Top Edge Light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
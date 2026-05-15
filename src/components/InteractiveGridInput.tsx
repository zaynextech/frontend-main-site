"use client";

export default function InteractiveGridInput() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Base Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(#06B6D410_1px,transparent_1px),linear-gradient(to_right,#06B6D410_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Hover Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(#06B6D420_1px,transparent_1px),linear-gradient(to_right,#06B6D420_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
        style={{
          maskImage:
            "radial-gradient(240px circle at var(--x) var(--y), black 0%, transparent 100%)",

          WebkitMaskImage:
            "radial-gradient(240px circle at var(--x) var(--y), black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
"use client";

import React from "react";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  name,
  placeholder,
  type = "text",
  value,
  error,
  className,
  onChange,
}: Props) => {
  // Safe override to ensure incoming desktop col-spans don't collapse mobile grids
  const baseClassName = className?.includes("col-span")
    ? className.replace(/col-span-\d+|col-span-full/, "col-span-1 md:$&")
    : className;

  return (
    <div className={`group flex flex-col gap-2 ${baseClassName || ""}`}>

      {/* LABEL */}
      <label
        htmlFor={name}
        className="text-[15px] uppercase tracking-[0.25em] font-semibold text-zinc-100 ml-1 transition-colors group-focus-within:text-cyan-400"
      >
        {placeholder}
      </label>

      {/* INPUT WRAPPER */}
      <div className="relative">

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${placeholder.toLowerCase()}...`}
          className={`
            w-full
            rounded-xl
            px-4 py-3.5
            text-base md:text-sm
            text-white
            
            /* REDUCED PLACEHOLDER OPACITY */
            placeholder:text-zinc-600
            
            bg-black/30
            border
            backdrop-blur-md
            outline-none
            transition-all duration-300

            sm:py-4

           /* AUTOFILL OVERRIDES */
            autofill:bg-transparent
            [&:-webkit-autofill]:bg-transparent
            [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]
            [&:-webkit-autofill]:[-webkit-text-fill-color:white]

            ${
              error
                ? "border-red-500/40 focus:border-red-500 focus:bg-red-500/5"
                : "border-white/10 focus:border-cyan-500/40 focus:bg-white/[0.05]"
            }

            focus:shadow-[0_0_20px_rgba(6,182,212,0.12)]
          `}
        />

        {/* GLOW EFFECT */}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-focus-within:opacity-100 ring-1 ring-cyan-500/20" />
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-[11px] text-red-400 font-medium ml-1 flex items-center gap-1">
          <span>✕</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
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
    <div className={`group flex flex-col gap-1.5 text-left ${baseClassName || ""}`}>

      {/* ─── HI-CONTRAST EDITORIAL METADATA LABEL ─── */}
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.2em] font-black text-[#030303] ml-0.5 transition-colors group-focus-within:text-cyan-600 select-none"
      >
        // {placeholder}
      </label>

      {/* INPUT CONTAINER FRAME */}
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
            rounded-none
            border-2
            bg-white
            px-4 py-3
            text-xs font-bold uppercase tracking-wider
            text-[#030303]
            outline-none
            transition-all duration-150

            /* CRUSTY HIGH-VISIBILITY PLACEHOLDER */
            placeholder:text-zinc-400
            placeholder:font-normal
            placeholder:lowercase

            /* AUTOFILL INVERSION OVERRIDES */
            autofill:bg-white
            [&:-webkit-autofill]:bg-white
            [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]
            [&:-webkit-autofill]:[-webkit-text-fill-color:#030303]

            ${
              error
                ? "border-red-600 bg-red-50/30 focus:bg-white focus:shadow-[2px_2px_0px_rgba(220,38,38,1)]"
                : "border-[#030303] focus:bg-white focus:shadow-[2px_2px_0px_rgba(3,3,3,1)]"
            }
          `}
        />
      </div>

      {/* ─── FLAT PITCH BRUTALIST ERROR TRACKER ─── */}
      {error && (
        <p className="text-[10px] text-red-600 font-black uppercase tracking-widest ml-0.5 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
          <span>✕</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default FormInput;
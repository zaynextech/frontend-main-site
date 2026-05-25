"use client";

import React from "react";

type Props = {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextarea = ({
  name,
  placeholder,
  value,
  error,
  className,
  onChange,
}: Props) => {
  // Safe override to ensure incoming desktop col-spans don't stretch mobile layouts
  const baseClassName = className?.includes("col-span")
    ? className.replace(/col-span-\d+|col-span-full/, "col-span-1 md:$&")
    : className;

  return (
    <div className={`group flex flex-col gap-1.5 text-left ${baseClassName || ""}`}>
      
      {/* ─── HI-CONTRAST EDITORIAL METADATA LABEL ─── */}
      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#030303] ml-0.5 select-none">
        // {placeholder}
      </label>

      {/* TEXTAREA WRAPPER BLOCK */}
      <div className="relative">
        <textarea
          name={name}
          placeholder={`Enter ${placeholder.toLowerCase()}...`}
          value={value}
          onChange={onChange}
          className={`
            w-full p-4 rounded-none border-2 bg-white
            text-xs font-bold uppercase tracking-wider text-[#030303] outline-none 
            transition-all duration-150 min-h-[130px] resize-y

            /* HIGH-VISIBILITY BRUTALIST PLACEHOLDER */
            placeholder:text-zinc-400
            placeholder:font-normal
            placeholder:lowercase
            
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
        <p className="text-[10px] text-red-600 font-black uppercase tracking-widest ml-0.5 mt-0.5 flex items-center gap-1 animate-in invert-0 fade-in slide-in-from-top-1 duration-150">
          <span>✕</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default FormTextarea;
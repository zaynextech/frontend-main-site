"use client";

import { useState } from "react";

type Props = {
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  error?: string;
  className?: string;
  onChange: (value: string) => void;
};

const FormSelect = ({
  value,
  placeholder,
  options,
  error,
  className,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  // Safe override to ensure incoming desktop col-spans don't collapse mobile grids
  const baseClassName = className?.includes("col-span")
    ? className.replace(/col-span-\d+|col-span-full/, "col-span-1 md:$&")
    : className;

  return (
    <div className={`relative flex flex-col gap-1.5 text-left ${baseClassName || ""}`}>

      {/* ─── HI-CONTRAST METADATA LABEL ─── */}
      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#030303] ml-0.5 select-none">
        // {placeholder}
      </label>

      {/* ─── BRUTALIST SELECT BOX SELECTION NODE ─── */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-between
          w-full cursor-pointer
          rounded-none border-2 px-4 py-3
          text-xs font-bold uppercase tracking-wider
          bg-white transition-all duration-150
          
          ${
            error
              ? "border-red-600 bg-red-50/30 focus:shadow-[2px_2px_0px_rgba(220,38,38,1)]"
              : open 
              ? "border-[#030303] shadow-[2px_2px_0px_rgba(3,3,3,1)]" 
              : "border-[#030303] hover:bg-zinc-50"
          }
        `}
      >
        <span className={value ? "text-[#030303]" : "text-zinc-400 font-normal lowercase"}>
          {value || `select ${placeholder.toLowerCase()}...`}
        </span>

        {/* Rotatable Flat Indicator Toggle Arrow */}
        <span className={`text-[#030303] text-[9px] font-black transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* ─── COMPACT EDITORIAL DROPDOWN FRAME ─── */}
      {open && (
        <div className="absolute top-[102%] left-0 z-50 w-full max-h-52 overflow-y-auto rounded-none border-2 border-[#030303] bg-white shadow-[4px_4px_0px_rgba(3,3,3,1)] animate-in fade-in slide-in-from-top-1 duration-150">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`
                px-4 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer
                transition-colors duration-100 border-b border-zinc-100 last:border-b-0
                ${value === option 
                  ? "bg-[#030303] text-white" 
                  : "text-[#030303] bg-white hover:bg-[#FAFAFA]"
                }
              `}
            >
              {option}
            </div>
          ))}
        </div>
      )}

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

export default FormSelect;
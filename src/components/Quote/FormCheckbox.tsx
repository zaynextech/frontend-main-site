"use client";

import React from "react";

type Props = {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormCheckbox = ({
  name,
  label,
  checked,
  onChange,
}: Props) => {
  return (
    <label className="group flex cursor-pointer items-start sm:items-center gap-2.5 select-none py-1.5 sm:py-0 text-left">
      
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      {/* ─── CUSTOM BRUTALIST CHECKBOX CONTAINER ─── */}
      <div
        className={`
          h-4 w-4 rounded-none border-2 border-[#030303] transition-all duration-150 shrink-0 mt-0.5 sm:mt-0
          flex items-center justify-center
          ${checked 
            ? "bg-[#030303] shadow-[2px_2px_0px_rgba(34,211,238,0.4)]" 
            : "bg-white hover:bg-zinc-50"
          }
        `}
      >
        {/* HIGH-CONTRAST PURE VECTOR CHECKMARK */}
        <svg
          className={`h-3 w-3 transition-all duration-150 ${
            checked ? "scale-100 opacity-100 text-cyan-400" : "scale-50 opacity-0 text-transparent"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* ─── HIGHLegibility BRUTALIST LABEL ─── */}
      <span className="text-xs font-black uppercase tracking-wider text-zinc-700 group-hover:text-black peer-checked:text-[#030303] transition-colors duration-150 leading-tight sm:leading-none">
        {label}
      </span>
    </label>
  );
};

export default FormCheckbox;
"use client";

import React from "react";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  className?: string;
  // Adjusted to match the main handleChange signature
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
  return (
    <div className={`group flex flex-col gap-2 ${className}`}>
      <label 
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1 transition-colors group-focus-within:text-cyan-500"
      >
        {placeholder}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={`Enter ${placeholder.toLowerCase()}...`}
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-4 rounded-xl text-sm transition-all duration-300 outline-none
            bg-white/[0.03] border backdrop-blur-sm text-white placeholder:text-zinc-600
            ${error 
              ? "border-red-500/50 bg-red-500/5 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]" 
              : "border-white/10 focus:border-cyan-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            }
          `}
        />
        <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 group-focus-within:opacity-100 ring-1 ring-inset ring-cyan-500/20" />
      </div>

      {error && (
        <p className="text-red-400 text-[11px] font-medium mt-1 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
          <span className="mr-1">✕</span> {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
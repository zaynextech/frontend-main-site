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
    <div className={`relative flex flex-col gap-2 ${baseClassName || ""}`}>

      {/* LABEL */}
      <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-zinc-100 ml-1">
        {placeholder}
      </label>

      {/* SELECT BOX */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-between
          w-full cursor-pointer
          rounded-xl px-4 py-3.5 sm:py-4
          text-base md:text-sm text-white
          bg-black/30 border backdrop-blur-md
          transition-all duration-300
          
          ${
            error
              ? "border-red-500/40 focus:border-red-500"
              : open 
              ? "border-cyan-500/40" 
              : "border-white/10 hover:border-cyan-500/30"
          }
          
          ${open ? "shadow-[0_0_20px_rgba(6,182,212,0.12)]" : ""}
        `}
      >
        <span className={value ? "text-white" : "text-zinc-400"}>
          {value || placeholder}
        </span>

        <span className="text-zinc-500 text-xs transition-transform duration-300 group-hover:text-white">
          ▼
        </span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border border-white/10 bg-[#0a0a0a] shadow-xl backdrop-blur-xl">

          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`
                px-4 py-3.5 text-base md:text-sm cursor-pointer
                transition-all
                hover:bg-cyan-500/10 hover:text-cyan-300
                ${value === option ? "bg-cyan-500/10 text-cyan-300" : "text-white"}
              `}
            >
              {option}
            </div>
          ))}

        </div>
      )}

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

export default FormSelect;
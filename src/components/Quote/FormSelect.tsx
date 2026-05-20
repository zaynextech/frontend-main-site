import { useState } from "react";

type Props = {
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
};

const FormSelect = ({
  value,
  placeholder,
  options,
  error,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative flex flex-col gap-2">

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
          rounded-xl px-4 py-3 sm:py-4
          text-sm text-white
          bg-black/30 border border-white/10
          transition-all duration-300
          hover:border-cyan-500/30
          ${open ? "border-cyan-500/40" : ""}
        `}
      >
        <span className={value ? "text-white" : "text-zinc-200"}>
          {value || placeholder}
        </span>

        <span className="text-zinc-500">▾</span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-xl backdrop-blur-xl">

          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`
                px-4 py-3 text-sm cursor-pointer
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
        <p className="text-[11px] text-red-400 font-medium ml-1">
          ✕ {error}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
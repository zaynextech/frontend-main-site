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
    <label className="group flex cursor-pointer items-start sm:items-center gap-3 select-none py-2 sm:py-0">
      
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      {/* CUSTOM CHECKBOX CONTAINER */}
      <div
        className={`
          h-5 w-5 rounded-[6px] border transition-all duration-300 shrink-0 mt-0.5 sm:mt-0
          flex items-center justify-center
          ${checked 
            ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.25)]" 
            : "border-white/15 bg-white/[0.02] group-hover:border-white/30 group-hover:bg-white/[0.04]"
          }
        `}
      >
        {/* PREMIUM VECTOR CHECKMARK */}
        <svg
          className={`h-3.5 w-3.5 text-cyan-400 transition-all duration-300 ${
            checked ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* LABEL */}
      <span className="text-base md:text-sm text-zinc-400 group-hover:text-zinc-200 peer-checked:text-white transition-colors duration-300 leading-snug sm:leading-none">
        {label}
      </span>
    </label>
  );
};

export default FormCheckbox;
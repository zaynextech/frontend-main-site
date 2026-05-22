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
    <div className={baseClassName || ""}>
      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-100 ml-1">
        {placeholder}
      </label>

      <textarea
        name={name}
        placeholder={`Enter ${placeholder.toLowerCase()}...`}
        value={value}
        onChange={onChange}
        className={`
          mt-2 w-full p-4 rounded-xl 
          bg-[#030303]/30 backdrop-blur-md border
          text-base md:text-sm text-white outline-none 
          transition-all duration-300 min-h-[120px]
          ${
            error
              ? "border-red-500/40 focus:border-red-500 focus:bg-red-500/5"
              : "border-white/10 focus:border-cyan-500/40 focus:bg-white/[0.05]"
          }
          focus:shadow-[0_0_20px_rgba(6,182,212,0.12)]
        `}
      />

      {error && (
        <p className="text-[11px] text-red-400 font-medium ml-1 mt-1 flex items-center gap-1">
          <span>✕</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;
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
  return (
    <div className={className}>
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
          bg-white/[0.03] border border-white/10 
          text-white text-sm outline-none 
          focus:border-cyan-500/40 focus:bg-white/[0.05]
          transition-all
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;
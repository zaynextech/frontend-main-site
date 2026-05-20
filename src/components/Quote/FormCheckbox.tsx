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
    <label className="flex cursor-pointer items-center gap-3 select-none">
      
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      {/* CUSTOM BOX */}
      <div
        className={`
          h-5 w-5 rounded-md border transition-all
          flex items-center justify-center
          ${checked 
            ? "bg-cyan-500 border-cyan-500" 
            : "border-white/20 bg-black/20"
          }
        `}
      >
        {checked && (
          <div className="h-2.5 w-2.5 rounded-sm bg-black" />
        )}
      </div>

      {/* LABEL */}
      <span className="text-sm text-zinc-300 peer-checked:text-white transition">
        {label}
      </span>
    </label>
  );
};

export default FormCheckbox;
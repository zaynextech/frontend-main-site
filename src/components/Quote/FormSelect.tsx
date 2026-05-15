type Props = {
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  error?: string;

  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const FormSelect = ({
  name,
  value,
  placeholder,
  options,
  error,
  onChange,
}: Props) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-white/5
          bg-[#111]
          p-4
          text-white
          outline-none
          transition-all
          focus:border-cyan-500/40
        "
      >
        <option
          value=""
          disabled
          className="bg-[#111] text-zinc-500"
        >
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#111] text-white"
          >
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
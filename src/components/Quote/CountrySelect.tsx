"use client";

import React from "react";
import Select, { StylesConfig, SingleValue } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../../constants/countries";

// 1. Define the Option structure
type CountryOption = {
  value: string;
  label: React.JSX.Element;
};

type Props = {
  value: string;
  className?: string; // ADDED THIS TO PROP TYPES TO FIX THE TS ERROR
  onChange: (value: string) => void;
};

const options: CountryOption[] = countries.map((country) => ({
  value: country.name,
  label: (
    <div className="flex items-center gap-3">
      <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
          width: '1.2em',
          height: '1.2em',
          borderRadius: '3px',
          objectFit: 'cover'
        }}
      />
      <span className="font-medium text-base md:text-sm">{country.name}</span>
    </div>
  ),
}));

// 2. Pass the Option type to StylesConfig
const customStyles: StylesConfig<CountryOption, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    borderColor: state.isFocused ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "5px 4px",
    boxShadow: state.isFocused ? "0 0 20px rgba(6, 182, 212, 0.12)" : "none",
    "&:hover": {
      borderColor: state.isFocused ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.2)",
    },
    transition: "all 0.3s ease",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#0a0a0a",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    marginTop: "8px",
    overflow: "hidden",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(16px)",
    zIndex: 50,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "220px",
    overflowY: "auto",
    padding: "4px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(6, 182, 212, 0.3)",
    },
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "8px",
    margin: "2px 0",
    backgroundColor: state.isSelected 
      ? "rgba(6, 182, 212, 0.12)" 
      : state.isFocused 
      ? "rgba(255, 255, 255, 0.04)" 
      : "transparent",
    color: state.isSelected ? "#22d3ee" : state.isFocused ? "#ffffff" : "#a1a1aa",
    cursor: "pointer",
    padding: "12px 16px",
    transition: "all 0.2s ease",
    "&:active": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
    fontSize: "16px",
    "@media (min-width: 768px)": {
      fontSize: "14px",
    },
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
    fontSize: "16px",
    "@media (min-width: 768px)": {
      fontSize: "14px",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#fff",
    fontSize: "16px",
    "@media (min-width: 768px)": {
      fontSize: "20px",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#52525b",
    paddingRight: "12px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    },
  }),
};

const CountrySelect = ({ value, className, onChange }: Props) => {
  // 3. Properly type the change handler
  const handleSelectChange = (newValue: SingleValue<CountryOption>) => {
    onChange(newValue?.value || "");
  };

  // Safe override to ensure incoming desktop col-spans don't collapse mobile grids
  const baseClassName = className?.includes("col-span")
    ? className.replace(/col-span-\d+|col-span-full/, "col-span-1 md:$&")
    : className;

  return (
    /* INJECTED THE CLASSNAME PROP HERE SO GRID LAYOUT WORKS */
    <div className={`space-y-2 ${baseClassName || ""}`}>
      <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-zinc-100 ml-1">
        Location
      </label>
      <Select<CountryOption, false>
        options={options}
        placeholder="Select your country"
        styles={customStyles}
        onChange={handleSelectChange}
        value={options.find((option) => option.value === value) || null}
        isSearchable
        unstyled
        classNames={{
          container: () => "w-full",
        }}
      />
    </div>
  );
};

export default CountrySelect;
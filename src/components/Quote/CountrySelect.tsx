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
          borderRadius: '2px',
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
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(8px)",
    borderColor: state.isFocused ? "rgba(6, 182, 212, 0.5)" : "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "6px 4px",
    boxShadow: state.isFocused ? "0 0 0 1px rgba(6, 182, 212, 0.2)" : "none",
    "&:hover": {
      borderColor: "rgba(255, 255, 255, 0.2)",
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
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(12px)",
    zIndex: 50,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "220px",
    overflowY: "auto",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected 
      ? "rgba(6, 182, 212, 0.1)" 
      : state.isFocused 
      ? "rgba(255, 255, 255, 0.05)" 
      : "transparent",
    color: state.isSelected ? "#22d3ee" : "#a1a1aa",
    cursor: "pointer",
    padding: "12px 16px",
    "&:active": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
    color: "#52525b",
    fontSize: "16px",
    "@media (min-width: 768px)": {
      fontSize: "14px",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#52525b",
    "&:hover": {
      color: "#fff",
    },
  }),
};

const CountrySelect = ({ value, onChange }: Props) => {
  // 3. Properly type the change handler
  const handleSelectChange = (newValue: SingleValue<CountryOption>) => {
    onChange(newValue?.value || "");
  };

  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">
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
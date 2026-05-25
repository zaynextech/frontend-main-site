"use client";

import React from "react";
import Select, { StylesConfig, SingleValue } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../../constants/countries";

type CountryOption = {
  value: string;
  label: React.JSX.Element;
};

type Props = {
  value: string;
  className?: string;
  onChange: (value: string) => void;
};

const options: CountryOption[] = countries.map((country) => ({
  value: country.name,
  label: (
    <div className="flex items-center gap-2.5">
      <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
          width: '1.1em',
          height: '1.1em',
          borderRadius: '1px',
          objectFit: 'cover'
        }}
      />
      <span className="font-bold text-xs uppercase tracking-wider">{country.name}</span>
    </div>
  ),
}));

const customStyles: StylesConfig<CountryOption, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#FFFFFF",
    borderColor: "#030303",
    borderWidth: "2px",
    borderRadius: "0px",
    padding: "4px 8px",
    boxShadow: state.isFocused ? "2px 2px 0px rgba(3,3,3,1)" : "none",
    "&:hover": {
      borderColor: "#030303",
    },
    transition: "all 0.15s ease",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#FFFFFF",
    border: "2px solid #030303",
    borderRadius: "0px",
    marginTop: "2px",
    overflow: "hidden",
    boxShadow: "4px 4px 0px rgba(3,3,3,1)",
    zIndex: 50,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "200px",
    overflowY: "auto",
    padding: "0px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#FAFAFA",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#030303",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected 
      ? "#030303" 
      : state.isFocused 
      ? "#FAFAFA" 
      : "transparent",
    color: state.isSelected ? "#FFFFFF" : "#030303",
    cursor: "pointer",
    padding: "10px 12px",
    transition: "all 0.1s ease",
    "&:active": {
      backgroundColor: "#030303",
      color: "#FFFFFF",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#030303",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  }),
  input: (base) => ({
    ...base,
    color: "#030303",
    fontSize: "12px",
    fontWeight: "700",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#a1a1aa",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: "#030303",
    paddingRight: "4px",
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
    "&:hover": {
      color: "#030303",
    },
  }),
};

const CountrySelect = ({ value, className, onChange }: Props) => {
  const handleSelectChange = (newValue: SingleValue<CountryOption>) => {
    onChange(newValue?.value || "");
  };

  const baseClassName = className?.includes("col-span")
    ? className.replace(/col-span-\d+|col-span-full/, "col-span-1 md:$&")
    : className;

  return (
    <div className={`space-y-1.5 text-left ${baseClassName || ""}`}>
      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#030303] block pl-0.5">
        // Location Selector
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
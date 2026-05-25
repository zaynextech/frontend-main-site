"use client";

import { useState } from "react";
import FeatureBadge from "../ui/feature-badge";
import { featureList } from "../ui/feature-list";

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const FeatureSelector = ({ value, onChange }: Props) => {
  const [otherText, setOtherText] = useState("");

  const selected = Array.isArray(value) ? value : [];

  const toggleFeature = (feature: string) => {
    let updated = [...selected];

    if (updated.includes(feature)) {
      updated = updated.filter((item) => item !== feature);
    } else {
      updated.push(feature);
    }

    onChange(updated);
  };

  return (
    <div className="col-span-full space-y-4 text-left">
      
      {/* ─── HIGH VISIBILITY MINI HEADER ─── */}
      <div className="flex items-center justify-between border-b border-[#030303] pb-1.5 select-none">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#030303]">
          // Project Capabilities Selection
        </h3>
        <span className="font-mono text-xs font-black uppercase tracking-wider text-cyan-600">
          {selected.length} <span className="text-zinc-400">Selected</span>
        </span>
      </div>

      {/* ─── BRUTALIST GRID BADGE MATRIX ─── */}
      <div className="flex flex-wrap gap-2">
        {featureList.map((feature) => {
          const active = selected.includes(feature);

          return (
            <button
              type="button"
              key={feature}
              onClick={() => toggleFeature(feature)}
              className={`text-left rounded-none transition-all duration-150 border-2 ${
                active
                  ? "border-[#030303] bg-[#030303] text-white shadow-[2px_2px_0px_rgba(34,211,238,0.3)]"
                  : "border-zinc-200 bg-white hover:border-[#030303]"
              }`}
            >
              {/* Overriding the component colors locally using context wrapper classes */}
              <div className={`p-2 flex items-center ${active ? "[&_span]:text-white [&_svg]:text-cyan-400" : "opacity-80 hover:opacity-100"}`}>
                <FeatureBadge name={feature} />
              </div>
            </button>
          );
        })}

        {/* CUSTOM FEATURE SELECT NODE TRIGGER */}
        <button
          type="button"
          onClick={() => toggleFeature("Other")}
          className={`rounded-none border-2 px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-150 ${
            selected.includes("Other")
              ? "border-[#030303] bg-[#030303] text-white"
              : "border-zinc-200 bg-white text-zinc-800 hover:border-[#030303] hover:text-[#030303]"
          }`}
        >
          + Add Custom Requirement
        </button>
      </div>

      {/* ─── SOLID TEXTAREA REQUIREMENT ENTRY CONTAINER ─── */}
      {selected.includes("Other") && (
        <div className="relative pt-2 animate-in fade-in duration-200 w-full">
          <textarea
            placeholder="Describe your custom architectural requirements or specific operational protocols..."
            value={otherText}
            onChange={(e) => {
              const newVal = e.target.value;
              setOtherText(newVal);

              const baseFeatures = selected.filter(
                (item) => item !== "Other" && !item.startsWith("Custom:")
              );

              onChange([
                ...baseFeatures,
                "Other",
                `Custom: ${newVal}`,
              ]);
            }}
            className="w-full min-h-[120px] rounded-none border-2 border-[#030303] bg-[#FAFAFA] p-4 text-xs font-bold uppercase tracking-wider text-[#030303] placeholder-zinc-400 outline-none transition-all focus:bg-white focus:shadow-[3px_3px_0px_rgba(3,3,3,1)]"
          />
          <div className="absolute bottom-3 right-3 hidden font-mono text-[9px] font-black tracking-widest text-zinc-400 sm:block select-none">
            RAW_INPUT_NODE
          </div>
        </div>
      )}

    </div>
  );
};

export default FeatureSelector;
"use client";

import { useState } from "react";
import FeatureBadge from "../ui/feature-badge";
import { featureList } from "../ui/feature-list";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const FeatureSelector = ({ value, onChange }: Props) => {
  const [otherText, setOtherText] = useState("");

  const selected = value.length > 0 ? value.split(", ") : [];

  const toggleFeature = (feature: string) => {
    let updated = [...selected];
    if (updated.includes(feature)) {
      updated = updated.filter((item) => item !== feature);
    } else {
      updated.push(feature);
    }
    onChange(updated.join(", "));
  };

  // Sync otherText if "Other" is already in the value string
  // (Assuming you store custom text as part of the comma-separated string)

  return (
    <div className="col-span-2 space-y-6 bg-black/50">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
          Project Capabilities
        </h3>
        <span className="text-[10px] text-zinc-600 font-mono">
          {selected.length} SELECTED
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {featureList.map((feature) => {
          const active = selected.includes(feature);

          return (
            <button
              type="button"
              key={feature}
              onClick={() => toggleFeature(feature)}
              className={`relative group transition-all duration-300 active:scale-95 ${
                active 
                  ? "ring-2 ring-cyan-500/20 rounded-xl" 
                  : ""
              }`}
            >
              <div className={`transition-all duration-300 ${
                active 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
              }`}>
                <FeatureBadge name={feature} />
              </div>
              
              {active && (
                <div className="absolute inset-0 bg-cyan-500/5 blur-md -z-10 rounded-xl" />
              )}
            </button>
          );
        })}

        {/* Improved Other Button */}
        <button
          type="button"
          onClick={() => toggleFeature("Other")}
          className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 active:scale-95 ${
            selected.includes("Other")
              ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              : "border-white/5 bg-white/[0.02] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
          }`}
        >
          + Custom Feature
        </button>
      </div>

      {/* Animated Textarea Container */}
      {selected.includes("Other") && (
        <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-75" />
          <textarea
            placeholder="Describe your custom requirement..."
            value={otherText}
            onChange={(e) => {
              const newVal = e.target.value;
              setOtherText(newVal);
              
              // Filter out old "Other" related text and append new
              const baseFeatures = selected.filter(f => featureList.includes(f));
              onChange([...baseFeatures, "Other", newVal].filter(Boolean).join(", "));
            }}
            className="
              relative
              min-h-[100px]
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#0a0a0a]
              p-4
              text-sm
              text-white
              placeholder:text-zinc-600
              outline-none
              transition-all
              focus:border-cyan-500/50
              focus:ring-1
              focus:ring-cyan-500/20
            "
          />
          <div className="absolute bottom-3 right-3 text-[10px] text-zinc-600 font-mono pointer-events-none">
            MARKDOWN SUPPORTED
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSelector;
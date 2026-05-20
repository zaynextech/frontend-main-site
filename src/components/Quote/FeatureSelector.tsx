"use client";

import { useState } from "react";

import FeatureBadge from "../ui/feature-badge";

import { featureList } from "../ui/feature-list";

type Props = {
  value: string[];

  onChange: (
    value: string[]
  ) => void;
};

const FeatureSelector =
  ({
    value,
    onChange,
  }: Props) => {

    const [
      otherText,
      setOtherText,
    ] = useState("");

    const selected =
      Array.isArray(value)
        ? value
        : [];

    const toggleFeature =
      (
        feature: string
      ) => {

        let updated = [
          ...selected,
        ];

        if (
          updated.includes(
            feature
          )
        ) {

          updated =
            updated.filter(
              (
                item
              ) =>
                item !==
                feature
            );

        } else {

          updated.push(
            feature
          );

        }

        onChange(
          updated
        );
      };

    return (
      <div className="col-span-2 space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">

            Project Capabilities

          </h3>

          <span className="font-mono text-[10px] text-zinc-600">

            {
              selected.length
            }{" "}
            SELECTED

          </span>

        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-2">

          {featureList.map(
            (
              feature
            ) => {

              const active =
                selected.includes(
                  feature
                );

              return (
                <button
                  type="button"

                  key={
                    feature
                  }

                  onClick={() =>
                    toggleFeature(
                      feature
                    )
                  }

                  className={`group relative transition-all duration-300 active:scale-95

                  ${
                    active

                      ? "rounded-xl ring-2 ring-cyan-500/20"

                      : ""
                  }`}
                >

                  <div
                    className={`transition-all duration-300

                    ${
                      active

                        ? "translate-y-0 opacity-100"

                        : "grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                    }`}
                  >

                    <FeatureBadge
                      name={
                        feature
                      }
                    />

                  </div>

                  {active && (

                    <div className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/5 blur-md" />

                  )}

                </button>
              );
            }
          )}

          {/* CUSTOM */}
          <button
            type="button"

            onClick={() =>
              toggleFeature(
                "Other"
              )
            }

            className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95

            ${
              selected.includes(
                "Other"
              )

                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"

                : "border-white/5 bg-white/[0.02] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
            }`}
          >

            + Custom Feature

          </button>

        </div>

        {/* OTHER INPUT */}
        {selected.includes(
          "Other"
        ) && (

          <div className="relative animate-in slide-in-from-top-2 fade-in duration-300">

            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur opacity-75" />

            <textarea
              placeholder="Describe your custom requirement..."

              value={
                otherText
              }

              onChange={(
                e
              ) => {

                const newVal =
                  e.target.value;

                setOtherText(
                  newVal
                );

                const baseFeatures =
                  selected.filter(
                    (
                      item
                    ) =>
                      item !==
                        "Other" &&
                      !item.startsWith(
                        "Custom:"
                      )
                  );

                onChange([
                  ...baseFeatures,
                  "Other",
                  `Custom: ${newVal}`,
                ]);
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
                outline-none
                transition-all
                placeholder:text-zinc-600
                focus:border-cyan-500/50
                focus:ring-1
                focus:ring-cyan-500/20
              "
            />

            <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-zinc-600">

              MARKDOWN SUPPORTED

            </div>

          </div>

        )}

      </div>
    );
  };

export default FeatureSelector;
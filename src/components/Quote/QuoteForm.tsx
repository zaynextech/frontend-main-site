"use client";

import { useState } from "react";

import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";
import FeatureSelector from "./FeatureSelector";
import FormSelect from "./FormSelect";
import CountrySelect from "./CountrySelect";

import { Button } from "../ui/button";

import {
  inputFields,
  selectFields,
  textareaFields,
  checkboxFields,
} from "./formFields";

import { validateForm } from "./validation";

import type { QuoteFormData } from "./types";

import { toast } from "sonner";

import api from "@/lib/axios";

const QuoteForm = () => {
  const initialForm: QuoteFormData = {
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    country:
      Intl.DateTimeFormat()
        .resolvedOptions()
        .locale.includes("IN")
        ? "India"
        : "",
    companyWebsite: "",
    rolePosition: "",
    projectType: "",
    projectDescription: "",
    requiredFeatures: [],
    budgetRange: "",
    projectTimeline: "",
    projectStatus: "",
    attachmentUrl: "",
    estimatedUsers: "",
    preferredContact: "",
    ndaRequired: false,
    ongoingSupport: false,
  };

  const [form, setForm] = useState<QuoteFormData>(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormData, string>>
  >({});

  const [loading, setLoading] = useState(false);

  /* INPUT CHANGE */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* SUBMIT */
  const submitQuote = async () => {
    if (loading) return;

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });

      return;
    }

    try {
      setLoading(true);

      await api.post("/quote", form);

      toast.success("Quote request submitted successfully.");

      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Failed to submit quote:", error);

      toast.error("Failed to submit quote.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden border-t border-cyan-500/10 bg-[#030303]/5 px-4 py-10 text-white antialiased sm:px-6 lg:px-10 lg:py-24">
      {/* BACKGROUND CYBER GRID (MATCHED TO FOOTER) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
    
      {/* LIGHT BLOOM GLOW (MATCHED TO FOOTER) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl md:h-[500px] md:w-[500px]" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="mt-1 text-2xl font-extrabold leading-tight tracking-tighter sm:text-5xl sm:leading-[0.9]">
            Architect Your
            <br />
            <span className="bg-gradient-to-b from-white/50 via-white/70 to-white/20 bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base font-light leading-relaxed text-zinc-300 sm:mt-8 sm:text-lg">
            Submit your project requirements and our engineering team will
            prepare a tailored software proposal.
          </p>
        </div>

        {/* FORM CONTAINER */}
        <div className="rounded-2xl border border-white/10 bg-[#030303]/10 p-4 backdrop-blur-2xl sm:p-6 md:rounded-[2rem] md:p-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-10">
            {/* SECTION */}
            <div className="col-span-full border-b border-white/5 pb-4">
              <h2 className="text-xs  text-cyan-100">
                01. CLIENT IDENTITY
              </h2>
            </div>

            {/* INPUTS */}
            {inputFields.map((field) => (
              <FormInput
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                value={form[field.name as keyof QuoteFormData] as string}
                error={errors[field.name as keyof QuoteFormData]}
                className={field.colSpan}
                onChange={handleChange}
              />
            ))}

            {/* COUNTRY */}
            <CountrySelect
              value={form.country}
              className="col-span-1 md:col-span-2"
              onChange={(value: string) =>
                setForm((prev) => ({ ...prev, country: value }))
              }
            />

            {/* SECTION */}
            <div className="col-span-full mt-4 border-b border-white/5 pb-4 md:mt-8">
              <h2 className="text-xs  text-cyan-100">
                02. PROJECT  SPECIFICATIONS
              </h2>
            </div>

            {/* SELECTS */}
            {selectFields.map((field) => (
              <FormSelect
                key={field.name}
                name={field.name}
                value={form[field.name as keyof QuoteFormData] as string}
                placeholder={field.placeholder}
                options={field.options}
                error={errors[field.name as keyof QuoteFormData]}
                onChange={(value: string) =>
                  setForm((prev) => ({
                    ...prev,
                    [field.name]: value,
                  }))
                }
              />
            ))}

            {/* TEXTAREAS */}
            {textareaFields.map((field) => {
              if (field.name === "requiredFeatures") {
                return (
                  <FeatureSelector
                    key={field.name}
                    value={form.requiredFeatures}
                    onChange={(value: string[]) =>
                      setForm((prev) => ({
                        ...prev,
                        requiredFeatures: value,
                      }))
                    }
                  />
                );
              }

              return (
                <FormTextarea
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof QuoteFormData] as string}
                  error={errors[field.name as keyof QuoteFormData]}
                  className="col-span-full"
                  onChange={handleChange}
                />
              );
            })}

            {/* CHECKBOXES */}
            <div className="col-span-full mt-2 flex flex-col gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:rounded-2xl sm:px-8 sm:py-6">
              {checkboxFields.map((field) => (
                <FormCheckbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  checked={Boolean(
                    form[field.name as keyof QuoteFormData]
                  )}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>

    {/* CALL OUT */}
        <div className="mt-8 rounded-2xl border border-white/10 border-l-cyan-500/30 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent p-5 sm:p-6 md:mt-16 md:rounded-[2rem] md:p-10">
  <h3 className="text-xl font-bold tracking-tight text-white/90 sm:text-2xl">
    Let’s Build Something Great
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:mt-4 sm:text-base">
    Submit your project details and our team will review your request and respond with a personalized solution within 12 hours.
  </p>
</div>

          {/* SUBMIT */}
          <div className="group relative mt-8 md:mt-12">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-md transition duration-500 group-hover:opacity-40" />

            <Button
  onClick={submitQuote}
  disabled={loading}
  className="relative flex min-h-[52px] w-full items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl transition-all duration-300 active:scale-[0.99] hover:border-cyan-500/30 hover:bg-black hover:text-cyan-400 sm:min-h-[60px] sm:px-6 sm:text-base md:min-h-[64px] md:text-lg disabled:pointer-events-none disabled:opacity-50"
>
  {loading ? (
    <div className="flex items-center gap-2 text-center">
      <svg
        className="h-5 w-5 animate-spin text-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>

      <span className="text-xs sm:text-sm md:text-base">
        Sending Your Request...
      </span>
    </div>
  ) : (
    <span className="text-center leading-tight">
      Get Your Free Project Consultation
    </span>
  )}
</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
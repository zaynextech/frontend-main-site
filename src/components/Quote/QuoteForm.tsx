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
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = e.target instanceof HTMLInputElement ? e.target.checked : false;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

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
    <section className="relative w-full text-[#030303] antialiased py-6">
      <div className="relative z-10 mx-auto max-w-4xl">
        
        {/* ─── MAIN BRUTALIST FORM CONTAINER ─── */}
        <div className="border-2 border-[#030303] bg-white/50 p-4 sm:p-8 md:p-10 shadow-none">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            
            {/* SECTION 01 HEADER */}
            <div className="col-span-full border-b-2 border-[#030303] pb-2 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                // 01. Client Identity Node
              </h2>
            </div>

            {/* HIGH CONTRAST DYNAMIC INPUTS */}
            {inputFields.map((field) => (
              <FormInput
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                value={form[field.name as keyof QuoteFormData] as string}
                error={errors[field.name as keyof QuoteFormData]}
                className={`${field.colSpan} text-zinc-900 font-bold placeholder-zinc-400`}
                onChange={handleChange}
              />
            ))}

            {/* DYNAMIC COUNTRY SELECT PACK */}
            <CountrySelect
              value={form.country}
              className="col-span-1 md:col-span-2 text-zinc-900 font-bold"
              onChange={(value: string) =>
                setForm((prev) => ({ ...prev, country: value }))
              }
            />

            {/* SECTION 02 HEADER */}
            <div className="col-span-full mt-4 border-b-2 border-[#030303] pb-2 text-left md:mt-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                // 02. System Specifications Node
              </h2>
            </div>

            {/* DYNAMIC FORM MENU SELECTS */}
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

            {/* RE-ENGINEERED DYNAMIC CONTENT AREAS */}
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
                  className="col-span-full text-zinc-900 font-bold"
                  onChange={handleChange}
                />
              );
            })}

            {/* HIGH-VISIBILITY FLAT CHECKBOX BOX WRAPPER */}
            <div className="col-span-full mt-2 flex flex-col gap-3 border-2 border-[#030303] bg-[#FAFAFA] p-4 sm:flex-row sm:flex-wrap sm:gap-6 sm:px-6 sm:py-4">
              {checkboxFields.map((field) => (
                <FormCheckbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  checked={Boolean(form[field.name as keyof QuoteFormData])}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>

          {/* ─── HIGH VISIBILITY CALL OUT NOTICE ─── */}
          <div className="mt-8 border-2 border-[#030303] border-l-cyan-500 bg-[#FAFAFA] p-5 text-left md:mt-10">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#030303]">
              // Systems Engineering Protocol
            </h3>
            <p className="mt-2 text-xs font-bold leading-relaxed text-zinc-600">
              Submit your system specifications. Our core technical infrastructure engineering matrix will evaluate your parameters and compile a structured proposal architecture timeline back to your node within 12 hours.
            </p>
          </div>

          {/* ─── INTERACTIVE BRUTALIST ACTION CONTROL SUBMIT ─── */}
          <div className="relative mt-6 md:mt-8">
            <Button
              onClick={submitQuote}
              disabled={loading}
              className="relative flex min-h-[50px] w-full items-center justify-center rounded-none border-2 border-[#030303] bg-[#030303] px-5 py-3 text-xs font-black uppercase tracking-widest text-white shadow-none hover:bg-white hover:text-[#030303] transition-all duration-200 active:scale-[0.995] disabled:pointer-events-none disabled:opacity-40"
            >
              {loading ? (
                <div className="flex items-center gap-2 text-center tracking-widest">
                  <svg
                    className="h-4 w-4 animate-spin text-current stroke-[3]"
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
                  <span>Transmitting parameters...</span>
                </div>
              ) : (
                <span>Submit Your Requirements</span>
              )}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
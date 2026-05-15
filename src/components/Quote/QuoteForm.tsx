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
  checkboxFields 
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
    country: Intl.DateTimeFormat().resolvedOptions().locale.includes("IN") ? "India" : "",
    companyWebsite: "",
    rolePosition: "",
    projectType: "",
    projectDescription: "",
    requiredFeatures: "",
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

    toast.success(
      "Quote request submitted successfully."
    );

    setForm(initialForm);

    setErrors({});
  } catch (error) {
    console.error(
      "Failed to submit quote:",
      error
    );

    toast.error(
      "Failed to submit quote."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative z-10 min-h-screen px-6 py-24 lg:px-10 text-white bg-[#030303]">
      {/* Visual Depth Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header - Matching original intent with premium typography */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Enterprise Quote Request
          </span>
          <h1 className="mt-8 text-5xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9]">
            Architect Your <br />
            <span className="text-zinc-500">Digital Infrastructure</span>
          </h1>
          <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Submit your project requirements and our engineering team will
            prepare a tailored software proposal.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          
          {/* Phase 01 Header */}
          <div className="col-span-full border-b border-white/5 pb-4">
             <h2 className="text-xs font-mono tracking-widest text-cyan-500">01. CLIENT IDENTITY</h2>
          </div>

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

          <CountrySelect
            value={form.country}
            onChange={(value: string) =>
              setForm((prev) => ({ ...prev, country: value }))
            }
          />

          {/* Phase 02 Header */}
          <div className="col-span-full border-b border-white/5 pb-4 mt-8">
             <h2 className="text-xs font-mono tracking-widest text-purple-500">02. PROJECT SPECIFICATIONS</h2>
          </div>

          {selectFields.map((field) => (
            <FormSelect
              key={field.name}
              name={field.name}
              value={form[field.name as keyof QuoteFormData] as string}
              placeholder={field.placeholder}
              options={field.options}
              error={errors[field.name as keyof QuoteFormData]}
              onChange={handleChange}
            />
          ))}

          {textareaFields.map((field) => {
            if (field.name === "requiredFeatures") {
              return (
                <FeatureSelector
                  key={field.name}
                  value={form.requiredFeatures}
                  onChange={(value: string) =>
                    setForm((prev) => ({ ...prev, requiredFeatures: value }))
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

          {/* Logistics & Checkboxes */}
          <div className="col-span-full flex flex-wrap gap-8 py-6 px-8 rounded-2xl bg-white/[0.02] border border-white/5 mt-4">
            {checkboxFields.map((field) => (
              <FormCheckbox
                key={field.name}
                name={field.name}
                label={field.label}
                checked={form[field.name as keyof QuoteFormData] as boolean}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        {/* Serious Inquiries Callout */}
        <div className="mt-16 border border-white/10 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] p-10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white">
            Serious Project Inquiries Only
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed font-light">
            Our engineering team reviews enterprise-grade software
            requests, scalable SaaS platforms, and serious
            digital transformation projects.
          </p>
        </div>

        {/* Final Submission Button */}
        <div className="mt-12 group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
          <Button
            onClick={submitQuote}
            disabled={loading}
            className="relative w-full h-16 text-lg font-bold bg-white text-black hover:bg-cyan-400 transition-all rounded-full shadow-2xl"
          >
            {loading ? "Transmitting Requirements..." : "Submit Enterprise Quote Request"}
          </Button>
        </div>

      </div>
    </section>
  );
};

export default QuoteForm;
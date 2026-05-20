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
    <section className="relative min-h-screen overflow-hidden bg-[#030303] px-6 py-24 text-white lg:px-10">
      {/* BG GLOW */}
      
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-full -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      

      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="mt-1 text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-5xl">
            Architect Your
            <br />
            <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-zinc-300">
            Submit your project requirements and our engineering team will
            prepare a tailored software proposal.
          </p>
        </div>

        {/* FORM CONTAINER */}
        <div className="rounded-[2rem] border border-white/10 bg-[#030303] p-6 backdrop-blur-2xl md:p-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {/* SECTION */}
            <div className="col-span-full border-b border-white/5 pb-4">
              <h2 className="text-xs tracking-[0.3em] text-cyan-400">
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
              onChange={(value: string) =>
                setForm((prev) => ({ ...prev, country: value }))
              }
            />

            {/* SECTION */}
            <div className="col-span-full mt-8 border-b border-white/5 pb-4">
              <h2 className="text-xs font-mono tracking-[0.3em] text-purple-400">
                02. PROJECT SPECIFICATIONS
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
            <div className="col-span-full mt-2 flex flex-wrap gap-8 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-6">
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
          <div className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10">
            <h3 className="text-2xl font-bold text-white">
              Serious Project Inquiries Only
            </h3>

            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
              Our engineering team reviews enterprise-grade software requests,
              scalable SaaS platforms, ERP systems, AI infrastructure, and
              digital transformation projects.
            </p>
          </div>

          {/* SUBMIT */}
          <div className="group relative mt-12">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-25 blur transition duration-500 group-hover:opacity-50" />

            <Button
              onClick={submitQuote}
              disabled={loading}
              className="relative h-16 w-full rounded-full bg-white text-lg font-bold text-black shadow-2xl transition-all hover:bg-cyan-400"
            >
              {loading
                ? "Transmitting Requirements..."
                : "Submit Enterprise Quote Request"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
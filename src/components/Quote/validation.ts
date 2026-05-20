import type { QuoteFormData } from "./types";

export const validateForm = (form: QuoteFormData) => {
  const errors: Partial<Record<keyof QuoteFormData, string>> = {};

  // Full Name
  if (!form.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  // Email
  if (!/\S+@\S+\.\S+/.test(form.workEmail.trim())) {
    errors.workEmail = "Enter a valid email address";
  }

  // Phone
  if (!/^\+?[0-9]{7,15}$/.test(form.phoneNumber.trim())) {
    errors.phoneNumber = "Enter a valid phone number";
  }

  // Website (flexible: supports google.com, www.google.com, https://google.com)
  if (form.companyWebsite?.trim()) {
    const website = form.companyWebsite.trim();

    const urlPattern =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;

    if (!urlPattern.test(website)) {
      errors.companyWebsite =
        "Enter a valid website (e.g. google.com)";
    }
  }

  // Project Type
  if (!form.projectType) {
    errors.projectType = "Select a project type";
  }

  // Project Description
  if (!form.projectDescription.trim()) {
    errors.projectDescription =
      "Project description is required";
  }

  return errors;
};
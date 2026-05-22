export const inputFields = [
  {
    name: "fullName",
    placeholder: "Full Name",
    type: "text",
  },

  {
    name: "companyName",
    placeholder: "Company / Brand Name",
    type: "text",
  },

  {
    name: "workEmail",
    placeholder: "Business Email",
    type: "email",
  },

  {
    name: "phoneNumber",
    placeholder: "Phone Number / WhatsApp",
    type: "tel",
  },

  {
    name: "country",
    placeholder: "Country / Region",
    type: "text",
  },

  {
    name: "companyWebsite",
    placeholder: "Existing Website (Optional)",
    type: "url",
  },

  {
    name: "rolePosition",
    placeholder: "Your Role / Position",
    type: "text",
  },

  {
    name: "estimatedUsers",
    placeholder: "Expected Monthly Users",
    type: "text",
  },

  {
    name: "preferredContact",
    placeholder: "Preferred Contact Method",
    type: "text",
  },

  {
    name: "attachmentUrl",
    placeholder: "Figma / Docs / Reference URL",
    type: "url",
    colSpan: "col-span-2",
  },
];

export const selectFields = [
  {
    name: "projectType",
    placeholder: "Project Type",
    options: [
      "Business Website",
      "Portfolio Website",
      "Landing Page",
      "E-Commerce Website",
      "Custom Web Application",
      "SaaS Platform",
      "AI-Powered Web App",
      "Dashboard & Admin Panel",
      "Marketplace Platform",
      "Booking & Reservation System",
      "Learning Management System (LMS)",
      "CRM Platform",
      "Job Portal",
      "Social Networking Platform",
      "Streaming Platform",
      "Real Estate Platform",
      "Healthcare Platform",
      "Travel & Tourism Website",
      "Food Delivery Platform",
      "Finance & Banking Platform",
    ],
  },

  {
    name: "budgetRange",
    placeholder: "Estimated Budget",
    options: [
      "$300 - $1,000",
      "$1,000 - $3,000",
      "$3,000 - $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "$25,000+",
      "Need Consultation",
    ],
  },

  {
    name: "projectTimeline",
    placeholder: "Project Timeline",
    options: [
      "ASAP",
      "1 - 2 Weeks",
      "2 - 4 Weeks",
      "1 - 2 Months",
      "2 - 4 Months",
      "Flexible Timeline",
    ],
  },

  {
    name: "projectStatus",
    placeholder: "Current Project Status",
    options: [
      "Ready to Start",
      "Planning & Research Phase",
      "Comparing Agencies",
      "Need Consultation First",
      "Already Have Design/UI",
      "Need Complete Development",
    ],
  },
];

export const textareaFields = [
  {
    name: "projectDescription",
    placeholder:
      "Describe your project goals, functionality, target audience, and overall requirements...",
    className:
      "col-span-2 min-h-[180px]",
  },

  {
    name: "requiredFeatures",
    placeholder:
      "Required Features (Authentication, Payments, Dashboard, API, AI Features, etc.)",
    className:
      "col-span-2 min-h-[120px]",
  },
];

export const checkboxFields = [
  {
    name: "ndaRequired",
    label: "NDA / Confidentiality Agreement Required",
  },

  {
    name: "ongoingSupport",
    label: "Need Ongoing Maintenance & Support",
  },
];
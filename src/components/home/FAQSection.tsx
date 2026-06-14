"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import InteractiveGrid from "@/components/ui/interactive-grid";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "How much does a professional website cost?",
      answer:
        "Website pricing depends on the design, features, and functionality required. Zaynex provides a custom quote based on your business needs and goals.",
    },
    {
      id: "faq-2",
      question: "How long does it take to build a website?",
      answer:
        "Most business websites are completed within 1–3 weeks. Larger web applications, ERP systems, and custom software projects may require additional development time.",
    },
    {
      id: "faq-3",
      question: "Are your websites mobile-friendly?",
      answer:
        "Yes. Every website we build is fully responsive and optimized for mobile phones, tablets, laptops, and desktop devices.",
    },
    {
      id: "faq-4",
      question: "Do you provide website maintenance and support?",
      answer:
        "Yes. We provide ongoing support, updates, security improvements, and technical assistance to ensure your website continues to perform at its best.",
    },
    {
      id: "faq-5",
      question: "Why choose Zaynex for website development?",
      answer:
        "Zaynex combines modern design, fast performance, secure development, and business-focused solutions to help businesses build a strong online presence and grow online.",
    },
  ];

  // Structured Data Schema Generation for Search Engine SEO Optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    /* ─── 🛡️ ISOLATION SHIELD BASE ─── */
    <section className="w-full !bg-[#FAFAFA] !text-[#030303] px-4 sm:px-6 py-20 lg:px-10 relative z-20 overflow-hidden antialiased font-sans select-none">
      
      {/* Backdrop Atmosphere Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-15 mix-blend-multiply">
        <img
          src="/watermark.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <InteractiveGrid />
      </div>

      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-4xl">
        
        {/* ─── HERO HEADER ─── */}
        <header className="mb-14 border-b-4 border-[#030303] pb-6">
          <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end text-left">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600">
                FAQ
              </span>

              <h2 className="text-4xl font-black tracking-tight leading-[1]">
                Frequently Asked Questions
              </h2>

              <p className="text-sm text-black max-w-lg">
                Answers to the most common questions about our websites, software, and digital solutions.
              </p>
            </div>
          </div>
        </header>

        {/* ─── ACCORDION INTERFACE BLOCK ─── */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <article 
                key={faq.id}
                className="w-full bg-white border-2 border-[#030303] shadow-[3px_3px_0px_rgba(3,3,3,1)] transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-black uppercase tracking-tight text-[#030303] text-sm sm:text-base gap-4 hover:text-cyan-600 transition-colors group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-normal">
                      0{index + 1}.
                    </span>
                    <span className="break-words">{faq.question}</span>
                  </div>
                  
                  {/* Brutalist Button Icon Wrapper */}
                  <div className="p-1 border border-[#030303] bg-white group-hover:bg-[#030303] group-hover:text-white transition-colors duration-150 shrink-0 shadow-[1px_1px_0px_rgba(3,3,3,1)]">
                    {isOpen ? (
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4 stroke-[3]" />
                    ) : (
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Smooth Max-Height Reveal Engine */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out bg-zinc-50/50 ${
                    isOpen ? "grid-rows-[1fr] border-t-2 border-[#030303]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 text-xs sm:text-sm font-medium leading-relaxed text-black text-left text-balance">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ─── SEO RICH CONTENT SCHEMA INJECTION ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </section>
  );
};

export default FAQSection;
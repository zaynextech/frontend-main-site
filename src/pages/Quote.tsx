import QuoteForm from "@/components/Quote/QuoteForm";

const Quote = () => {
  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden select-none sm:select-auto"
      
      onMouseMove={(e) => {
        const rect =
          e.currentTarget.getBoundingClientRect();

        e.currentTarget.style.setProperty(
          "--x",
          `${e.clientX - rect.left}px`
        );

        e.currentTarget.style.setProperty(
          "--y",
          `${e.clientY - rect.top}px`
        );
      }}
      
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Form */}
      <QuoteForm />
    </div>
  );
};

export default Quote;
import QuoteForm from "@/components/Quote/QuoteForm";
import InteractiveGridInput from "@/components/InteractiveGridInput";

const Quote = () => {
  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
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
      {/* Grid */}
      <InteractiveGridInput />

      {/* Form */}
      <QuoteForm />
    </div>
  );
};

export default Quote;
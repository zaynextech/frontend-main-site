import QuoteForm from "@/components/Quote/QuoteForm";
import SEO from "@/components/SEO";

const Quote = () => {
  return (
    <div
      className="relative min-h-screen bg-black/10 overflow-hidden select-none sm:select-auto"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

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
      <SEO
          title="Request a Project Quote | Zaynex"
          description="Get a custom quote for your website, web application, LMS, or business system."
          path="/quote"
        />
        
      {/* BACKGROUND GRAPHICS WRAPPER (STANDALONE & ISOLATED) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          loading="eager"
          className="h-full w-full object-cover scale-105 opacity-40 blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#030303]/10" />
      
        {/* Cyber Grid Pattern */}
        
      </div> 

      {/* FORM ELEMENT CONTAINER (ABOVE BACKGROUND & CLICKABLE) */}
      <div className="relative z-10 w-full h-full">
        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;
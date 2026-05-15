import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white antialiased overflow-x-hidden">
      
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        
        {/* Background Image */}
        <img
          src="/images/bg.jpg"
          alt=""
          role="presentation"
          className="h-full w-full object-cover opacity-10 blur-[2px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#030303]/90" />

        {/* Global Cyan Glow */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Layout */}
      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
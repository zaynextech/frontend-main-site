/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- HSL Mapping (Fixes the PostCSS Error) ---
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // --- Brand Colors (Zaynex Identity) ---
        dark: "#0A0F1C", // Deep Navy/Obsidian
        softDark: "#0A0F1C",
        card: "#161D2F",
        
        // Nexa Cyan (The Flow/Next-Gen)
        primary: {
          DEFAULT: "#06B6D4",
          cyan: "hsl(var(--nexa-cyan))",
        },
        
        // Savannah Gold (The African Energy/CTA)
        accent: "#F59E0B",
        
        // Neutral Slate (Typography and borders)
        muted: "#94A3B8",
        borderSoft: "rgba(255,255,255,0.08)"
      },
      
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'nexa-glow': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      },

      // --- Merged Animations (Brand Loader + Pulse + Marquee Engine) ---
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loader-square-1': 'square-1 2s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'loader-square-2': 'square-2 2s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'marquee': 'marquee 35s linear infinite', // Perfectly synced slow, continuous loop
      },

      // --- Custom Keyframes for Zaynex Identity & Marquee ---
      keyframes: {
        'square-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-6px, -6px) scale(1.1)', borderColor: '#ffffff' },
        },
        'square-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(6px, 6px) scale(1.1)', borderColor: '#06b6d4' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'marquee': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' }, // Uses hardware acceleration (translate3d) to ensure smooth rendering on mobile devices
        },
      }
    },
  },
  plugins: [],
}
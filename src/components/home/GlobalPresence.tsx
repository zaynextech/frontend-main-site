import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { COUNTRY_COORDINATES } from "@/constants/countryCoordinates";
import { COUNTRY_ALIASES } from "@/constants/countryAliases";
import api from "@/lib/axios";
// --- Types ---
type GeoItem = {
  rsmKey: string;
  properties: {
    name: string;
  };
};

interface GlobalCountry {
  id: string;
  countryName: string;
  countryCode: string;
  clientCount: string;
  active: boolean;
}

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// --- Sub-components ---
const HeaderIndicator = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md">
    <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
    {children}
  </div>
);


const GlobalPresence = () => {
  const [countries, setCountries] = useState<GlobalCountry[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchCountries = async () => {
      try {
        const { data } = await api.get("/global");

        if (isMounted) {
          setCountries(
            data.globals.filter(
              (item: GlobalCountry) => item.active
            )
          );
        }
      } catch (error) {
        console.error(
          "Failed to fetch global presence:",
          error
        );
      }
    };

    fetchCountries();

    return () => {
      isMounted = false;
    };
  }, []);

  // Array of active country names to highlight the SVG map regions
  const highlightedCountries = countries.map(
  (country) =>
    COUNTRY_ALIASES[country.countryName] ||
    country.countryName
);

  return (
    <section className="relative overflow-hidden rounded-[2rem]  bg-[#030303]/50 px-4 py-16 sm:px-6 lg:px-8">
  
  {/* Background System */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    
    {/* Background Image */}
    <img
      src="/images/bg.jpg"
      alt=""
      role="presentation"
      loading="lazy"
      className="h-full w-full object-cover scale-105 opacity-20 blur-[2px]"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#030303]/50" />

    {/* Cyan Glow */}
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />


  </div>

  <div className="relative z-10 mx-auto max-w-6xl">
    
    {/* Header */}
    <div className="mb-12 flex flex-col items-center text-center">
      
    

      <h2 className="mt-5 max-w-4xl text-2xl font-black tracking-tight text-white/90 md:text-5xl">
        Serving businesses across{" "}
        <span className="bg-gradient-to-b from-white/80 to-zinc-600 bg-clip-text text-transparent">
          multiple regions.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200">
        We design scalable software systems and modern digital platforms
        for businesses operating globally.
      </p>
    </div>

    {/* Main Dashboard */}
    <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]/50 shadow-2xl backdrop-blur-3xl">

      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] z-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Map */}
      <div className="relative z-10 px-2 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
        
        <ComposableMap
          projectionConfig={{ scale: 170 }}
          className="w-full"
          width={900}
          height={420}
        >
          <defs>
            <linearGradient
              id="activeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#7A5600"
                stopOpacity={0.6}
              />

              <stop
                offset="100%"
                stopColor="#004000"
                stopOpacity={0.4}
              />
            </linearGradient>
          </defs>

          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeoItem[] }) =>
              geographies.map((geo: GeoItem) => {
                
                const geoName =
                  geo.properties.name === "S. Sudan"
                    ? "South Sudan"
                    : geo.properties.name;

                const isActive =
                  highlightedCountries.includes(geoName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isActive
                          ? "#004352"
                          : "url(#activeGradient)",

                        stroke: isActive
                          ? "#009DC2"
                          : "#000000",

                        strokeWidth: isActive ? 1 : 0.5,

                        outline: "none",

                        transition: "all 0.3s ease",
                      },

                      hover: {
                        fill: isActive
                          ? "#082F49"
                          : "#7A5600",

                        stroke: isActive
                          ? "url(#activeGradient)"
                          : "#000000",

                        strokeWidth: 1.2,

                        outline: "none",

                        cursor: "pointer",
                      },

                      pressed: {
                        fill: "#004000",

                        stroke: isActive
                          ? "url(#activeGradient)"
                          : "#004000",

                        strokeWidth: 1.2,

                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Markers */}
          {countries.map((country) => {
            const normalizedCountry =
              COUNTRY_ALIASES[country.countryName] ||
              country.countryName;

            const coordinates =
              COUNTRY_COORDINATES[normalizedCountry];

            if (!coordinates) return null;

            return (
              <Marker
                key={country.id}
                coordinates={coordinates}
              >
                <g transform="translate(-12, -24)">
  
                    {/* Ping Animation */}
                    <circle
                      cx="8"
                      cy="8"
                      r={4}
                      fill="#06B6D4"
                      opacity={0.25}
                    >
                      <animate
                        attributeName="r"
                        values="6;22"
                        dur="3s"
                        repeatCount="indefinite"
                      />

                      <animate
                        attributeName="opacity"
                        values="0.4;0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Pin */}
                    <path
                      d="M12 0C7 0 3 4 3 9c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9z"
                      fill="#06B6D4"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                    />

                    {/* Inner Circle */}
                    <circle
                      cx="12"
                      cy="9"
                      r="3"
                      fill="#ffffff"
                    />
                  </g>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Bottom Dashboard */}
      <div className="relative z-10 border-t border-white/5 bg-black/30 p-4 backdrop-blur-xl sm:p-6">
        
        {/* Top */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div>
            <h3 className="text-sm font-medium text-zinc-100">
              Regions We Serve
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              Delivering remote software solutions globally.
            </p>
          </div>

          {/* Status */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
            
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            Available for remote projects
          </div>
        </div>

        {/* Countries */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          
          {countries.map((country) => (
            <div
              key={country.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/[0.03]"
            >
              
              {/* Top */}
              <div className="flex items-start gap-3">
                
                <div className="flex h-6 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                  <img
                    src={`https://flagcdn.com/w40/${country.countryCode}.png`}
                    alt={`${country.countryName} flag`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  
                  <h4 className="truncate text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                    {country.countryName}
                  </h4>

                  <p className="mt-0.5 truncate text-[10px] text-zinc-500">
                    {country.clientCount}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                
                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-600">
                  Status
                </span>

                <div className="flex items-center gap-1.5">
                  
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06B6D4]" />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#06B6D4]">
                    Live
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>  );
};

export default GlobalPresence;
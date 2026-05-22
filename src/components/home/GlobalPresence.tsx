"use client";

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

// ================= TYPES =================

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

// ================= GEO URL =================

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ================= COMPONENT =================

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

  const highlightedCountries = countries.map(
    (country) =>
      COUNTRY_ALIASES[country.countryName] ||
      country.countryName
  );

  return (
    <section className="relative overflow-hidden rounded-[2rem] border  px-4 py-16 shadow-[0_0_100px_rgba(0,255,255,0.03)] sm:px-6 lg:px-8">
  {/* ================= BACKGROUND SYSTEM ================= */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    {/* Background Image */}
    <img
      src="/images/bg.jpg"
      alt=""
      role="presentation"
      className="h-full w-full object-cover opacity-5 blur-[4px]"
    />

    {/* Matte Dark Overlay */}
    <div className="absolute inset-0 " />

    {/* Tactical Blueprint Grid lines */}
    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Center Ambient Glow */}
    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
  </div>

  {/* ================= CONTENT ELEMENT ================= */}
  <div className="relative z-10 mx-auto max-w-7xl">
    
    {/* ================= SECTION HEADER ================= */}
    <div className="mb-5 text-center">

      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        Worldwide Client Network
      </h2>

      <p className="mx-6 mt-4 max-w-2xl text-xs font-light leading-relaxed text-zinc-200 sm:text-base">
        Delivering modern websites, SaaS systems, and scalable digital solutions for businesses worldwide.
      </p>
    </div>

    {/* ================= MILITARY-GRADE HUD CONTAINER ================= */}
    <div className="relative overflow-hidden rounded-[1.5rem]  shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
      
      {/* CORNER BRACKET HUD ACCENTS */}
      <div className="absolute top-0 left-0 w-4 h-4 " />
      

      {/* Subtle Digital Film Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

     

      {/* ================= VECTOR COMPOSABLE MAP AREA ================= */}
      <div className="relative z-10 px-1 py-1 sm:px-6">
        <ComposableMap
          projectionConfig={{ scale: 165, center: [0, 10] }}
          className="w-full h-auto"
          width={900}
          height={440}
        >
          <defs>
            {/* Soft Cyan Shadow Glow */}
            <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Target Orange Selection Glow */}
            <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* GEOGRAPHY LAYER */}
         <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeoItem[] }) =>
              geographies.map((geo: GeoItem) => {
                const geoName = geo.properties.name === "S. Sudan" ? "South Sudan" : geo.properties.name;
                const isActive = highlightedCountries.includes(geoName);

                // Specific color metrics extracted directly from "download (7).jpg"
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        // Inactive land: Sleek tech slate-blue. Active land: Striking deep tactical tone.
                        fill: isActive ? "#0b192e" : "#111827",
                        
                        // Vivid cyber-glowing outline borders
                        stroke: isActive ? "#22d3ee" : "rgba(34, 211, 238, 0.15)",
                        strokeWidth: isActive ? 1.5 : 0.6,
                        outline: "none",
                        
                        // Injects the intense neon edge radiance from the reference image
                        filter: isActive ? "url(#cyan-glow)" : "none",
                        transition: "all 0.3s ease",
                      },
                      hover: {
                        // Vibrant visual feedback loop on mouse-over
                        fill: isActive ? "#0f2d52" : "#1f2937",
                        stroke: "#22d3ee",
                        strokeWidth: 1.8,
                        outline: "none",
                        cursor: "pointer",
                        filter: "url(#cyan-glow)",
                        transition: "all 0.2s ease",
                      },
                      pressed: {
                        fill: "#f97316", // Flashes target-alert orange upon click/press tracking
                        stroke: "#ffffff",
                        strokeWidth: 1.8,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* ================= TARGET MARKERS (CYBER PULSE INDICATORS) ================= */}
          {countries.map((country) => {
            const normalizedCountry = COUNTRY_ALIASES[country.countryName] || country.countryName;
            const coordinates = COUNTRY_COORDINATES[normalizedCountry];

            if (!coordinates) return null;

            // Highlight specific key centers (like India, etc.) with the tactical orange theme matching the image
            const isPrimaryHQ = country.countryName === "India"; 
            const themeColor = isPrimaryHQ ? "#f97316" : "#22d3ee";
            const filterGlow = isPrimaryHQ ? "url(#orange-glow)" : "url(#cyan-glow)";

            return (
              <Marker key={country.id} coordinates={coordinates}>
                <g transform="translate(0,0)">
                  
                  {/* Tactical Concentric Radar Ring 1 */}
                  <circle cx="0" cy="0" r="3" fill="none" stroke={themeColor} strokeWidth="1" opacity={0.4}>
                    <animate attributeName="r" values="3;16" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Tactical Concentric Radar Ring 2 */}
                  <circle cx="0" cy="0" r="3" fill="none" stroke={themeColor} strokeWidth="0.5" opacity={0.2}>
                    <animate attributeName="r" values="3;28" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* High Intensity Target Core Core */}
                  <circle
                    cx="0"
                    cy="0"
                    r="3.5"
                    fill={themeColor}
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    filter={filterGlow}
                    style={{ transformOrigin: "center" }}
                  />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>
     

          </div>

          {/* ================= BOTTOM PANEL ================= */}

          <div className="relative z-10 border-t bg-black/30 p-4 backdrop-blur-xl sm:p-6">

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Active Regions
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  Real-time global project availability
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-cyan-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                LIVE STATUS
              </div>
            </div>

            {/* ================= COUNTRY CARDS ================= */}

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

              {countries.map((country) => (
                <div
                  key={country.id}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]"
                >

                  {/* Top */}
                  <div className="flex items-center gap-2">

                    <div className="flex h-5 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-zinc-900">
                      <img
                        src={`https://flagcdn.com/w40/${country.countryCode}.png`}
                        alt={`${country.countryName} flag`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-[11px] font-medium text-zinc-200 group-hover:text-white">
                        {country.countryName}
                      </h4>

                      <p className="truncate text-[9px] text-zinc-500">
                        {country.clientCount}
                      </p>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-2">

                    <span className="text-[8px] uppercase tracking-wider text-zinc-600">
                      Active
                    </span>

                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-400" />

                      <span className="text-[8px] font-semibold uppercase tracking-wider text-cyan-400">
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
    </section>
  );
};

export default GlobalPresence;
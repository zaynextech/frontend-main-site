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
      className="h-full w-full object-cover opacity-30 blur-[4px]"
    />


   
  </div>

  {/* ================= CONTENT ELEMENT ================= */}
  <div className="relative z-10 mx-auto max-w-7xl">
    
   {/* ================= SECTION HEADER ================= */}
<div className="mb-5 text-center">
  <h2 className="text-2xl font-extrabold tracking-tight text-zinc-300 sm:text-3xl">
    Clients From Different Countries
  </h2>

  <p className=" text-center mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#31E0E0] sm:text-base">
    Building modern websites and digital solutions for clients from around the world.
  </p>
</div>

    {/* ================= MILITARY-GRADE HUD CONTAINER ================= */}
    <div className="relative overflow-hidden rounded-[1.5rem]  shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
      
       
   
     

     {/* ================= VECTOR COMPOSABLE MAP HUD PANEL ================= */}
        <div className="relative z-10  font-mono">
          



  {/* Composable Map Content Area */}
  <div className="relative">
    
    {/* ================= BACKGROUND IMAGE (DEEPEST LAYER) ================= */}
    {/* <div className="absolute inset-0 z-0 pointer-events-none select-none">
      <img
        src="/images/ocean.jpg"
        alt=""
        role="presentation"
        className="h-full w-full object-cover opacity-50"
      />
    </div>

   */}

    {/* Map component elevated to z-20 to sit beautifully on top of both */}
    <ComposableMap
      projectionConfig={{ scale: 165, center: [0, 10] }}
      className="w-full h-auto block relative z-20" 
      width={900}
      height={440}
    >
      <defs>
        <pattern id="ocean-bg" x="0" y="0" width="900" height="440" patternUnits="userSpaceOnUse">
          <image href="/images/ocean.jpg" width="900" height="440" preserveAspectRatio="xMidYMid slice" />
        </pattern>

        {/* Enhanced Intense Neon Cyan Cyber Glow */}
      <filter id="cyan-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Tactical Target Orange Selection Glow */}
        <filter id="orange-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="14" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* GEOGRAPHY LAYER */}
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: GeoItem[]; projection: any }) => (
          <>
            {geographies.map((geo: GeoItem) => {
              const geoName = geo.properties.name === "S. Sudan" ? "South Sudan" : geo.properties.name;
              const isActive = highlightedCountries.includes(geoName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isActive ? "#28A1A1" : "#ABABAB",
                      stroke: isActive ? "#000000" : "#000000",
                      strokeWidth: isActive ? 1 : 0.5,
                      outline: "none",
                      filter: isActive ? "url(#cyan-glow)" : "none",
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: isActive ? "#31E0E0" : "#8C8C8C",
                      stroke: "#193636",
                      strokeWidth: 1,
                      outline: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    },
                    pressed: {
                      fill: "#28A1A1", 
                      stroke: "#000000",
                      strokeWidth: 2.0,
                      outline: "none",
                    },
                  }}
                />
              );
            })}
          </>
        )}
      </Geographies>

      {/* ================= TARGET MARKERS & ANTI-COLLISION LABELS ================= */}
      {countries.map((country) => {
        const normalizedCountry = COUNTRY_ALIASES[country.countryName] || country.countryName;
        const coordinates = COUNTRY_COORDINATES[normalizedCountry];

        if (!coordinates) return null;

        const isPrimaryHQ = country.countryName === "India"; 
        const themeColor = isPrimaryHQ ? "#f97316" : "#f97316";
        const filterGlow = isPrimaryHQ ? "url(#orange-glow)" : "url(#cyan-glow)";

       

        if (country.countryName === "Uganda") {
        } else if (country.countryName === "Kenya") {
        } else if (country.countryName === "South Sudan") {
        }

        return (
          <g key={`marker-group-${country.id}`}>
            {/* Geodetic Map Anchor Marker Point */}
            <Marker coordinates={coordinates}>
              <g transform="translate(0,0)">
                {/* Radar Ring 1 */}
                <circle cx="0" cy="0" r="3" fill="none" stroke={themeColor} strokeWidth="1" opacity={0.5}>
                  <animate attributeName="r" values="3;18" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Radar Ring 2 */}
                <circle cx="0" cy="0" r="3" fill="none" stroke={themeColor} strokeWidth="0.5" opacity={0.3}>
                  <animate attributeName="r" values="3;32" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>

                {/* Cyber Target Solid Pulse Core */}
                <circle
                  cx="0"
                  cy="0"
                  r="4"
                  fill={themeColor}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  filter={filterGlow}
                />
              </g>
            </Marker>

            {/* Dynamic HUD Text Callout Labels mapped adjacent to coordinates */}
            
          </g>
        );
      })}
    </ComposableMap>
  </div>

          

        </div>

          {/* ================= BOTTOM PANEL ================= */}

          <div className="relative z-10   p-4 backdrop-blur-xl sm:p-6">

          

           {/* ================= COUNTRY CARDS ================= */}

<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
  {countries.map((country) => (
    <div
      key={country.id}
      className="group rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1.5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03]"
    >
      <div className="flex items-center justify-between gap-2">
        
        {/* Left */}
        <div className="flex min-w-0 items-center gap-2">
          <div className="h-4 w-6 overflow-hidden rounded-sm bg-zinc-900 shrink-0">
            <img
              src={`https://flagcdn.com/w40/${country.countryCode}.png`}
              alt={`${country.countryName} flag`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-[10px] font-medium text-zinc-200 group-hover:text-white">
              {country.countryName}
            </h4>

            <p className="text-[8px] text-zinc-100">
              {country.clientCount}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[8px] font-medium text-cyan-400">
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
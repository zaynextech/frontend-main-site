import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import sitemap from "vite-plugin-sitemap";

import getDynamicRoutes from "./vite.sitemap";

export default defineConfig(async () => {

  const dynamicPortfolioRoutes =
    await getDynamicRoutes();

  return {
    plugins: [
      react(),

      sitemap({
        hostname: "https://www.zaynex.tech",

        dynamicRoutes: [
          "/",
          "/about",
          "/services",
          "/industries",
          "/portfolio",
          "/pricing",
          "/quote",
          "/consultation",
          "/contact",
          "/privacy",
          "/terms",
          "/agreement",
          "/refund-policy",
          "/demo1",

          // AUTO PORTFOLIO ROUTES
          ...dynamicPortfolioRoutes,
        ],
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(
          __dirname,
          "src"
        ),
      },
    },

    optimizeDeps: {
      exclude: [
        "react-country-flag",
      ],
    },
  };
});
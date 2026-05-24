import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import "./main.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster
        richColors
        position="top-right"
      />

      <App />
    </HelmetProvider>
  </React.StrictMode>
);
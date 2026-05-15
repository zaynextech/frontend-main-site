import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "./App";

import "./main.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Toaster 
      richColors
      position="top-right"
    />
      <App />
  </React.StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#0f111a", // Matching your dark-800
          color: "#fff",
          border: "1px solid rgba(157, 0, 255, 0.2)", // Neon-purple accent
        },
      }}
    />
  </StrictMode>
);

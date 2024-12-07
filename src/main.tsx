import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { JobProvider } from "./context/jobContext.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <MantineProvider>
    <JobProvider>
      <App />
    </JobProvider>
  </MantineProvider>
  </GoogleOAuthProvider>
);

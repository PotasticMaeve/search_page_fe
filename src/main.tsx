import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { JobProvider } from "./context/jobContext.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <JobProvider>
      <App />
    </JobProvider>
  </MantineProvider>
);

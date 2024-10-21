import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css"; // Import the Tailwind CSS file

const container = document.getElementById("root");
if (container === null) throw Error('Missing "root" element');

const queryClient = new QueryClient();

ReactDOM.createRoot(container).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

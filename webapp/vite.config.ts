import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    svgr(),
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    legacy(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // https://vitest.dev/config/
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup",
    coverage: {
      provider: "v8",
      reporter: ["html"],
    },
  },
  define: {
    "process.env.NODE_ENV": `'${mode || "production"}'`,
    SC_DISABLE_SPEEDY: mode !== "production" ? "true" : "false",
  },
}));

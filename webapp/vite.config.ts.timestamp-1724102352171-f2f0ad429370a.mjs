// vite.config.ts
import react from "file:///C:/www/jslmariano/applications/fe-code-exercise--jslmariano/node_modules/@vitejs/plugin-react-swc/index.mjs";
import legacy from "file:///C:/www/jslmariano/applications/fe-code-exercise--jslmariano/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import { defineConfig } from "file:///C:/www/jslmariano/applications/fe-code-exercise--jslmariano/node_modules/vite/dist/node/index.js";
import svgr from "file:///C:/www/jslmariano/applications/fe-code-exercise--jslmariano/node_modules/vite-plugin-svgr/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\www\\jslmariano\\applications\\fe-code-exercise--jslmariano";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    svgr(),
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    legacy()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // https://vitest.dev/config/
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup",
    coverage: {
      provider: "v8",
      reporter: ["html"]
    }
  },
  define: {
    "process.env.NODE_ENV": `'${mode || "production"}'`,
    SC_DISABLE_SPEEDY: mode !== "production" ? "true" : "false"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3d3dcXFxcanNsbWFyaWFub1xcXFxhcHBsaWNhdGlvbnNcXFxcZmUtY29kZS1leGVyY2lzZS0tanNsbWFyaWFub1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcd3d3XFxcXGpzbG1hcmlhbm9cXFxcYXBwbGljYXRpb25zXFxcXGZlLWNvZGUtZXhlcmNpc2UtLWpzbG1hcmlhbm9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3d3dy9qc2xtYXJpYW5vL2FwcGxpY2F0aW9ucy9mZS1jb2RlLWV4ZXJjaXNlLS1qc2xtYXJpYW5vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHN2Z3IoKSxcclxuICAgIHJlYWN0KHsgcGx1Z2luczogW1tcIkBzd2MvcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzXCIsIHt9XV0gfSksXHJcbiAgICBsZWdhY3koKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIGh0dHBzOi8vdml0ZXN0LmRldi9jb25maWcvXHJcbiAgdGVzdDoge1xyXG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcclxuICAgIHNldHVwRmlsZXM6IFwiLi9zcmMvdGVzdC9zZXR1cFwiLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcHJvdmlkZXI6IFwidjhcIixcclxuICAgICAgcmVwb3J0ZXI6IFtcImh0bWxcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBcInByb2Nlc3MuZW52Lk5PREVfRU5WXCI6IGAnJHttb2RlIHx8IFwicHJvZHVjdGlvblwifSdgLFxyXG4gICAgU0NfRElTQUJMRV9TUEVFRFk6IG1vZGUgIT09IFwicHJvZHVjdGlvblwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsXHJcbiAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZXLE9BQU8sV0FBVztBQUMvWCxPQUFPLFlBQVk7QUFDbkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQUEsSUFDMUQsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLE1BQU07QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLHdCQUF3QixJQUFJLFFBQVEsWUFBWTtBQUFBLElBQ2hELG1CQUFtQixTQUFTLGVBQWUsU0FBUztBQUFBLEVBQ3REO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K

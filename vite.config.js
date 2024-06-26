import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
    setupFiles: "./src/test/setup.js",
  },
  server: {
    port: 3000,
  },
});

/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  build: {
    chunkSizeWarningLimit: 1500,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTests.ts",
  },
});

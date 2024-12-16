import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const config = defineConfig({
  plugins: cssInjectedByJsPlugin(),
  build: {
    lib: {
      entry: "./src/main.ts",
      formats: ["iife"],
      name: "nutjar",
    },
  },
});

export default config;

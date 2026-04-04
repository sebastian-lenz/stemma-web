import { defineConfig } from "vite";
import { resolve } from "path";
import { protobufPatch } from "./vite.config.shared.js";

export default defineConfig({
  plugins: [protobufPatch()],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.p5.ts"),
      name: "StemmaWebP5",
      formats: ["iife"],
    },
    rollupOptions: {
      external: ["p5"],
      output: {
        globals: { p5: "p5" },
        entryFileNames: "stemma-web.p5.js",
      },
    },
  },
});

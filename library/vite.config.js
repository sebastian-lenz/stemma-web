import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { protobufPatch } from "./vite.config.shared.js";

export default defineConfig({
  plugins: [protobufPatch(), dts({ rollupTypes: true })],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "StemmaWeb",
      fileName: "stemma-web",
    },
    rollupOptions: {
      // stemma-web.js has no external deps — everything is bundled
    },
  },
});

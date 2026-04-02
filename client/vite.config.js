import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

/** @returns {import('vite').Plugin} */
function protobufPatch() {
  return {
    name: "protobuf-patch",
    transform(code, id) {
      // https://github.com/protobufjs/protobuf.js/issues/1754
      if (id.endsWith("@protobufjs/inquire/index.js")) {
        return {
          code: code.replace(`eval("quire".replace(/^/,"re"))`, "require"),
          map: null,
        };
      }
    },
  };
}

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

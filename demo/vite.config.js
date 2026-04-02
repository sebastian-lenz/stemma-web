import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { resolve } from "path";

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
  plugins: [sveltekit(), protobufPatch()],
  resolve: {
    alias: {
      "stemma-web": resolve(__dirname, "../client/src/index.ts"),
    },
  },
});

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { resolve } from "path";
import { readFileSync, existsSync } from "fs";

/** @returns {import('vite').Plugin} */
function serveLibraryDist() {
  return {
    name: "serve-library-dist",
    configureServer(server) {
      server.middlewares.use("/download", (req, res, next) => {
        const filePath = resolve(__dirname, "../library/dist" + req.url);
        if (existsSync(filePath)) {
          res.end(readFileSync(filePath));
        } else {
          next();
        }
      });
    },
  };
}

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
  plugins: [sveltekit(), protobufPatch(), serveLibraryDist()],
  resolve: {
    alias: {
      "stemma-web": resolve(__dirname, "../library/src/index.ts"),
    },
  },
});

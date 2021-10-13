import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-modules/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});

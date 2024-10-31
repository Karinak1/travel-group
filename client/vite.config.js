import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
       tokyo: resolve(__dirname, "../page4/tokyo/index.html"),
      },
    },
  },
});
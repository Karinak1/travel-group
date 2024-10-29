import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pageTwo"),
        nested: resolve(__dirname, "nested/pageTwo"),
      },
    },
  },
});

import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pageLA: resolve(__dirname, "pageLA/pageLA.index.html"),
        pageBerlin: resolve(__dirname, "pageBerlin/pageBerlin.index.html"),
        pageNewyork: resolve(__dirname, "pageNewyork/pageNewyork.index.html"),
        pageBangkok: resolve(__dirname, "./pageBangkok/pageBankok.index.html"),
        pageTokyo: resolve(__dirname, "./pageTokyo/pageTokyo.index.html"),
        pageSingapore: resolve(__dirname, "./pageSingapore/pageSingapore.index.html"),
      },
    },
  },
});


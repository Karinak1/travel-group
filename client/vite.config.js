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
        pageDoha: resolve(__dirname, "pageDoha/index.html"),
        pageCairo: resolve(__dirname, "pageCairo/index.html"),
        pageIstanbul: resolve(
          __dirname,
          "pageIstanbul/pageIstanbul.index.html"
        ),
        pageBangkok: resolve(__dirname, "./pageBangkok/pageBangkok.index.html"),
        pageTokyo: resolve(__dirname, "./pageTokyo/pageTokyo.index.html"),
        pageSingapore: resolve(
          __dirname,
          "./pageSingapore/pageSingapore.index.html"
        ),
        pageDubai: resolve(__dirname, "pageDubai/pageDubai.index.html"),
        pageParis: resolve(__dirname, "pageParis/pageParis.index.html"),
        pageVan: resolve(__dirname, "vpageVan/pageVan.index.html"),
      },
    },
  },
});

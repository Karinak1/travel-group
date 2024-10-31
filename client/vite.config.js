import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pageLA: resolve(__dirname, 'pageLA/pageLA.index.html'),
        pageBerlin: resolve(__dirname, 'pageBerlin/pageBerlin.index.html'),
        pageNewyork: resolve(__dirname, 'pageNewyork/pageNewyork.index.html'),
        pageDubai: resolve(__dirname, 'pageDubai/pageDubai.index.html'),
      },
    },
  },
});

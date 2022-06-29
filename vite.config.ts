import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions:{ 
      less: {
        modifyVars: {
          'border-color-base': '#029AAD',
          'primary-color': '#029AAD',
          'link-color':'#0069FF',
          'border-radius-base': '5px'
        },
        javascriptEnabled: true,
      },
    },
  },
});

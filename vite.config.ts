import { defineConfig } from "vite";
import path from "path";
import styleImport from "vite-plugin-style-import";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`,
        },
      ],
    }),
  ],
  server: {
    // hostname: '0.0.0.0',
    host: "localhost",
    port: 3005,
    open: true,
    // // 是否开启 https
    // https: true,
    // // 服务端渲染
    // ssr: false,
    proxy: {
      // "/api": {
      //   target: "",
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (pathStr) => pathStr.replace("/api", ""),
      // },
    },
  },
});

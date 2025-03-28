import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Spring 서버 주소
        changeOrigin: true,
      },
      "/ws": {
        target: "http://localhost:8080", // Spring 서버 주소
        changeOrigin: true,
        ws: true, // 웹소켓 처리 설정
      },
    },
  },
});

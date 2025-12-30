import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa' // 1. Import plugin
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Tự động cập nhật khi có nội dung mới
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Tên Ứng Dụng Của Bạn",
        short_name: "AppShortName",
        description: "Mô tả ngắn về ứng dụng React PWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.png", // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo.png", // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3175,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

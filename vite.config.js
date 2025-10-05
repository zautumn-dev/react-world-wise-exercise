import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // vite-plugin-eslint2 的核心功能就是在开发过程中发现 ESLint 检查到的问题，并在控制台提示报错或警告
    eslint({
      lintInWorker: true,
      lintOnStart: true,
    }),
  ],
});

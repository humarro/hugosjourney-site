import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  root: path.resolve(import.meta.dirname, "client"),
  plugins: [
    react(),
    ...(!isProd
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default?.() ??
            (await import("@replit/vite-plugin-runtime-error-modal")).default,
        ]
      : []),
    ...(!isProd && process.env.REPL_ID
      ? [(await import("@replit/vite-plugin-cartographer")).then((m) => m.cartographer())]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024
  },
  server: {
    fs: { strict: true, deny: ["**/.*"] },
  },
});




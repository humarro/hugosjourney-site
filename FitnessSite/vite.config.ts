import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Solo cargamos plugins de desarrollo en dev
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  // El proyecto frontend vive en /client (tu index.html está ahí)
  root: path.resolve(import.meta.dirname, "client"),

  plugins: [
    react(),
    // Overlay de errores solo en desarrollo
    ...(!isProd ? [ (await import("@replit/vite-plugin-runtime-error-modal")).default?.() ?? (await import("@replit/vite-plugin-runtime-error-modal")).default ] : []),
    // Cartographer de Replit solo en desarrollo y si existe REPL_ID
    ...(!isProd && process.env.REPL_ID
      ? [ (await import("@replit/vite-plugin-cartographer")).then(m => m.cartographer()) ]
      : []),
  ],

  resolve: {
    alias: {
      // Con root=client, "src" vive dentro de client/src
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  build: {
    // ⚠️ Clave: salimos de /client y generamos en /dist (raíz del proyecto)
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});


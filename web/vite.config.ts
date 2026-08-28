import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), viteReact()],
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});

export default config;

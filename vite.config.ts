import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cloudflare serves this marketing site at menu.admakidigital.com/.
// Keep the original GitHub Pages deployment usable at /gurshamenu/.
const isCloudflare = Boolean(
  (globalThis as typeof globalThis & { process?: { env?: { CF_PAGES?: string } } })
    .process?.env?.CF_PAGES
);

export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: ['terminal.local'] },
  base: isCloudflare ? "/" : "/gurshamenu/",
});

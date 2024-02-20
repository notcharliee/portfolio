import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://charliee.dev",
  integrations: [tailwind()],
  prefetch: true,
})

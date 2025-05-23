// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import tailwind from "@astrojs/tailwind"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.edward-vonschondorf.dev",
  integrations: [mdx(), sitemap(), tailwind(), vue()]
})

import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://ezelorenz.github.io",
  base: "/", // Al ser tu repo principal, NO lleva nombre de carpeta
  integrations: [
    mdx(), 
    sitemap(), 
    solidJs(), 
    tailwind({ applyBaseStyles: true }) // Cambia a TRUE para que cargue el diseño básico
  ],
})
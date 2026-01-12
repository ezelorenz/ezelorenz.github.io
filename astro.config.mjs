import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ezelorenz.github.io",
  base: "/", 
  integrations: [
    mdx(), 
    sitemap(), 
    solidJs(), 
    tailwind({ applyBaseStyles: true })
  ],
});

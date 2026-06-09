// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://collab-gif.github.io/",
  base: "/ag-lobby-rework-docs/",
  integrations: [
    starlight({
      plugins: [starlightLlmsTxt()],
      title: "Anime Guardian Rework",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://www.youtube.com/",
        },
      ],
      sidebar: [
        {
          label: "Guide",
          items: ["welcome", "architecture", "packages", "coding-guidelines"],
        },
        {
          label: "Library",
          items: [{ autogenerate: { directory: "library" } }],
        },
      ],
    }),
  ],
});

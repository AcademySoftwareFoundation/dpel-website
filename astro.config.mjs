import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://academysoftwarefoundation.github.io',
  base: '/',
  // Will setup any new pages to be unpublished till draft is done
  markdown: {
    drafts: true,
  },
  integrations: [tailwind()]
});

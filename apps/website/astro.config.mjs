import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), sitemap()],
  site: 'https://www.tacos-ui.com',
  vite: {
    // Astro serves its own runtime; pre-bundling it 504s the dev toolbar.
    optimizeDeps: { exclude: ['astro'] },
  },
});

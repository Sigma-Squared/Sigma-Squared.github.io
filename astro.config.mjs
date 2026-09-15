// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.chamurajasekera.me',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: {
    // Generate modern formats at build time; no client JS involved.
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});

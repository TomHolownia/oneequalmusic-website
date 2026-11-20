import { defineConfig } from 'astro/config';

// BASE_PATH is set by the deploy workflow: "/oneequalmusic-website" on the github.io preview,
// "/" once the custom domain (oneequalmusic.org) is switched on.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.oneequalmusic.org',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});

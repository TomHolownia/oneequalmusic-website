import { defineConfig } from 'astro/config';

// BASE_PATH is set by the deploy workflow: "/oneequalmusic-website" on the github.io preview,
// "/" once the custom domain (oneequalmusic.org) is switched on.
const base = process.env.BASE_PATH || '/';

// Old Google Sites addresses, so existing links and search results still land somewhere useful.
// Astro doesn't add the base path to redirect targets, so it's added here.
const oldPages = {
  '/home': '/',
  '/2026': '/#concerts',
  '/upcoming-concerts': '/#concerts',
  '/appeal': '/#support',
  '/mailing-list': '/#join',
  '/our-ensembles': '/#about',
  '/our-ensembles/one-equal-music': '/one-equal-music',
  '/our-ensembles/oem-foundation': '/oem-foundation',
  '/our-ensembles/oem-emerging-artists': '/oem-emerging-artists',
};
const redirects = Object.fromEntries(
  Object.entries(oldPages).map(([from, to]) => [from, base.replace(/\/$/, '') + to]),
);

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.oneequalmusic.org',
  base,
  trailingSlash: 'ignore',
  redirects,
});

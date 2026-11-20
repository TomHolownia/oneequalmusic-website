# oneequalmusic.org

The One Equal Music website: a static [Astro](https://astro.build) site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

This repo is **public**. Never commit contact lists, contracts, booking emails, secrets or the anonymous donor's name. Those live in the private `OneEqualMusic` repo.

## Editing

**Eleanor / anyone:** open [Pages CMS](https://app.pagescms.org), sign in with GitHub, pick this repo.
- **Concerts**: one entry per concert. Dates, places, booking links, photo. The concert grid, the "Next concert" banner and the Season Pass list all update from here.
- **Pages**: each page is a stack of sections (Hero, Concert grid, Season Pass, Photo and text, Text, Cards, Gallery…). Add, remove, reorder or hide them.
- **Site settings**: menu, footer, social links, Acknowledgement of Country.

Saving commits to `main`; the site updates about a minute later.

**Claude / code:** content is plain files, so sweeping changes are just edits:
- `src/content/concerts/*.md`: concert data (frontmatter only)
- `src/content/pages/*.md`: page sections (`sections:` list; `type` picks the block)
- `src/data/site.json`: site settings
- `src/components/blocks/*.astro`: one component per block type, registered in `src/components/Sections.astro`. A new block type also needs adding to `.pages.yml`.
- `public/images/`: photos (also where Pages CMS uploads to)

## Running locally

```sh
npm ci
npm run dev        # http://localhost:4321
```

Node 22.12+.

## Domain

The site works on the github.io address first. To move oneequalmusic.org over: repo **Settings → Pages → Custom domain** = `www.oneequalmusic.org`, then at the DNS host add only the website records (`www` CNAME → `<user>.github.io`, and GitHub's four A records for the bare domain). **Leave the MX/SPF/DKIM email records alone.** The build picks up the new base path automatically.

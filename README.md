# Huong Dau - Personal Blog

A minimal Astro blog that powers my personal site and GitHub Pages deployment. It focuses on clean
typography, a curated homepage, and a small set of well-structured content collections.

## Tech Stack

- [Astro 5](https://astro.build/) with static output
- Markdown based content collections (see `src/content/blog`)
- GitHub Actions + GitHub Pages for automated deployments

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:4321`. Edit files in `src/` and the page reloads instantly.

## Building Locally

```bash
npm run build
npm run preview
```

`build` generates the production-ready site in `dist/`. Run `preview` to check the output before
pushing changes.

## Content

Blog posts live in `src/content/blog`. Each entry uses the schema defined in
`src/content.config.ts`. Frontmatter fields (`title`, `description`, `pubDate`, `heroImage`) are
validated at build time, so missing or malformed data fails fast.

## Deployment (GitHub Pages)

This repo is ready for project-level GitHub Pages hosting (`https://zelonepair.github.io/personal_portfolio`).

1. Push or merge into `main`.
2. The workflow in `.github/workflows/deploy.yml` installs dependencies, runs `npm run build`, and
   uploads `dist/` as a Pages artifact.
3. GitHub publishes the site automatically once the deploy job completes.

Make sure GitHub Pages is set to the **GitHub Actions** source in the repository settings.

## Environment Notes

- Update `astro.config.mjs` if you ever change the repository name or custom domain.
- Global metadata lives in `src/consts.ts` (title, description, author, canonical URL, etc.).
- Icons and assets are stored in `src/assets` or `public/` depending on whether you want Astro to
  optimize them.

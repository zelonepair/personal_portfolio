---
title: 'Notes on Astro Content Collections'
description: 'Lessons learned after wiring content collections for a GitHub Pages deployment.'
pubDate: 'Feb 12 2025'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

Astro's content collections are the perfect balance between structure and flexibility. Unlike a
classic markdown folder, collections give me a schema to validate frontmatter at build time. The
`defineCollection` call in `src/content.config.ts` ensures every entry includes a title,
description, publish date, and optional hero image.

A few practical takeaways:

1. **Use descriptive IDs.** Astro derives the slug from the file path. Grouping entries with
   folders such as `notes/` or `guides/` makes filters trivial.
2. **Lean on TypeScript.** Import the collection types wherever you consume entries. Your templates
   instantly know what data exists, and refactors stop feeling scary.
3. **Surface metadata everywhere.** The homepage and RSS feed both derive from the same collection,
   so readers see consistent descriptions no matter where they discover a post.

If you are deploying to GitHub Pages, remember to set both `site` and `base` inside
`astro.config.mjs`. Without them, canonical URLs and the RSS feed will drop the repository segment of
the path. Once configured, the generated content behaves like any other static site.

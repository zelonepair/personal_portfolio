---
title: 'A Personal Shipping Checklist'
description: 'The steps I run through before publishing any small project or update.'
pubDate: 'Jan 27 2025'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Every time I publish a project I promise myself I will remember the steps for the next release. I
rarely do, so this checklist now lives here:

1. Run `npm run build` locally and skim the output. Linting isn't set up yet, but a clean build
   catches most typos and missing imports.
2. Click through the generated `dist` folder using `npm run preview`. I look for layout bugs, broken
   links, and focus states that vanish on darker backgrounds.
3. Update the README with any new workflows or environment assumptions. Future contributors (even if
   it's just me) should know how to run the project without guesswork.
4. Tag the release and write a short changelog entry. It feels ceremonial and makes tracking
   regressions easier.

Feel free to borrow and remix the list. Shipping is a muscle—repetition and reflection make it less
stressful every time.

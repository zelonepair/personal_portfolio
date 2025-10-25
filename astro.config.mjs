// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteUrl = 'https://zelonepair.github.io/personal_portfolio';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: '/personal_portfolio',
	integrations: [mdx(), sitemap()],
});

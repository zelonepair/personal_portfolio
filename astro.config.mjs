// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteUrl = 'https://jendau.com';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: '/',
	integrations: [mdx(), sitemap()],
});

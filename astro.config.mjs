// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config

export default defineConfig({
	integrations: [tailwind(), mdx(), icon()],
	adapter: vercel(),
});

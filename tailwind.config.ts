import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config

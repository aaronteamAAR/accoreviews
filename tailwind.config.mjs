/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				's': {'min': '50px', 'max': '639px'},
				'sm': {'min': '640px', 'max': '767px'},
				'md': {'min': '768px', 'max': '1023px'},
				'lg': {'min': '1024px', 'max': '1279px'},
				'xl': {'min': '1280px', 'max': '1535px'},
				'2xl': {'min': '1536px'},
			  },
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		},
	},
	plugins: [],
}

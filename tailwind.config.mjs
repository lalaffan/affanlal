/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'white': '#ffffff',
		  'brown': '#312624',
		  'yellow': '#FFFF00',
		  'light-brown': '#996600',
		  'cream': '#fafafa',
		  'off-white':'#FAF9F6',
		  'gray-dark': '#273444',
     	  'gray': '#8492a6',
    	  'gray-light': '#d3dce6',
		  'green':'#39b7b6',
		  'dark-green':'#6CC49C',
		},
		extend: {
		  backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
			  'conic-gradient(from 180deg at 70% 30%, var(--tw-gradient-stops))',
		  },
		},
	  },
	plugins: [],
}

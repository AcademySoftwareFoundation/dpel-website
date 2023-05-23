/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
      'mobile-v': '500px',
      // => @media (min-width: 690px) { ... }

			'mobile-h': '784px',
			// => @media (min-width: 784px) { ... }

      'tablet': '999px',
      // => @media (min-width: 999px) { ... }

      'desktop': '1300px',
      // => @media (min-width: 1300px) { ... }
    },
		extend: {},
		
	},
	plugins: [],
}

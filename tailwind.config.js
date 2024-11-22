/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint for extra-small screens
      },
    },
	},
	plugins: [],
};
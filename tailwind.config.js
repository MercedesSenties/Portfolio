const colors = require('tailwindcss/colors');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		'./components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
	  extend: {colors: {
		// Light colors
		'primary-light': '#F7F8FC',
		'secondary-light': '#FFFFFF',
		'ternary-light': '#f6f7f8',
		'card-light': '#f3f7fc',
		'team-light': '#e6eff8',

		// Dark colors
		'primary-dark': '#0D2438',
		'secondary-dark': '#102D44',
		'ternary-dark': '#1E3851',
		'card-dark': '#22486a',
		'divider-dark': '#1e3851',
		'button-dark': '#25547f',
		'team-dark': '#2c699d',

		// Extended v3 color
		gray: colors.neutral,
	},
	container: {
		padding: {
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '5rem',
			xl: '6rem',
			'2xl': '8rem',
		},
	},},
	},
	plugins: [require('@tailwindcss/forms')],
});

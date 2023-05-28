/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				lightBlue: "#e3f7fe",
				gradientBlueStart: "#30EDFD",
				gradientBlueEnd: "#4FC3FC",
				greyish: "#DCDCDC",
			},
			dropShadow: {
				cs: ["0 10px 15px rgb(165,233,251)", "0 15px 15px rgb(165,233,251)"],
			},
		},
	},
	plugins: [],
}

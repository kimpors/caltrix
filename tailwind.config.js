/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
			colors: {
				'pink': {
					primary: '#000'
				}
			}
		},
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            prefix: "ctp",
            defaultFlavour: "macchiato",
        }),
    ],
};

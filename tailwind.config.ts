import type { Config } from 'tailwindcss'

const colourValues = {
	primary: "#b91c1c",
	secondary: "#0e7490",
	accent: "#4338ca"
}
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
	daisyui: {
		themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ...colourValues
        },
      },
			{
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ...colourValues
        },
      },
			// {
      //   garden: {
      //     ...require("daisyui/src/theming/themes")["garden"],
      //     ...colourValues
      //   },
      // },	
			// {
      //   forest: {
      //     ...require("daisyui/src/theming/themes")["forest"],
      //     ...colourValues
      //   },
      // },
			{
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          ...colourValues
        },
      },	
			{
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          ...colourValues
        },
      },
			// "dracula",
			// "night",
			// "nord"
    ],
    // themes: ["light", "dark", "nord", "garden"],
  },
  plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
}
export default config

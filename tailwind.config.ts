import { type Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "dm-serif-display": "var(--font-dm-serif-display)",
      },
      colors: {
        "dark-900": "rgb(0 0 0)",
        "dark-800": "rgb(8 8 8)",
        "dark-700": "rgb(16 16 16)",
        "dark-600": "rgb(24 24 24)",
        "dark-500": "rgb(32 32 32)",
        "dark-400": "rgb(40 40 40)",
        "dark-300": "rgb(48 48 48)",
        "dark-200": "rgb(56 56 56)",
        "dark-100": "rgb(64 64 64)",
        "light-900": "rgb(256 256 256)",
        "light-800": "rgb(248 248 248)",
        "light-700": "rgb(240 240 240)",
        "light-600": "rgb(232 232 232)",
        "light-500": "rgb(224 224 224)",
        "light-400": "rgb(216 216 216)",
        "light-300": "rgb(208 208 208)",
        "light-200": "rgb(200 200 200)",
        "light-100": "rgb(192 192 192)",
        "purple-main": "rgb(20 12 28)",
      },
      backgroundImage: {
        main: "url(/background.png)",
      },
      keyframes: {
        slidedown: {
          from: { opacity: "0", transform: "translateY(-50px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "slide-down": "slidedown 1.2s forwards",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            }
          },
        },
        {
          values: theme("transitionDelay"),
        },
      )
    }),
  ],
} satisfies Config

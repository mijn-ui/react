/* eslint-disable */
import { createPreset } from "fumadocs-ui/tailwind-plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./node_modules/@repo/react/dist/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },

          "scale-in": {
            "0%": {
              transform: "scale(.5)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },

          "scale-out": {
            "0%": {
              transform: "scale(1)",
            },
            "100%": {
              transform: "scale(.5)",
            },
          },
        },

        transitionDuration: {
          400: "400ms",
        },

        "accordion-expand": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-collapse": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-expand":
          "accordion-expand 0.2s ease-in-out, fade-in 0.4s ease-in-out",
        "accordion-collapse":
          "accordion-collapse 0.2s ease-in-out, fade-out 0.4s ease-in-out",

        "scale-in": "scale-in 0.5s 0.2s ease-out, fade-in 0.4s ease-out",
        "scale-out": "scale-out 0.5s 0.2s ease-out, fade-out 0.4s ease-out",
      },
    },
  },
  presets: [createPreset()],
  plugins: [require("tailwindcss-animate")],
}

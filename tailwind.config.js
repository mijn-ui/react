import { createPreset } from "fumadocs-ui/tailwind-plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./mijn-ui/**/*.{ts,tsx}",
    "./mijn-ui-tailwind/**/*.html",
    "./app/**/*.{ts,tsx}",
    "./examples/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./.storybook/preview.tsx",
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "hsl(var(--main) / <alpha-value>)",
          text: "hsl(var(--main-text) / <alpha-value>)",
          border: "hsl(var(--main-border) / <alpha-value>)",
        },

        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          text: "hsl(var(--surface-text) / <alpha-value>)",
        },

        neutral: {
          DEFAULT: "hsl(var(--neutral) / <alpha-value>)",
          text: "hsl(var(--neutral-text) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          text: "hsl(var(--accent-text) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          text: "hsl(var(--primary-text) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          text: "hsl(var(--secondary-text) / <alpha-value>)",
        },

        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          text: "hsl(var(--info-text) / <alpha-value>)",
          "filled-text": "hsl(var(--info-filled-text) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          text: "hsl(var(--warning-text) / <alpha-value>)",
          "filled-text": "hsl(var(--warning-filled-text) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
          text: "hsl(var(--danger-text) / <alpha-value>)",
          "filled-text": "hsl(var(--danger-filled-text) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          text: "hsl(var(--success-text) / <alpha-value>)",
          "filled-text": "hsl(var(--success-filled-text) / <alpha-value>)",
        },

        kanban: "hsl(var(--kanban) / <alpha-value>)",
        "input-border": "hsl(var(--input-border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },

      borderRadius: {
        default: "0.25rem",
      },

      transitionDuration: {
        400: "400ms",
      },

      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

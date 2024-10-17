import { createPreset } from "fumadocs-ui/tailwind-plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./.storybook/preview.tsx",
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--surface-foreground) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
          "filled-foreground":
            "hsl(var(--success-filled-foreground) / <alpha-value>)",
        },

        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)",
          "filled-foreground":
            "hsl(var(--info-filled-foreground) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
          "filled-foreground":
            "hsl(var(--warning-filled-foreground) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
          foreground: "hsl(var(--danger-foreground) / <alpha-value>)",
          "filled-foreground":
            "hsl(var(--danger-filled-foreground) / <alpha-value>)",
        },

        disabled: {
          DEFAULT: "hsl(var(--disabled) / <alpha-value>)",
          foreground: "hsl(var(--disabled-foreground) / <alpha-value>)",
        },

        "background-border": "hsl(var(--background-border) / <alpha-value>)",
        "input-border": "hsl(var(--input-border) / <alpha-value>)",

        kanban: "hsl(var(--kanban) / <alpha-value>)",
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

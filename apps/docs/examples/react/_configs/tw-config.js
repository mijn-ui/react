import tailwindAnimate from "tailwindcss-animate"
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    ...
    "./node_modules/@mijn-ui/**/dist/*.js", // Ensure Tailwind scans all mijn-ui packages  // [!code highlight]
  ],
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
        "accordion-expand": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-collapse": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0"
          },
        },
      },

      animation: {
        "accordion-expand":
          "accordion-expand 0.2s ease-in-out, fade-in 0.4s ease-in-out",
        "accordion-collapse":
          "accordion-collapse 0.2s ease-in-out, fade-out 0.4s ease-in-out",
      },
    },
  },
  plugins: [tailwindAnimate],
}

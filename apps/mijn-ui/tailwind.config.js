/* eslint-disable */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "rgb(var(--main) / <alpha-value>)",
          text: "rgb(var(--main-text) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          text: "rgb(var(--muted-text) / <alpha-value>)",
        },

        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          text: "rgb(var(--surface-text) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          text: "rgb(var(--primary-text) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          text: "rgb(var(--secondary-text) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          text: "rgb(var(--accent-text) / <alpha-value>)",
        },

        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
          text: "rgb(var(--success-text) / <alpha-value>)",
          "filled-text": "rgb(var(--success-filled-text) / <alpha-value>)",
        },

        info: {
          DEFAULT: "rgb(var(--info) / <alpha-value>)",
          text: "rgb(var(--info-text) / <alpha-value>)",
          "filled-text": "rgb(var(--info-filled-text) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "rgb(var(--warning) / <alpha-value>)",
          text: "rgb(var(--warning-text) / <alpha-value>)",
          "filled-text": "rgb(var(--warning-filled-text) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
          text: "rgb(var(--danger-text) / <alpha-value>)",
          "filled-text": "rgb(var(--danger-filled-text) / <alpha-value>)",
        },

        disabled: {
          DEFAULT: "rgb(var(--disabled) / <alpha-value>)",
          text: "rgb(var(--disabled-text) / <alpha-value>)",
        },

        "main-border": "rgb(var(--main-border) / <alpha-value>)",
        "input-border": "rgb(var(--input-border) / <alpha-value>)",

        kanban: "rgb(var(--kanban) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
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
  plugins: [require("tailwindcss-animate")],
}

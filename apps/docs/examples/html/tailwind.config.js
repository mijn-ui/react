/** @type {import('tailwindcss').Config} \*/

export default {
  content: ["./src/**/*.{html,js}"],
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
        },

        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          text: "hsl(var(--warning-text) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
          text: "hsl(var(--danger-text) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          text: "hsl(var(--success-text) / <alpha-value>)",
        },

        "input-border": "hsl(var(--input-border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
    },
  },
};

import plugin from "tailwindcss/plugin"
import type { PresetsConfig } from "tailwindcss/types/config"
import { presets } from "./colors"
import animatePlugin from "tailwindcss-animate"
import { animations } from "./animations"

type Keys =
  | "main"
  | "main-text"
  | "surface"
  | "surface-text"
  | "neutral"
  | "neutral-text"
  | "accent"
  | "accent-text"
  | "primary"
  | "primary-text"
  | "secondary"
  | "secondary-text"
  | "info"
  | "info-text"
  | "info-filled-text"
  | "warning"
  | "warning-text"
  | "warning-filled-text"
  | "danger"
  | "danger-text"
  | "danger-filled-text"
  | "success"
  | "success-text"
  | "success-filled-text"
  | "main-border"
  | "input-border"
  | "radius"
  | "ring"
  | "kanban"

type Theme = Record<Keys, string>

export interface Preset {
  light: Theme
  dark: Theme
}

function colorToCSS(name: string): string {
  return `hsl(var(--${name}) / <alpha-value>)`
}

type TailwindColors = Record<string, string | Record<string, string>>

// Create Tailwind Colors based on the default color preset
function createTailwindColors(): TailwindColors {
  const v = new Map<string, TailwindColors[string]>()

  // Define the color categories
  const colorKeys = [
    "main",
    "main-text",
    "surface",
    "surface-text",
    "neutral",
    "neutral-text",
    "accent",
    "accent-text",
    "primary",
    "primary-text",
    "secondary",
    "secondary-text",
    "info",
    "info-text",
    "info-filled-text",
    "warning",
    "warning-text",
    "warning-filled-text",
    "danger",
    "danger-text",
    "danger-filled-text",
    "success",
    "success-text",
    "success-filled-text",
    "main-border",
    "input-border",
    "radius",
    "ring",
    "kanban",
  ]

  // Map each color key to a Tailwind-compatible CSS variable format
  for (const key of colorKeys) {
    const value = colorToCSS(key)
    v.set(key, value)
  }

  return Object.fromEntries(v.entries())
}

export const mijnUiTheme = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        ...presets.defaultColors.light,
      },
      ".dark": {
        ...presets.defaultColors.dark,
      },
      "*": {
        "border-color": `theme('colors.main-border')`,
      },
      body: {
        "background-color": `theme('colors.main')`,
        color: `theme('colors.main-text')`,
      },
    })
  },
  {
    theme: {
      extend: {
        colors: createTailwindColors(),
        ...animations,
      },
    },
  },
)

export const mijnUiPreset: PresetsConfig = {
  darkMode: "class",
  plugins: [mijnUiTheme, animatePlugin],
}

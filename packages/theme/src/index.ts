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
  | "muted"
  | "muted-text"
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

function getThemeStyles(theme: Theme): Record<string, string> {
  return Object.fromEntries(
    Object.entries(theme).map(([key, value]) => [variableName(key), value]),
  )
}

function variableName(name: string): string {
  return `--${name}`
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
    "muted",
    "muted-text",
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
        ...getThemeStyles(presets.defaultColors.light),
      },
      ".dark": {
        ...getThemeStyles(presets.defaultColors.dark),
      },
      "*": {
        "@apply border-main-border": {},
      },
      body: {
        "@apply bg-main text-main-text": {},
      },
    })
  },
  {
    theme: {
      extend: {
        colors: {
          ...createTailwindColors(),
        },
        ...animations,
      },
    },
  },
)

export const mijnUiPreset: PresetsConfig = {
  darkMode: "class",
  plugins: [animatePlugin, mijnUiTheme],
}

export { presets } from "./colors"

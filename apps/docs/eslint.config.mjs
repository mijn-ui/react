import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  {
    files: [
      "app/**/*.{ts,tsx}",
      "content/**/*.{ts,tsx}",
      "examples/**/*.{ts,tsx}",
    ],
  },
  {
    ignores: [
      "node_modules/*",
      "out/*",
      ".next/*",
      "coverage",
      "tailwind.config.js",
      "content/common/*",
      "app/styles/global.css",
      "examples/**/*.config.js",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  {
    rules: {
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]

export default configs

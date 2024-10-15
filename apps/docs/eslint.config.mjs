import { fixupConfigRules } from "@eslint/compat"
import pluginJs from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import pluginPrettier from "eslint-plugin-prettier"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["./app/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]

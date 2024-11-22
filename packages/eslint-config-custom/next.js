import js from "@eslint/js"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"
import tailwind from "eslint-plugin-tailwindcss"
import ts from "typescript-eslint"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  ...tailwind.configs["flat/recommended"],
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    settings: {
      react: {
        version: "19.0.0-rc-b01722d5-20241114",
      },
      tailwindcss: {
        config: "./tailwind.config.js",
        callees: ["clsx", "cva", "cn"],
      },
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "import/no-extraneous-dependencies": "off",
      // Next.js routes
      "import/no-default-export": "off",

      "tailwindcss/no-custom-classname": "off",
      // handled by typescript eslint
      "react/prop-types": "off",
      "import/default": "off",
      "import/export": "off",
      "import/namespace": "off",
      "import/no-unresolved": "off",

      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
]

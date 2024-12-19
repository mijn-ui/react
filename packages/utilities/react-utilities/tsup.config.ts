import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"
import { baseConfig } from "tsup-config"
import { defineConfig } from "tsup"

export default defineConfig({
  ...baseConfig,
  esbuildPlugins: [
    preserveDirectivesPlugin({
      directives: ["use client", "use strict"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
  entry: ["src"],
})

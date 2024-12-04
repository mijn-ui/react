import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"
import type { Options } from "tsup"

export const baseConfig: Options = {
  entry: ["src/index.ts"],
  format: "esm",
  clean: true,
  dts: true,
  target: "esnext",
  outDir: "./dist",
}

export const componentConfig: Options = {
  ...baseConfig,
  metafile: true,
  esbuildPlugins: [
    preserveDirectivesPlugin({
      directives: ["use client", "use strict"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
  external: ["tailwindcss"],
  tsconfig: "./tsconfig.build.json",
}

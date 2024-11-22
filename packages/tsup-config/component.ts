import { Options } from "tsup"
import { baseConfig } from "./base"
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives"

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

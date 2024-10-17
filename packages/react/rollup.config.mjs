import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { createRequire } from "module";
import dts from "rollup-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";

import postcss from "rollup-plugin-postcss";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: "@", replacement: new URL("src", import.meta.url).pathname },
        ],
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.stories.tsx",
          "**/*.stories.ts",
          "**/*.stories.js",
          "**/stories/**",
          "**/storybook/**",
        ],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: ["node_modules/**", "**/*.stories.tsx", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: false, extract: false }),
      terser({
        compress: {
          directives: false,
        },
      }),
      preserveDirectives({
        suppressPreserveModulesWarning: true,
      }),
    ],
    external: ["react", "react-dom"],

    // Add onwarn to suppress the "use client" warnings
    onwarn(warning, warn) {
      // Ignore the warning about "use client"
      if (
        warning.code === "MODULE_LEVEL_DIRECTIVE" &&
        warning.message.includes("use client")
      ) {
        return;
      }
      // Use Rollup's default warning behavior for other warnings
      warn(warning);
    },
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

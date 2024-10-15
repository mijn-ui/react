import type { StorybookConfig } from "@storybook/react-vite"
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      }),
    )

    // Add custom alias
    config.resolve = {
      ...config.resolve,
      alias: {
        "@": path.resolve(__dirname, "../src"), // Make sure this matches your alias configuration in tsconfig.json
      },
    }

    config.build = {
      ...config.build,

      minify: "terser", // Switch to using Terser for minification
      terserOptions: {
        compress: {
          keep_fnames: true, // Preserve function names
        },
        mangle: {
          keep_classnames: true, // Preserve class names
          keep_fnames: true, // Preserve function names
        },
      },
    }

    return config
  },
}
export default config

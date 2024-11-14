import { defineConfig } from "tsup";

const exportedComponents = [
  "accordion",
  "alert",
  "alert-dialog",
  "autocomplete",
  "avatar",
  "badge",
  "button",
  "calendar",
  "card",
  "checkbox",
  "command",
  "dialog",
  "dropdown-menu",
  "input",
  "label",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "scroll-area",
  "select",
  "separator",
  "skeleton",
  "switch",
  "table",
  "textarea",
];

const components = exportedComponents.map((component) => `src/components/${component}`);

export default defineConfig({
  entry: [...components, "src/utils", "src/hooks", "src/types", "src/context"],
  format: "esm",
  clean: true,
  dts: true,
  target: "esnext",
  splitting: true,
  skipNodeModulesBundle: true,
  banner: { js: '"use client";' },
  external: ["tailwindcss"],
  tsconfig: "./tsconfig.build.json",
  outDir: "./dist", // Output directory for generated files
});

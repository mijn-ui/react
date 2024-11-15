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
  "collapsible",
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

const components = exportedComponents.map((component) => `src/components/${component}/index.ts`);

export default defineConfig({
  entry: [...components, "src/utils/index.tsx", "src/hooks", "src/types", "src/context/index.ts"],
  format: "esm",
  clean: true,
  dts: true,
  target: "esnext",
  splitting: true,
  skipNodeModulesBundle: true,
  external: ["tailwindcss"],
  tsconfig: "./tsconfig.build.json",
  outDir: "./dist", // Output directory for generated files
});

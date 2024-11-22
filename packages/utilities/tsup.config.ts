import { baseConfig } from "../tsup-config/base"
import { defineConfig } from "tsup"

export default defineConfig({
  ...baseConfig,
  entry: ["src/shared/index.ts", "src/context/index.ts"],
})

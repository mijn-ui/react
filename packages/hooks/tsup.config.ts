import { baseConfig } from "tsup-config"
import { defineConfig } from "tsup"

export default defineConfig({
  ...baseConfig,
  entry: ["src/use-controlled-state.ts"],
})

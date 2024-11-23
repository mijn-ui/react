import { baseConfig } from "../tsup-config/base"
import { defineConfig } from "tsup"

export default defineConfig({
  ...baseConfig,
  entry: ["src/use-controlled-state.ts"],
})

import { baseConfig } from "tsup-config"
import { defineConfig } from "tsup"

export default defineConfig({
  ...baseConfig,
  entry: ["src/shared/index.ts", "src/context/index.ts"],
})

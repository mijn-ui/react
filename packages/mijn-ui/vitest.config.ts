import { defineProject } from "vitest/config"

export default defineProject({
  resolve: {
    alias: {
      "@mijn-ui/": new URL("./src/", import.meta.url).pathname,
    },
  },
})

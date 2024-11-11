import { defineProject } from "vitest/config"

export default defineProject({
  resolve: {
    alias: {
      "@mijn-ui/": new URL("./", import.meta.url).pathname,
    },
  },
})

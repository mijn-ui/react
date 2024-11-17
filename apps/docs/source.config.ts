import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen"
import {
  defineConfig,
  defineDocs,
  getDefaultMDXOptions,
} from "fumadocs-mdx/config"

export const { docs, meta } = defineDocs({
  dir: "content/docs",

  docs: {
    mdxOptions: getDefaultMDXOptions({
      remarkPlugins: [
        remarkInstall,
        [remarkDocGen, { generators: [fileGenerator()] }],
      ],
    }),
  },
})

export default defineConfig()

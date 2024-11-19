import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen"
import {
  defineCollections,
  defineConfig,
  defineDocs,
  getDefaultMDXOptions,
} from "fumadocs-mdx/config"

export const { docs, meta } = defineDocs({
  docs: {
    mdxOptions: getDefaultMDXOptions({
      remarkPlugins: [
        remarkInstall,
        [remarkDocGen, { generators: [fileGenerator()] }],
      ],
    }),
  },
})

export const blocks = defineCollections({
  dir: "content/blocks",
  type: "doc",
})

export default defineConfig()

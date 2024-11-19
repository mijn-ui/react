import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen"
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  getDefaultMDXOptions,
} from "fumadocs-mdx/config"
import { z } from "zod"

export const { docs, meta } = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      docs: z.string().optional(),
      apiReference: z.string().optional(),
    }),
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

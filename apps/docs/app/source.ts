import { blocks as blocksSource, docs, meta } from "@/.source"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
})

export const blocks = loader({
  baseUrl: "/blocks",
  source: createMDXSource(blocksSource, []),
})

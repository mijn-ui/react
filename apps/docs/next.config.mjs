import { createMDX } from "fumadocs-mdx/next"
import path from "path"
import { fileURLToPath } from "url"

const withMDX = createMDX()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json"],
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
}

export default withMDX(config)

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

  // I have to specify this to avoid an error during the production build with turbo.
  // I don't know exactly what the problem is, but it may have something to do with building the cache locally.
  // You can find more information about this problem and its discussion on GitHub at "https://github.com/vercel/next.js/discussions/39432".
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
}

export default withMDX(config)

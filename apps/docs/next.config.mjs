import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json"],
  },
}

export default withMDX(config)

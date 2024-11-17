import createBundleAnalyzer from "@next/bundle-analyzer";
import { createMDX } from "fumadocs-mdx/next";

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // !DANGER - This is a workaround for an unknown bugs with types error durning build and will be enable later
  typescript: {
    ignoreBuildErrors: true,
  },
  
  serverExternalPackages: ['typescript'],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX();

export default withAnalyzer(withMDX(config));

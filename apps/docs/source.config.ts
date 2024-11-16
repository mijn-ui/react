import {
  defineDocs,
  defineConfig,
  getDefaultMDXOptions,
} from "fumadocs-mdx/config";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";

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
});

export default defineConfig();

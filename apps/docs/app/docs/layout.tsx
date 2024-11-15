import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import GradientBackground from "../components/decorators/gradient-background";
import Navbar from "../mdx-components/navbar";
import AvailablePagesSelector from "../mdx-components/available-pages-selector";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: true,
        banner: (
          <div className="pt-4 w-full">
            <AvailablePagesSelector />
            <GradientBackground />
          </div>
        ),
      }}
      containerProps={{
        // Hide the theme toggle and search component in the docs sidebar
        className: "[&_[data-theme-toggle]]:hidden [&_[data-search-full]]:hidden",
      }}
      {...baseOptions}
    >
      <Navbar />
      {children}
    </DocsLayout>
  );
}

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { LeftRadialGradient } from "../components/decorators/gradient-bg";
import AvailablePagesSelector from "../mdx-components/available-pages-selector";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: true,
        banner: (
          <>
            <AvailablePagesSelector />
            <LeftRadialGradient />
          </>
        ),
      }}
      containerProps={{
        // Hide the theme toggle and search component in the docs sidebar
        className: "[&_[data-theme-toggle]]:hidden [&_[data-search-full]]:hidden",
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}

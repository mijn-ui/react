import type { ReactNode } from "react"
import { source } from "@/app/source"
import AvailablePagesSelector from "../../content/mdx-components/available-pages-selector"
import GradientBackground from "../components/decorators/gradient-background"
import { baseOptions } from "../layout.config"
import Navbar from "@/content/mdx-components/navbar"
import { DocsLayout } from "fumadocs-ui/layout"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: true,
        hideSearch: true,
        footerProps: {
          className: "[&_[data-theme-toggle]]:hidden",
        },
        banner: (
          <div className="pt-4 w-full">
            <AvailablePagesSelector />
            <GradientBackground />
          </div>
        ),
      }}
      {...baseOptions}
    >
      <Navbar />
      {children}
    </DocsLayout>
  )
}

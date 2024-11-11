import type { ReactNode } from "react"
import { source } from "@/app/source"
import GradientBackground from "../components/decorators/gradient-background"
import AvailablePagesSelector from "../components/mdx/available-pages-selector"
import Navbar from "../components/navbar"
import { baseOptions } from "../layout.config"
import { DocsLayout } from "fumadocs-ui/layout"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
        enabled: true,
        hideSearch: true,
        footerProps: {
          className: "hidden",
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

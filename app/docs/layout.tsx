import type { ReactNode } from "react"
import { source } from "@/app/source"
import GradientBackground from "../components/decorators/gradient-background"
import Navbar from "../components/navbar/navbar"
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
        banner: <GradientBackground />,
      }}
      {...baseOptions}
    >
      <Navbar />
      {children}
    </DocsLayout>
  )
}

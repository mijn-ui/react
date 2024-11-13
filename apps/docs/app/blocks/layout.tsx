import type { ReactNode } from "react"
import { Metadata } from "next"
import Footer from "@/app/components/layout/footer"
import { baseOptions } from "../layout.config"
import { source } from "../source"
import Navbar from "@/content/mdx-components/navbar"
import { DocsLayout } from "fumadocs-ui/layout"

export const metadata: Metadata = {
  title: "MijnUI | Blocks",
  description: "Blocks",
}

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: false,
      }}
      containerProps={{
        className:
          "flex w-full flex-col items-center justify-center h-[calc(100vh-56px)] md:h-screen",
      }}
      {...baseOptions}
    >
      {/* <div className="fixed top-[var(--navbar-height)] px-5 py-1 inset-x-0 bg-info/20 text-info-text">
        Blocks are currently in progress will be available soon!
      </div> */}
      <Navbar />

      {children}
      <Footer />
    </DocsLayout>
  )
}

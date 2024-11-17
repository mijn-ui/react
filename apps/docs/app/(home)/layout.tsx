import type { ReactNode } from "react"
import Footer from "../components/layout/footer"
import Navbar from "@/mdx-components/navbar"

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

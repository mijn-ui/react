import type { ReactNode } from "react"
import { Metadata } from "next"
import Footer from "./footer"
import Navbar from "./navbar"

export const metadata: Metadata = {
  description: "Reusable components for clean, responsive interfaces.",
}

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <main className="flex w-full flex-col items-center justify-center h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

import type { ReactNode } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

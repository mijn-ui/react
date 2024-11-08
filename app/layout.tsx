import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import ThemeProvider from "./components/providers/theme-provider"
import "./css/global.css"
import { RootProvider } from "fumadocs-ui/provider"

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <RootProvider
            theme={{
              enabled: false,
            }}
            search={{
              options: {
                defaultTag: "next-js",
                tags: [
                  {
                    name: "Next.js",
                    value: "next-js",
                  },
                  {
                    name: "Tailwind Css",
                    value: "tailwind",
                  },
                ],
              },
            }}
          >
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import { Inter } from "next/font/google"
import ThemeProvider from "./components/providers/theme-provider"
import "./css/global.css"
import { RootProvider } from "fumadocs-ui/provider"

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
})

// I'm not sure why the tailwindcss typography plugin isn't working in development mode. It might be due to my machine, but it works fine in production mode. As a temporary workaround, I'm including this code to ensure that all the tailwind typography classes work in development mode.
if (process.env.NODE_ENV === "development") {
  /* eslint-disable-next-line */
  // @ts-ignore: Cannot find module
  dynamic(() => import("./css/prose.css"))
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
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

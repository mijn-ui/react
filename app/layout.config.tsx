import Link from "next/link"
import Logo from "./components/icons/logo"
import { Badge } from "@mijn-ui/components/badge"
import { type HomeLayoutProps } from "fumadocs-ui/home-layout"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    children: (
      <div className="flex items-center gap-2">
        <p className="font-bold  flex items-center gap-2">
          <Logo className="fill-fd-foreground size-5 items-center" />
          MijnUI
        </p>
        <Link href={"https://mijn-ui-next-15.vercel.app/"} target="_blank">
          <Badge color="accent">Next.js 15</Badge>
        </Link>
      </div>
    ),
    url: "/",
  },
}

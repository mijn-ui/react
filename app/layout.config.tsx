import Logo from "./components/icons/logo"
import { Badge } from "@mijn-ui/components/badge"
import { type HomeLayoutProps } from "fumadocs-ui/home-layout"

/**
 * Shared layout configurations
 *
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
        <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
          v0.0.1
        </Badge>
      </div>
    ),
    url: "/",
  },
}

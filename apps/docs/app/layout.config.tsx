import { Badge } from "@mijn-ui/react/components/badge";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Logo from "./components/logo";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    children: (
      <div className="flex md:hidden items-center gap-2">
        <p className="font-bold flex items-center gap-2">
          <Logo className="fill-fd-foreground size-5 items-center" />
          MijnUI
        </p>
        <Badge className="bg-primary/20 text-primary hover:bg-primary/20">v0.0.1</Badge>
      </div>
    ),
  },
};

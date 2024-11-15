import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <HomeLayout className="pt-0" {...baseOptions}>
      {children}
    </HomeLayout>
  );
}

import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { HomeLayout } from "fumadocs-ui/home-layout";

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}

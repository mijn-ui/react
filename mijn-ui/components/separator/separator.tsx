"use client"

import * as React from "react"
import { cn } from "@mijn-ui/utils"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

type SeparatorProps = React.ComponentPropsWithRef<
  typeof SeparatorPrimitive.Root
>

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ref,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-main-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
)

export { Separator }

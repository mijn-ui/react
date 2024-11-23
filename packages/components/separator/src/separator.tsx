"use client"

import * as React from "react"
import { cn } from "@mijn-ui/react-utilities/shared"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

type SeparatorProps = React.ComponentPropsWithRef<
  typeof SeparatorPrimitive.Root
>

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "bg-main-border shrink-0",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
)

export { Separator }

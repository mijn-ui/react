"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { separatorStyles } from "@mijn-ui/react-theme"

type SeparatorProps = React.ComponentPropsWithRef<
  typeof SeparatorPrimitive.Root
> &
  UnstyledProps

const Separator = ({
  unstyled,
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={applyUnstyled(
      unstyled,
      separatorStyles({ orientation }),
      className,
    )}
    {...props}
  />
)

export { Separator }

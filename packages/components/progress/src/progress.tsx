"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as ProgressPrimitive from "@radix-ui/react-progress"

type ProgressProps = React.ComponentPropsWithRef<
  typeof ProgressPrimitive.Root
> &
  UnstyledProps

const Progress = ({
  className,
  unstyled,
  value,
  ref,
  ...props
}: ProgressProps) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={applyUnstyled(
      unstyled,
      "relative h-2 w-full overflow-hidden rounded-full bg-neutral",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="bg-primary size-full flex-1 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
)

export { Progress }

"use client"

import * as React from "react"
import {
  createTVUnstyledSlots,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { progressStyles } from "@mijn-ui/react-theme"

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
}: ProgressProps) => {
  const { base, indicator } = createTVUnstyledSlots(progressStyles(), unstyled)

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={base({ className })}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={indicator()}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

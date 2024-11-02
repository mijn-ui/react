"use client"

import * as React from "react"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"
import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva } from "class-variance-authority"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> &
  UnstyledProps

const Label = ({ unstyled, className, ref, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={applyUnstyled(unstyled, labelVariants(), className)}
      {...props}
    />
  )
}

export { Label }

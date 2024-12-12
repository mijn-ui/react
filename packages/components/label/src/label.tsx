"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as LabelPrimitive from "@radix-ui/react-label"
import { labelStyles, LabelVariantProps } from "@mijn-ui/react-theme"

type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root> &
  LabelVariantProps &
  UnstyledProps

const Label = ({ unstyled, className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      className={applyUnstyled(unstyled, labelStyles(), className)}
      {...props}
    />
  )
}

export { Label }

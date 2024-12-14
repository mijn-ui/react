"use client"

import * as React from "react"
import {
  createTVUnstyledSlots,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as LabelPrimitive from "@radix-ui/react-label"
import { labelStyles, LabelVariantProps } from "@mijn-ui/react-theme"

type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root> &
  LabelVariantProps &
  UnstyledProps

const Label = ({ unstyled, className, ...props }: LabelProps) => {
  const { base } = createTVUnstyledSlots(labelStyles(), unstyled)

  return <LabelPrimitive.Root className={base({ className })} {...props} />
}

export { Label }

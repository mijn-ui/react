"use client"

import * as React from "react"
import { createTVUnstyledSlots, UnstyledProps } from "@mijn-ui/react-core"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { switchStyles } from "@mijn-ui/react-theme"

type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitives.Root> &
  UnstyledProps

const Switch = ({ className, unstyled, ...props }: SwitchProps) => {
  const { base, thumb } = createTVUnstyledSlots(switchStyles(), unstyled)

  return (
    <SwitchPrimitives.Root className={base({ className })} {...props}>
      <SwitchPrimitives.Thumb className={thumb()} />
    </SwitchPrimitives.Root>
  )
}

export { Switch }

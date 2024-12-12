"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { switchStyles } from "@mijn-ui/react-theme"

type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitives.Root> &
  UnstyledProps

const Switch = ({ className, unstyled, ...props }: SwitchProps) => {
  const styles = switchStyles()

  return (
    <SwitchPrimitives.Root
      className={applyUnstyled(unstyled, styles.base(), className)}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={applyUnstyled(unstyled, styles.thumb())}
      />
    </SwitchPrimitives.Root>
  )
}

export { Switch }

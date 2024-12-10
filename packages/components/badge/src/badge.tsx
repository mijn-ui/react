import * as React from "react"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import { BadgeVariantsProps, badgeStyles } from "@mijn-ui/react-theme"

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  BadgeVariantsProps &
  UnstyledProps

function Badge({
  unstyled,
  className,
  color,
  variant,
  radius,
  ...props
}: BadgeProps) {
  return (
    <div
      className={applyUnstyled(
        unstyled,
        badgeStyles({ color, variant, radius }),
        className,
      )}
      {...props}
    />
  )
}

export { Badge }

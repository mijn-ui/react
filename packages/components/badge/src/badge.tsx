import * as React from "react"
import { UnstyledProps, createTVUnstyledSlots } from "@mijn-ui/react-core"
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
  const styles = badgeStyles({ color, variant, radius })
  const { base } = createTVUnstyledSlots(styles, unstyled)

  return <div className={base({ className })} {...props} />
}

export { Badge }

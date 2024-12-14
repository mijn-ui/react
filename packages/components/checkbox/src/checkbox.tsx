"use client"

import * as React from "react"
import { useControlledState } from "@mijn-ui/react-hooks"
import {
  UnstyledProps,
  createTVUnstyledSlots,
} from "@mijn-ui/react-utilities/shared"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon, DividerHorizontalIcon } from "@mijn-ui/shared-icons"
import { checkboxStyles, CheckboxVariantProps } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

type CheckboxProps = React.ComponentPropsWithRef<
  typeof CheckboxPrimitive.Root
> &
  UnstyledProps &
  CheckboxVariantProps & {
    checked?: boolean | "indeterminate"
    onCheckedChange?: (checked: boolean | "indeterminate") => void
  }

const Checkbox = ({
  checked: ControlledChecked,
  onCheckedChange: ControlledOnCheckedChange,
  defaultChecked,
  unstyled,
  color,
  size,
  className,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useControlledState<boolean | "indeterminate">(
    ControlledChecked,
    !!defaultChecked,
    ControlledOnCheckedChange,
  )
  const styles = checkboxStyles({ color, size })
  const { base, indicator, icon } = createTVUnstyledSlots(styles, unstyled)

  return (
    <CheckboxPrimitive.Root
      className={base({ className })}
      {...props}
      checked={checked}
      onCheckedChange={setChecked}
    >
      <CheckboxPrimitive.Indicator className={indicator()}>
        {checked === "indeterminate" && (
          <DividerHorizontalIcon className={icon()} />
        )}
        {checked === true && <CheckIcon className={icon()} />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

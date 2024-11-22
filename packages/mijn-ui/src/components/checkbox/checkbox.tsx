"use client"

import * as React from "react"
import { useControlledState } from "@mijn-ui/hooks/use-controlled-state"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled, cn } from "@mijn-ui/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { VariantProps, cva } from "class-variance-authority"
import { LuCheck } from "react-icons/lu"
import { RxDividerHorizontal } from "react-icons/rx"

export const checkboxStyles = cva(
  [
    "peer size-5 shrink-0 rounded-default border disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary:
          "border-main-text data-[state=checked]:border-primary data-[state=indeterminate]:border-primary  data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-text data-[state=indeterminate]:text-primary-text",
        secondary:
          "border-main-text data-[state=checked]:border-secondary data-[state=indeterminate]:border-secondary data-[state=checked]:bg-secondary data-[state=indeterminate]:bg-secondary data-[state=checked]:text-secondary-text data-[state=indeterminate]:text-secondary-text",
        accent:
          "border-main-text data-[state=checked]:border-main-border data-[state=indeterminate]:border-main-border data-[state=checked]:bg-accent data-[state=indeterminate]:bg-accent data-[state=checked]:text-accent-text data-[state=indeterminate]:text-accent-text",
        neutral:
          "border-main-text data-[state=checked]:border-neutral data-[state=indeterminate]:border-neutral data-[state=checked]:bg-neutral data-[state=indeterminate]:bg-neutral data-[state=checked]:text-neutral-text data-[state=indeterminate]:text-neutral-text",
        danger:
          "border-main-text data-[state=checked]:border-danger data-[state=indeterminate]:border-danger data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger data-[state=checked]:text-danger-filled-text data-[state=indeterminate]:text-danger-filled-text",
        success:
          "border-main-text data-[state=checked]:border-success data-[state=indeterminate]:border-success data-[state=checked]:bg-success data-[state=indeterminate]:bg-success data-[state=checked]:text-success-filled-text data-[state=indeterminate]:text-success-filled-text",
      },
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
)

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

type CheckboxProps = React.ComponentPropsWithRef<
  typeof CheckboxPrimitive.Root
> &
  UnstyledProps &
  VariantProps<typeof checkboxStyles> & {
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

  return (
    <CheckboxPrimitive.Root
      className={applyUnstyled(
        unstyled,
        checkboxStyles({ color, size }),
        className,
      )}
      {...props}
      checked={checked}
      onCheckedChange={setChecked}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        {checked === "indeterminate" && (
          <RxDividerHorizontal className="size-4" />
        )}
        {checked === true && <LuCheck className="size-4" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

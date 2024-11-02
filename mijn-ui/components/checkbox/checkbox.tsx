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
    "disabled:cursor-not-allowed disabled:opacity-50 peer h-5 w-5 shrink-0 rounded-default border",
  ],
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:text-primary-text data-[state=indeterminate]:text-primary-text border-main-text  data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
        secondary:
          "data-[state=checked]:text-secondary-text data-[state=indeterminate]:text-secondary-text data-[state=checked]:border-secondary data-[state=indeterminate]:border-secondary border-main-text data-[state=indeterminate]:bg-secondary data-[state=checked]:bg-secondary",
        accent:
          "data-[state=checked]:text-accent-text data-[state=indeterminate]:text-accent-text data-[state=checked]:border-main-border data-[state=indeterminate]:border-main-border border-main-text data-[state=indeterminate]:bg-accent data-[state=checked]:bg-accent",
        neutral:
          "data-[state=checked]:text-neutral-text data-[state=indeterminate]:text-neutral-text data-[state=checked]:border-neutral data-[state=indeterminate]:border-neutral border-main-text data-[state=indeterminate]:bg-neutral data-[state=checked]:bg-neutral",
        danger:
          "data-[state=checked]:text-danger-filled-text data-[state=indeterminate]:text-danger-filled-text data-[state=checked]:border-danger data-[state=indeterminate]:border-danger border-main-text data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger",
        success:
          "data-[state=indeterminate]:text-success-filled-text data-[state=checked]:text-success-filled-text data-[state=indeterminate]:border-success data-[state=checked]:border-success border-main-text data-[state=indeterminate]:bg-success data-[state=checked]:bg-success",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
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
  ref,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useControlledState<boolean | "indeterminate">(
    ControlledChecked,
    !!defaultChecked,
    ControlledOnCheckedChange,
  )

  return (
    <CheckboxPrimitive.Root
      ref={ref}
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

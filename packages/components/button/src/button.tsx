import * as React from "react"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { LoaderCircleIcon } from "@mijn-ui/shared-icons"
import { ButtonVariantProps, buttonStyles } from "@mijn-ui/react-theme"

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  ButtonVariantProps & {
    asChild?: boolean
    loading?: boolean
  } & UnstyledProps

const Button = ({
  unstyled,
  className,
  color,
  variant,
  size,
  radius,
  loading,
  disabled,
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component
      className={applyUnstyled(
        unstyled,
        buttonStyles({ color, variant, size, radius }),
        className,
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <LoaderCircleIcon
          className={applyUnstyled(
            unstyled,
            "mr-2 h-5 w-5 animate-spin text-current",
          )}
        />
      )}
      <Slottable>{loading ? "Loading..." : children}</Slottable>
    </Component>
  )
}

export { Button }

import * as React from "react"
import { UnstyledProps, createTVUnstyledSlots } from "@mijn-ui/react-core"
import { cn } from "@mijn-ui/react-utilities"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { LoaderCircleIcon } from "@mijn-ui/shared-icons"
import { ButtonVariantProps, buttonStyles } from "@mijn-ui/react-theme"
import { ClassValue } from "tailwind-variants"

/**
 * This Typescript utility transform a list of slots into a list of {slot: classes}
 */
export type SlotsToClasses<S extends string> = {
  [key in S]?: ClassValue
}

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  ButtonVariantProps & {
    asChild?: boolean
    loading?: boolean
    classNames?: SlotsToClasses<keyof ReturnType<typeof buttonStyles>>
  } & UnstyledProps

const Button = ({
  unstyled,
  className,
  classNames,
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
  const styles = buttonStyles({ color, variant, size, radius })
  const { base, icon } = createTVUnstyledSlots(styles, unstyled)

  return (
    <Component
      className={base({ className: cn(classNames?.base, className) })}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <LoaderCircleIcon className={icon({ className: classNames?.icon })} />
      )}
      <Slottable>{loading ? "Loading..." : children}</Slottable>
    </Component>
  )
}

export { Button }

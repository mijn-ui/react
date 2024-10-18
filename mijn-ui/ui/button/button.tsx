import * as React from "react"
import { UnstyledProps } from "@/mijn-ui/types"
import { applyUnstyled } from "@/mijn-ui/utils"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { LuLoader2 } from "react-icons/lu"

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 transition-colors duration-150 active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80 ",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline:
          "border border-border hover:bg-accent hover:text-accent-foreground",
        danger: "bg-danger text-danger-filled-foreground hover:bg-danger/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        surface: "bg-surface border text-surface-foreground hover:bg-accent",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      radius: "md",
      size: "md",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
    loading?: boolean
  } & UnstyledProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      unstyled,
      className,
      variant,
      size,
      radius,
      loading,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        className={applyUnstyled(
          unstyled,
          buttonStyles({ variant, size, radius }),
          className,
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && (
          <LuLoader2
            className={applyUnstyled(
              unstyled,
              "mr-2 h-5 w-5 animate-spin text-muted",
            )}
          />
        )}
        <Slottable>{loading ? "Loading..." : children}</Slottable>
      </Component>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonStyles }

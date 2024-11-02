import * as React from "react"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { LuLoader2 } from "react-icons/lu"

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 transition-colors <duration-300></duration-300> ease-in-out active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80",
  ],
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
        danger: "",
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
      variant: {
        filled: "",
        outline: "border border-current",
        text: "bg-transparent",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        className:
          "hover:bg-primary hover:text-primary-text border border-primary text-primary",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "hover:bg-secondary hover:text-secondary-text border border-secondary text-secondary",
      },
      {
        color: "accent",
        variant: "outline",
        className:
          "hover:bg-accent hover:text-accent-text border border-main-border text-accent-text",
      },
      {
        color: "neutral",
        variant: "outline",
        className:
          "hover:bg-neutral hover:text-neutral-text border border-neutral text-neutral-text",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "hover:bg-danger hover:text-danger-filled-text border border-danger text-danger",
      },

      {
        color: "primary",
        variant: "text",
        className: "hover:bg-primary hover:text-primary-text text-primary",
      },
      {
        color: "secondary",
        variant: "text",
        className:
          "hover:bg-secondary hover:text-secondary-text text-secondary",
      },
      {
        color: "danger",
        variant: "text",
        className: "hover:bg-danger hover:text-danger-filled-text text-danger",
      },
      {
        color: "accent",
        variant: "text",
        className: "hover:bg-accent text-accent-text",
      },
      {
        color: "neutral",
        variant: "text",
        className: "hover:bg-neutral text-neutral-text",
      },

      {
        color: "primary",
        variant: "filled",
        className: "bg-primary text-primary-text hover:bg-primary/90",
      },
      {
        color: "secondary",
        variant: "filled",
        className: "bg-secondary text-secondary-text hover:bg-secondary/90",
      },
      {
        color: "danger",
        variant: "filled",
        className: "bg-danger text-danger-filled-text hover:bg-danger/80",
      },
      {
        color: "accent",
        variant: "filled",
        className: "bg-accent text-accent-text hover:bg-accent/80",
      },
      {
        color: "neutral",
        variant: "filled",
        className: "bg-neutral text-neutral-text hover:bg-neutral/80",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      radius: "md",
      size: "md",
    },
  },
)

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonStyles> & {
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
  ref,
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
      ref={ref}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <LuLoader2
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

export { Button, buttonStyles }

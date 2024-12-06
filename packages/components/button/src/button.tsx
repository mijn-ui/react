import * as React from "react"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { LoaderCircleIcon } from "@mijn-ui/shared-icons"
import { tv, VariantProps } from "tailwind-variants"

const filled = {
  primary: "bg-primary text-primary-text",
  secondary: "bg-secondary text-secondary-text",
  accent: "bg-accent text-accent-text",
  muted: "bg-muted text-muted-text",
  success: "bg-success text-success-text",
  warning: "bg-warning text-warning-text",
  danger: "bg-danger text-danger-text",
}

const outlined = {
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  accent: "bg-transparent border-main-border text-accent-text",
  muted: "bg-transparent border-muted text-muted-text",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
}

const ghost = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent-text",
  muted: "text-muted-text",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
}

const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-1 text-sm transition-colors duration-200 ease-in-out active:brightness-90 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75",
  variants: {
    color: {
      primary: "",
      secondary: "",
      accent: "",
      muted: "",
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
      icon: "size-10",
    },
    variant: {
      filled: "",
      outlined: "border border-current",
      text: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "outlined",
      className: [outlined.primary, "hover:bg-primary hover:text-primary-text"],
    },
    {
      color: "secondary",
      variant: "outlined",
      className: [
        outlined.secondary,
        "hover:bg-secondary hover:text-secondary-text",
      ],
    },
    {
      color: "accent",
      variant: "outlined",
      className: [outlined.accent, "hover:bg-accent hover:text-accent-text"],
    },
    {
      color: "muted",
      variant: "outlined",
      className: [outlined.muted, "hover:bg-muted hover:text-muted-text"],
    },
    {
      color: "danger",
      variant: "outlined",
      className: [
        outlined.danger,
        "hover:bg-danger hover:text-danger-filled-text",
      ],
    },

    /* ---------------------------------- Ghost --------------------------------- */
    {
      color: "primary",
      variant: "text",
      className: [ghost.primary, "hover:bg-primary hover:text-primary-text"],
    },
    {
      color: "accent",
      variant: "text",
      className: [ghost.accent, "hover:bg-accent"],
    },
    {
      color: "muted",
      variant: "text",
      className: [ghost.muted, "hover:bg-muted"],
    },
    {
      color: "secondary",
      variant: "text",
      className: [
        ghost.secondary,
        "hover:bg-secondary hover:text-secondary-text",
      ],
    },
    {
      color: "danger",
      variant: "text",
      className: [
        ghost.danger,
        "hover:bg-danger hover:text-danger-filled-text",
      ],
    },

    /* --------------------------------- Filled --------------------------------- */
    {
      color: "primary",
      variant: "filled",
      className: [filled.primary, "hover:bg-primary/80"],
    },
    {
      color: "secondary",
      variant: "filled",
      className: [filled.secondary, "hover:bg-secondary/80"],
    },
    {
      color: "accent",
      variant: "filled",
      className: [filled.accent, "hover:bg-accent/80"],
    },
    {
      color: "muted",
      variant: "filled",
      className: [filled.muted, "hover:bg-muted/80"],
    },
    {
      color: "danger",
      variant: "filled",
      className: [filled.danger, "hover:bg-danger/80"],
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    radius: "md",
    size: "md",
  },
})

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

export { Button, buttonStyles }

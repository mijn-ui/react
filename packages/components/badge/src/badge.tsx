import * as React from "react"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import { type VariantProps, cva } from "class-variance-authority"

const badgeVariants = cva(
  "focus:ring-ring inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        accent: "",
        muted: "",
        danger: "",
      },
      variant: {
        filled: "",
        outline: "border border-current",
        text: "bg-transparent",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        className:
          "border-primary text-primary hover:bg-primary hover:text-primary-text border",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "border-secondary text-secondary-text dark:text-secondary hover:bg-secondary dark:hover:text-secondary-text border",
      },
      {
        color: "accent",
        variant: "outline",
        className:
          "border-main-border text-accent-text hover:bg-accent hover:text-accent-text border",
      },
      {
        color: "muted",
        variant: "outline",
        className:
          "border-muted text-muted-text hover:bg-muted hover:text-muted-text border",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "border-danger text-danger hover:bg-danger hover:text-danger-filled-text border",
      },

      {
        color: "primary",
        variant: "text",
        className: "text-primary hover:bg-primary hover:text-primary-text",
      },
      {
        color: "secondary",
        variant: "text",
        className:
          "text-secondary-text dark:text-secondary hover:bg-secondary dark:hover:text-secondary-text",
      },
      {
        color: "danger",
        variant: "text",
        className: "text-danger hover:bg-danger hover:text-danger-filled-text",
      },
      {
        color: "accent",
        variant: "text",
        className: "text-accent-text hover:bg-accent",
      },
      {
        color: "muted",
        variant: "text",
        className: "text-muted-text hover:bg-muted",
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
        color: "muted",
        variant: "filled",
        className: "bg-muted text-muted-text hover:bg-muted/80",
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "filled",
      radius: "full",
    },
  },
)

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> &
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
        badgeVariants({ color, variant, radius }),
        className,
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

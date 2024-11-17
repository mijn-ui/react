import * as React from "react"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"
import { type VariantProps, cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
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

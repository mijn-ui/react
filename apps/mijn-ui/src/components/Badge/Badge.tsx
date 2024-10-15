import * as React from "react"
import { UnstyledProps } from "@/types"
import { applyUnstyled } from "@/utils"
import { type VariantProps, cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-text hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-text hover:bg-secondary/90",
        outline:
          "border border-main-border hover:bg-accent hover:text-accent-text",
        danger: "bg-danger text-danger-filled-text hover:bg-danger/90",
        ghost: "hover:bg-accent hover:text-accent-text",
        surface: "bg-surface text-surface-text hover:bg-accent shadow-sm",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      radius: "full",
    },
  },
)

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> &
  UnstyledProps

function Badge({ unstyled, className, variant, radius, ...props }: BadgeProps) {
  return (
    <div
      className={applyUnstyled(
        unstyled,
        badgeVariants({ variant, radius }),
        className,
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

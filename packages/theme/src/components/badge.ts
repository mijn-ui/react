import { tv, VariantProps } from "tailwind-variants"
import { colorVariants } from "../utils"

const badgeStyles = tv({
  base: "focus:ring-ring inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2",
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
      outlined: "border border-current",
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
      variant: "outlined",
      className: [
        colorVariants.outlined.primary,
        "hover:bg-primary hover:text-primary-text",
      ],
    },
    {
      color: "secondary",
      variant: "outlined",
      className: [
        colorVariants.outlined.secondary,
        "hover:bg-secondary hover:text-secondary-text",
      ],
    },
    {
      color: "accent",
      variant: "outlined",
      className: [
        colorVariants.outlined.accent,
        "hover:bg-accent hover:text-accent-text",
      ],
    },
    {
      color: "muted",
      variant: "outlined",
      className: [
        colorVariants.outlined.muted,
        "hover:bg-muted hover:text-muted-text",
      ],
    },
    {
      color: "danger",
      variant: "outlined",
      className: [
        colorVariants.outlined.danger,
        "hover:bg-danger hover:text-danger-filled-text",
      ],
    },

    /* ---------------------------------- Ghost --------------------------------- */
    {
      color: "primary",
      variant: "text",
      className: [
        colorVariants.ghost.primary,
        "hover:bg-primary hover:text-primary-text",
      ],
    },
    {
      color: "accent",
      variant: "text",
      className: [colorVariants.ghost.accent, "hover:bg-accent"],
    },
    {
      color: "muted",
      variant: "text",
      className: [colorVariants.ghost.muted, "hover:bg-muted"],
    },
    {
      color: "secondary",
      variant: "text",
      className: [
        colorVariants.ghost.secondary,
        "hover:bg-secondary hover:text-secondary-text",
      ],
    },
    {
      color: "danger",
      variant: "text",
      className: [
        colorVariants.ghost.danger,
        "hover:bg-danger hover:text-danger-filled-text",
      ],
    },

    /* --------------------------------- Filled --------------------------------- */
    {
      color: "primary",
      variant: "filled",
      className: [colorVariants.filled.primary, "hover:bg-primary/80"],
    },
    {
      color: "secondary",
      variant: "filled",
      className: [colorVariants.filled.secondary, "hover:bg-secondary/80"],
    },
    {
      color: "accent",
      variant: "filled",
      className: [colorVariants.filled.accent, "hover:bg-accent/80"],
    },
    {
      color: "muted",
      variant: "filled",
      className: [colorVariants.filled.muted, "hover:bg-muted/80"],
    },
    {
      color: "danger",
      variant: "filled",
      className: [colorVariants.filled.danger, "hover:bg-danger/80"],
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "filled",
    radius: "full",
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeStyles>
export { badgeStyles }

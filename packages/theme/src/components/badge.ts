import { tv, VariantProps } from "tailwind-variants"

const filled = {
  primary: "bg-primary text-primary-text",
  secondary: "bg-secondary text-secondary-text",
  accent: "bg-accent text-accent-text",
  muted: "bg-muted text-muted-text",
  success: "bg-success text-success-text",
  warning: "bg-warning text-warning-text",
  danger: "bg-danger text-danger-filled-text",
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
    color: "primary",
    variant: "filled",
    radius: "full",
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeStyles>
export { badgeStyles }

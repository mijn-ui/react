import * as React from "react";
import { LuLoader2 } from "react-icons/lu";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { UnstyledProps } from "@/types";
import { applyUnstyled } from "@/utils";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 transition-colors duration-150 active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80 ",
  ],
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
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
    loading?: boolean;
  } & UnstyledProps;

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
    const Component = asChild ? Slot : "button";

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
    );
  },
);
Button.displayName = "Button";

export { Button, buttonStyles };

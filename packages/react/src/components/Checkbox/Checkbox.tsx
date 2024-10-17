"use client";

import * as React from "react";
import { LuCheck } from "react-icons/lu";
import { RxDividerHorizontal } from "react-icons/rx";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";

import { useControlledState } from "@/hooks/use-controlled-state";
import { UnstyledProps } from "@/types";
import { applyUnstyled, cn } from "@/utils";

export const checkboxStyles = cva(
  [
    "disabled:cursor-not-allowed disabled:opacity-50 peer h-5 w-5 shrink-0 rounded-default border",
  ],
  {
    variants: {
      variant: {
        primary:
          "data-[state=checked]:text-primary-text data-[state=indeterminate]:text-primary-text border-main-text  data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
        secondary:
          "data-[state=checked]:text-secondary-text data-[state=indeterminate]:text-secondary-text data-[state=checked]:border-secondary data-[state=indeterminate]:border-secondary border-main-text data-[state=indeterminate]:bg-secondary data-[state=checked]:bg-secondary",
        outline:
          "[data-state=checked]:text-main-text [data-state=indeterminate]:text-main-text border border-main-text",
        danger:
          "data-[state=checked]:text-danger-filled-text data-[state=indeterminate]:text-danger-filled-text data-[state=checked]:border-danger data-[state=indeterminate]:border-danger border-main-text data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger",
        success:
          "data-[state=indeterminate]:text-success-filled-text data-[state=checked]:text-success-filled-text data-[state=indeterminate]:border-success data-[state=checked]:border-success border-main-text data-[state=indeterminate]:bg-success data-[state=checked]:bg-success",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> &
  UnstyledProps &
  VariantProps<typeof checkboxStyles> & {
    checked?: boolean | "indeterminate";
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
  };

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      checked: ControlledChecked,
      onCheckedChange: ControlledOnCheckedChange,
      defaultChecked,
      unstyled,
      variant,
      size,
      className,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = useControlledState<boolean | "indeterminate">(
      ControlledChecked,
      !!defaultChecked,
      ControlledOnCheckedChange,
    );

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={applyUnstyled(
          unstyled,
          checkboxStyles({ variant, size }),
          className,
        )}
        {...props}
        checked={checked}
        onCheckedChange={setChecked}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          {checked === "indeterminate" && (
            <RxDividerHorizontal className="size-4" />
          )}
          {checked === true && <LuCheck className="size-4" />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

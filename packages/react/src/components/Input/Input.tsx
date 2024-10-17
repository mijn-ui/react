"use client";

import * as React from "react";
import { IconType } from "react-icons";

import { Label } from "@/components/Label";
import { UnstyledProps } from "@/types";
import { applyUnstyled, cn } from "@/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  classNames?: {
    input?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
  };
  startIcon?: IconType;
  endIcon?: IconType;
  label?: React.ReactNode;
} & UnstyledProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      unstyled,
      className,
      classNames,
      type,
      startIcon: StartIcon,
      endIcon: EndIcon,
      label,
      id = React.useId(),
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={applyUnstyled(
          unstyled,
          cn("relative w-full", { "cursor-not-allowed opacity-50": disabled }),
          className,
        )}
      >
        {StartIcon && (
          <div
            className={applyUnstyled(
              unstyled,
              "absolute left-2 top-1/2 -translate-y-1/2 transform",
            )}
          >
            <StartIcon
              size={16}
              className={applyUnstyled(
                unstyled,
                "text-muted-text",
                classNames?.startIcon,
              )}
            />
          </div>
        )}
        <input
          type={type}
          className={applyUnstyled(
            unstyled,
            cn(
              "peer flex h-10 w-full rounded-md border border-input-border bg-main bg-transparent px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text autofill:shadow-[inset_0_0_0px_1000px_rgb(var(--surface))] autofill:[-webkit-text-fill-color:rgb(var(--main-text))_!important] focus-visible:border-main-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-main-text focus-visible:ring-offset-0 disabled:cursor-not-allowed",
              StartIcon ? "pl-8" : "",
              EndIcon ? "pr-8" : "",
            ),
            classNames?.input,
          )}
          ref={ref}
          id={id}
          disabled={disabled}
          // Adding an empty space by default ensures the floating label moves correctly on focus or when input is present.
          placeholder=" "
          {...props}
        />

        {label && (
          <Label
            className={applyUnstyled(
              unstyled,
              cn(
                "absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-transparent px-2 text-sm text-muted-text duration-300",
                StartIcon || EndIcon
                  ? "rtl:left start-2 top-2 -translate-y-4 scale-75 bg-main px-2 rtl:translate-x-1/4"
                  : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:start-2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-main peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
              ),
              classNames?.label,
            )}
            htmlFor={id}
          >
            {label}
          </Label>
        )}

        {EndIcon && (
          <div
            className={applyUnstyled(
              unstyled,
              "absolute right-3.5 top-1/2 -translate-y-1/2 transform",
            )}
          >
            <EndIcon
              className={applyUnstyled(
                unstyled,
                "text-muted-text",
                classNames?.endIcon,
              )}
              size={16}
            />
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };

"use client"

import * as React from "react"
import { Label } from "@mijn-ui/components/label"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled, cn } from "@mijn-ui/utils"

export type InputProps = React.ComponentPropsWithRef<"input"> & {
  className?: string
  classNames?: {
    input?: string
    label?: string
    startIcon?: string
    endIcon?: string
  }
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  label?: React.ReactNode
} & UnstyledProps

const Input = ({
  unstyled,
  className,
  classNames,
  type,
  startIcon,
  endIcon,
  label,
  id: userId,
  disabled,
  ref,
  ...props
}: InputProps) => {
  const id = React.useId()

  return (
    <div
      className={applyUnstyled(
        unstyled,
        cn("relative w-full", { "cursor-not-allowed opacity-50": disabled }),
        className,
      )}
    >
      {startIcon && (
        <div
          className={applyUnstyled(
            unstyled,
            "absolute left-2 top-1/2 [&>svg]:text-neutral-text text-base -translate-y-1/2 transform",
            classNames?.startIcon,
          )}
        >
          {startIcon}
        </div>
      )}
      <input
        type={type}
        className={applyUnstyled(
          unstyled,
          cn(
            "peer flex h-10 w-full rounded-md border border-main-border bg-main bg-transparent px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-text focus-visible:border-input-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed",
            startIcon ? "pl-8" : "",
            endIcon ? "pr-8" : "",
          ),
          classNames?.input,
        )}
        ref={ref}
        id={userId || id}
        disabled={disabled}
        // Adding an empty space by default ensures the floating label moves correctly on focus or when input is present.
        placeholder=""
        {...props}
      />

      {label && (
        <Label
          className={applyUnstyled(
            unstyled,
            cn(
              "absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-transparent px-2 text-sm text-neutral-text duration-300",
              startIcon || endIcon
                ? "rtl:left start-2 top-2 -translate-y-4 scale-75 bg-main px-2 rtl:translate-x-1/4"
                : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:start-2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-main peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
            ),
            classNames?.label,
          )}
          htmlFor={userId || id}
        >
          {label}
        </Label>
      )}

      {endIcon && (
        <div
          className={applyUnstyled(
            unstyled,
            "absolute right-3.5 top-1/2 text-base [&>svg]:text-neutral-text -translate-y-1/2 transform",
            classNames?.endIcon,
          )}
        >
          {endIcon}
        </div>
      )}
    </div>
  )
}

Input.displayName = "Input"

export { Input }

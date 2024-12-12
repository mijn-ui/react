"use client"

import * as React from "react"
import { Label } from "@mijn-ui/react-label"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { inputStyles } from "@mijn-ui/react-theme"

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
  ...props
}: InputProps) => {
  const {
    base,
    input,
    label: labelStyles,
    startIcon: startIconStyle,
    endIcon: endIconStyle,
  } = inputStyles({ disabled, startIcon: !!startIcon, endIcon: !!endIcon })
  const id = React.useId()

  return (
    <div className={applyUnstyled(unstyled, base(), className)}>
      {startIcon && (
        <div
          className={applyUnstyled(
            unstyled,
            startIconStyle(),
            classNames?.startIcon,
          )}
        >
          {startIcon}
        </div>
      )}
      <input
        type={type}
        className={applyUnstyled(unstyled, input(), classNames?.input)}
        id={userId || id}
        disabled={disabled}
        // Adding an empty space by default ensures the floating label moves correctly on focus or when input is present.
        placeholder=""
        {...props}
      />

      {label && (
        <Label
          className={applyUnstyled(unstyled, labelStyles(), classNames?.label)}
          htmlFor={userId || id}
        >
          {label}
        </Label>
      )}

      {endIcon && (
        <div
          className={applyUnstyled(
            unstyled,
            endIconStyle(),
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

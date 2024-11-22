"use client"

import * as React from "react"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled, cn } from "@mijn-ui/utils"
import { VariantProps, cva } from "class-variance-authority"

const alertStyles = cva(
  "group relative w-full rounded-lg border border-main-border px-3 py-4 [&>span~*]:pl-8 [&>svg]:text-main-text",
  {
    variants: {
      variant: {
        filled: "border-0",
        outline: "border",
        default: "border",
      },
      status: {
        success: "",
        info: "",
        warning: "",
        danger: "",
        default: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        status: "success",
        className:
          "border-success bg-success/10 dark:border-success/50 [&>h5]:text-success-text [&>p]:text-main-text/80 [&>span>svg]:text-success-text",
      },
      {
        variant: "default",
        status: "info",
        className:
          "border-info bg-info/10 dark:border-info/50 [&>h5]:text-info-text [&>p]:text-main-text/80 [&>span>svg]:text-info-text",
      },
      {
        variant: "default",
        status: "warning",
        className:
          "border-warning bg-warning/10 dark:border-warning/50 [&>h5]:text-warning-text [&>p]:text-main-text/80 [&>span>svg]:text-warning-text",
      },
      {
        variant: "default",
        status: "danger",
        className:
          "border-danger bg-danger/10 dark:border-danger/50 [&>h5]:text-danger-text [&>p]:text-main-text/80 [&>span>svg]:text-danger-text",
      },
      {
        variant: "default",
        status: "default",
        className:
          "border-main-text bg-main/10 dark:border-main-text/50 [&>h5]:text-main-text [&>p]:text-main-text/80 [&>span>svg]:text-main-text",
      },
      {
        variant: "filled",
        status: "success",
        className: "bg-success text-success-filled-text dark:bg-success/80",
      },
      {
        variant: "filled",
        status: "info",
        className: "bg-info text-info-filled-text dark:bg-info/80",
      },
      {
        variant: "filled",
        status: "warning",
        className: "bg-warning text-warning-filled-text dark:bg-warning/80",
      },
      {
        variant: "filled",
        status: "danger",
        className: "bg-danger text-danger-filled-text dark:bg-danger/80",
      },
      {
        variant: "filled",
        status: "default",
        className: "bg-main-text text-main",
      },
      {
        variant: "outline",
        status: "success",
        className:
          "border-success [&>h5]:text-success [&>span>svg]:text-success",
      },
      {
        variant: "outline",
        status: "info",
        className: "border-info [&>h5]:text-info [&>span>svg]:text-info",
      },
      {
        variant: "outline",
        status: "warning",
        className:
          "border-warning [&>h5]:text-warning [&>span>svg]:text-warning",
      },
      {
        variant: "outline",
        status: "danger",
        className: "border-danger [&>h5]:text-danger [&>span>svg]:text-danger",
      },
      {
        variant: "outline",
        status: "default",
        className:
          "border-main-text [&>h5]:text-main-text [&>span>svg]:text-main-text",
      },
    ],
    defaultVariants: {
      variant: "default",
      status: "default",
    },
  },
)

/* -------------------------------------------------------------------------- */
/*                                    Alert                                   */
/* -------------------------------------------------------------------------- */

export type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertStyles> &
  UnstyledProps

const Alert = ({
  variant,
  status,
  unstyled = false,
  className,
  ...props
}: AlertProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <div
      {...props}
      data-status={status || "default"}
      data-variant={variant}
      className={applyUnstyled(
        unstyled,
        alertStyles({ variant, status }),
        className,
      )}
    />
  </UnstyledProvider>
)

/* -------------------------------------------------------------------------- */
/*                                  AlertIcon                                 */
/* -------------------------------------------------------------------------- */

type AlertIconProps = React.ComponentProps<"span"> & UnstyledProps

const AlertIcon = ({ unstyled, className, ...props }: AlertIconProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(
        isUnstyled,
        "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

type AlertTitle = React.ComponentProps<"h5"> & UnstyledProps

const AlertTitle = ({ unstyled, className, ...props }: AlertTitle) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <h5
      className={applyUnstyled(
        isUnstyled,
        "w-full font-semibold leading-none",
        className,
      )}
      {...props}
    />
  )
}

/* ---------------------------- AlertDescription ---------------------------- */
type AlertDescriptionProps = React.ComponentProps<"p"> & UnstyledProps

const AlertDescription = ({
  unstyled,
  className,
  ...props
}: AlertDescriptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return <p className={cn(isUnstyled, "mt-1 text-sm", className)} {...props} />
}

export { Alert, AlertDescription, AlertIcon, alertStyles, AlertTitle }

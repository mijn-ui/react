import * as React from "react"
import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider"
import { UnstyledProps } from "@/types"
import { applyUnstyled, cn } from "@/utils"
import { VariantProps, cva } from "class-variance-authority"

const alertStyles = cva(
  "relative rounded-lg w-full py-4 px-3 [&>span~*]:pl-8 border-main-border border [&>svg]:text-main-text [&>div]:translate-y-[-3px]",
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
        neutral: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        status: "success",
        className:
          "bg-success/10 border-success text-success-text [&>svg]:text-success-text",
      },
      {
        variant: "default",
        status: "info",
        className: "bg-info/10 border-info text-info [&>svg]:text-info",
      },
      {
        variant: "default",
        status: "warning",
        className:
          "bg-warning/10 border-warning text-warning-text [&>svg]:text-warning-text",
      },
      {
        variant: "default",
        status: "danger",
        className:
          "bg-danger/10 border-danger text-danger-text [&>svg]:text-danger-text",
      },
      {
        variant: "default",
        status: "neutral",
        className:
          "bg-main/10 border-main-text text-main-text [&>svg]:text-main-text",
      },

      /* -------------------------------------------------------------------------- */
      {
        variant: "filled",
        status: "success",
        className:
          "bg-success dark:bg-success/80 text-success-filled-text [&>svg]:text-success-filled-text",
      },
      {
        variant: "filled",
        status: "info",
        className:
          "bg-info dark:bg-info/80 text-info-filled-text [&>svg]:text-info-filled-text",
      },
      {
        variant: "filled",
        status: "warning",
        className:
          "bg-warning dark:bg-warning/80 text-warning-filled-text [&>svg]:text-warning-filled-text",
      },
      {
        variant: "filled",
        status: "danger",
        className:
          "bg-danger dark:bg-danger/80 text-danger-filled-text [&>svg]:text-danger-filled-text",
      },
      {
        variant: "filled",
        status: "neutral",
        className: "bg-main-text text-main [&>svg]:text-main",
      },

      /* -------------------------------------------------------------------------- */

      {
        variant: "outline",
        status: "success",
        className: "border-success text-success [&>svg]:text-success",
      },
      {
        variant: "outline",
        status: "info",
        className: "border-info text-info [&>svg]:text-info",
      },
      {
        variant: "outline",
        status: "warning",
        className: "border-warning text-warning [&>svg]:text-warning ",
      },
      {
        variant: "outline",
        status: "danger",
        className: "border-danger text-danger [&>svg]:text-danger",
      },
      {
        variant: "outline",
        status: "neutral",
        className: "border-main-text text-main-text [&>svg]:text-main-text",
      },
    ],
    defaultVariants: {
      variant: "outline",
      status: "info",
    },
  },
)

/* -------------------------------------------------------------------------- */
/*                                    Alert                                   */
/* -------------------------------------------------------------------------- */

export type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertStyles> &
  UnstyledProps

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, status, unstyled = false, className, ...props }, ref) => (
    <UnstyledProvider unstyled={unstyled}>
      <div
        ref={ref}
        {...props}
        className={applyUnstyled(
          unstyled,
          alertStyles({ variant, status }),
          className,
        )}
      />
    </UnstyledProvider>
  ),
)

Alert.displayName = "Alert"

/* -------------------------------------------------------------------------- */
/*                                  AlertIcon                                 */
/* -------------------------------------------------------------------------- */

type AlertIconProps = React.ComponentProps<"span"> & UnstyledProps

const AlertIcon = React.forwardRef<HTMLSpanElement, AlertIconProps>(
  ({ unstyled, className, ...props }, ref) => {
    const { unstyled: contextUnstyled } = useUnstyled()
    const isUnstyled = unstyled ?? contextUnstyled

    return (
      <span
        className={applyUnstyled(
          isUnstyled,
          "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

AlertIcon.displayName = "AlertIcon"

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

type AlertTitle = React.ComponentProps<"h5"> & UnstyledProps

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitle>(
  ({ unstyled, className, ...props }, ref) => {
    const { unstyled: contextUnstyled } = useUnstyled()
    const isUnstyled = unstyled ?? contextUnstyled

    return (
      <h5
        className={applyUnstyled(
          isUnstyled,
          "w-full text-base font-semibold leading-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

AlertTitle.displayName = "AlertTitle"

/* ---------------------------- AlertDescription ---------------------------- */
type AlertDescriptionProps = React.ComponentProps<"p"> & UnstyledProps

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <p
      className={cn(isUnstyled, "mt-1 text-sm", className)}
      ref={ref}
      {...props}
    />
  )
})

AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription, AlertIcon, alertStyles, AlertTitle }

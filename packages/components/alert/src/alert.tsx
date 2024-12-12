"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import { alertStyles, AlertVariantProps } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                              AlertContext                                  */
/* -------------------------------------------------------------------------- */

type AlertContextType = UnstyledProps & ReturnType<typeof alertStyles>

const [AlertProvider, useAlertContext] = createContext<AlertContextType>({
  name: "AlertContext",
  strict: true,
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap component within <Alert />",
})

/* -------------------------------------------------------------------------- */
/*                                    Alert                                   */
/* -------------------------------------------------------------------------- */

export type AlertProps = React.ComponentProps<"div"> &
  AlertVariantProps &
  UnstyledProps

const Alert = ({
  variant,
  color,
  unstyled = false,
  className,
  ...props
}: AlertProps) => {
  const styles = alertStyles({ variant, color })

  return (
    <AlertProvider value={{ ...styles, unstyled }}>
      <div
        data-variant={variant}
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      />
    </AlertProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  AlertIcon                                 */
/* -------------------------------------------------------------------------- */

type AlertIconProps = React.ComponentProps<"span"> & UnstyledProps

const AlertIcon = ({ unstyled, className, ...props }: AlertIconProps) => {
  const { unstyled: contextUnstyled, iconWrapper } = useAlertContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(isUnstyled, iconWrapper(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

type AlertTitle = React.ComponentProps<"h5"> & UnstyledProps

const AlertTitle = ({ unstyled, className, ...props }: AlertTitle) => {
  const { unstyled: contextUnstyled, title } = useAlertContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <h5 className={applyUnstyled(isUnstyled, title(), className)} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                              AlertDescription                              */
/* -------------------------------------------------------------------------- */

type AlertDescriptionProps = React.ComponentProps<"p"> & UnstyledProps

const AlertDescription = ({
  unstyled,
  className,
  ...props
}: AlertDescriptionProps) => {
  const { unstyled: contextUnstyled, description } = useAlertContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return <p className={cn(isUnstyled, description(), className)} {...props} />
}

export { Alert, AlertDescription, AlertIcon, alertStyles, AlertTitle }

"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { alertStyles, AlertVariantProps } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              AlertContext                                  */
/* -------------------------------------------------------------------------- */

type AlertContextType = UnstyledProps & {
  styles: ReturnType<typeof alertStyles>
}

const [AlertProvider, useAlertContext] = createContext<AlertContextType>({
  name: "AlertContext",
  strict: true,
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap component within <Alert />",
})

/* -------------------------------------------------------------------------- */
/*                                  AlertHook                                 */
/* -------------------------------------------------------------------------- */

const useAlertStyles = (unstyledOverride?: boolean) => {
  const context = useAlertContext()
  return useTVUnstyled(context, unstyledOverride)
}

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
    <AlertProvider value={{ styles, unstyled }}>
      <div
        className={applyUnstyled(unstyled, styles.base({ className }))}
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
  const { iconWrapper } = useAlertStyles(unstyled)

  return <span className={iconWrapper({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

type AlertTitle = React.ComponentProps<"h5"> & UnstyledProps

const AlertTitle = ({ unstyled, className, ...props }: AlertTitle) => {
  const { title } = useAlertStyles(unstyled)

  return <h5 className={title({ className })} {...props} />
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
  const { description } = useAlertStyles(unstyled)

  return <p className={description({ className })} {...props} />
}

export { Alert, AlertDescription, AlertIcon, alertStyles, AlertTitle }

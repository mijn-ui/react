"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities"
import { UnstyledProps } from "@mijn-ui/react-core"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {
  alertDialogStyles,
  AlertDialogVariantProps,
} from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

const AlertDialogPortal = AlertDialogPrimitive.Portal

/* -------------------------------------------------------------------------- */
/*                              AlertDialogContext                                  */
/* -------------------------------------------------------------------------- */

type AlertDialogContextType = UnstyledProps & {
  styles: ReturnType<typeof alertDialogStyles>
}

const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContextType>({
    name: "AlertDialogContext",
    strict: true,
    errorMessage:
      "useAlertDialogContext: `context` is undefined. Seems you forgot to wrap component within <AlertDialog />",
  })

/* -------------------------------------------------------------------------- */
/*                                  AlertHook                                 */
/* -------------------------------------------------------------------------- */

const useAlertDialogStyles = (unstyledOverride?: boolean) => {
  const context = useAlertDialogContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                 AlertDialog                                */
/* -------------------------------------------------------------------------- */

export type AlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> &
  AlertDialogVariantProps &
  UnstyledProps

const AlertDialog = ({
  unstyled = false,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root> & UnstyledProps) => {
  const styles = alertDialogStyles()

  return (
    <AlertDialogProvider value={{ unstyled, styles }}>
      <AlertDialogPrimitive.Root {...props} />
    </AlertDialogProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                             AlertDialogTrigger                             */
/* -------------------------------------------------------------------------- */

type AlertDialogTriggerProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Trigger
> &
  UnstyledProps

const AlertDialogTrigger = ({
  unstyled,
  className,
  ...props
}: AlertDialogTriggerProps) => {
  const { trigger } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Trigger
      className={trigger({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                             AlertDialogOverlay                             */
/* -------------------------------------------------------------------------- */

type AlertDialogOverlayProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Overlay
> &
  UnstyledProps

const AlertDialogOverlay = ({
  className,
  unstyled,
  ...props
}: AlertDialogOverlayProps) => {
  const { overlay } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Overlay
      className={overlay({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                             AlertDialogContent                             */
/* -------------------------------------------------------------------------- */

type AlertDialogContentProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Content
> &
  UnstyledProps

const AlertDialogContent = ({
  unstyled,
  className,
  ...props
}: AlertDialogContentProps) => {
  const { content } = useAlertDialogStyles(unstyled)
  const { styles } = useAlertDialogContext()

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      {/* The outer wrapper (div) is intentionally not unstyled.
          This prevents the dialog from being rendered out of the viewport, which could occur
          if the parent component were to be unstyled. Without this constraint, users might face confusion 
          as the dialog may become invisible or inaccessible. Keeping the wrapper styled ensures proper positioning
          and accessibility regardless of the unstyled prop's usage. */}

      <div className={styles.contentWrapper()}>
        <AlertDialogPrimitive.Content
          className={content({ className })}
          {...props}
        />
      </div>
    </AlertDialogPortal>
  )
}

/* -------------------------------------------------------------------------- */
/*                              AlertDialogHeader                             */
/* -------------------------------------------------------------------------- */

const AlertDialogHeader = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { header } = useAlertDialogStyles(unstyled)

  return <div className={header({ className })} {...props} />
}
AlertDialogHeader.displayName = "AlertDialogHeader"

/* -------------------------------------------------------------------------- */
/*                              AlertDialogFooter                             */
/* -------------------------------------------------------------------------- */

const AlertDialogFooter = ({
  className,
  unstyled,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { footer } = useAlertDialogStyles(unstyled)

  return <div className={footer({ className })} {...props} />
}
AlertDialogFooter.displayName = "AlertDialogFooter"

/* -------------------------------------------------------------------------- */
/*                              AlertDialogTitle                              */
/* -------------------------------------------------------------------------- */

type AlertDialogTitleProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Title
> &
  UnstyledProps

const AlertDialogTitle = ({
  unstyled,
  className,
  ...props
}: AlertDialogTitleProps) => {
  const { title } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Title className={title({ className })} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                           AlertDialogDescription                           */
/* -------------------------------------------------------------------------- */

type AlertDialogDescriptionProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Description
> &
  UnstyledProps

const AlertDialogDescription = ({
  unstyled,
  className,
  ...props
}: AlertDialogDescriptionProps) => {
  const { description } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Description
      className={description({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                              AlertDialogAction                             */
/* -------------------------------------------------------------------------- */

type AlertDialogActionProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Action
> &
  UnstyledProps

const AlertDialogAction = ({
  unstyled,
  className,
  ...props
}: AlertDialogActionProps) => {
  const { action } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Action className={action({ className })} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                              AlertDialogCancel                             */
/* -------------------------------------------------------------------------- */

type AlertDialogCancelProps = React.ComponentPropsWithRef<
  typeof AlertDialogPrimitive.Cancel
> &
  UnstyledProps

const AlertDialogCancel = ({
  unstyled,
  className,
  ...props
}: AlertDialogCancelProps) => {
  const { cancel } = useAlertDialogStyles(unstyled)

  return (
    <AlertDialogPrimitive.Cancel className={cancel({ className })} {...props} />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}

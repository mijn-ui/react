"use client"

import * as React from "react"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {
  alertDialogStyles,
  AlertDialogVariantProps,
} from "@mijn-ui/react-theme"

const AlertDialogPortal = AlertDialogPrimitive.Portal

/* -------------------------------------------------------------------------- */
/*                              AlertDialogContext                                  */
/* -------------------------------------------------------------------------- */

type AlertDialogContextType = UnstyledProps &
  ReturnType<typeof alertDialogStyles>

const {
  Provider: AlertDialogProvider,
  useDynamicContext: useAlertDialogContext,
} = createDynamicContext<AlertDialogContextType>()

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
    <AlertDialogProvider value={{ unstyled, ...styles }}>
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
  const { unstyled: contextUnstyled, trigger } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
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
  const { unstyled: contextUnstyled, overlay } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Overlay
      className={applyUnstyled(isUnstyled, overlay(), className)}
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
  const {
    unstyled: contextUnstyled,
    contentWrapper,
    content,
  } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      {/* The outer wrapper (div) is intentionally not unstyled.
          This prevents the dialog from being rendered out of the viewport, which could occur
          if the parent component were to be unstyled. Without this constraint, users might face confusion 
          as the dialog may become invisible or inaccessible. Keeping the wrapper styled ensures proper positioning
          and accessibility regardless of the unstyled prop's usage. */}

      <div className={contentWrapper()}>
        <AlertDialogPrimitive.Content
          className={applyUnstyled(isUnstyled, content(), className)}
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
  const { unstyled: contextUnstyled, header } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, header(), className)}
      {...props}
    />
  )
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
  const { unstyled: contextUnstyled, footer } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, footer(), className)}
      {...props}
    />
  )
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
  const { unstyled: contextUnstyled, title } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Title
      className={applyUnstyled(isUnstyled, title(), className)}
      {...props}
    />
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
  const { unstyled: contextUnstyled, description } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Description
      className={applyUnstyled(isUnstyled, description(), className)}
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
  const { unstyled: contextUnstyled, action } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Action
      className={applyUnstyled(isUnstyled, action(), className)}
      {...props}
    />
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
  const { unstyled: contextUnstyled, cancel } = useAlertDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AlertDialogPrimitive.Cancel
      className={applyUnstyled(isUnstyled, cancel(), className)}
      {...props}
    />
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

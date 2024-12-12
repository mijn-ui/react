"use client"

import * as React from "react"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { dialogStyles, DialogVariantProps } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                                DialogContext                               */
/* -------------------------------------------------------------------------- */

type DialogContextType = UnstyledProps & ReturnType<typeof dialogStyles>

const { Provider: DialogProvider, useDynamicContext: useDialogContext } =
  createDynamicContext<DialogContextType>()

/* -------------------------------------------------------------------------- */
/*                                   Dialog                                   */
/* -------------------------------------------------------------------------- */

const DialogPortal = DialogPrimitive.Portal

type DialogProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Root> &
  DialogVariantProps &
  UnstyledProps

const Dialog = ({ unstyled = false, ...props }: DialogProps) => {
  const styles = dialogStyles()

  return (
    <DialogProvider value={{ unstyled, ...styles }}>
      <DialogPrimitive.Root {...props} />
    </DialogProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                DialogTrigger                               */
/* -------------------------------------------------------------------------- */

type DialogTriggerProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Trigger
> &
  UnstyledProps

const DialogTrigger = ({
  unstyled,
  className,
  ...props
}: DialogTriggerProps) => {
  const { unstyled: contextUnstyled, trigger } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 DialogClose                                */
/* -------------------------------------------------------------------------- */

type DialogCloseProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Close
> &
  UnstyledProps

const DialogClose = ({ unstyled, className, ...props }: DialogCloseProps) => {
  const { unstyled: contextUnstyled, close } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Close
      className={applyUnstyled(isUnstyled, close(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                DialogOverlay                               */
/* -------------------------------------------------------------------------- */

type DialogOverlayProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Overlay
> &
  UnstyledProps

const DialogOverlay = ({
  unstyled,
  className,
  ...props
}: DialogOverlayProps) => {
  const { unstyled: contextUnstyled, overlay } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Overlay
      className={applyUnstyled(isUnstyled, overlay(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                DialogContent                               */
/* -------------------------------------------------------------------------- */

type DialogContentProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Content
> &
  UnstyledProps

const DialogContent = ({
  unstyled,
  className,
  children,
  ...props
}: DialogContentProps) => {
  const {
    unstyled: contextUnstyled,
    contentWrapper,
    content,
  } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPortal>
      <DialogOverlay />
      {/* The outer wrapper (div) is intentionally not unstyled.
          This prevents the dialog from being rendered out of the viewport, which could occur
          if the parent component were to be unstyled. Without this constraint, users might face confusion 
          as the dialog may become invisible or inaccessible. Keeping the wrapper styled ensures proper positioning
          and accessibility regardless of the unstyled prop's usage. */}
      <div className={contentWrapper()}>
        <DialogPrimitive.Content
          className={applyUnstyled(isUnstyled, content(), className)}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </div>
    </DialogPortal>
  )
}

/* -------------------------------------------------------------------------- */
/*                                DialogHeader                                */
/* -------------------------------------------------------------------------- */

const DialogHeader = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled, header } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, header(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                DialogFooter                                */
/* -------------------------------------------------------------------------- */

const DialogFooter = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled, footer } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, footer(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 DialogTitle                                */
/* -------------------------------------------------------------------------- */

type DialogTitleProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Title
> &
  UnstyledProps

const DialogTitle = ({ unstyled, className, ...props }: DialogTitleProps) => {
  const { unstyled: contextUnstyled, title } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Title
      className={applyUnstyled(isUnstyled, title(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                              DialogDescription                             */
/* -------------------------------------------------------------------------- */

type DialogDescriptionProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Description
> &
  UnstyledProps

const DialogDescription = ({
  unstyled,
  className,
  ...props
}: DialogDescriptionProps) => {
  const { unstyled: contextUnstyled, description } = useDialogContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Description
      className={applyUnstyled(isUnstyled, description(), className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

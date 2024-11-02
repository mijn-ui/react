"use client"

import * as React from "react"
import { buttonStyles } from "@mijn-ui/components/button"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/UnstyledProvider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"
import * as DialogPrimitive from "@radix-ui/react-dialog"

const DialogPortal = DialogPrimitive.Portal

/* -------------------------------------------------------------------------- */
/*                                   Dialog                                   */
/* -------------------------------------------------------------------------- */

type DialogProps = React.ComponentPropsWithRef<typeof DialogPrimitive.Root> &
  UnstyledProps

const Dialog = ({ unstyled = false, ...props }: DialogProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <DialogPrimitive.Root {...props} />
  </UnstyledProvider>
)

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
  ref,
  ...props
}: DialogTriggerProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Trigger
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ color: "secondary" }),
        className,
      )}
      {...props}
    />
  )
}
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

/* -------------------------------------------------------------------------- */
/*                                 DialogClose                                */
/* -------------------------------------------------------------------------- */

type DialogCloseProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Close
> &
  UnstyledProps

const DialogClose = ({
  unstyled,
  className,
  ref,
  ...props
}: DialogCloseProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Close
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ color: "neutral", variant: "text" }),
        className,
      )}
      {...props}
    />
  )
}
DialogClose.displayName = DialogPrimitive.Close.displayName

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
  ref,
  ...props
}: DialogOverlayProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  )
}
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

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
  ref,
  ...props
}: DialogContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPortal>
      <DialogOverlay />
      {/* The outer wrapper (div) is intentionally not unstyled.
          This prevents the dialog from being rendered out of the viewport, which could occur
          if the parent component were to be unstyled. Without this constraint, users might face confusion 
          as the dialog may become invisible or inaccessible. Keeping the wrapper styled ensures proper positioning
          and accessibility regardless of the unstyled prop's usage. */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <DialogPrimitive.Content
          ref={ref}
          className={applyUnstyled(
            isUnstyled,
            "flex w-full max-w-lg m-4 flex-col gap-3 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
            className,
          )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  )
}
DialogHeader.displayName = "DialogHeader"

/* -------------------------------------------------------------------------- */
/*                                DialogFooter                                */
/* -------------------------------------------------------------------------- */

const DialogFooter = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className,
      )}
      {...props}
    />
  )
}
DialogFooter.displayName = "DialogFooter"

/* -------------------------------------------------------------------------- */
/*                                 DialogTitle                                */
/* -------------------------------------------------------------------------- */

type DialogTitleProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Title
> &
  UnstyledProps

const DialogTitle = ({
  unstyled,
  className,
  ref,
  ...props
}: DialogTitleProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
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
  ref,
  ...props
}: DialogDescriptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "text-sm text-neutral-text",
        className,
      )}
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

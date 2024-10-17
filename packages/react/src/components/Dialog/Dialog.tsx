"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { buttonStyles } from "@/components/Button";
import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider";
import { UnstyledProps } from "@/types";
import { applyUnstyled } from "@/utils";

const DialogPortal = DialogPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/*                                   Dialog                                   */
/* -------------------------------------------------------------------------- */

type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
  UnstyledProps;

const Dialog = ({ unstyled = false, ...props }: DialogProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <DialogPrimitive.Root {...props} />
  </UnstyledProvider>
);

/* -------------------------------------------------------------------------- */
/*                                DialogTrigger                               */
/* -------------------------------------------------------------------------- */

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> & UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <DialogPrimitive.Trigger
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ variant: "surface" }),
        className,
      )}
      {...props}
    />
  );
});

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

/* -------------------------------------------------------------------------- */
/*                                 DialogClose                                */
/* -------------------------------------------------------------------------- */

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> & UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <DialogPrimitive.Close
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ variant: "ghost" }),
        className,
      )}
      {...props}
    />
  );
});

DialogClose.displayName = DialogPrimitive.Close.displayName;

/* -------------------------------------------------------------------------- */
/*                                DialogOverlay                               */
/* -------------------------------------------------------------------------- */

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

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
  );
});

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/* -------------------------------------------------------------------------- */
/*                                DialogContent                               */
/* -------------------------------------------------------------------------- */

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & UnstyledProps
>(({ unstyled, className, children, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

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
            "flex w-full max-w-lg flex-col gap-4 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
            className,
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </div>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

/* -------------------------------------------------------------------------- */
/*                                DialogHeader                                */
/* -------------------------------------------------------------------------- */

const DialogHeader = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
};
DialogHeader.displayName = "DialogHeader";

/* -------------------------------------------------------------------------- */
/*                                DialogFooter                                */
/* -------------------------------------------------------------------------- */

const DialogFooter = ({
  unstyled,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className,
      )}
      {...props}
    />
  );
};
DialogFooter.displayName = "DialogFooter";

/* -------------------------------------------------------------------------- */
/*                                 DialogTitle                                */
/* -------------------------------------------------------------------------- */

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

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
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/* -------------------------------------------------------------------------- */
/*                              DialogDescription                             */
/* -------------------------------------------------------------------------- */

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "text-sm text-muted-text",
        className,
      )}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

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
};

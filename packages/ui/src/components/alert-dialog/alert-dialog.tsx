"use client";

import * as React from "react";
import { buttonStyles } from "@/components/button";
import { UnstyledProvider, useUnstyled } from "@/context/unstyled-provider";
import { UnstyledProps } from "@/types";
import { applyUnstyled } from "@/utils";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

const AlertDialogPortal = AlertDialogPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/*                                 AlertDialog                                */
/* -------------------------------------------------------------------------- */

const AlertDialog = ({
  unstyled = false,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root> & UnstyledProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <AlertDialogPrimitive.Root {...props} />
    </UnstyledProvider>
  );
};

/* -------------------------------------------------------------------------- */
/*                             AlertDialogTrigger                             */
/* -------------------------------------------------------------------------- */

type AlertDialogTriggerProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Trigger> & UnstyledProps;

const AlertDialogTrigger = ({ unstyled, className, ...props }: AlertDialogTriggerProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Trigger
      className={applyUnstyled(isUnstyled, buttonStyles({ color: "secondary" }), className)}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                             AlertDialogOverlay                             */
/* -------------------------------------------------------------------------- */

type AlertDialogOverlayProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay> & UnstyledProps;

const AlertDialogOverlay = ({ className, unstyled, ...props }: AlertDialogOverlayProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Overlay
      className={applyUnstyled(
        isUnstyled,
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                             AlertDialogContent                             */
/* -------------------------------------------------------------------------- */

type AlertDialogContentProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Content> & UnstyledProps;

const AlertDialogContent = ({ unstyled, className, ...props }: AlertDialogContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      {/* The outer wrapper (div) is intentionally not unstyled.
          This prevents the dialog from being rendered out of the viewport, which could occur
          if the parent component were to be unstyled. Without this constraint, users might face confusion 
          as the dialog may become invisible or inaccessible. Keeping the wrapper styled ensures proper positioning
          and accessibility regardless of the unstyled prop's usage. */}

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <AlertDialogPrimitive.Content
          className={applyUnstyled(
            isUnstyled,
            "flex w-full max-w-lg flex-col gap-2 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
            className
          )}
          {...props}
        />
      </div>
    </AlertDialogPortal>
  );
};

/* -------------------------------------------------------------------------- */
/*                              AlertDialogHeader                             */
/* -------------------------------------------------------------------------- */

const AlertDialogHeader = ({ unstyled, className, ...props }: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(isUnstyled, "flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

/* -------------------------------------------------------------------------- */
/*                              AlertDialogFooter                             */
/* -------------------------------------------------------------------------- */

const AlertDialogFooter = ({ className, unstyled, ...props }: React.HTMLAttributes<HTMLDivElement> & UnstyledProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(isUnstyled, "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  );
};
AlertDialogFooter.displayName = "AlertDialogFooter";

/* -------------------------------------------------------------------------- */
/*                              AlertDialogTitle                              */
/* -------------------------------------------------------------------------- */

type AlertDialogTitleProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Title> & UnstyledProps;

const AlertDialogTitle = ({ unstyled, className, ...props }: AlertDialogTitleProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Title className={applyUnstyled(isUnstyled, "text-lg font-semibold", className)} {...props} />
  );
};

/* -------------------------------------------------------------------------- */
/*                           AlertDialogDescription                           */
/* -------------------------------------------------------------------------- */

type AlertDialogDescriptionProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Description> & UnstyledProps;

const AlertDialogDescription = ({ unstyled, className, ...props }: AlertDialogDescriptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Description
      className={applyUnstyled(isUnstyled, "text-sm text-neutral-text", className)}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                              AlertDialogAction                             */
/* -------------------------------------------------------------------------- */

type AlertDialogActionProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Action> & UnstyledProps;

const AlertDialogAction = ({ unstyled, className, ...props }: AlertDialogActionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return <AlertDialogPrimitive.Action className={applyUnstyled(isUnstyled, buttonStyles(), className)} {...props} />;
};

/* -------------------------------------------------------------------------- */
/*                              AlertDialogCancel                             */
/* -------------------------------------------------------------------------- */

type AlertDialogCancelProps = React.ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel> & UnstyledProps;

const AlertDialogCancel = ({ unstyled, className, ...props }: AlertDialogCancelProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Cancel
      className={applyUnstyled(isUnstyled, buttonStyles({ color: "accent", variant: "text" }), className)}
      {...props}
    />
  );
};

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
};

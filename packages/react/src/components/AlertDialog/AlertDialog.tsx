"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { buttonStyles } from "@/components/Button";
import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider";
import { UnstyledProps } from "@/types";
import { applyUnstyled } from "@/utils";

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

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Trigger
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
AlertDialogTrigger.displayName = AlertDialogPrimitive.Trigger.displayName;

/* -------------------------------------------------------------------------- */
/*                             AlertDialogOverlay                             */
/* -------------------------------------------------------------------------- */

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> &
    UnstyledProps
>(({ className, unstyled, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Overlay
      className={applyUnstyled(
        isUnstyled,
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

/* -------------------------------------------------------------------------- */
/*                             AlertDialogContent                             */
/* -------------------------------------------------------------------------- */

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
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
          ref={ref}
          className={applyUnstyled(
            isUnstyled,
            "flex w-full max-w-lg flex-col gap-2 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
            className,
          )}
          {...props}
        />
      </div>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

/* -------------------------------------------------------------------------- */
/*                              AlertDialogHeader                             */
/* -------------------------------------------------------------------------- */

const AlertDialogHeader = ({
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
        "flex flex-col space-y-2 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

/* -------------------------------------------------------------------------- */
/*                              AlertDialogFooter                             */
/* -------------------------------------------------------------------------- */

const AlertDialogFooter = ({
  className,
  unstyled,
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
AlertDialogFooter.displayName = "AlertDialogFooter";

/* -------------------------------------------------------------------------- */
/*                              AlertDialogTitle                              */
/* -------------------------------------------------------------------------- */

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={applyUnstyled(isUnstyled, "text-lg font-semibold", className)}
      {...props}
    />
  );
});

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

/* -------------------------------------------------------------------------- */
/*                           AlertDialogDescription                           */
/* -------------------------------------------------------------------------- */

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Description
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
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

/* -------------------------------------------------------------------------- */
/*                              AlertDialogAction                             */
/* -------------------------------------------------------------------------- */

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={applyUnstyled(isUnstyled, buttonStyles(), className)}
      {...props}
    />
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

/* -------------------------------------------------------------------------- */
/*                              AlertDialogCancel                             */
/* -------------------------------------------------------------------------- */

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <AlertDialogPrimitive.Cancel
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
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

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

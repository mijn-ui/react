"use client"

import * as React from "react"
import { buttonStyles } from "@mijn-ui/react-button"
import { UnstyledProvider, useUnstyled } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadixPopover from "@radix-ui/react-popover"

const PopoverArrow = RadixPopover.Arrow

const PopoverAnchor = RadixPopover.Anchor

type PopoverProps = React.ComponentPropsWithoutRef<typeof RadixPopover.Root> &
  UnstyledProps

const Popover = ({ unstyled = false, ...props }: PopoverProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <RadixPopover.Root {...props} />
    </UnstyledProvider>
  )
}

/* ----------------------------- PopoverTrigger ----------------------------- */

type PopoverTriggerProps = React.ComponentPropsWithRef<
  typeof RadixPopover.Trigger
> &
  UnstyledProps

const PopoverTrigger = ({
  unstyled,
  className,
  ...props
}: PopoverTriggerProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Trigger
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ color: "secondary" }),
        className,
      )}
      {...props}
    />
  )
}

/* ----------------------------- PopoverClose ----------------------------- */

type PopoverCloseProps = React.ComponentPropsWithRef<
  typeof RadixPopover.Close
> &
  UnstyledProps

const PopoverClose = ({ unstyled, className, ...props }: PopoverCloseProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Close
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ variant: "text" }),
        className,
      )}
      {...props}
    />
  )
}

/* ----------------------------- PopoverContent ----------------------------- */

type PopoverContentProps = React.ComponentPropsWithRef<
  typeof RadixPopover.Content
> &
  UnstyledProps

const PopoverContent = ({
  unstyled,
  className,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={applyUnstyled(
          isUnstyled,
          "z-50 w-full rounded-lg border border-main-border bg-surface p-4 text-surface-text shadow-md outline-none !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
          className,
        )}
        {...props}
      />
    </RadixPopover.Portal>
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
}

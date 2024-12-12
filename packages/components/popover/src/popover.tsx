"use client"

import * as React from "react"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadixPopover from "@radix-ui/react-popover"
import { popoverStyles } from "@mijn-ui/react-theme"

const PopoverArrow = RadixPopover.Arrow

const PopoverAnchor = RadixPopover.Anchor

/* -------------------------------------------------------------------------- */
/*                               PopoverContext                               */
/* -------------------------------------------------------------------------- */

type AlertContextType = UnstyledProps & ReturnType<typeof popoverStyles>

const { Provider: PopoverProvider, useDynamicContext: usePopoverContext } =
  createDynamicContext<AlertContextType>()

type PopoverProps = React.ComponentPropsWithoutRef<typeof RadixPopover.Root> &
  UnstyledProps

const Popover = ({ unstyled = false, ...props }: PopoverProps) => {
  const styles = popoverStyles()

  return (
    <PopoverProvider value={{ unstyled, ...styles }}>
      <RadixPopover.Root {...props} />
    </PopoverProvider>
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
  const { unstyled: contextUnstyled, trigger } = usePopoverContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
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
  const { unstyled: contextUnstyled, close } = usePopoverContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Close
      className={applyUnstyled(isUnstyled, close(), className)}
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
  const { unstyled: contextUnstyled, content } = usePopoverContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={applyUnstyled(isUnstyled, content(), className)}
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

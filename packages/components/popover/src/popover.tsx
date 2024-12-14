"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadixPopover from "@radix-ui/react-popover"
import { popoverStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

const PopoverArrow = RadixPopover.Arrow

const PopoverAnchor = RadixPopover.Anchor

/* -------------------------------------------------------------------------- */
/*                               PopoverContext                               */
/* -------------------------------------------------------------------------- */

type PopoverContextType = UnstyledProps & {
  styles: ReturnType<typeof popoverStyles>
}

const [PopoverProvider, usePopoverContext] = createContext<PopoverContextType>({
  name: "PopoverContext",
  strict: true,
  errorMessage:
    "usePopoverContext: `context` is undefined. Seems you forgot to wrap component within <Popover />",
})

/* -------------------------------------------------------------------------- */
/*                                 PopoverHook                                */
/* -------------------------------------------------------------------------- */

const usePopoverStyles = (unstyledOverride?: boolean) => {
  const context = usePopoverContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                   Popover                                  */
/* -------------------------------------------------------------------------- */

type PopoverProps = React.ComponentPropsWithoutRef<typeof RadixPopover.Root> &
  UnstyledProps

const Popover = ({ unstyled = false, ...props }: PopoverProps) => {
  const styles = popoverStyles()

  return (
    <PopoverProvider value={{ unstyled, styles }}>
      <RadixPopover.Root {...props} />
    </PopoverProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                               PopoverTrigger                               */
/* -------------------------------------------------------------------------- */

type PopoverTriggerProps = React.ComponentPropsWithRef<
  typeof RadixPopover.Trigger
> &
  UnstyledProps

const PopoverTrigger = ({
  unstyled,
  className,
  ...props
}: PopoverTriggerProps) => {
  const { trigger } = usePopoverStyles(unstyled)

  return <RadixPopover.Trigger className={trigger({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                PopoverClose                                */
/* -------------------------------------------------------------------------- */

type PopoverCloseProps = React.ComponentPropsWithRef<
  typeof RadixPopover.Close
> &
  UnstyledProps

const PopoverClose = ({ unstyled, className, ...props }: PopoverCloseProps) => {
  const { close } = usePopoverStyles(unstyled)

  return <RadixPopover.Close className={close({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                               PopoverContent                               */
/* -------------------------------------------------------------------------- */

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
  const { content } = usePopoverStyles(unstyled)

  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={content({ className })}
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

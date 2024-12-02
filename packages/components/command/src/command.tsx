"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@mijn-ui/react-dialog"
import { UnstyledProvider, useUnstyled } from "@mijn-ui/react-utilities/context"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { LuSearch } from "react-icons/lu"

/* -------------------------------------------------------------------------- */
/*                                   Command                                  */
/* -------------------------------------------------------------------------- */

type CommandProps = React.ComponentPropsWithRef<typeof CommandPrimitive> &
  UnstyledProps

const Command = ({ unstyled = false, className, ...props }: CommandProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <CommandPrimitive
      className={cn(
        "border-main-border bg-surface text-surface-text flex size-full flex-col overflow-hidden rounded-md",
        className,
      )}
      {...props}
    />
  </UnstyledProvider>
)

/* -------------------------------------------------------------------------- */
/*                                CommandDialog                               */
/* -------------------------------------------------------------------------- */

type CommandDialogProps = DialogProps & UnstyledProps

const CommandDialog = ({
  children,
  unstyled,
  ...props
}: CommandDialogProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <Dialog {...props}>
      <DialogContent
        className={applyUnstyled(isUnstyled, " overflow-hidden p-0 shadow-lg")}
      >
        <Command
          className={applyUnstyled(
            isUnstyled,
            "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-text [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/* -------------------------------------------------------------------------- */
/*                                CommandInput                                */
/* -------------------------------------------------------------------------- */

type CommandInputProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Input
> &
  UnstyledProps

const CommandInput = ({ className, unstyled, ...props }: CommandInputProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex items-center border-b border-main-border px-3",
      )}
      /* eslint-disable-next-line */
      cmdk-input-wrapper=""
    >
      <LuSearch
        className={applyUnstyled(
          isUnstyled,
          "mr-2 h-4 w-4 shrink-0 opacity-50",
        )}
      />
      <CommandPrimitive.Input
        className={applyUnstyled(
          isUnstyled,
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-text disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CommandList                                */
/* -------------------------------------------------------------------------- */

type CommandListProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.List
> &
  UnstyledProps

const CommandList = ({ className, unstyled, ...props }: CommandListProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.List
      className={applyUnstyled(
        isUnstyled,
        "max-h-[300px] overflow-y-auto overflow-x-hidden",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                CommandEmpty                                */
/* -------------------------------------------------------------------------- */

type CommandEmptyProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Empty
> &
  UnstyledProps

const CommandEmpty = ({ unstyled, className, ...props }: CommandEmptyProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Empty
      className={applyUnstyled(
        isUnstyled,
        "py-6 text-center text-sm",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                CommandGroup                                */
/* -------------------------------------------------------------------------- */

type CommandGroupProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Group
> &
  UnstyledProps

const CommandGroup = ({ className, unstyled, ...props }: CommandGroupProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Group
      className={applyUnstyled(
        isUnstyled,
        "text-text overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-text",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                              CommandSeparator                              */
/* -------------------------------------------------------------------------- */

type CommandSeparatorProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Separator
> &
  UnstyledProps

const CommandSeparator = ({
  className,
  unstyled,
  ...props
}: CommandSeparatorProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Separator
      className={applyUnstyled(
        isUnstyled,
        "-mx-1 h-px bg-main-border",
        className,
      )}
      {...props}
    />
  )
}
/* -------------------------------------------------------------------------- */
/*                                 CommandItem                                */
/* -------------------------------------------------------------------------- */

type CommandItemProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Item
> &
  UnstyledProps

const CommandItem = ({ className, unstyled, ...props }: CommandItemProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Item
      className={applyUnstyled(
        isUnstyled,
        "relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-auto data-[selected='true']:bg-accent data-[selected=true]:text-accent-text data-[disabled=true]:opacity-50",
        className,
      )}
      {...props}
    />
  )
}
/* -------------------------------------------------------------------------- */
/*                               CommandShortcut                              */
/* -------------------------------------------------------------------------- */

type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement> &
  UnstyledProps

const CommandShortcut = ({
  className,
  unstyled,
  ...props
}: CommandShortcutProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(
        isUnstyled,
        "ml-auto text-xs tracking-widest text-muted-text",
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
}

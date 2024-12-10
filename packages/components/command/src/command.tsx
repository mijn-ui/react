"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@mijn-ui/react-dialog"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "@mijn-ui/shared-icons"
import { commandStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                               CommandContext                               */
/* -------------------------------------------------------------------------- */

type CommandContextType = UnstyledProps & ReturnType<typeof commandStyles>

const { Provider: CommandProvider, useDynamicContext: useCommandContext } =
  createDynamicContext<CommandContextType>()

/* -------------------------------------------------------------------------- */
/*                                   Command                                  */
/* -------------------------------------------------------------------------- */

type CommandProps = React.ComponentPropsWithRef<typeof CommandPrimitive> &
  UnstyledProps

const Command = ({ unstyled = false, className, ...props }: CommandProps) => {
  const styles = commandStyles()

  return (
    <CommandProvider value={{ unstyled, ...styles }}>
      <CommandPrimitive
        className={applyUnstyled(unstyled, styles.command(), className)}
        {...props}
      />
    </CommandProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                CommandDialog                               */
/* -------------------------------------------------------------------------- */

type CommandDialogProps = DialogProps & UnstyledProps

const CommandDialog = ({
  children,
  unstyled,
  ...props
}: CommandDialogProps) => {
  const styles = commandStyles()

  return (
    <CommandProvider value={{ unstyled, ...styles }}>
      <Dialog {...props}>
        <DialogContent
          className={applyUnstyled(unstyled, styles.dialogContent())}
        >
          <Command className={applyUnstyled(unstyled, styles.dialogCommand())}>
            {children}
          </Command>
        </DialogContent>
      </Dialog>
    </CommandProvider>
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
  const {
    unstyled: contextUnstyled,
    input,
    inputIcon,
    inputWrapper,
  } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, inputWrapper())}
      /* eslint-disable-next-line */
      cmdk-input-wrapper=""
    >
      <SearchIcon className={applyUnstyled(isUnstyled, inputIcon())} />
      <CommandPrimitive.Input
        className={applyUnstyled(isUnstyled, input(), className)}
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
  const { unstyled: contextUnstyled, list } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.List
      className={applyUnstyled(isUnstyled, list(), className)}
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
  const { unstyled: contextUnstyled, empty } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Empty
      className={applyUnstyled(isUnstyled, empty(), className)}
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
  const { unstyled: contextUnstyled, group } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Group
      className={applyUnstyled(isUnstyled, group(), className)}
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
  const { unstyled: contextUnstyled, separator } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Separator
      className={applyUnstyled(isUnstyled, separator(), className)}
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
  const { unstyled: contextUnstyled, item } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Item
      className={applyUnstyled(isUnstyled, item(), className)}
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
  const { unstyled: contextUnstyled, shortcut } = useCommandContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(isUnstyled, shortcut(), className)}
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

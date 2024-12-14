"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@mijn-ui/react-dialog"
import { createContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "@mijn-ui/shared-icons"
import { commandStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                               CommandContext                               */
/* -------------------------------------------------------------------------- */

type CommandContextType = UnstyledProps & {
  styles: ReturnType<typeof commandStyles>
}

const [CommandProvider, useCommandContext] = createContext<CommandContextType>({
  name: "CommandContext",
  strict: true,
  errorMessage:
    "useCommandContext: `context` is undefined. Seems you forgot to wrap component within <Command />",
})

/* -------------------------------------------------------------------------- */
/*                                 CommandHook                                */
/* -------------------------------------------------------------------------- */

const useCommandStyles = (unstyledOverride?: boolean) => {
  const context = useCommandContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                   Command                                  */
/* -------------------------------------------------------------------------- */

type CommandProps = React.ComponentPropsWithRef<typeof CommandPrimitive> &
  UnstyledProps

const Command = ({ unstyled = false, className, ...props }: CommandProps) => {
  const styles = commandStyles()

  return (
    <CommandProvider value={{ unstyled, styles }}>
      <CommandPrimitive
        className={applyUnstyled(unstyled, styles.command({ className }))}
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
    <CommandProvider value={{ unstyled, styles }}>
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
  const { input, inputIcon, inputWrapper } = useCommandStyles(unstyled)

  return (
    <div
      className={inputWrapper()}
      /* eslint-disable-next-line */
      cmdk-input-wrapper=""
    >
      <SearchIcon className={inputIcon()} />
      <CommandPrimitive.Input className={input({ className })} {...props} />
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
  const { list } = useCommandStyles(unstyled)

  return <CommandPrimitive.List className={list({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                CommandEmpty                                */
/* -------------------------------------------------------------------------- */

type CommandEmptyProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Empty
> &
  UnstyledProps

const CommandEmpty = ({ unstyled, className, ...props }: CommandEmptyProps) => {
  const { empty } = useCommandStyles(unstyled)

  return <CommandPrimitive.Empty className={empty({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                CommandGroup                                */
/* -------------------------------------------------------------------------- */

type CommandGroupProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Group
> &
  UnstyledProps

const CommandGroup = ({ className, unstyled, ...props }: CommandGroupProps) => {
  const { group } = useCommandStyles(unstyled)

  return <CommandPrimitive.Group className={group({ className })} {...props} />
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
  const { separator } = useCommandStyles(unstyled)

  return (
    <CommandPrimitive.Separator
      className={separator({ className })}
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
  const { item } = useCommandStyles(unstyled)

  return <CommandPrimitive.Item className={item({ className })} {...props} />
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
  const { shortcut } = useCommandStyles(unstyled)

  return <span className={shortcut({ className })} {...props} />
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

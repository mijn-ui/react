"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "@mijn-ui/shared-icons"
import { dropdownMenuStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuContext                            */
/* -------------------------------------------------------------------------- */

type DropdownContextType = UnstyledProps & {
  styles: ReturnType<typeof dropdownMenuStyles>
}

const [DropdownProvider, useDropdownContext] =
  createContext<DropdownContextType>({
    name: "DropdownContext",
    strict: true,
    errorMessage:
      "useDropdownContext: `context` is undefined. Seems you forgot to wrap component within <Dropdown />",
  })

/* -------------------------------------------------------------------------- */
/*                              DropdownMenuHook                              */
/* -------------------------------------------------------------------------- */

const useDropdownStyles = (unstyledOverride?: boolean) => {
  const context = useDropdownContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                DropdownMenu                                */
/* -------------------------------------------------------------------------- */

type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps & UnstyledProps

const DropdownMenu = ({ unstyled = false, ...props }: DropdownMenuProps) => {
  const styles = dropdownMenuStyles()

  return (
    <DropdownProvider value={{ unstyled, styles }}>
      <DropdownMenuPrimitive.Root {...props} />
    </DropdownProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuTrigger                            */
/* -------------------------------------------------------------------------- */

type DropdownTriggerProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.Trigger
> &
  UnstyledProps

const DropdownMenuTrigger = ({
  unstyled,
  className,
  ...props
}: DropdownTriggerProps) => {
  const { trigger } = useDropdownStyles(unstyled)
  return (
    <DropdownMenuPrimitive.Trigger
      className={trigger({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                           DropdownMenuSubTrigger                           */
/* -------------------------------------------------------------------------- */

type DropdownMenuSubTriggerProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.SubTrigger
> &
  UnstyledProps & {
    inset?: boolean
  }

const DropdownMenuSubTrigger = ({
  unstyled,
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) => {
  const { subTrigger } = useDropdownStyles(unstyled)

  return (
    <DropdownMenuPrimitive.SubTrigger
      className={subTrigger({ className, inset })}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

/* -------------------------------------------------------------------------- */
/*                           DropdownMenuSubContent                           */
/* -------------------------------------------------------------------------- */

type DropdownMenuSubContentProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.SubContent
> &
  UnstyledProps

const DropdownMenuSubContent = ({
  unstyled,
  className,
  ...props
}: DropdownMenuSubContentProps) => {
  const { subContent } = useDropdownStyles(unstyled)

  return (
    <DropdownMenuPrimitive.SubContent
      className={subContent({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuContent                            */
/* -------------------------------------------------------------------------- */

type DropdownMenuContentProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.Content
> &
  UnstyledProps

const DropdownMenuContent = ({
  className,
  unstyled,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => {
  const { content } = useDropdownStyles(unstyled)
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

/* -------------------------------------------------------------------------- */
/*                              DropdownMenuItem                              */
/* -------------------------------------------------------------------------- */

type DropdownMenuItemProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean
} & UnstyledProps

const DropdownMenuItem = ({
  unstyled,
  className,
  inset,
  ...props
}: DropdownMenuItemProps) => {
  const { item } = useDropdownStyles(unstyled)

  return (
    <DropdownMenuPrimitive.Item
      className={item({ className, inset })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                          DropdownMenuCheckboxItem                          */
/* -------------------------------------------------------------------------- */

type DropdownMenuCheckboxItemProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  UnstyledProps

const DropdownMenuCheckboxItem = ({
  className,
  unstyled,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  const { checkboxItem, checkboxItemIconWrapper, checkboxItemIcon } =
    useDropdownStyles(unstyled)
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={checkboxItemIconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className={checkboxItemIcon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

/* -------------------------------------------------------------------------- */
/*                            DropdownMenuRadioItem                           */
/* -------------------------------------------------------------------------- */

type DropdownMenuRadioItemProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.RadioItem
> &
  UnstyledProps

const DropdownMenuRadioItem = ({
  className,
  unstyled,
  children,
  ...props
}: DropdownMenuRadioItemProps) => {
  const { radioItem, radioItemIconWrapper, radioItemIcon } =
    useDropdownStyles(unstyled)
  return (
    <DropdownMenuPrimitive.RadioItem
      className={radioItem({ className })}
      {...props}
    >
      <span className={radioItemIconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className={radioItemIcon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

/* -------------------------------------------------------------------------- */
/*                              DropdownMenuLabel                             */

type DropdownMenuLabelProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean
} & UnstyledProps

const DropdownMenuLabel = ({
  className,
  unstyled,
  inset,
  ...props
}: DropdownMenuLabelProps) => {
  const { label } = useDropdownStyles(unstyled)
  return (
    <DropdownMenuPrimitive.Label
      className={label({ className, inset })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                            DropdownMenuSeparator                           */
/* -------------------------------------------------------------------------- */

type DropdownMenuSeparatorProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.Separator
> &
  UnstyledProps

const DropdownMenuSeparator = ({
  className,
  unstyled,
  ...props
}: DropdownMenuSeparatorProps) => {
  const { separator } = useDropdownStyles(unstyled)

  return (
    <DropdownMenuPrimitive.Separator
      className={separator({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                            DropdownMenuShortcut                            */
/* -------------------------------------------------------------------------- */

const DropdownMenuShortcut = ({
  className,
  unstyled,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & UnstyledProps) => {
  const { shortcut } = useDropdownStyles(unstyled)

  return <span className={shortcut({ className })} {...props} />
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

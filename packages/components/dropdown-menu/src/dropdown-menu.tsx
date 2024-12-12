"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "@mijn-ui/shared-icons"
import { dropdownMenuStyles } from "@mijn-ui/react-theme"

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuContext                            */
/* -------------------------------------------------------------------------- */

type DropdownContextType = UnstyledProps & ReturnType<typeof dropdownMenuStyles>

const [DropdownProvider, useDropdownContext] =
  createContext<DropdownContextType>({
    name: "DropdownContext",
    strict: true,
    errorMessage:
      "useDropdownContext: `context` is undefined. Seems you forgot to wrap component within <Dropdown />",
  })

/* -------------------------------------------------------------------------- */
/*                                DropdownMenu                                */
/* -------------------------------------------------------------------------- */

type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps & UnstyledProps

const DropdownMenu = ({ unstyled = false, ...props }: DropdownMenuProps) => {
  const styles = dropdownMenuStyles()

  return (
    <DropdownProvider value={{ unstyled, ...styles }}>
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
  const { unstyled: contextUnstyled, trigger } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
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
  const { unstyled: contextUnstyled, subTrigger } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        applyUnstyled(isUnstyled, subTrigger({ inset }), className),
      )}
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
  const { unstyled: contextUnstyled, subContent } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.SubContent
      className={applyUnstyled(isUnstyled, subContent(), className)}
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
  const { unstyled: contextUnstyled, content } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={applyUnstyled(isUnstyled, content(), className)}
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
  const { unstyled: contextUnstyled, item } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Item
      className={applyUnstyled(isUnstyled, item({ inset }), className)}
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
  const {
    unstyled: contextUnstyled,
    checkboxItem,
    checkboxItemIconWrapper,
    checkboxItemIcon,
  } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={applyUnstyled(isUnstyled, checkboxItem(), className)}
      checked={checked}
      {...props}
    >
      <span className={applyUnstyled(isUnstyled, checkboxItemIconWrapper())}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
            className={applyUnstyled(isUnstyled, checkboxItemIcon())}
          />
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
  const {
    unstyled: contextUnstyled,
    radioItem,
    radioItemIconWrapper,
    radioItemIcon,
  } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.RadioItem
      className={applyUnstyled(isUnstyled, radioItem(), className)}
      {...props}
    >
      <span className={applyUnstyled(isUnstyled, radioItemIconWrapper())}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className={applyUnstyled(isUnstyled, radioItemIcon())} />
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
  const { unstyled: contextUnstyled, label } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Label
      className={applyUnstyled(isUnstyled, label({ inset }), className)}
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
  const { unstyled: contextUnstyled, separator } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Separator
      className={applyUnstyled(isUnstyled, separator(), className)}
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
  const { unstyled: contextUnstyled, shortcut } = useDropdownContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(isUnstyled, shortcut(), className)}
      {...props}
    />
  )
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

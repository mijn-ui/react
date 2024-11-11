"use client"

import * as React from "react"
import { buttonStyles } from "@mijn-ui/components/button"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled, cn } from "@mijn-ui/utils"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu"

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/* -------------------------------------------------------------------------- */
/*                                DropdownMenu                                */
/* -------------------------------------------------------------------------- */

type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps & UnstyledProps

const DropdownMenu = ({ unstyled = false, ...props }: DropdownMenuProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <DropdownMenuPrimitive.Root {...props} />
    </UnstyledProvider>
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Trigger
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ color: "secondary" }),
        className,
      )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        applyUnstyled(
          isUnstyled,
          cn(
            "flex cursor-default gap-2 select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            inset && "pl-8",
          ),
          className,
        ),
      )}
      {...props}
    >
      {children}
      <LuChevronRight className="ml-auto" />
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.SubContent
      className={applyUnstyled(
        isUnstyled,
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-surface p-1 text-surface-text shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={applyUnstyled(
          isUnstyled,
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-surface p-1 text-surface-text shadow-md !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
          className,
        )}
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
> & { inset?: boolean } & UnstyledProps

const DropdownMenuItem = ({
  unstyled,
  className,
  inset,
  ...props
}: DropdownMenuItemProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Item
      className={applyUnstyled(
        isUnstyled,
        cn(
          "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          inset && "pl-8",
        ),
        className,
      )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={applyUnstyled(
        isUnstyled,
        "relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className={applyUnstyled(
          isUnstyled,
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        )}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCheck className="h-4 w-4" />
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span
        className={applyUnstyled(
          isUnstyled,
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        )}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCircle className="h-2 w-2 fill-current" />
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
> & { inset?: boolean } & UnstyledProps

const DropdownMenuLabel = ({
  className,
  unstyled,
  inset,
  ...props
}: DropdownMenuLabelProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Label
      className={applyUnstyled(
        isUnstyled,
        cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8"),
        className,
      )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <DropdownMenuPrimitive.Separator
      className={applyUnstyled(
        isUnstyled,
        "-mx-1 my-1 h-px bg-neutral",
        className,
      )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <span
      className={applyUnstyled(
        isUnstyled,
        "ml-auto text-xs tracking-widest opacity-60",
        className,
      )}
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

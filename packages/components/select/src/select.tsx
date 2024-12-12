"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@mijn-ui/shared-icons"
import { selectStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                                SelectContext                               */
/* -------------------------------------------------------------------------- */

type SelectContextType = UnstyledProps & ReturnType<typeof selectStyles>

const [SelectProvider, useSelectContext] = createContext<SelectContextType>({
  name: "SelectContext",
  strict: true,
  errorMessage:
    "useSelectContext: `context` is undefined. Seems you forgot to wrap component within <Select />",
})

/* -------------------------------------------------------------------------- */
/*                                   Select                                   */
/* -------------------------------------------------------------------------- */

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> &
  UnstyledProps

const Select = ({ unstyled = false, ...props }: SelectProps) => {
  const styles = selectStyles()

  return (
    <SelectProvider value={{ unstyled, ...styles }}>
      <SelectPrimitive.Root {...props} />
    </SelectProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SelectTrigger                               */
/* -------------------------------------------------------------------------- */

type SelectTriggerProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Trigger
> &
  UnstyledProps

const SelectTrigger = ({
  unstyled,
  className,
  children,
  ...props
}: SelectTriggerProps) => {
  const { unstyled: contextUnstyled, trigger } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/* -------------------------------------------------------------------------- */
/*                            SelectScrollUpButton                            */
/* -------------------------------------------------------------------------- */

type SelectScrollUpButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollUpButton
> &
  UnstyledProps

const SelectScrollUpButton = ({
  unstyled,
  className,
  ...props
}: SelectScrollUpButtonProps) => {
  const { unstyled: contextUnstyled, scrollUpBtn } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.ScrollUpButton
      className={applyUnstyled(isUnstyled, scrollUpBtn(), className)}
      {...props}
    >
      <ChevronUpIcon className="" />
    </SelectPrimitive.ScrollUpButton>
  )
}

/* -------------------------------------------------------------------------- */
/*                           SelectScrollDownButton                           */
/* -------------------------------------------------------------------------- */

type SelectScrollDownButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollDownButton
> &
  UnstyledProps

const SelectScrollDownButton = ({
  unstyled,
  className,
  ...props
}: SelectScrollDownButtonProps) => {
  const { unstyled: contextUnstyled, scrollDownBtn } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.ScrollDownButton
      className={applyUnstyled(isUnstyled, scrollDownBtn(), className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SelectContent                               */
/* -------------------------------------------------------------------------- */

type SelectContentProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Content
> &
  UnstyledProps

const SelectContent = ({
  unstyled,
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) => {
  const { unstyled: contextUnstyled, content, viewport } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={applyUnstyled(isUnstyled, content({ position }), className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={applyUnstyled(isUnstyled, viewport({ position }))}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 SelectLabel                                */
/* -------------------------------------------------------------------------- */

type SelectLabelProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Label
> &
  UnstyledProps

const SelectLabel = ({ unstyled, className, ...props }: SelectLabelProps) => {
  const { unstyled: contextUnstyled, label } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Label
      className={applyUnstyled(isUnstyled, label(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 SelectItem                                 */
/* -------------------------------------------------------------------------- */

type SelectItemProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Item
> &
  UnstyledProps

const SelectItem = ({
  unstyled,
  className,
  children,
  ...props
}: SelectItemProps) => {
  const { unstyled: contextUnstyled, item, itemIndicator } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Item
      className={applyUnstyled(isUnstyled, item(), className)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <span className={applyUnstyled(isUnstyled, itemIndicator())}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

/* -------------------------------------------------------------------------- */
/*                               SelectSeparator                              */
/* -------------------------------------------------------------------------- */

type SelectSeparatorProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Separator
> &
  UnstyledProps

const SelectSeparator = ({
  unstyled,
  className,
  ...props
}: SelectSeparatorProps) => {
  const { unstyled: contextUnstyled, separator } = useSelectContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Separator
      className={applyUnstyled(isUnstyled, separator(), className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

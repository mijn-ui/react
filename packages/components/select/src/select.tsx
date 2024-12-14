"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@mijn-ui/shared-icons"
import { selectStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                                SelectContext                               */
/* -------------------------------------------------------------------------- */

type SelectContextType = UnstyledProps & {
  styles: ReturnType<typeof selectStyles>
}

const [SelectProvider, useSelectContext] = createContext<SelectContextType>({
  name: "SelectContext",
  strict: true,
  errorMessage:
    "useSelectContext: `context` is undefined. Seems you forgot to wrap component within <Select />",
})

/* -------------------------------------------------------------------------- */
/*                                 SelectHook                                 */
/* -------------------------------------------------------------------------- */

const useSelectStyles = (unstyledOverride?: boolean) => {
  const context = useSelectContext()
  return useTVUnstyled(context, unstyledOverride)
}

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
    <SelectProvider value={{ unstyled, styles }}>
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
  const { trigger } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.Trigger className={trigger({ className })} {...props}>
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
  const { scrollUpBtn } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.ScrollUpButton
      className={scrollUpBtn({ className })}
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
  const { scrollDownBtn } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.ScrollDownButton
      className={scrollDownBtn({ className })}
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
  const { content, viewport } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={content({ position, className })}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={viewport({ position })}>
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
  const { label } = useSelectStyles(unstyled)

  return <SelectPrimitive.Label className={label({ className })} {...props} />
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
  const { item, itemIndicator } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.Item className={item({ className })} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <span className={itemIndicator()}>
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
  const { separator } = useSelectStyles(unstyled)

  return (
    <SelectPrimitive.Separator
      className={separator({ className })}
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

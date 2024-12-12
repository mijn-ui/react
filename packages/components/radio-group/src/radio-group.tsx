"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "@mijn-ui/shared-icons"
import { radioGroupStyles } from "@mijn-ui/react-theme"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"

/* -------------------------------------------------------------------------- */
/*                              RadioGroupContext                             */
/* -------------------------------------------------------------------------- */

type RadioGroupContextType = UnstyledProps & ReturnType<typeof radioGroupStyles>

const {
  Provider: RadioGroupProvider,
  useDynamicContext: useRadioGroupContext,
} = createDynamicContext<RadioGroupContextType>()

/* -------------------------------------------------------------------------- */
/*                                 RadioGroup                                 */
/* -------------------------------------------------------------------------- */

type RadioGroupProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Root
> &
  UnstyledProps

const RadioGroup = ({ unstyled, className, ...props }: RadioGroupProps) => {
  const styles = radioGroupStyles()

  return (
    <RadioGroupProvider value={{ unstyled, ...styles }}>
      <RadioGroupPrimitive.Root
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      />
    </RadioGroupProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                               RadioGroupItem                               */
/* -------------------------------------------------------------------------- */

type RadioGroupItemProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Item
> &
  UnstyledProps

const RadioGroupItem = ({
  unstyled,
  className,
  ...props
}: RadioGroupItemProps) => {
  const {
    unstyled: contextUnstyled,
    item,
    indicator,
    icon,
  } = useRadioGroupContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadioGroupPrimitive.Item
      className={applyUnstyled(isUnstyled, item(), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={applyUnstyled(isUnstyled, indicator())}
      >
        <CircleIcon className={applyUnstyled(isUnstyled, icon())} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

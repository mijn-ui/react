"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "@mijn-ui/shared-icons"
import { radioGroupStyles } from "@mijn-ui/react-theme"
import { createContext } from "@mijn-ui/react-utilities/context"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              RadioGroupContext                             */
/* -------------------------------------------------------------------------- */

type RadioGroupContextType = UnstyledProps & {
  styles: ReturnType<typeof radioGroupStyles>
}

const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContextType>({
    name: "RadioGroupContext",
    strict: true,
    errorMessage:
      "useRadioGroupContext: `context` is undefined. Seems you forgot to wrap component within <RadioGroup />",
  })

/* -------------------------------------------------------------------------- */
/*                               RadioGroupHook                               */
/* -------------------------------------------------------------------------- */

const useRadioGroupStyles = (unstyledOverride?: boolean) => {
  const context = useRadioGroupContext()
  return useTVUnstyled(context, unstyledOverride)
}

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
    <RadioGroupProvider value={{ unstyled, styles }}>
      <RadioGroupPrimitive.Root
        className={applyUnstyled(unstyled, styles.base({ className }))}
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
  const { item, indicator, icon } = useRadioGroupStyles(unstyled)

  return (
    <RadioGroupPrimitive.Item className={item({ className })} {...props}>
      <RadioGroupPrimitive.Indicator className={indicator()}>
        <CircleIcon className={icon()} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

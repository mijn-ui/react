"use client"

import * as React from "react"
import { cn } from "@mijn-ui-react/utilities/shared"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { LuCircle } from "react-icons/lu"

type RadioGroupProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Root
>

const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

type RadioGroupItemProps = React.ComponentPropsWithRef<
  typeof RadioGroupPrimitive.Item
>

const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "border-primary text-primary ring-offset-main focus-visible:ring-ring aspect-square size-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <LuCircle className="size-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

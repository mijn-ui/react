"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { UnstyledProvider, useUnstyled } from "@mijn-ui/react-utilities/context"

type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root> &
  UnstyledProps

const Tabs = ({ children, unstyled = false, ...props }: TabsProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
  </UnstyledProvider>
)

/* -------------------------------------------------------------------------- */
/*                                  TabsList                                  */
/* -------------------------------------------------------------------------- */

type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List> &
  UnstyledProps

const TabsList = ({ className, unstyled, ...props }: TabsListProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.List
      className={applyUnstyled(
        isUnstyled,
        "bg-main text-muted-text inline-flex h-10 items-center justify-center rounded-lg p-1",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TabsTrigger                                */
/* -------------------------------------------------------------------------- */

type TabsTriggerProps = React.ComponentPropsWithRef<
  typeof TabsPrimitive.Trigger
> &
  UnstyledProps

const TabsTrigger = ({ className, unstyled, ...props }: TabsTriggerProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.Trigger
      className={applyUnstyled(
        isUnstyled,
        "focus-visible:ring-ring data-[state=active]:bg-surface data-[state=active]:text-main-text inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TabsContent                                */
/* -------------------------------------------------------------------------- */

type TabsContentProps = React.ComponentPropsWithRef<
  typeof TabsPrimitive.Content
> &
  UnstyledProps

const TabsContent = ({ className, unstyled, ...props }: TabsContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.Content
      className={applyUnstyled(
        isUnstyled,
        "focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-1",
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

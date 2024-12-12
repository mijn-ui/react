"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { createContext } from "@mijn-ui/react-utilities/context"
import { tabsStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                                 TabsContext                                */
/* -------------------------------------------------------------------------- */

type TabsContextType = UnstyledProps & ReturnType<typeof tabsStyles>

const [TabsProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
  strict: true,
  errorMessage:
    "useTabsContext: `context` is undefined. Seems you forgot to wrap component within <Tabs />",
})

type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root> &
  UnstyledProps

const Tabs = ({ children, unstyled = false, ...props }: TabsProps) => {
  const styles = tabsStyles()

  return (
    <TabsProvider value={{ unstyled, ...styles }}>
      <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
    </TabsProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TabsList                                  */
/* -------------------------------------------------------------------------- */

type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List> &
  UnstyledProps

const TabsList = ({ className, unstyled, ...props }: TabsListProps) => {
  const { unstyled: contextUnstyled, list } = useTabsContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.List
      className={applyUnstyled(isUnstyled, list(), className)}
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
  const { unstyled: contextUnstyled, trigger } = useTabsContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.Trigger
      className={applyUnstyled(isUnstyled, trigger(), className)}
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
  const { unstyled: contextUnstyled, content } = useTabsContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <TabsPrimitive.Content
      className={applyUnstyled(isUnstyled, content(), className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { UnstyledProps } from "@mijn-ui/react-core"
import { createContext } from "@mijn-ui/react-utilities"
import { tabsStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                                 TabsContext                                */
/* -------------------------------------------------------------------------- */

type TabsContextType = UnstyledProps & { styles: ReturnType<typeof tabsStyles> }

const [TabsProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
  strict: true,
  errorMessage:
    "useTabsContext: `context` is undefined. Seems you forgot to wrap component within <Tabs />",
})

/* -------------------------------------------------------------------------- */
/*                                  TabsHook                                  */
/* -------------------------------------------------------------------------- */

const useTabsStyles = (unstyledOverride?: boolean) => {
  const context = useTabsContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                    Tabs                                    */
/* -------------------------------------------------------------------------- */

type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root> &
  UnstyledProps

const Tabs = ({ children, unstyled = false, ...props }: TabsProps) => {
  const styles = tabsStyles()

  return (
    <TabsProvider value={{ unstyled, styles }}>
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
  const { list } = useTabsStyles(unstyled)

  return <TabsPrimitive.List className={list({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 TabsTrigger                                */
/* -------------------------------------------------------------------------- */

type TabsTriggerProps = React.ComponentPropsWithRef<
  typeof TabsPrimitive.Trigger
> &
  UnstyledProps

const TabsTrigger = ({ className, unstyled, ...props }: TabsTriggerProps) => {
  const { trigger } = useTabsStyles(unstyled)

  return <TabsPrimitive.Trigger className={trigger({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 TabsContent                                */
/* -------------------------------------------------------------------------- */

type TabsContentProps = React.ComponentPropsWithRef<
  typeof TabsPrimitive.Content
> &
  UnstyledProps

const TabsContent = ({ className, unstyled, ...props }: TabsContentProps) => {
  const { content } = useTabsStyles(unstyled)

  return <TabsPrimitive.Content className={content({ className })} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

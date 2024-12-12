"use client"

import * as React from "react"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { scrollAreaStyles } from "@mijn-ui/react-theme"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"

/* -------------------------------------------------------------------------- */
/*                              ScrollAreaContext                             */
/* -------------------------------------------------------------------------- */

type ScrollAreaContextType = UnstyledProps & ReturnType<typeof scrollAreaStyles>

const {
  Provider: ScrollAreaProvider,
  useDynamicContext: useScrollAreaContext,
} = createDynamicContext<ScrollAreaContextType>()

/* -------------------------------------------------------------------------- */
/*                                 ScrollArea                                 */
/* -------------------------------------------------------------------------- */

type ScrollAreaProps = React.ComponentPropsWithRef<
  typeof ScrollAreaPrimitive.Root
> &
  UnstyledProps

const ScrollArea = ({
  unstyled,
  className,
  children,
  ...props
}: ScrollAreaProps) => {
  const styles = scrollAreaStyles()

  return (
    <ScrollAreaProvider value={{ unstyled, ...styles }}>
      <ScrollAreaPrimitive.Root
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          className={applyUnstyled(unstyled, styles.viewport())}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </ScrollAreaProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  ScrollBar                                 */
/* -------------------------------------------------------------------------- */

type ScrollBarProps = React.ComponentPropsWithRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> &
  UnstyledProps

const ScrollBar = ({
  unstyled,
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) => {
  const {
    unstyled: contextUnstyled,
    scrollbar,
    scrollThumb,
  } = useScrollAreaContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(scrollbar({ orientation }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={applyUnstyled(isUnstyled, scrollThumb())}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

"use client"

import * as React from "react"
import {
  createTVUnstyledSlots,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { scrollAreaStyles } from "@mijn-ui/react-theme"
import { createContext } from "@mijn-ui/react-utilities/context"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              ScrollAreaContext                             */
/* -------------------------------------------------------------------------- */

type ScrollAreaContextType = UnstyledProps & {
  styles: ReturnType<typeof scrollAreaStyles>
}

const [ScrollAreaProvider, useScrollAreaContext] =
  createContext<ScrollAreaContextType>({
    name: "ScrollAreaContext",
    strict: true,
    errorMessage:
      "useScrollAreaContext: `context` is undefined. Seems you forgot to wrap component within <ScrollArea />",
  })

/* -------------------------------------------------------------------------- */
/*                               ScrollAreaHook                               */
/* -------------------------------------------------------------------------- */

const useScrollAreaStyles = (unstyledOverride?: boolean) => {
  const context = useScrollAreaContext()
  return useTVUnstyled(context, unstyledOverride)
}

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
  const { base, viewport } = createTVUnstyledSlots(styles, unstyled)

  return (
    <ScrollAreaProvider value={{ unstyled, styles }}>
      <ScrollAreaPrimitive.Root className={base({ className })} {...props}>
        <ScrollAreaPrimitive.Viewport className={viewport()}>
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
  const { scrollbar, scrollThumb } = useScrollAreaStyles(unstyled)

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={scrollbar({ orientation, className })}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={scrollThumb()} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

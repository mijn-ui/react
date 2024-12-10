"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@mijn-ui/shared-icons"
import { AccordionVariantProps, accordionStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                              AccordionContext                              */
/* -------------------------------------------------------------------------- */

type AccordionContextType = UnstyledProps & ReturnType<typeof accordionStyles>

const { Provider: AccordionProvider, useDynamicContext: useAccordionContext } =
  createDynamicContext<AccordionContextType>()

/* -------------------------------------------------------------------------- */
/*                                  Accordion                                 */
/* -------------------------------------------------------------------------- */

export type AccordionProps = React.ComponentPropsWithRef<
  typeof RadixAccordion.Root
> &
  AccordionVariantProps &
  UnstyledProps

const Accordion = ({
  className,
  unstyled = false,
  variant,
  ...props
}: AccordionProps) => {
  const styles = accordionStyles({ variant })

  return (
    <AccordionProvider value={{ unstyled, ...styles }}>
      <RadixAccordion.Root
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      />
    </AccordionProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                AccordionItem                               */
/* -------------------------------------------------------------------------- */

export type AccordionItemProps = React.ComponentPropsWithRef<
  typeof RadixAccordion.Item
> &
  UnstyledProps

const AccordionItem = ({
  className,
  unstyled,
  ...props
}: AccordionItemProps) => {
  const { unstyled: contextUnstyled, item } = useAccordionContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Item
      className={applyUnstyled(isUnstyled, item(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                              AccordionTrigger                              */
/* -------------------------------------------------------------------------- */

export type AccordionTriggerProps = React.ComponentPropsWithRef<
  typeof RadixAccordion.Trigger
> &
  UnstyledProps & {
    icon?: React.ReactNode
  }

const AccordionTrigger = ({
  className,
  icon,
  unstyled,
  children,
  ...props
}: AccordionTriggerProps) => {
  const {
    unstyled: contextUnstyled,
    trigger,
    icon: iconStyles,
  } = useAccordionContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Header className={applyUnstyled(isUnstyled, "flex")}>
      <RadixAccordion.Trigger
        className={applyUnstyled(isUnstyled, trigger(), className)}
        {...props}
      >
        {children}

        {icon ? (
          icon
        ) : (
          <ChevronDownIcon
            className={applyUnstyled(isUnstyled, iconStyles())}
          />
        )}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
}

/* -------------------------------------------------------------------------- */
/*                            AccordionContentProps                           */
/* -------------------------------------------------------------------------- */

export type AccordionContentProps = React.ComponentPropsWithRef<
  typeof RadixAccordion.Content
> &
  UnstyledProps

const AccordionContent = ({
  className,
  unstyled,
  children,
  ...props
}: AccordionContentProps) => {
  const { unstyled: contextUnstyled, content } = useAccordionContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Content
      className={applyUnstyled(isUnstyled, content())}
      {...props}
    >
      <div className={applyUnstyled(isUnstyled, "pb-3 pt-0", className)}>
        {children}
      </div>
    </RadixAccordion.Content>
  )
}

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionStyles,
}

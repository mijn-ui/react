"use client"

import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { createContext } from "@mijn-ui/react-utilities/context"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@mijn-ui/shared-icons"
import { AccordionVariantProps, accordionStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              AccordionContext                              */
/* -------------------------------------------------------------------------- */

type AccordionContextType = UnstyledProps & {
  styles: ReturnType<typeof accordionStyles>
}

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContextType>({
    name: "AccordionContext",
    strict: true,
    errorMessage:
      "useAccordionContext: `context` is undefined. Ensure the component is wrapped within <Accordion />",
  })

/* -------------------------------------------------------------------------- */
/*                                AccordionHook                               */
/* -------------------------------------------------------------------------- */

const useAccordionStyles = (unstyledOverride?: boolean) => {
  const context = useAccordionContext()
  return useTVUnstyled(context, unstyledOverride)
}
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
    <AccordionProvider value={{ unstyled, styles }}>
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
  const { item } = useAccordionStyles(unstyled)

  return <RadixAccordion.Item className={item({ className })} {...props} />
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
    triggerWrapper,
    trigger,
    icon: iconStyles,
  } = useAccordionStyles(unstyled)

  return (
    <RadixAccordion.Header className={triggerWrapper()}>
      <RadixAccordion.Trigger className={trigger({ className })} {...props}>
        {children}
        {icon ? icon : <ChevronDownIcon className={iconStyles()} />}
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
  const { contentWrapper, content } = useAccordionStyles(unstyled)

  return (
    <RadixAccordion.Content className={contentWrapper()} {...props}>
      <div className={content({ className })}>{children}</div>
    </RadixAccordion.Content>
  )
}

/* -------------------------------------------------------------------------- */
/*                                Exports                                     */
/* -------------------------------------------------------------------------- */

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionStyles,
}

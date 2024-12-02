"use client"

import * as React from "react"
import { UnstyledProvider, useUnstyled } from "@mijn-ui/react-utilities/context"
import { VariantProps, cva } from "class-variance-authority"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { LuChevronDown } from "react-icons/lu"

const accordionStyles = cva("[&>div]:border-b-main-border [&>div]:border-b", {
  variants: {
    variant: {
      default: "",
      surface: "bg-surface rounded-xl px-4 pb-4 pt-2 shadow-sm",
      bordered: "border-main-border rounded-xl border px-4 pb-4 pt-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/* -------------------------------------------------------------------------- */
/*                                  Accordion                                 */
/* -------------------------------------------------------------------------- */

export type AccordionProps = React.ComponentPropsWithRef<
  typeof RadixAccordion.Root
> &
  VariantProps<typeof accordionStyles> &
  UnstyledProps

const Accordion = ({
  className,
  unstyled = false,
  variant,
  ...props
}: AccordionProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <RadixAccordion.Root
      className={applyUnstyled(
        unstyled,
        accordionStyles({ variant }),
        className,
      )}
      {...props}
    />
  </UnstyledProvider>
)

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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Item
      className={applyUnstyled(isUnstyled, "w-full", className)}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Header className={applyUnstyled(isUnstyled, "flex")}>
      <RadixAccordion.Trigger
        className={applyUnstyled(
          isUnstyled,
          "group flex w-full items-center justify-between py-3",
          className,
        )}
        {...props}
      >
        {children}

        {icon ? (
          icon
        ) : (
          <LuChevronDown
            className={applyUnstyled(
              isUnstyled,
              "h-4 w-4 shrink-0 text-muted-text duration-400 ease-in-out group-data-[state=open]:rotate-180",
            )}
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixAccordion.Content
      className={applyUnstyled(
        isUnstyled,
        "overflow-hidden text-sm transition-[height] data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open",
      )}
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

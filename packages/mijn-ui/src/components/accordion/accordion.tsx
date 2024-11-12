"use client"

import * as React from "react"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"
import * as RadixAccordion from "@radix-ui/react-accordion"
import { VariantProps, cva } from "class-variance-authority"
import { LuChevronDown } from "react-icons/lu"

const accordionStyles = cva("[&>div]:border-b [&>div]:border-b-main-border", {
  variants: {
    variant: {
      default: "",
      surface: "bg-surface px-4 pt-2 shadow-sm pb-4 rounded-xl",
      bordered: "border border-main-border rounded-xl px-4 pt-2 pb-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/* -------------------------------------------------------------------------- */
/*                                  Accordion                                 */
/* -------------------------------------------------------------------------- */

type AccordionProps = React.ComponentPropsWithRef<typeof RadixAccordion.Root> &
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

type AccordionItemProps = React.ComponentPropsWithRef<
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

type AccordionTriggerProps = React.ComponentPropsWithRef<
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
              "h-4 w-4 shrink-0 text-neutral-text duration-400 ease-in-out group-data-[state=open]:rotate-180",
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

type AccordionContentProps = React.ComponentPropsWithRef<
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
        "overflow-hidden text-sm transition-[height] data-[state=closed]:animate-accordion-collapse data-[state=open]:animate-accordion-expand",
      )}
      {...props}
    >
      <div className={applyUnstyled(isUnstyled, "pb-3 pt-0", className)}>
        {children}
      </div>
    </RadixAccordion.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

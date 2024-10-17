"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { cva, VariantProps } from "class-variance-authority";

import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider";
import { UnstyledProps } from "@/types";
import { applyUnstyled } from "@/utils";

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
});

/* -------------------------------------------------------------------------- */
/*                                  Accordion                                 */
/* -------------------------------------------------------------------------- */

export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Root
> &
  VariantProps<typeof accordionStyles> &
  UnstyledProps;

const Accordion = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  AccordionProps
>(({ className, unstyled = false, variant, ...props }, ref) => (
  <UnstyledProvider unstyled={unstyled}>
    <RadixAccordion.Root
      ref={ref}
      className={applyUnstyled(
        unstyled,
        accordionStyles({ variant }),
        className,
      )}
      {...props}
    />
  </UnstyledProvider>
));

Accordion.displayName = "Accordion";

/* -------------------------------------------------------------------------- */
/*                                AccordionItem                               */
/* -------------------------------------------------------------------------- */

export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Item
> &
  UnstyledProps;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(({ className, unstyled, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <RadixAccordion.Item
      ref={ref}
      className={applyUnstyled(isUnstyled, "w-full", className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

/* -------------------------------------------------------------------------- */
/*                              AccordionTrigger                              */
/* -------------------------------------------------------------------------- */

export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Trigger
> &
  UnstyledProps & {
    icon?: React.ReactNode;
  };

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ className, icon, unstyled, children, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <RadixAccordion.Header className={applyUnstyled(isUnstyled, "flex")}>
      <RadixAccordion.Trigger
        ref={ref}
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
  );
});

AccordionTrigger.displayName = RadixAccordion.Trigger.displayName;

/* -------------------------------------------------------------------------- */
/*                            AccordionContentProps                           */
/* -------------------------------------------------------------------------- */

export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Content
> &
  UnstyledProps;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>(({ className, unstyled, children, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <RadixAccordion.Content
      ref={ref}
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
  );
});

AccordionContent.displayName = RadixAccordion.Content.displayName;

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionStyles,
};

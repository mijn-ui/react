import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mijn-ui/react/components/accordion"

const UnstyledAccordion = () => {
  return (
    <Accordion
      className="rounded-2xl border border-orange-500 p-4 w-96"
      collapsible
      type="single"
      unstyled
    >
      <AccordionItem className="my-2" value="item-1">
        <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
          Is it accessible
        </AccordionTrigger>
        <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="my-2" value="item-2">
        <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
          Is it unstyled
        </AccordionTrigger>
        <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
          Yes, you can make the components unstyled by setting the{" "}
          <span className="font-semibold">unstyled</span> prop to{" "}
          <span className="font-semibold">true</span> on either a single
          component or a parent component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="my-2" value="item-3">
        <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default UnstyledAccordion

"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/react"

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="font-semibold text-fd-foreground underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
      <Accordion
        className="w-full max-w-80 font-serif"
        collapsible
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent className="font-sans">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

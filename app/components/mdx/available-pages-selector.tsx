"use client"

import React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/mijn-ui/components/select"

const PAGE_OPTIONS = {
  next: "/docs",
  tailwind: "/docs/tailwind",
}

const AvailablePagesSelector = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (value: string) => {
    router.push(value)
  }

  const defaultValue = pathname.startsWith("/docs/tailwind/")
    ? PAGE_OPTIONS.tailwind
    : PAGE_OPTIONS.next

  return (
    <Select onValueChange={handleChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-full h-8 text-xs">
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent className="preview bg-surface w-[var(--radix-popover-trigger-width)]">
        <SelectGroup>
          <SelectLabel className="text-xs">Available Pages</SelectLabel>
          <SelectItem className="text-xs" value={PAGE_OPTIONS.next}>
            Next.js
          </SelectItem>
          <SelectItem className="text-xs" value={PAGE_OPTIONS.tailwind}>
            Tailwind CSS
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default AvailablePagesSelector

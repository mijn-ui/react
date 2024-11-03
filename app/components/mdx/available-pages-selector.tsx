"use client"

import React, { useEffect, useState } from "react"
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
  const [selectedValue, setSelectedValue] = useState("")

  // Update selected value whenever the path changes
  useEffect(() => {
    setSelectedValue(
      pathname.startsWith("/docs/tailwind")
        ? PAGE_OPTIONS.tailwind
        : PAGE_OPTIONS.next,
    )
  }, [pathname])

  const handleChange = (value: string) => {
    setSelectedValue(value)
    router.push(value)
  }

  return (
    <Select onValueChange={handleChange} value={selectedValue}>
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

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

const AvailablePagesSelector = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (value: string) => {
    router.push(value)
  }

  const defaultValue = pathname === "/docs" ? "/docs" : "/docs/tailwind"

  return (
    <Select onValueChange={handleChange} defaultValue={defaultValue}>
      <SelectTrigger className="bg-surface backdrop-blur-md w-full">
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent className="preview bg-surface backdrop-blur-md">
        <SelectGroup>
          <SelectLabel>Available Pages</SelectLabel>
          <SelectItem value="/docs">Next.js</SelectItem>
          <SelectItem value="/docs/tailwind">Tailwind CSS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default AvailablePagesSelector

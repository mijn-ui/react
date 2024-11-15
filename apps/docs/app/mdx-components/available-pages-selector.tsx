"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@mijn-ui/react/components/select";

const PAGE_OPTIONS = {
  next: "/docs",
  tailwind: "/docs/tailwind",
};

const AvailablePagesSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedValue, setSelectedValue] = useState("");

  // Update selected value whenever the path changes
  useEffect(() => {
    setSelectedValue(pathname.startsWith("/docs/tailwind") ? PAGE_OPTIONS.tailwind : PAGE_OPTIONS.next);
  }, [pathname]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    router.push(value);
  };

  return (
    <Select onValueChange={handleChange} value={selectedValue}>
      <SelectTrigger
        unstyled
        className="w-full bg-transparent flex items-center justify-between px-3 py-2 border-b text-sm"
      >
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent className="bg-surface w-[var(--radix-popover-trigger-width)]">
        <SelectGroup>
          <SelectLabel className="text-sm">Available Pages</SelectLabel>
          <SelectItem className="text-xs" value={PAGE_OPTIONS.next}>
            Next.js
          </SelectItem>
          <SelectItem className="text-xs" value={PAGE_OPTIONS.tailwind}>
            Tailwind CSS
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AvailablePagesSelector;

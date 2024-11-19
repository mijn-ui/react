"use client"

import { useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteTrigger,
} from "@mijn-ui/react/components/autocomplete"
import { Input } from "@mijn-ui/react/components/input"
import { LuSearch } from "react-icons/lu"

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
]

const AutocompleteExample = () => {
  const [value, setValue] = useState("SvelteKit")

  return (
    <Autocomplete value={value} onValueChange={setValue}>
      <AutocompleteTrigger asChild>
        <Input
          className="bg-surface"
          placeholder={"Search for a framework"}
          startIcon={<LuSearch />}
        />
      </AutocompleteTrigger>
      <AutocompleteContent
        className=""
        emptyMessage="No Frameworks Found"
        loading={false}
      >
        {FRAMEWORKS.map((framework) => (
          <AutocompleteItem key={framework} value={framework}>
            {framework}
          </AutocompleteItem>
        ))}
      </AutocompleteContent>
    </Autocomplete>
  )
}

export default AutocompleteExample

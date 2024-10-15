import { useState } from "react"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/MultiSelect/MultiSelect"
import { ScrollArea } from "@/components/ScrollArea"
import { LuChevronsUpDown } from "react-icons/lu"

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
  "Nest.js",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Backbone.js",
  "Meteor.js",
  "Django",
  "Flask",
  "Laravel",
  "Spring Boot",
  "Ruby on Rails",
  "Phoenix",
  "Gatsby.js",
  "Strapi",
  "Fastify",
  "Hapi.js",
  "AdonisJS",
]

const MultiSelectorWithScrollArea = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <MultiSelector
      values={value}
      onValuesChange={setValue}
      loop
      className="max-w-xs"
    >
      <MultiSelectorTrigger>
        <div className="flex w-80 items-center">
          <MultiSelectorInput
            placeholder="Select your framework"
            className="w-full"
          />
          <LuChevronsUpDown className="mr-2 size-4" />
        </div>
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <ScrollArea
          className="flex flex-col overflow-y-auto"
          style={{
            minHeight: "10rem",
            height:
              "calc(var(--radix-popover-content-available-height) - 2rem)",
            maxHeight: "20rem",
          }}
        >
          <MultiSelectorList>
            {FRAMEWORKS.map((framework) => (
              <MultiSelectorItem key={framework} value={framework}>
                {framework}
              </MultiSelectorItem>
            ))}
          </MultiSelectorList>
        </ScrollArea>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export { MultiSelectorWithScrollArea }

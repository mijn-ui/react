import { useState } from "react"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/MultiSelect/MultiSelect"
import { LuChevronsUpDown } from "react-icons/lu"

const MultiSelectorWithIcon = () => {
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
        <MultiSelectorList>
          <MultiSelectorItem value={"Next.js"}>Next.js</MultiSelectorItem>
          <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
          <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
          <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
          <MultiSelectorItem value={"Express.js"}>Express.js</MultiSelectorItem>
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export { MultiSelectorWithIcon }

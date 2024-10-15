import { useState } from "react"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/MultiSelect/MultiSelect"

const MultiSelectorExample = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <MultiSelector
      values={value}
      onValuesChange={setValue}
      loop
      className="max-w-xs"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput
          placeholder="Select your framework"
          className="w-80"
        />
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

export { MultiSelectorExample }

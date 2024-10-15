import { MultiSelectorExample } from "@/components/MultiSelect/Examples/MultiSelectorExample"
import { MultiSelectorWithIcon } from "@/components/MultiSelect/Examples/MultiSelectorExample2"
import MultiSelectorWithIconSourceCode from "@/components/MultiSelect/Examples/MultiSelectorExample2.tsx?raw"
import { MultiSelectorWithScrollArea } from "@/components/MultiSelect/Examples/MultiSelectorExample3"
import { MultiSelectorWithDialog } from "@/components/MultiSelect/Examples/MultiSelectorExample4"
import MultiSelectExampleSourceCode from "@/components/MultiSelect/Examples/MultiSelectorExample.tsx?raw"
import { MultiSelector } from "@/components/MultiSelect/MultiSelect"
import MultiSelectorSourceCode from "@/components/MultiSelect/MultiSelect.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"

/**
 * A multiselect component is adapted from [Shadcn Extension](https://shadcn-extension.vercel.app/docs/multi-select).
 *
 * [Documentation](https://shadcn-extension.vercel.app/docs/multi-select) <br />
 * [Api Reference](https://shadcn-extension.vercel.app/docs/multi-select)
 */

const meta: Meta<typeof MultiSelector> = {
  title: "Components/MultiSelector",
  component: MultiSelector,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => {
    return <MultiSelectorExample />
  },
  parameters: {
    docs: {
      source: {
        code: MultiSelectorSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => {
    return <MultiSelectorExample />
  },
  parameters: {
    docs: {
      source: {
        code: MultiSelectExampleSourceCode,
      },
    },
  },
}

export const With_Icon: Story = {
  render: () => {
    return <MultiSelectorWithIcon />
  },
  parameters: {
    docs: {
      source: {
        code: MultiSelectorWithIconSourceCode,
      },
    },
  },
}

export const With_ScrollArea: Story = {
  render: () => {
    return <MultiSelectorWithScrollArea />
  },
  parameters: {
    docs: {
      source: {
        code: MultiSelectorWithIconSourceCode,
      },
    },
  },
}

export const With_Dialog: Story = {
  render: () => {
    return <MultiSelectorWithDialog />
  },
  parameters: {
    docs: {
      source: {
        code: MultiSelectorWithIconSourceCode,
      },
    },
  },
}

import CollapsibleSourceCode from "@/components/Collapsible/Collapsible.tsx?raw"
import { CollapsibleExample } from "@/components/Collapsible/Example/CollapsibleExample"
import CollapsibleExampleSourceCode from "@/components/Collapsible/Example/CollapsibleExample.tsx?raw"
import { Collapsible } from "@radix-ui/react-collapsible"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => <CollapsibleExample />,
  parameters: {
    docs: {
      source: {
        code: CollapsibleSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => <CollapsibleExample />,
  parameters: {
    docs: {
      source: {
        code: CollapsibleExampleSourceCode,
      },
    },
  },
}

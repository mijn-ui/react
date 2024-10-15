import { SelectDemo } from "@/components/Select/Examples/SelectExample"
import { Select } from "@/components/Select/Select"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => {
    return <SelectDemo />
  },
}

export const Example_Usage: Story = {
  render: () => {
    return <SelectDemo />
  },
}

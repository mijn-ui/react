import { Command } from "@/components/Command/Command"
import CommandSourceCode from "@/components/Command/Command.tsx?raw"
import { CommandExample } from "@/components/Command/Examples/CommandExample"
import { CommandDialogExample } from "@/components/Command/Examples/CommandExample2"
import CommandDialogExampleSourceCode from "@/components/Command/Examples/CommandExample2.tsx?raw"
import CommandExampleSourceCode from "@/components/Command/Examples/CommandExample.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => {
    return <CommandExample />
  },
  parameters: {
    docs: {
      source: {
        code: CommandSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => {
    return <CommandExample />
  },
  parameters: {
    docs: {
      source: {
        code: CommandExampleSourceCode,
      },
    },
  },
}

export const Dialog: Story = {
  render: () => {
    return <CommandDialogExample />
  },
  parameters: {
    docs: {
      source: {
        code: CommandDialogExampleSourceCode,
      },
    },
  },
}

import { Dialog } from "@/components/Dialog"
import DialogSourceCode from "@/components/Dialog/Dialog.tsx?raw"
import DialogExample from "@/components/Dialog/Examples/DialogExample"
import DialogExampleSourceCode from "@/components/Dialog/Examples/DialogExample.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  args: {
    unstyled: false,
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: (args) => {
    return <DialogExample unstyled={args.unstyled} />
  },
  parameters: {
    docs: {
      source: {
        code: DialogSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => <DialogExample />,
  parameters: {
    docs: {
      source: {
        code: DialogExampleSourceCode,
      },
    },
  },
}

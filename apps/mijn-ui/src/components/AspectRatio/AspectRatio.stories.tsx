import { AspectRatio } from "@/components/AspectRatio/AspectRatio"
import AspectRatioSourceCode from "@/components/AspectRatio/AspectRatio.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => {
    return (
      <div className="w-96">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://placehold.co/600x400"
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: AspectRatioSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => {
    return (
      <div className="w-96">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://placehold.co/600x400"
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    )
  },
}

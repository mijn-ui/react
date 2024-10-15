import { Calendar } from "@/components/Calendar"
import CalendarSourceCode from "@/components/Calendar/Calendar.tsx?raw"
import { CalendarExample } from "@/components/Calendar/Examples/CalendarExamples"
import CalendarExampleSourceCode from "@/components/Calendar/Examples/CalendarExamples.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: () => <CalendarExample />,
  parameters: {
    docs: {
      source: {
        code: CalendarSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => <CalendarExample />,
  parameters: {
    docs: {
      source: {
        code: CalendarExampleSourceCode,
      },
    },
  },
}

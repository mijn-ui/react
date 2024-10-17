import type { Meta, StoryObj } from "@storybook/react";

import { PopoverExample } from "@/components/Popover/Examples/PopoverExample";
import PopoverExampleSourceCode from "@/components/Popover/Examples/PopoverExample.tsx?raw";
import { Popover } from "@/components/Popover/Popover";
import PopoverSourceCode from "@/components/Popover/Popover.tsx?raw";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    unstyled: false,
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[530px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <PopoverExample unstyled={args.unstyled} />,
  parameters: {
    docs: {
      source: {
        code: PopoverSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => <PopoverExample unstyled={args.unstyled} />,
  parameters: {
    docs: {
      source: {
        code: PopoverExampleSourceCode,
      },
    },
  },
};

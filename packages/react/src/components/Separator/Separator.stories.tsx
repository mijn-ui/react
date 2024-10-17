import { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/components/Separator";
import { SeparatorExample } from "@/components/Separator/Examples/SeparatorExamples";
import SeparatorExampleSourceCode from "@/components/Separator/Examples/SeparatorExamples.tsx?raw";
import SeparatorSourceCode from "@/components/Separator/Separator.tsx?raw";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: () => {
    return <SeparatorExample />;
  },
  parameters: {
    docs: {
      source: {
        code: SeparatorSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => {
    return <SeparatorExample />;
  },
  parameters: {
    docs: {
      source: {
        code: SeparatorExampleSourceCode,
      },
    },
  },
};

import { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@/components/ScrollArea";
import { ScrollAreaExample } from "@/components/ScrollArea/Examples/ScrollAreaExample";
import ScrollAreaExampleSourceCode from "@/components/ScrollArea/Examples/ScrollAreaExample.tsx?raw";
import ScrollAreaSourceCode from "@/components/ScrollArea/ScrollArea.tsx?raw";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: () => {
    return <ScrollAreaExample />;
  },
  parameters: {
    docs: {
      source: {
        code: ScrollAreaSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => {
    return <ScrollAreaExample />;
  },
  parameters: {
    docs: {
      source: {
        code: ScrollAreaExampleSourceCode,
      },
    },
  },
};

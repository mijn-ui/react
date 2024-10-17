import { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/Badge/Badge";
import BadgeSourceCode from "@/components/Badge/Badge.tsx?raw";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Badge",
    variant: "primary",
    radius: "full",
    unstyled: false,
  },
  argTypes: {
    variant: {
      type: "string",
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "danger",
        "ghost",
        "surface",
      ],
    },
    radius: {
      type: "string",
      control: "select",
      options: ["full", "lg", "md", "sm"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  parameters: {
    docs: {
      source: {
        code: BadgeSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => <Badge {...args} />,
};

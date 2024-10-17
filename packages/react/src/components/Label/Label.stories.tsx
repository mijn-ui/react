import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import LableSourceCode from "@/components/Label/Label.tsx?raw";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const id = React.useId();

    return (
      <div className="flex items-center space-x-2">
        <Checkbox id={id} />
        <Label htmlFor={id} {...args}>
          Accept terms and conditions
        </Label>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: LableSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label {...args} htmlFor="terms1">
          Accept terms and conditions
        </Label>
      </div>
    );
  },
};

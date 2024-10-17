import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/Checkbox/Checkbox";
import CheckboxSourceCode from "@/components/Checkbox/Checkbox.tsx?raw";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    defaultChecked: false,
    unstyled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "danger", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" {...args} />
        <label
          htmlFor="terms1"
          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: CheckboxSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" {...args} />
        <label
          htmlFor="terms2"
          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    );
  },
};

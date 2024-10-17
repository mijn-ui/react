import { LuPlus } from "react-icons/lu";
import { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/Input";
import InputSourceCode from "@/components/Input/Input.tsx?raw";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    startIcon: undefined,
    endIcon: undefined,
    label: "",
    placeholder: "Username...",
    unstyled: false,
    className: "w-80",
    classNames: {
      input: "",
      label: "",
      startIcon: "",
      endIcon: "",
    },
  },
  argTypes: {
    startIcon: {
      control: "select",
      options: [LuPlus, undefined],
    },
    endIcon: {
      control: "select",
      options: [LuPlus, undefined],
    },
    className: {
      description: "The className for the parent component",
      type: "string",
    },
    classNames: {
      description: `The classNames for the child components`,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: (args) => {
    return <Input placeholder="Username..." {...args} />;
  },
  parameters: {
    docs: {
      source: {
        code: InputSourceCode,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const Example_Usage: Story = {
  render: (args) => {
    return <Input {...args} placeholder="Username..." className="w-80" />;
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const Wit_Icon: Story = {
  // Disabling ESLint for the unused `_` argument here.
  // This is due to a Storybook behavior: when no args are passed to the `render` function,
  // Storybook's source code display does not render the component correctly.
  // The `_` argument is intentionally included to work around this issue, even though it's not used in the render function.
  // To see the issue, try removing the `_` argument, and notice how the source code output behaves incorrectly.

  /* eslint-disable-next-line */
  render: (_) => {
    return (
      <>
        <Input placeholder="Username..." className="w-80" startIcon={LuPlus} />
        <Input placeholder="Username..." className="w-80" endIcon={LuPlus} />
        <Input
          placeholder="Username..."
          className="w-80"
          startIcon={LuPlus}
          endIcon={LuPlus}
        />
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center gap-2">
        <Story />
      </div>
    ),
  ],
};

export const With_Floating_Label: Story = {
  render: (args) => {
    return <Input {...args} placeholder="" label="Username" className="w-80" />;
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const Icon_With_Floating_Label: Story = {
  /* eslint-disable-next-line */
  render: (_) => {
    return (
      <>
        <Input className="w-80" startIcon={LuPlus} label="Username" />
        <Input className="w-80" endIcon={LuPlus} label="Username" />
        <Input
          className="w-80"
          startIcon={LuPlus}
          endIcon={LuPlus}
          label="Username"
        />
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center gap-2">
        <Story />
      </div>
    ),
  ],
};

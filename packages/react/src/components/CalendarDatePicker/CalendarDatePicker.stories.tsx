import { Meta, StoryObj } from "@storybook/react";

import { CalendarDatePicker } from "@/components/CalendarDatePicker/CalendarDatePicker";
import CalendarDatePickerSourceCode from "@/components/CalendarDatePicker/CalendarDatePicker.tsx?raw";

import CalendarDatePickerExample from "./Examples/CalendarDatePickerExample";
import CalendarDatePickerExampleSourceCode from "./Examples/CalendarDatePickerExample.tsx?raw";

/**

* This component is an adaptation of the original [shadcn-calendar-component by Sersavan](https://github.com/sersavan/shadcn-calendar-component), with key modifications for customization and integration into this project.

* **Acknowledgments:**  
* Full credit for the original implementation goes to [sersavan](https://github.com/sersavan), whose work served as the foundation for this component.  
You can find the original codebase [here](https://github.com/sersavan/shadcn-calendar-component).

 */

const meta: Meta<typeof CalendarDatePicker> = {
  title: "Components/CalendarDatePicker",
  component: CalendarDatePicker,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: () => {
    return <CalendarDatePickerExample />;
  },
  parameters: {
    docs: {
      source: {
        code: CalendarDatePickerSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => {
    return <CalendarDatePickerExample />;
  },
  parameters: {
    docs: {
      source: {
        code: CalendarDatePickerExampleSourceCode,
      },
    },
  },
};

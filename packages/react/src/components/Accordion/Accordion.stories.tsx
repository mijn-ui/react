import { StoryObj } from "@storybook/react";

import CustomIcon from "./Examples/CustomIcon";
import CustomIconSourceCode from "./Examples/CustomIcon.tsx?raw";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import AccordionSourceCode from "./Accordion.tsx?raw";

/**
 * There are two types of accordions: `single` and `multiple`.
 *
 * - `single`: Only one accordion item can be expanded at a time. When a new item is expanded, the previously expanded item will be collapsed.
 * - `multiple`: Multiple accordion items can be expanded simultaneously.
 *
 * <a href="https://www.radix-ui.com/primitives/docs/components/accordion#api-reference" rel="noopener noreferrer"><u>Api Reference</u></a>
 * <br>
 * <a href="https://www.radix-ui.com/primitives/docs/components/accordion" rel="noopener noreferrer"><u>Documentation</u></a>
 */

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    type: "single",
    collapsible: true,
    unstyled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      source: {
        code: AccordionSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Custom_Icon: Story = {
  render: () => <CustomIcon />,
  parameters: {
    docs: {
      source: {
        code: CustomIconSourceCode,
      },
    },
  },
};

/**
 * Available variants:
 * **default** | **surface** | **bordered**
 */
export const Variants: Story = {
  render: (args) => {
    return (
      <>
        <Accordion className="w-full max-w-96" {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled</AccordionTrigger>
            <AccordionContent>
              Yes, you can make the components unstyled by setting the{" "}
              <span className="font-semibold">unstyled</span> prop to{" "}
              <span className="font-semibold">true</span> on either a single
              component or a parent component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full max-w-96" variant={"surface"} {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled</AccordionTrigger>
            <AccordionContent>
              Yes, you can make the components unstyled by setting the{" "}
              <span className="font-semibold">unstyled</span> prop to{" "}
              <span className="font-semibold">true</span> on either a single
              component or a parent component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full max-w-96" variant={"bordered"} {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled</AccordionTrigger>
            <AccordionContent>
              Yes, you can make the components unstyled by setting the{" "}
              <span className="font-semibold">unstyled</span> prop to{" "}
              <span className="font-semibold">true</span> on either a single
              component or a parent component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  },

  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-5 overflow-y-auto py-10">
        <Story />
      </div>
    ),
  ],
};

export const SingleExpand: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-96" {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled</AccordionTrigger>
          <AccordionContent>
            Yes, you can make the components unstyled by setting the{" "}
            <span className="font-semibold">unstyled</span> prop to{" "}
            <span className="font-semibold">true</span> on either a single
            component or a parent component.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const MultipleExpand: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => {
    return (
      <Accordion className="w-full max-w-96" {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled</AccordionTrigger>
          <AccordionContent>
            Yes, you can make the components unstyled by setting the{" "}
            <span className="font-semibold">unstyled</span> prop to{" "}
            <span className="font-semibold">true</span> on either a single
            component or a parent component.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

/**
 * You can remove the default styles by setting the `unstyled` prop to `true`.
 */

export const Unstyled: Story = {
  render: (args) => {
    return (
      <Accordion
        {...args}
        className="rounded-2xl border border-orange-500 p-4"
        unstyled
      >
        <AccordionItem className="my-2" value="item-1">
          <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
            Is it accessible
          </AccordionTrigger>
          <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="my-2" value="item-2">
          <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
            Is it unstyled
          </AccordionTrigger>
          <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
            Yes, you can make the components unstyled by setting the{" "}
            <span className="font-semibold">unstyled</span> prop to{" "}
            <span className="font-semibold">true</span> on either a single
            component or a parent component.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="my-2" value="item-3">
          <AccordionTrigger className="flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

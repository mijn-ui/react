import type { Meta, StoryObj } from "@storybook/react";
import "../global.css";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@acme/ui/components/accordion";
import { Button } from "@acme/ui/components/button";
import { Calendar } from "@acme/ui/components/calendar";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <>
      <Calendar selected={new Date()} className="w-fit" />
      <Accordion variant="surface" className="w-full max-w-80" collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
  },
};

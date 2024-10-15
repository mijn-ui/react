import React from "react"
import { Button } from "./"
import ButtonSourceCode from "./Button.tsx?raw"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Button",
    disabled: false,
    loading: false,
    variant: "primary",
    size: "md",
    radius: "md",
    unstyled: false,
  },
  argTypes: {
    variant: {
      type: "string",
      control: "select",
      options: ["primary", "secondary", "outline", "danger", "ghost"],
    },
    size: {
      type: "string",
      control: "select",
      options: ["lg", "md", "sm"],
    },
    radius: {
      type: "string",
      control: "select",
      options: ["full", "lg", "md", "sm"],
    },
    ref: { table: { disable: true } },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: ButtonSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {}

export const Variants: Story = {
  render: (args) => (
    <React.Fragment>
      <Button variant={"primary"}>{args.children}</Button>
      <Button variant={"secondary"}>{args.children}</Button>
      <Button variant={"outline"}>{args.children}</Button>
      <Button variant={"danger"}>{args.children}</Button>
      <Button variant={"ghost"}>{args.children}</Button>
      <Button variant={"surface"}>{args.children}</Button>
    </React.Fragment>
  ),

  decorators: [
    (Story) => (
      <div className="space-x-2">
        <Story />
      </div>
    ),
  ],
}

export const Sizes: Story = {
  render: (args) => (
    <React.Fragment>
      <Button size={"sm"}>{args.children}</Button>
      <Button size={"md"}>{args.children}</Button>
      <Button size={"lg"}>{args.children}</Button>
    </React.Fragment>
  ),

  decorators: [
    (Story) => (
      <div className="space-x-2">
        <Story />
      </div>
    ),
  ],
}

export const Radius: Story = {
  render: (args) => (
    <React.Fragment>
      <Button radius={"full"}>{args.children}</Button>
      <Button radius={"lg"}>{args.children}</Button>
      <Button radius={"md"}>{args.children}</Button>
      <Button radius={"sm"}>{args.children}</Button>
    </React.Fragment>
  ),

  decorators: [
    (Story) => (
      <div className="space-x-2">
        <Story />
      </div>
    ),
  ],
}

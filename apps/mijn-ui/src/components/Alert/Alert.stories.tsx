import React from "react"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./Alert"
import AlertSourceCode from "./Alert.tsx?raw"
import { Meta, StoryObj } from "@storybook/react"
import { IoRocketOutline } from "react-icons/io5"
import { LuCheckCircle, LuFileWarning } from "react-icons/lu"
import { MdErrorOutline } from "react-icons/md"

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    className: "w-full max-w-lg",
    title: "New Feature Added",
    description: "A new feature has been added to the project.",
    icon: <IoRocketOutline />,
    status: "neutral",
    variant: "outline",
    unstyled: false,
  },
  argTypes: {
    status: {
      control: "select",
      options: ["neutral", "success", "info", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["default", "filled", "outline"],
    },

    icon: {
      control: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert
      className={args.className}
      status={args.status}
      variant={args.variant}
      unstyled={args.unstyled}
    >
      <AlertIcon>
        <IoRocketOutline />
      </AlertIcon>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      source: {
        code: AlertSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: (args) => (
    <Alert
      className={args.className}
      status={args.status}
      variant={args.variant}
    >
      <AlertIcon>
        <IoRocketOutline />
      </AlertIcon>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>
  ),
}

export const Status: Story = {
  render: (args) => {
    return (
      <>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={args.STATUSES[0]}
          variant={"outline"}
        >
          <AlertIcon>
            <LuCheckCircle />
          </AlertIcon>
          <AlertTitle>Deployment Successful</AlertTitle>
          <AlertDescription>
            Your application has been successfully deployed.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Default/Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={args.STATUSES[1]}
          variant={"outline"}
        >
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle>New Feature Added</AlertTitle>
          <AlertDescription>
            A new feature has been added to the project.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={args.STATUSES[2]}
          variant={"outline"}
        >
          <AlertIcon>
            <LuFileWarning />
          </AlertIcon>
          <AlertTitle>High Memory Usage</AlertTitle>
          <AlertDescription>
            The application is using a high amount of memory.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={args.STATUSES[3]}
          variant={"outline"}
        >
          <AlertIcon>
            <MdErrorOutline />
          </AlertIcon>
          <AlertTitle>Build Failed</AlertTitle>
          <AlertDescription>
            The latest build has failed. Please check the logs for details.
          </AlertDescription>
        </Alert>
      </>
    )
  },
  args: {
    STATUSES: ["success", "info", "warning", "danger"],
  },
  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-3 py-10">
        <Story />
      </div>
    ),
  ],
}

/**
 * There are two variants available for the Alert component:
 * 1. <code><strong>filled</strong></code>
 * 2. <code><strong>outline</strong></code>
 */
export const Variants: Story = {
  render: (args) => {
    return (
      <>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={"success"}
          variant={args.variant}
        >
          <AlertIcon>
            <LuCheckCircle />
          </AlertIcon>
          <AlertTitle>Deployment Successful</AlertTitle>
          <AlertDescription>
            Your application has been successfully deployed.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Default/Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={"info"}
          variant={args.variant}
        >
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle>New Feature Added</AlertTitle>
          <AlertDescription>
            A new feature has been added to the project.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={"warning"}
          variant={args.variant}
        >
          <AlertIcon>
            <LuFileWarning />
          </AlertIcon>
          <AlertTitle>High Memory Usage</AlertTitle>
          <AlertDescription>
            The application is using a high amount of memory.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status={"danger"}
          variant={args.variant}
        >
          <AlertIcon>
            <MdErrorOutline />
          </AlertIcon>
          <AlertTitle>Build Failed</AlertTitle>
          <AlertDescription>
            The latest build has failed. Please check the logs for details.
          </AlertDescription>
        </Alert>
      </>
    )
  },
  args: {
    variant: "filled",
  },
  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-3 py-10">
        <Story />
      </div>
    ),
  ],
}

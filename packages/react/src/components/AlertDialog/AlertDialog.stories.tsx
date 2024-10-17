import { Meta, StoryObj } from "@storybook/react";

import AlertDialogExample from "./Examples/AlertDialogExample";
import AlertDialogExampleSource from "./Examples/AlertDialogExample.tsx?raw";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";
import AlertDialogSourceCode from "./AlertDialog.tsx?raw";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    unstyled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog unstyled={args.unstyled}>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Account Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Deleting your account is irreversible. All your account information,
            including data and settings, will be permanently erased. Are you
            absolutely sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      source: {
        code: AlertDialogSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => <AlertDialogExample />,
  parameters: {
    docs: {
      source: {
        code: AlertDialogExampleSource,
      },
    },
  },
};

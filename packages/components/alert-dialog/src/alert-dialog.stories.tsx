import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
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
} from "./alert-dialog"

const meta = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  args: {
    unstyled: false,
  },
}

export default meta

const AlertDialogTemplate = (args: AlertDialogProps) => {
  return (
    <AlertDialog {...args}>
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
  )
}

export const Default = {
  render: AlertDialogTemplate,
}

import { Button } from "@mijn-ui/react-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react-card"
import { FaBoxArchive } from "react-icons/fa6"

const ScreenState01 = () => {
  return (
    <Card className="flex w-full max-w-screen-sm flex-col items-center justify-center space-y-3 rounded-2xl bg-surface p-6 text-center sm:space-y-6">
      <CardHeader className="p-0">
        <FaBoxArchive className="size-10 text-main-text sm:size-12" />
      </CardHeader>
      <CardContent unstyled className="space-y-1">
        <CardTitle
          unstyled
          className="text-lg font-medium text-main-text sm:text-xl"
        >
          No files found
        </CardTitle>
        <CardDescription>
          Your search “design system” did not match any projects. Please try
          again.
        </CardDescription>
      </CardContent>

      <CardFooter className="gap-3">
        <Button className="h-9 sm:h-10" color="muted" variant={"outline"}>
          Cancel
        </Button>
        <Button className="h-9 sm:h-10">Create New File</Button>
      </CardFooter>
    </Card>
  )
}

export default ScreenState01

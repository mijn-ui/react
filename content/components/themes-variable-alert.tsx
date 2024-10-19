import React from "react"
import Link from "next/link"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/mijn-ui/ui/alert"
import { LuAlertCircle } from "react-icons/lu"

const ThemesVariableAlert = () => {
  return (
    <Alert
      className="w-full backdrop-blur-md not-prose"
      variant="default"
      status="info"
    >
      <AlertIcon>
        <LuAlertCircle />
      </AlertIcon>
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        When using CSS variables, they must be defined without a color space
        function. For more details, refer to the{" "}
        <Link
          className="underline decoration-primary text-foreground hover:text-accent-foreground/80 transition-colors"
          href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
        >
          Tailwind CSS documentation.
        </Link>
      </AlertDescription>
    </Alert>
  )
}

export default ThemesVariableAlert

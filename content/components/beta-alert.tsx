import React from "react"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/mijn-ui/ui/alert"
import { LuAlertCircle } from "react-icons/lu"

const BetaAlert = () => {
  return (
    <Alert
      className="w-full backdrop-blur-md not-prose"
      variant="default"
      status="warning"
    >
      <AlertIcon>
        <LuAlertCircle />
      </AlertIcon>
      <AlertTitle>V0.0.1 Beta</AlertTitle>
      <AlertDescription>
        At this time, npm packages are not available. We are currently offering
        code snippets for manual integration.
      </AlertDescription>
    </Alert>
  )
}

export default BetaAlert

import React from "react"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/mijn-ui/ui/alert"
import { IoRocketOutline } from "react-icons/io5"
import { LuCheckCircle, LuFileWarning } from "react-icons/lu"
import { MdErrorOutline } from "react-icons/md"

const AlertStatus = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* --------------------------------- Success -------------------------------- */}
      <Alert className="w-full max-w-lg" status="success">
        <AlertIcon>
          <LuCheckCircle />
        </AlertIcon>
        <AlertTitle>Deployment Successful</AlertTitle>
        <AlertDescription>
          Your application has been successfully deployed.
        </AlertDescription>
      </Alert>

      {/* --------------------------------- Info -------------------------------- */}
      <Alert className="w-full max-w-lg" status="info">
        <AlertIcon>
          <IoRocketOutline />
        </AlertIcon>
        <AlertTitle>New Feature Added</AlertTitle>
        <AlertDescription>
          A new feature has been added to the project.
        </AlertDescription>
      </Alert>

      {/* --------------------------------- Warning -------------------------------- */}
      <Alert className="w-full max-w-lg" status="warning">
        <AlertIcon>
          <LuFileWarning />
        </AlertIcon>
        <AlertTitle>High Memory Usage</AlertTitle>
        <AlertDescription>
          The application is using a high amount of memory.
        </AlertDescription>
      </Alert>

      {/* --------------------------------- Danger -------------------------------- */}
      <Alert className="w-full max-w-lg" status="danger">
        <AlertIcon>
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Build Failed</AlertTitle>
        <AlertDescription>
          The latest build has failed. Please check the logs for details.
        </AlertDescription>
      </Alert>

      {/* ----------------------------- Neutral/Default ---------------------------- */}
      <Alert className="w-full max-w-lg" status="default">
        <AlertIcon>
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>New Feature Added</AlertTitle>
        <AlertDescription>
          A new feature has been added to the project.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default AlertStatus

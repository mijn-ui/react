import React from "react"
import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as MijnUIAlert,
  alertStyles,
} from "@mijn-ui/components/alert"
import { cn } from "@mijn-ui/utils"
import { VariantProps } from "class-variance-authority"
import { LuAlertCircle, LuBug } from "react-icons/lu"

type AlertProps = {
  title: string
  description: string
  status?: VariantProps<typeof alertStyles>["status"]
  className?: string
}

const Alert = ({
  title,
  description,
  status = "info",
  className,
}: AlertProps) => {
  const Icon = status === "danger" ? LuBug : LuAlertCircle

  return (
    <MijnUIAlert
      className={cn("not-prose preview w-full backdrop-blur-md", className)}
      variant="default"
      status={status}
    >
      <AlertIcon>
        <Icon />
      </AlertIcon>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </MijnUIAlert>
  )
}

export default Alert

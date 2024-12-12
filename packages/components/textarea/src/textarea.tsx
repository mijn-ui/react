import * as React from "react"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { textareaStyles } from "@mijn-ui/react-theme"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  UnstyledProps

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ unstyled, className, ...props }, ref) => {
    return (
      <textarea
        className={applyUnstyled(unstyled, textareaStyles(), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }

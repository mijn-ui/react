import * as React from "react"
import { cn } from "../"
import { ArgTypes, Source, Story } from "@storybook/blocks"

type CodeViewerProps = {
  sourceCode: string
  storyElement: any
  dark?: boolean
  className?: string
}

export const CodeViewer = ({
  sourceCode,
  storyElement,
  dark = false,
  className,
}: CodeViewerProps) => {
  const [isCodeVisible, setIsCodeVisible] = React.useState(false)

  return (
    <div>
      <div className="relative rounded-md border border-main-border bg-main">
        <div className={cn("mb-2 px-2 py-5 sm:p-5", className)}>
          <Story of={storyElement} />
        </div>
        <div className="flex w-full items-center justify-end">
          <button
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="rounded-default border border-main-border px-2 py-1 text-xs font-semibold hover:bg-main-text hover:text-main"
          >
            {isCodeVisible ? "Hide Code" : "Show Code"}
          </button>
        </div>
      </div>

      {isCodeVisible && (
        <div className="mt-4">
          <Source dark={dark} code={sourceCode} language="tsx" />
        </div>
      )}

      <ArgTypes of={storyElement} />
    </div>
  )
}

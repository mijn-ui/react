"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@mijn-ui/react/utils"
import axios from "axios"
import HTMLReactParser from "html-react-parser"

type CodePreviewerProps = React.ComponentPropsWithoutRef<"div"> & {
  src: string
  children?: React.ReactNode
}

export const revalidate = 3600 // revalidate every hour

const TWComponentPreview = ({
  src,
  className,
  children,
  ...props
}: CodePreviewerProps) => {
  const [reactElement, setReactElement] = useState<React.ReactNode>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchHtml = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await axios.get(`/api/get-html?filename=${src}`)
        const parsedHTML = HTMLReactParser(response.data.html)
        setReactElement(parsedHTML)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchHtml()
  }, [src])

  return (
    <div
      className={cn(
        "not-prose relative flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5",
        className,
      )}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-5 animate-spin text-neutral"
            height="1em"
            width="1em"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
          <p className="text-sm">Loading...</p>
        </div>
      ) : error ? (
        <p className="text-sm text-danger">
          Error loading content. Please try refreshing the page again.
        </p>
      ) : (
        reactElement
      )}
      {children}
    </div>
  )
}

export default TWComponentPreview

import React from "react"
import "./theme.css"

const CodeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="code-wrapper">{children}</div>
}

export default CodeWrapper

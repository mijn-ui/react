import React from "react"

const GradientBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(80% 60% at 80% -20%, rgba(239, 138, 94, 0.5), rgba(255, 255, 255, 0))",
      }}
    ></div>
  )
}

export default GradientBackground

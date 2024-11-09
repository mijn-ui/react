import React from "react"

const GradientBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(130% 60% at 0% 50%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
      }}
    ></div>
  )
}

export default GradientBackground

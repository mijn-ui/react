import { it, expect, describe } from "vitest"
import { tv } from "tailwind-variants"
import { renderHook } from "@testing-library/react"
import { useTVUnstyled } from "../use-tv-unstyled"
import { UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { createContext } from "@mijn-ui/react-utilities/context"

describe("useTVUnstyled", () => {
  const baseDefault = "rounded-md"
  const iconDefault = "p-4"
  const indicatorDefault = "border-solid"

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  }

  const sizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  }

  const userClass = "user-classes"

  const componentStyles = tv({
    slots: {
      base: baseDefault,
      icon: iconDefault,
      indicator: indicatorDefault,
    },
    variants: {
      color: colorClasses,
      size: sizeClasses,
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  })

  const styles = componentStyles({
    color: "secondary",
    size: "lg",
  })

  type ContextType = UnstyledProps & {
    styles: ReturnType<typeof componentStyles>
  }

  const [ComponentProvider, useComponentContext] = createContext<ContextType>({
    name: "ComponentContext",
    strict: true,
    errorMessage: "Test error message",
  })

  const runTest = (unstyled: boolean, unstyledOverride?: boolean) => {
    type WrapperProps = {
      children: React.ReactNode
      value: ContextType
    }

    const createWrapper = ({ children, value }: WrapperProps) => {
      return <ComponentProvider value={value}>{children}</ComponentProvider>
    }

    return renderHook(
      () => {
        const context = useComponentContext()
        return useTVUnstyled(context, unstyledOverride)
      },
      {
        wrapper: ({ children }) =>
          createWrapper({
            children,
            value: { unstyled, styles },
          }),
      },
    )
  }

  describe("if default unstyled is false", () => {
    it("should return default & user classes if unstyledOverride is not defined", () => {
      const unstyled = false
      const { result } = runTest(unstyled)

      expect(result.current.isUnstyled).toBe(false)
      expect(result.current.base({ className: userClass })).toBe(
        `${baseDefault} ${colorClasses.secondary} ${sizeClasses.lg} ${userClass}`,
      )
      expect(result.current.indicator({ className: userClass })).toBe(
        `${indicatorDefault} ${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(
        `${iconDefault} ${userClass}`,
      )
    })

    it("should return default & user classes if unstyledOverride is false", () => {
      const unstyled = false
      const unstyledOverride = false
      const { result } = runTest(unstyled, unstyledOverride)

      expect(result.current.isUnstyled).toBe(false)
      expect(result.current.base({ className: userClass })).toBe(
        `${baseDefault} ${colorClasses.secondary} ${sizeClasses.lg} ${userClass}`,
      )
      expect(result.current.indicator({ className: userClass })).toBe(
        `${indicatorDefault} ${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(
        `${iconDefault} ${userClass}`,
      )
    })

    it("should return default & user classes if unstyledOverride is true", () => {
      const unstyled = false
      const unstyledOverride = true
      const { result } = runTest(unstyled, unstyledOverride)

      expect(result.current.isUnstyled).toBe(true)
      expect(result.current.base({ className: userClass })).toBe(`${userClass}`)
      expect(result.current.indicator({ className: userClass })).toBe(
        `${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(`${userClass}`)
    })
  })

  describe("if default unstyled is true", () => {
    it("should return user classes if unstyledOverride is not defined", () => {
      const unstyled = true
      const { result } = runTest(unstyled)

      expect(result.current.isUnstyled).toBe(true)
      expect(result.current.base({ className: userClass })).toBe(`${userClass}`)
      expect(result.current.indicator({ className: userClass })).toBe(
        `${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(`${userClass}`)
    })

    it("should return user classes if unstyledOverride is true", () => {
      const unstyled = true
      const unstyledOverride = true
      const { result } = runTest(unstyled, unstyledOverride)

      expect(result.current.isUnstyled).toBe(true)
      expect(result.current.base({ className: userClass })).toBe(`${userClass}`)
      expect(result.current.indicator({ className: userClass })).toBe(
        `${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(`${userClass}`)
    })

    it("should return default & user classes if unstyledOverride is false", () => {
      const unstyled = true
      const unstyledOverride = false
      const { result } = runTest(unstyled, unstyledOverride)

      expect(result.current.isUnstyled).toBe(false)
      expect(result.current.base({ className: userClass })).toBe(
        `${baseDefault} ${colorClasses.secondary} ${sizeClasses.lg} ${userClass}`,
      )
      expect(result.current.indicator({ className: userClass })).toBe(
        `${indicatorDefault} ${userClass}`,
      )
      expect(result.current.icon({ className: userClass })).toBe(
        `${iconDefault} ${userClass}`,
      )
    })
  })
})

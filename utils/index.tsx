import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))

type ConditionalRenderOptions = {
  component: React.ElementType // The component to render the string in (like AlertTitle)
  fallback?: React.ReactNode // Fallback to show if element is undefined
}

export const conditionalRender = (
  element: string | React.ReactNode | undefined,
  { component: Component, fallback }: ConditionalRenderOptions,
) => {
  if (!element) return fallback || null // Return fallback if no element is provided
  if (typeof element === "string") {
    return <Component>{element}</Component> // If element is string, wrap in custom component
  }
  return element // If it's already a ReactNode, return as is
}

export const applyUnstyled = (
  unstyled: boolean | undefined,
  defaultClasses: string,
  userClasses?: string,
) => {
  return unstyled ? userClasses : cn(defaultClasses, userClasses)
}

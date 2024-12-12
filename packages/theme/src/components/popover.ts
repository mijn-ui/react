import { tv, VariantProps } from "tailwind-variants"
import { buttonStyles } from "./button"
import { popupAnimationClasses } from "../utils/classes"

const popoverStyles = tv({
  slots: {
    base: "",
    trigger: buttonStyles({ color: "secondary" }),
    close: buttonStyles({ variant: "text" }),
    content: [
      popupAnimationClasses,
      "border-main-border bg-surface text-surface-text z-50 w-full rounded-lg border p-4 shadow-md outline-none !duration-300",
    ],
  },
})

export type PopoverlVariantProps = VariantProps<typeof popoverStyles>
export { popoverStyles }

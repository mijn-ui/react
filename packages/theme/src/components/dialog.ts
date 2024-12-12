import { tv, VariantProps } from "tailwind-variants"
import { buttonStyles } from "./button"
import {
  dialogContentAnimationClasses,
  dialogOverlayClasses,
} from "../utils/classes"

const dialogStyles = tv({
  slots: {
    base: "",
    trigger: buttonStyles({ color: "secondary" }),
    overlay: dialogOverlayClasses,
    contentWrapper: "fixed inset-0 z-50 flex items-center justify-center",
    content: [
      "flex w-full max-w-lg m-4 flex-col gap-3 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300",
      ...dialogContentAnimationClasses,
    ],
    header: "flex flex-col space-y-1.5 text-center sm:text-left",
    footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-text",
    close: buttonStyles({ color: "muted", variant: "text" }),
  },
})

export type DialogVariantProps = VariantProps<typeof dialogStyles>
export { dialogStyles }

import { tv, VariantProps } from "tailwind-variants"
import { buttonStyles } from "./button"
import {
  dialogContentAnimationClasses,
  dialogOverlayClasses,
} from "../utils/classes"

const alertDialogStyles = tv({
  slots: {
    base: "",
    trigger: buttonStyles({ color: "secondary" }),
    overlay: dialogOverlayClasses,
    contentWrapper: "fixed inset-0 z-50 flex items-center justify-center",
    content: [
      "flex w-full max-w-lg flex-col gap-2 rounded-xl border border-main-border bg-surface p-6 shadow-lg !duration-300",
      ...dialogContentAnimationClasses,
    ],
    header: "flex flex-col space-y-2 text-center sm:text-left",
    footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    title: "text-lg font-semibold",
    description: "text-sm text-muted-text",
    action: buttonStyles(),
    cancel: buttonStyles({ color: "accent", variant: "text" }),
  },
})

export type AlertDialogVariantProps = VariantProps<typeof alertDialogStyles>
export { alertDialogStyles }

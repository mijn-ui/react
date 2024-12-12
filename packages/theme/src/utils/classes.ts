export const disabledClasses = [
  "disabled:pointer-events-none",
  "disabled:opacity-50",
]

export const dataDisabledClasses = [
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
]

/* ------------------------------- Animations ------------------------------- */

export const dialogOverlayClasses = [
  "fixed inset-0 z-50 bg-black/80",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
]

export const dialogContentAnimationClasses = [
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-90 ",
]

export const popupSubAnimationClasses = [
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
]

export const popupAnimationClasses = [
  "data-[state=open]:zoom-in-95 data-[state=open]:animate-in  data-[state=open]:fade-in-0",
  "data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  "data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
]

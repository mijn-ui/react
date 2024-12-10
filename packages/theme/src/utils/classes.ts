export const dialogOverlayClasses = [
  "fixed inset-0 z-50 bg-black/80",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
]

export const dialogContentAnimationClasses = [
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-90 ",
]

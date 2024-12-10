import { tv, VariantProps } from "tailwind-variants"

const commandStyles = tv({
  slots: {
    command:
      "border-main-border bg-surface text-surface-text flex size-full flex-col overflow-hidden rounded-md",
    dialogContent: "overflow-hidden p-0 shadow-lg",
    dialogCommand:
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-text [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
    list: "max-h-[300px] overflow-y-auto overflow-x-hidden",
    group:
      "text-main-text overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-text",
    separator: "-mx-1 h-px bg-main-border",
    inputWrapper: "flex items-center border-b border-main-border px-3",
    inputIcon: "mr-2 h-4 w-4 shrink-0 opacity-50",
    input:
      "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-text disabled:cursor-not-allowed disabled:opacity-50",
    item: "relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-auto data-[selected='true']:bg-accent data-[selected=true]:text-accent-text data-[disabled=true]:opacity-50",
    empty: "py-6 text-center text-sm",
    shortcut: "ml-auto text-xs tracking-widest text-muted-text",
  },
})

export type CommandVariantProps = VariantProps<typeof commandStyles>

export { commandStyles }

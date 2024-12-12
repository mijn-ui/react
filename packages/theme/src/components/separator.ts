import { tv, VariantProps } from "tailwind-variants"

const separatorStyles = tv({
  base: "bg-main-border shrink-0",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
})

export type SeparatorVariantProps = VariantProps<typeof separatorStyles>
export { separatorStyles }

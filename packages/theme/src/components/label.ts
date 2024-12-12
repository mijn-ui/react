import { tv, VariantProps } from "tailwind-variants"

const labelStyles = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
})

export type LabelVariantProps = VariantProps<typeof labelStyles>
export { labelStyles }

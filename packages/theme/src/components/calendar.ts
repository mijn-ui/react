import { tv, VariantProps } from "tailwind-variants"
import { buttonStyles } from "./button"

const calendarStyles = tv({
  slots: {
    base: "border-main-border bg-surface p-3",
    months: "relative flex flex-col sm:flex-row",
    month: "space-y-0",
    month_caption: "flex justify-center py-2 relative items-center",
    button_previous: [
      buttonStyles({ color: "muted", variant: "outlined" }),
      "absolute left-1 top-0 z-10 size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    ],
    button_next: [
      buttonStyles({ color: "muted", variant: "outlined" }),
      "absolute right-1 top-0 z-10 size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    ],
    month_grid: "w-full border-collapse space-y-1",
    weekdays: "flex",
    weekday:
      "text-muted-text w-9 font-normal text-[0.8rem] h-9 flex items-center justify-center",
    week: "flex w-full mt-0.5",
    day: [
      buttonStyles({ variant: "text", color: "accent" }),
      "size-9 p-0 font-normal aria-selected:opacity-100",
    ],
    day_button:
      "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    range_end: "day-range-end",
    selected:
      "bg-primary text-primary-text hover:bg-primary hover:text-primary-text focus:bg-primary focus:text-primary-text",
    range_middle: "aria-selected:bg-accent/75 aria-selected:text-accent-text",
    today: "bg-accent text-accent-text",
    outside:
      "day-outside text-muted-text opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-text aria-selected:opacity-30",
    disabled: "text-muted-text opacity-50",
    hidden: "invisible",
  },
})

export type CalendarVariantProps = VariantProps<typeof calendarStyles>
export { calendarStyles }

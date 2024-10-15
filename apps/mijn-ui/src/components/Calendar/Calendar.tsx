"use client"

import * as React from "react"
import { buttonStyles } from "@/components/Button"
import { cn } from "@/utils"
import { DayFlag, DayPicker, SelectionState, UI } from "react-day-picker"
import {
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuChevronUp,
} from "react-icons/lu"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("border-main-border bg-surface p-3", className)}
      classNames={{
        [UI.Months]:
          "relative flex flex-col sm:flex-row space-y-4 sm:space-y-0",
        [UI.Month]: "space-y-4 ",
        [UI.MonthCaption]: "flex justify-center pt-1 relative items-center",
        [UI.CaptionLabel]: "text-sm font-medium",
        [UI.PreviousMonthButton]: cn(
          buttonStyles({ variant: "outline" }),
          "absolute left-1 top-0 h-7 w-7 bg-transparent p-0 z-10 opacity-50 hover:opacity-100",
        ),
        [UI.NextMonthButton]: cn(
          buttonStyles({ variant: "outline" }),
          "absolute right-1 top-0 h-7 w-7 bg-transparent p-0 z-10 opacity-50 hover:opacity-100",
        ),
        [UI.MonthGrid]: "w-full border-collapse space-y-1",
        [UI.Weekdays]: "flex",
        [UI.Weekday]: "text-muted-text w-9 font-normal text-[0.8rem]",
        [UI.Week]: "flex w-full mt-2",
        [UI.Day]: cn(
          buttonStyles({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        [UI.DayButton]:
          "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        [SelectionState.range_end]: "day-range-end",
        [SelectionState.selected]:
          "bg-primary text-primary-text hover:bg-primary hover:text-primary-text focus:bg-primary focus:text-primary-text",
        [SelectionState.range_middle]:
          "aria-selected:bg-accent aria-selected:text-accent-text",
        [DayFlag.today]: "bg-accent text-accent-text",
        [DayFlag.outside]:
          "day-outside text-muted-text opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-text aria-selected:opacity-30",
        [DayFlag.disabled]: "text-muted-text opacity-50",
        [DayFlag.hidden]: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => <Chevron {...props} />,
      }}
      {...props}
    />
  )
}

const Chevron = ({ orientation = "left" }) => {
  switch (orientation) {
    case "left":
      return <LuChevronLeft className="h-4 w-4" />
    case "right":
      return <LuChevronRight className="h-4 w-4" />
    case "up":
      return <LuChevronUp className="h-4 w-4" />
    case "down":
      return <LuChevronDown className="h-4 w-4" />
    default:
      return null
  }
}

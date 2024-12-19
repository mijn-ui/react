import { IconSvgProps } from "./IconType"

export const CalendarIcon = (props: IconSvgProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 2v4M16 2v4" />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <path d="M3 10h18" />
  </svg>
)

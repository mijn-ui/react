import { IconSvgProps } from "./IconType"

export const SearchIcon = (props: IconSvgProps) => (
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
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

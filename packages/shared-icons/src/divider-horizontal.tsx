import { IconSvgProps } from "./IconType"

export const DividerHorizontalIcon = (props: IconSvgProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={0}
    viewBox="0 0 15 15"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7.5a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
)

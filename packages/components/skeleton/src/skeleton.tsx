import { cn } from "@mijn-ui-react/utilities/shared"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-neutral animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

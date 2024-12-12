import { skeletonStyles } from "@mijn-ui/react-theme"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"

type SkeletonProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

function Skeleton({ unstyled, className, ...props }: SkeletonProps) {
  return (
    <div
      className={applyUnstyled(unstyled, skeletonStyles(), className)}
      {...props}
    />
  )
}

export { Skeleton }

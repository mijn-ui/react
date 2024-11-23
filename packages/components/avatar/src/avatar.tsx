"use client"

import * as React from "react"
import { UnstyledProvider, useUnstyled } from "@mijn-ui-react/utilities/context"
import {
  UnstyledProps,
  applyUnstyled,
  cn,
} from "@mijn-ui-react/utilities/shared"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { VariantProps, cva } from "class-variance-authority"

export const avatarStyles = cva(
  ["relative size-10 shrink-0 overflow-hidden rounded-full"],
  {
    variants: {
      size: {
        xxl: "size-16 text-base",
        xl: "size-14 text-sm",
        lg: "size-12 text-sm",
        md: "size-10 text-sm",
        sm: "size-8 text-xs",
        xs: "size-6 text-xs",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

/* -------------------------------------------------------------------------- */
/*                                 AvatarGroup                                */
/* -------------------------------------------------------------------------- */

type AvatarGroupProps = React.ComponentPropsWithRef<"div"> & {
  max?: number
} & UnstyledProps

const AvatarGroup = ({
  max,
  children,
  className,
  unstyled = false,
  ...props
}: AvatarGroupProps) => {
  const childArray = React.Children.toArray(children)
  const visibleChildren = max ? childArray.slice(0, max) : childArray
  const remainingChildrenCount = max ? childArray.length - max : 0

  return (
    <UnstyledProvider unstyled={unstyled}>
      <div
        className={cn("flex items-center justify-center -space-x-2", className)}
        {...props}
      >
        {visibleChildren}
        {remainingChildrenCount > 0 && (
          <span className="text-neutral-text !ml-1.5 flex items-center justify-center text-xs">
            +{remainingChildrenCount}
          </span>
        )}
      </div>
    </UnstyledProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   Avatar                                   */
/* -------------------------------------------------------------------------- */

export type AvatarVariantProps = VariantProps<typeof avatarStyles>

type AvatarProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Root> &
  AvatarVariantProps &
  UnstyledProps

const Avatar = ({ unstyled, size, className, ...props }: AvatarProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Root
      className={applyUnstyled(isUnstyled, avatarStyles({ size }), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 AvatarImage                                */
/* -------------------------------------------------------------------------- */

type AvatarImageProps = React.ComponentPropsWithRef<
  typeof AvatarPrimitive.Image
> &
  UnstyledProps

const AvatarImage = ({ unstyled, className, ...props }: AvatarImageProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Image
      className={applyUnstyled(
        isUnstyled,
        "aspect-square h-full w-full object-cover",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                               AvatarFallback                               */
/* -------------------------------------------------------------------------- */

type AvatarFallbackProps = React.ComponentPropsWithRef<
  typeof AvatarPrimitive.Fallback
> &
  UnstyledProps

const AvatarFallback = ({
  unstyled,
  className,
  ...props
}: AvatarFallbackProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Fallback
      className={applyUnstyled(
        isUnstyled,
        "bg-neutral flex h-full w-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }

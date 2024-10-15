"use client"

import * as React from "react"
import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider"
import { UnstyledProps } from "@/types"
import { applyUnstyled, cn } from "@/utils"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { VariantProps, cva } from "class-variance-authority"

export const avatarStyles = cva(
  ["relative h-10 w-10 shrink-0 overflow-hidden rounded-full"],
  {
    variants: {
      size: {
        xxl: "h-16 w-16 text-base",
        xl: "h-14 w-14 text-sm",
        lg: "h-12 w-12 text-sm",
        md: "h-10 w-10 text-sm",
        sm: "h-8 w-8 text-xs",
        xs: "h-6 w-6 text-xs",
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

type AvatarGroupProps = React.ComponentProps<"div"> & {
  max?: number
} & UnstyledProps

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ unstyled = false, max, children, className, ...props }, ref) => {
    const childArray = React.Children.toArray(children)
    const visibleChildren = max ? childArray.slice(0, max) : childArray
    const remainingChildrenCount = max ? childArray.length - max : 0

    return (
      <UnstyledProvider unstyled={unstyled}>
        <div
          className={cn(
            "flex items-center justify-center -space-x-2",
            className,
          )}
          {...props}
          ref={ref}
        >
          {visibleChildren}
          {remainingChildrenCount > 0 && (
            <span
              className={
                "!ml-1.5 flex items-center justify-center text-xs text-muted-text"
              }
            >
              +{remainingChildrenCount}
            </span>
          )}
        </div>
      </UnstyledProvider>
    )
  },
)

AvatarGroup.displayName = "AvatarGroup"

/* -------------------------------------------------------------------------- */
/*                                   Avatar                                   */
/* -------------------------------------------------------------------------- */

export type AvatarVariantProps = VariantProps<typeof avatarStyles>

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  AvatarVariantProps &
  UnstyledProps

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ unstyled, size, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={applyUnstyled(isUnstyled, avatarStyles({ size }), className)}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                 AvatarImage                                */
/* -------------------------------------------------------------------------- */

type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
> &
  UnstyledProps

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "aspect-square h-full w-full object-cover",
        className,
      )}
      {...props}
    />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/* -------------------------------------------------------------------------- */
/*                               AvatarFallback                               */
/* -------------------------------------------------------------------------- */

type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
> &
  UnstyledProps

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }

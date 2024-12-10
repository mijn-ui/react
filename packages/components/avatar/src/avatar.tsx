"use client"

import * as React from "react"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps, applyUnstyled } from "@mijn-ui/react-utilities/shared"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {
  avatarGroupStyles,
  avatarStyles,
  AvatarVariantProps,
} from "@mijn-ui/react-theme"

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
  const { group, groupRemainChildren } = avatarGroupStyles()
  const childArray = React.Children.toArray(children)
  const visibleChildren = max ? childArray.slice(0, max) : childArray
  const remainingChildrenCount = max ? childArray.length - max : 0

  return (
    <div className={applyUnstyled(unstyled, group(), className)} {...props}>
      {visibleChildren}
      {remainingChildrenCount > 0 && (
        <span className={applyUnstyled(unstyled, groupRemainChildren())}>
          +{remainingChildrenCount}
        </span>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              AvatarContext                                  */
/* -------------------------------------------------------------------------- */

type AvatarContextType = UnstyledProps & ReturnType<typeof avatarStyles>

const { Provider: AvatarProvider, useDynamicContext: useAvatarContext } =
  createDynamicContext<AvatarContextType>()

/* -------------------------------------------------------------------------- */
/*                                   Avatar                                   */
/* -------------------------------------------------------------------------- */

type AvatarProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Root> &
  AvatarVariantProps &
  UnstyledProps

const Avatar = ({ unstyled, size, className, ...props }: AvatarProps) => {
  const styles = avatarStyles({ size })

  return (
    <AvatarProvider value={{ unstyled, ...styles }}>
      <AvatarPrimitive.Root
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      />
    </AvatarProvider>
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
  const { unstyled: contextUnstyled, image } = useAvatarContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Image
      className={applyUnstyled(isUnstyled, image(), className)}
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
  const { unstyled: contextUnstyled, fallback } = useAvatarContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <AvatarPrimitive.Fallback
      className={applyUnstyled(isUnstyled, fallback(), className)}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }

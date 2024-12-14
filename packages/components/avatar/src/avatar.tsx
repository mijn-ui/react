"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import {
  UnstyledProps,
  applyUnstyled,
  createTVUnstyledSlots,
} from "@mijn-ui/react-utilities/shared"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {
  avatarGroupStyles,
  avatarStyles,
  AvatarVariantProps,
} from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              AvatarContext                                  */
/* -------------------------------------------------------------------------- */

type AvatarContextType = UnstyledProps & {
  styles: ReturnType<typeof avatarStyles>
}

const [AvatarProvider, useAvatarContext] = createContext<AvatarContextType>({
  name: "AvatarContext",
  strict: true,
  errorMessage:
    "useAvatarContext: `context` is undefined. Seems you forgot to wrap component within <Avatar />",
})

/* -------------------------------------------------------------------------- */
/*                                 AvatarHook                                 */
/* -------------------------------------------------------------------------- */

const useAvatarStyles = (unstyledOverride?: boolean) => {
  const context = useAvatarContext()
  return useTVUnstyled(context, unstyledOverride)
}

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
  const { group, groupRemainChildren } = createTVUnstyledSlots(
    avatarGroupStyles(),
    unstyled,
  )
  const childArray = React.Children.toArray(children)
  const visibleChildren = max ? childArray.slice(0, max) : childArray
  const remainingChildrenCount = max ? childArray.length - max : 0

  return (
    <div className={group({ className })} {...props}>
      {visibleChildren}
      {remainingChildrenCount > 0 && (
        <span className={groupRemainChildren()}>+{remainingChildrenCount}</span>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   Avatar                                   */
/* -------------------------------------------------------------------------- */

type AvatarProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Root> &
  AvatarVariantProps &
  UnstyledProps

const Avatar = ({ unstyled, size, className, ...props }: AvatarProps) => {
  const styles = avatarStyles({ size })

  return (
    <AvatarProvider value={{ unstyled, styles }}>
      <AvatarPrimitive.Root
        className={applyUnstyled(unstyled, styles.base({ className }))}
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
  const { image } = useAvatarStyles(unstyled)

  return <AvatarPrimitive.Image className={image({ className })} {...props} />
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
  const { fallback } = useAvatarStyles(unstyled)

  return (
    <AvatarPrimitive.Fallback className={fallback({ className })} {...props} />
  )
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }

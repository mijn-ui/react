"use client"

import * as React from "react"
import { createDynamicContext } from "@mijn-ui/react-utilities/context"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import { cardStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                              CardContext                                   */
/* -------------------------------------------------------------------------- */

type CardContextType = UnstyledProps & ReturnType<typeof cardStyles>

const { Provider: CardProvider, useDynamicContext: useCardContext } =
  createDynamicContext<CardContextType>()

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */

type CardProps = React.ComponentProps<"div"> & UnstyledProps

const Card = ({ className, unstyled = false, ...props }: CardProps) => {
  const styles = cardStyles()

  return (
    <CardProvider value={{ unstyled, ...styles }}>
      <div className={cn(styles.base(), className)} {...props} />
    </CardProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CardHeader                                 */
/* -------------------------------------------------------------------------- */

type CardHeaderProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardHeader = ({ className, unstyled, ...props }: CardHeaderProps) => {
  const { unstyled: contextUnstyled, header } = useCardContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, header(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  CardTitle                                 */
/* -------------------------------------------------------------------------- */

type CardTitleProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardTitle = ({ className, unstyled, ...props }: CardTitleProps) => {
  const { unstyled: contextUnstyled, title } = useCardContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div className={applyUnstyled(isUnstyled, title(), className)} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                               CardDescription                              */
/* -------------------------------------------------------------------------- */

type CardDescriptionProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardDescription = ({
  className,
  unstyled,
  ...props
}: CardDescriptionProps) => {
  const { unstyled: contextUnstyled, description } = useCardContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, description(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CardContent                                */
/* -------------------------------------------------------------------------- */

type CardContentProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardContent = ({ className, unstyled, ...props }: CardContentProps) => {
  const { unstyled: contextUnstyled, content } = useCardContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, content(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CardFooter                                 */
/* -------------------------------------------------------------------------- */

type CardFooterProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardFooter = ({ className, unstyled, ...props }: CardFooterProps) => {
  const { unstyled: contextUnstyled, footer } = useCardContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <div
      className={applyUnstyled(isUnstyled, footer(), className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

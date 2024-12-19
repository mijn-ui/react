"use client"

import * as React from "react"
import { createContext, cn } from "@mijn-ui/react-utilities"
import { UnstyledProps } from "@mijn-ui/react-core"
import { cardStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              CardContext                                   */
/* -------------------------------------------------------------------------- */

type CardContextType = UnstyledProps & {
  styles: ReturnType<typeof cardStyles>
}

const [CardProvider, useCardContext] = createContext<CardContextType>({
  name: "CardContext",
  strict: true,
  errorMessage:
    "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
})

/* -------------------------------------------------------------------------- */
/*                                  CardHook                                  */
/* -------------------------------------------------------------------------- */

const useCardStyles = (unstyledOverride?: boolean) => {
  const context = useCardContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */

type CardProps = React.ComponentProps<"div"> & UnstyledProps

const Card = ({ className, unstyled = false, ...props }: CardProps) => {
  const styles = cardStyles()

  return (
    <CardProvider value={{ unstyled, styles }}>
      <div className={cn(styles.base({ className }))} {...props} />
    </CardProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CardHeader                                 */
/* -------------------------------------------------------------------------- */

type CardHeaderProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardHeader = ({ className, unstyled, ...props }: CardHeaderProps) => {
  const { header } = useCardStyles(unstyled)

  return <div className={header({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                  CardTitle                                 */
/* -------------------------------------------------------------------------- */

type CardTitleProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardTitle = ({ className, unstyled, ...props }: CardTitleProps) => {
  const { title } = useCardStyles(unstyled)

  return <div className={title({ className })} {...props} />
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
  const { description } = useCardStyles(unstyled)

  return <div className={description({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 CardContent                                */
/* -------------------------------------------------------------------------- */

type CardContentProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardContent = ({ className, unstyled, ...props }: CardContentProps) => {
  const { content } = useCardStyles(unstyled)

  return <div className={content({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 CardFooter                                 */
/* -------------------------------------------------------------------------- */

type CardFooterProps = React.ComponentPropsWithRef<"div"> & UnstyledProps

const CardFooter = ({ className, unstyled, ...props }: CardFooterProps) => {
  const { footer } = useCardStyles(unstyled)

  return <div className={footer({ className })} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

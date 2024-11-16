"use client";

import * as React from "react";
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider";
import { UnstyledProps } from "@mijn-ui/types";
import { applyUnstyled, cn } from "@mijn-ui/utils";

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */

type CardProps = React.ComponentProps<"div"> & UnstyledProps;

const Card = ({ className, unstyled = false, ...props }: CardProps) => (
  <UnstyledProvider unstyled={unstyled}>
    <div
      className={cn(
        "rounded-lg bg-surface text-surface-text shadow-sm",
        className,
      )}
      {...props}
    />
  </UnstyledProvider>
);

/* -------------------------------------------------------------------------- */
/*                                 CardHeader                                 */
/* -------------------------------------------------------------------------- */

type CardHeaderProps = React.ComponentPropsWithRef<"div"> & UnstyledProps;

const CardHeader = ({ className, unstyled, ...props }: CardHeaderProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex flex-col space-y-1.5 p-4",
        className,
      )}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                  CardTitle                                 */
/* -------------------------------------------------------------------------- */

type CardTitleProps = React.ComponentPropsWithRef<"div"> & UnstyledProps;

const CardTitle = ({ className, unstyled, ...props }: CardTitleProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                               CardDescription                              */
/* -------------------------------------------------------------------------- */

type CardDescriptionProps = React.ComponentPropsWithRef<"div"> & UnstyledProps;

const CardDescription = ({
  className,
  unstyled,
  ...props
}: CardDescriptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "text-sm text-neutral-text",
        className,
      )}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                 CardContent                                */
/* -------------------------------------------------------------------------- */

type CardContentProps = React.ComponentPropsWithRef<"div"> & UnstyledProps;

const CardContent = ({ className, unstyled, ...props }: CardContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(isUnstyled, "p-4 pt-0", className)}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                 CardFooter                                 */
/* -------------------------------------------------------------------------- */

type CardFooterProps = React.ComponentPropsWithRef<"div"> & UnstyledProps;

const CardFooter = ({ className, unstyled, ...props }: CardFooterProps) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <div
      className={applyUnstyled(
        isUnstyled,
        "flex items-center p-4 pt-0",
        className,
      )}
      {...props}
    />
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

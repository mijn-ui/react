"use client";

import * as React from "react";
import { UnstyledProps } from "@mijn-ui/types";
import { applyUnstyled } from "@mijn-ui/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";

type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitives.Root> &
  UnstyledProps;

const Switch = ({ className, unstyled, ...props }: SwitchProps) => (
  <SwitchPrimitives.Root
    className={applyUnstyled(
      unstyled,
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-main disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral",
      className,
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={applyUnstyled(
        unstyled,
        "pointer-events-none block h-5 w-5 rounded-full bg-primary-text shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
);

export { Switch };

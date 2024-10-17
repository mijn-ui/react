"use client";

import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";

import { UnstyledProvider, useUnstyled } from "@/context/UnstyledProvider";
import { UnstyledProps } from "@/types";
import { applyUnstyled, cn } from "@/utils";

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

/* -------------------------------------------------------------------------- */
/*                                   Select                                   */
/* -------------------------------------------------------------------------- */

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> &
  UnstyledProps;

const Select = ({ unstyled = false, ...props }: SelectProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <SelectPrimitive.Root {...props} />
    </UnstyledProvider>
  );
};

/* -------------------------------------------------------------------------- */
/*                                SelectTrigger                               */
/* -------------------------------------------------------------------------- */

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> &
  UnstyledProps & {
    icon?: React.ReactNode;
  };

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ unstyled, className, children, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "flex h-10 w-full items-center justify-between rounded-md border border-main-border bg-surface px-3 py-2 text-sm placeholder:text-muted-text focus:border-main-text focus:outline-none focus:ring-1 focus:ring-main-text disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <LuChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/* -------------------------------------------------------------------------- */
/*                            SelectScrollUpButton                            */
/* -------------------------------------------------------------------------- */

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <LuChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/* -------------------------------------------------------------------------- */
/*                           SelectScrollDownButton                           */
/* -------------------------------------------------------------------------- */

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <LuChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

/* -------------------------------------------------------------------------- */
/*                                SelectContent                               */
/* -------------------------------------------------------------------------- */

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & UnstyledProps
>(({ unstyled, className, children, position = "popper", ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={applyUnstyled(
          isUnstyled,
          cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-main-border bg-surface text-surface-text shadow-md !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
            position === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          ),
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

/* -------------------------------------------------------------------------- */
/*                                 SelectLabel                                */
/* -------------------------------------------------------------------------- */

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.Label
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "py-1.5 pl-8 pr-2 text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/* -------------------------------------------------------------------------- */
/*                                 SelectItem                                 */
/* -------------------------------------------------------------------------- */

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & UnstyledProps
>(({ unstyled, className, children, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span
        className={applyUnstyled(
          isUnstyled,
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        )}
      >
        <SelectPrimitive.ItemIndicator>
          <LuCheck className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

/* -------------------------------------------------------------------------- */
/*                               SelectSeparator                              */
/* -------------------------------------------------------------------------- */

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled();
  const isUnstyled = unstyled ?? contextUnstyled;

  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        "-mx-1 my-1 h-px bg-muted",
        className,
      )}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

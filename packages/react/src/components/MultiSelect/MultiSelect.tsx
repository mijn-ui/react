"use client";

import React, {
  createContext,
  forwardRef,
  KeyboardEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { LuCheck, LuX as RemoveIcon } from "react-icons/lu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { VariantProps } from "class-variance-authority";
import { Command as CommandPrimitive } from "cmdk";

import { Badge, badgeVariants } from "@/components/Badge";
import { CommandEmpty, CommandItem } from "@/components/Command";
import { Popover, PopoverContent } from "@/components/Popover";
import { cn } from "@/utils";
import { mergeRefs } from "@/utils/merge-refs";

/* -------------------------------------------------------------------------- */
/*                             MultiSelectorContext                             */
/* -------------------------------------------------------------------------- */

type MultiSelectorContextProps = {
  value: string[];
  onValueChange: (value: any) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  ref: React.RefObject<HTMLInputElement>;
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void;
};

const MultiSelectorContext = createContext<MultiSelectorContextProps | null>(
  null,
);

const useMultiSelector = () => {
  const context = useContext(MultiSelectorContext);
  if (!context) {
    throw new Error(
      "useMultiSelector must be used within MultiSelectorProvider",
    );
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                MultiSelector                               */
/* -------------------------------------------------------------------------- */

type MultiSelectorProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
> & {
  values: string[];
  onValuesChange: (value: string[]) => void;
  loop?: boolean;
};

const MultiSelector = ({
  values: value,
  onValuesChange: onValueChange,
  loop = false,
  className,
  children,
  dir,
  ...props
}: MultiSelectorProps) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isValueSelected, setIsValueSelected] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const onValueChangeHandler = useCallback(
    (val: string) => {
      if (value.includes(val)) {
        onValueChange(value.filter((item) => item !== val));
      } else {
        onValueChange([...value, val]);
      }
    },
    [value],
  );

  const handleSelect = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      e.preventDefault();
      const target = e.currentTarget;
      const selection = target.value.substring(
        target.selectionStart ?? 0,
        target.selectionEnd ?? 0,
      );

      setSelectedValue(selection);
      setIsValueSelected(selection === inputValue);
    },
    [inputValue],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const target = inputRef.current;

      if (!target) return;

      const moveNext = () => {
        const nextIndex = activeIndex + 1;
        setActiveIndex(
          nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex,
        );
      };

      const movePrev = () => {
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex);
      };

      const moveCurrent = () => {
        const newIndex =
          activeIndex - 1 <= 0
            ? value.length - 1 === 0
              ? -1
              : 0
            : activeIndex - 1;
        setActiveIndex(newIndex);
      };

      switch (e.key) {
        case "ArrowLeft":
          if (dir === "rtl") {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext();
            }
          } else {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev();
            }
          }
          break;

        case "ArrowRight":
          if (dir === "rtl") {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev();
            }
          } else {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext();
            }
          }
          break;

        case "Backspace":
        case "Delete":
          if (value.length > 0) {
            if (activeIndex !== -1 && activeIndex < value.length) {
              onValueChangeHandler(value[activeIndex]!);
              moveCurrent();
            } else {
              if (target.selectionStart === 0) {
                if (selectedValue === inputValue || isValueSelected) {
                  onValueChangeHandler(value[value.length - 1]!);
                }
              }
            }
          }
          break;

        case "Enter":
          setOpen(true);
          break;

        case "Escape":
          if (activeIndex !== -1) {
            setActiveIndex(-1);
          } else if (open) {
            setOpen(false);
          }
          break;
      }
    },
    [value, inputValue, activeIndex, loop],
  );

  return (
    <MultiSelectorContext.Provider
      value={{
        value,
        onValueChange: onValueChangeHandler,
        open,
        setOpen,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
        ref: inputRef,
        handleSelect,
      }}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <CommandPrimitive
          onKeyDown={handleKeyDown}
          className={cn(
            "flex flex-col space-y-2 overflow-visible bg-transparent",
            className,
          )}
          dir={dir}
          {...props}
        >
          {children}
        </CommandPrimitive>
      </Popover>
    </MultiSelectorContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                            MultiSelectorTrigger                            */
/* -------------------------------------------------------------------------- */

type MultiSelectorTriggerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const MultiSelectorTrigger = forwardRef<
  HTMLDivElement,
  MultiSelectorTriggerProps
>(
  (
    { variant = "outline", radius = "full", className, children, ...props },
    ref,
  ) => {
    const { value, onValueChange, activeIndex } = useMultiSelector();

    const mousePreventDefault = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    return (
      <PopoverPrimitive.Anchor asChild>
        <div
          ref={ref}
          className={cn(
            "flex flex-wrap gap-1 rounded-lg border border-input-border bg-surface p-1 py-2 outline-none",
            {
              "focus-within:border-main-text focus-within:ring-1 focus-within:ring-main-text":
                activeIndex === -1,
            },
            className,
          )}
          {...props}
        >
          {value.map((item, index) => (
            <Badge
              key={item}
              className={cn(
                "flex items-center gap-1 px-1 font-normal",
                activeIndex === index && "ring-2 ring-muted-text",
              )}
              radius={radius}
              variant={variant}
            >
              <span className="text-xs">{item}</span>
              <button
                aria-label={`Remove ${item} option`}
                aria-roledescription="button to remove option"
                type="button"
                onMouseDown={mousePreventDefault}
                onClick={() => onValueChange(item)}
              >
                <span className="sr-only">Remove {item} option</span>
                <RemoveIcon className="hover:stroke-destructive h-4 w-4" />
              </button>
            </Badge>
          ))}
          {children}
        </div>
      </PopoverPrimitive.Anchor>
    );
  },
);

MultiSelectorTrigger.displayName = "MultiSelectorTrigger";

/* -------------------------------------------------------------------------- */
/*                             MultiSelectorInput                             */
/* -------------------------------------------------------------------------- */

const MultiSelectorInput = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const {
    setOpen,
    inputValue,
    setInputValue,
    activeIndex,
    setActiveIndex,
    handleSelect,
    ref: inputRef,
  } = useMultiSelector();

  return (
    <CommandPrimitive.Input
      {...props}
      tabIndex={0}
      ref={mergeRefs([inputRef, ref])}
      value={inputValue}
      onValueChange={activeIndex === -1 ? setInputValue : undefined}
      onSelect={handleSelect}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onClick={() => setActiveIndex(-1)}
      className={cn(
        "bg-transparent px-2 text-sm outline-none",
        className,
        activeIndex !== -1 && "caret-transparent",
      )}
    />
  );
});

MultiSelectorInput.displayName = "MultiSelectorInput";

/* -------------------------------------------------------------------------- */
/*                            MultiSelectorContent                            */
/* -------------------------------------------------------------------------- */

const MultiSelectorContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  return (
    <PopoverContent
      ref={ref}
      onOpenAutoFocus={(e) => e.preventDefault()}
      onInteractOutside={(e) => {
        if (
          e.target instanceof Element &&
          e.target.hasAttribute("cmdk-input")
        ) {
          e.preventDefault();
        }
      }}
      avoidCollisions={false}
      // to prevent scrolling issue when Popover inside Dialog
      // see: https://github.com/radix-ui/primitives/issues/1159
      onWheel={(e) => {
        e.stopPropagation();
      }}
      className={"w-[--radix-popover-trigger-width] overflow-y-auto p-1"}
    >
      {children}
    </PopoverContent>
  );
});

MultiSelectorContent.displayName = "MultiSelectorContent";

/* -------------------------------------------------------------------------- */
/*                              MultiSelectorList                             */
/* -------------------------------------------------------------------------- */

const MultiSelectorList = forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, children }, ref) => {
  return (
    <CommandPrimitive.List ref={ref} className={className}>
      {children}
      <CommandEmpty>
        <span className="text-muted-foreground">No results found</span>
      </CommandEmpty>
    </CommandPrimitive.List>
  );
});

MultiSelectorList.displayName = "MultiSelectorList";

/* -------------------------------------------------------------------------- */
/*                              MultiSelectorItem                             */
/* -------------------------------------------------------------------------- */

const MultiSelectorItem = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  { value: string } & React.ComponentPropsWithoutRef<
    typeof CommandPrimitive.Item
  >
>(({ className, value, children, ...props }, ref) => {
  const { value: Options, onValueChange, setInputValue } = useMultiSelector();

  const mousePreventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const isIncluded = Options.includes(value);
  return (
    <CommandItem
      ref={ref}
      {...props}
      onSelect={() => {
        onValueChange(value);
        setInputValue("");
      }}
      className={cn(
        "flex cursor-pointer justify-between rounded-md px-2 py-1 transition-colors",
        className,
        isIncluded && "cursor-default opacity-50",
        props.disabled && "cursor-not-allowed opacity-50",
      )}
      onMouseDown={mousePreventDefault}
    >
      {children}
      {isIncluded && <LuCheck className="size-3.5" />}
    </CommandItem>
  );
});

MultiSelectorItem.displayName = "MultiSelectorItem";

export {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
};

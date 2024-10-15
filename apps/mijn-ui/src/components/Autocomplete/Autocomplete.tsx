import * as React from "react"
import { CommandEmpty, CommandItem } from "@/components/Command"
import { PopoverContent } from "@/components/Popover"
import { Skeleton } from "@/components/Skeleton"
import { cn } from "@/utils"
import { mergeRefs } from "@/utils/merge-refs"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Popover } from "@radix-ui/react-popover"
import { Command as CommandPrimitive } from "cmdk"
import { LuCheck } from "react-icons/lu"

type AutocompleteContextProps = {
  onValueChange: (value: string) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement>
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedValue: string
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>

  handleSelectOption: (value: string) => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
  handleBlur: () => void

  setShouldFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const AutocompleteContext =
  React.createContext<AutocompleteContextProps | null>(null)

const useAutocomplete = () => {
  const context = React.useContext(AutocompleteContext)
  if (!context) {
    throw new Error("useAutocomplete must be used within AutocompleteProvider")
  }
  return context
}

/* -------------------------------------------------------------------------- */
/*                                  Autocomplete                                  */
/* -------------------------------------------------------------------------- */

type AutocompleteProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
> & {
  value: string
  onValueChange: (value: string) => void
}

const Autocomplete = ({
  value,
  onValueChange,
  children,
  ...props
}: AutocompleteProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string>(value || "")
  const [inputValue, setInputValue] = React.useState<string>("")
  const [shouldFilter, setShouldFilter] = React.useState(false)

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      if (event.key === "Escape") {
        input.blur()
      }
    },
    [isOpen],
  )

  const handleBlur = React.useCallback(() => {
    setOpen(false)
    setInputValue(selectedValue)
    setShouldFilter(false)
  }, [selectedValue])

  const handleSelectOption = React.useCallback(
    (value: string) => {
      setInputValue(value)
      setSelectedValue(value)
      onValueChange?.(value)

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur()
      }, 0)
    },
    [onValueChange],
  )

  return (
    <AutocompleteContext.Provider
      value={{
        isOpen,
        setOpen,

        onValueChange,

        inputValue,
        setInputValue,
        inputRef,

        handleBlur,
        handleKeyDown,
        handleSelectOption,
        selectedValue,
        setSelectedValue,
        setShouldFilter,
      }}
    >
      <Popover open={isOpen} onOpenChange={setOpen}>
        <CommandPrimitive
          shouldFilter={shouldFilter}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {children}
        </CommandPrimitive>
      </Popover>
    </AutocompleteContext.Provider>
  )
}

/* -------------------------------------------------------------------------- */
/*                               AutocompleteTrigger                              */
/* -------------------------------------------------------------------------- */

const AutocompleteTrigger = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ ...props }, ref) => {
  const {
    inputValue,
    inputRef,
    setInputValue,
    setOpen,
    handleBlur,
    setShouldFilter,
  } = useAutocomplete()

  return (
    <PopoverPrimitive.Anchor asChild>
      <CommandPrimitive.Input
        ref={mergeRefs([inputRef, ref])}
        value={inputValue}
        onValueChange={(value) => {
          setInputValue(value)
          setShouldFilter(true)
        }}
        onBlur={handleBlur}
        onFocus={() => setOpen(true)}
        {...props}
      />
    </PopoverPrimitive.Anchor>
  )
})

AutocompleteTrigger.displayName = "AutocompleteTrigger"

/* -------------------------------------------------------------------------- */
/*                               AutocompleteContent                              */
/* -------------------------------------------------------------------------- */

type AutocompleteContentProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
> & {
  emptyMessage?: string
  loading?: boolean
}

const AutocompleteContent = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  AutocompleteContentProps
>(({ loading, emptyMessage, children, ...props }, ref) => {
  return (
    <PopoverContent
      asChild
      onOpenAutoFocus={(e) => e.preventDefault()}
      onInteractOutside={(e) => {
        if (
          e.target instanceof Element &&
          e.target.hasAttribute("cmdk-input")
        ) {
          e.preventDefault()
        }
      }}
      className={"w-[--radix-popover-trigger-width] overflow-y-auto p-1"}
      // you can set this to true if you want to flip the content to flip when there isn't enough space for the comboBox content
      avoidCollisions={false}
      // to prevent scrolling issue when Popover inside Dialog
      // see: https://github.com/radix-ui/primitives/issues/1159
      onWheel={(e) => {
        e.stopPropagation()
      }}
    >
      <CommandPrimitive.List ref={ref} {...props}>
        {!loading && children}
        {!loading && (
          <CommandEmpty>{emptyMessage || "No Options Found"}</CommandEmpty>
        )}
        {loading && (
          <CommandPrimitive.Loading>
            <Skeleton className="h-7 w-full" />
          </CommandPrimitive.Loading>
        )}
      </CommandPrimitive.List>
    </PopoverContent>
  )
})

AutocompleteContent.displayName = "AutocompleteContent"

const AutocompleteGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ children, ...props }, ref) => {
  return (
    <CommandPrimitive.Group ref={ref} {...props}>
      {children}
    </CommandPrimitive.Group>
  )
})

AutocompleteGroup.displayName = "AutocompleteGroup"

/* -------------------------------------------------------------------------- */
/*                                AutocompleteItem                                */
/* -------------------------------------------------------------------------- */

const AutocompleteItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ children, value }, ref) => {
  const { selectedValue, handleSelectOption } = useAutocomplete()

  const isSelected = selectedValue === value

  return (
    <CommandItem
      ref={ref}
      key={value}
      value={value}
      onMouseDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
      }}
      onSelect={handleSelectOption}
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-md",
      )}
    >
      {children}
      {isSelected ? <LuCheck className="w-4" /> : null}
    </CommandItem>
  )
})

AutocompleteItem.displayName = "AutocompleteItem"

export {
  Autocomplete,
  AutocompleteContent,
  AutocompleteGroup,
  AutocompleteItem,
  AutocompleteTrigger,
}

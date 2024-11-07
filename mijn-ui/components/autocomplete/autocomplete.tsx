import * as React from "react"
import { CommandEmpty } from "@mijn-ui/components/command"
import { PopoverContent } from "@mijn-ui/components/popover"
import { Skeleton } from "@mijn-ui/components/skeleton"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled, cn } from "@mijn-ui/utils"
import { mergeRefs } from "@mijn-ui/utils"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Popover } from "@radix-ui/react-popover"
import { Command as CommandPrimitive } from "cmdk"
import { LuCheck } from "react-icons/lu"

type AutocompleteContextProps = {
  onValueChange: (value: string) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
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
} & UnstyledProps

const Autocomplete = ({
  unstyled = false,
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
  }

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
        <UnstyledProvider unstyled={unstyled}>
          <CommandPrimitive
            shouldFilter={shouldFilter}
            onKeyDown={handleKeyDown}
            {...props}
          >
            {children}
          </CommandPrimitive>
        </UnstyledProvider>
      </Popover>
    </AutocompleteContext.Provider>
  )
}

/* -------------------------------------------------------------------------- */
/*                               AutocompleteTrigger                              */
/* -------------------------------------------------------------------------- */

type AutocompleteTriggerProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Input
> &
  UnstyledProps

const AutocompleteTrigger = ({
  unstyled,
  ref,
  className,
  ...props
}: AutocompleteTriggerProps) => {
  const {
    inputValue,
    inputRef,
    setInputValue,
    setOpen,
    handleBlur,
    setShouldFilter,
  } = useAutocomplete()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

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
        className={applyUnstyled(isUnstyled, "", className)}
        {...props}
      />
    </PopoverPrimitive.Anchor>
  )
}

/* -------------------------------------------------------------------------- */
/*                               AutocompleteContent                              */
/* -------------------------------------------------------------------------- */

type AutocompleteContentProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.List
> & {
  emptyMessage?: string
  loading?: boolean
} & UnstyledProps

const AutocompleteContent = ({
  unstyled,
  className,
  loading,
  emptyMessage,
  children,
  ref,
  ...props
}: AutocompleteContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

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
      className={applyUnstyled(
        isUnstyled,
        "w-[--radix-popover-trigger-width] overflow-y-auto p-1",
        className,
      )}
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
}

/* -------------------------------------------------------------------------- */
/*                              AutocompleteGroup                             */
/* -------------------------------------------------------------------------- */

type AutocompleteGroupProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Group
> &
  UnstyledProps

const AutocompleteGroup = ({
  unstyled,
  children,
  className,
  ref,
  ...props
}: AutocompleteGroupProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Group
      ref={ref}
      className={applyUnstyled(isUnstyled, "", className)}
      {...props}
    >
      {children}
    </CommandPrimitive.Group>
  )
}

/* -------------------------------------------------------------------------- */
/*                                AutocompleteItem                                */
/* -------------------------------------------------------------------------- */

type AutocompleteItemProps = React.ComponentPropsWithRef<
  typeof CommandPrimitive.Item
> &
  UnstyledProps

const AutocompleteItem = ({
  unstyled,
  className,
  children,
  ref,
  value,
  ...props
}: AutocompleteItemProps) => {
  const { selectedValue, handleSelectOption } = useAutocomplete()
  const isSelected = selectedValue === value

  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <CommandPrimitive.Item
      ref={ref}
      key={value}
      value={value}
      onMouseDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
      }}
      onSelect={handleSelectOption}
      className={applyUnstyled(
        isUnstyled,
        cn(
          "relative cursor-default select-none px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-auto data-[selected=true]:bg-accent data-[selected=true]:text-accent-text data-[disabled=true]:opacity-50 flex w-full items-center justify-between gap-2 rounded-md",
          isSelected &&
            "bg-primary/20 text-primary data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary",
        ),
        className,
      )}
      {...props}
    >
      {children}
      {isSelected ? <LuCheck className="w-4" /> : null}
    </CommandPrimitive.Item>
  )
}

export {
  Autocomplete,
  AutocompleteContent,
  AutocompleteGroup,
  AutocompleteItem,
  AutocompleteTrigger,
}

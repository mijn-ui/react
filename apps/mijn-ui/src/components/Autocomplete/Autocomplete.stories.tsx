import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteGroup,
  AutocompleteItem,
  AutocompleteTrigger,
} from "@/components/Autocomplete"
import AutocompleteSourceCode from "@/components/Autocomplete/Autocomplete.tsx?raw"
import AutocompleteExample from "@/components/Autocomplete/Examples/AutocompleteExample"
import AutocompleteWithScrollArea from "@/components/Autocomplete/Examples/AutocompleteExample2"
import AutocompleteWithScrollAreaSourceCode from "@/components/Autocomplete/Examples/AutocompleteExample2.tsx?raw"
import AutocompleteWithDialog from "@/components/Autocomplete/Examples/AutocompleteExample3"
import AutocompleteWithDialogSourceCode from "@/components/Autocomplete/Examples/AutocompleteExample3.tsx?raw"
import AutocompleteExampleSourceCode from "@/components/Autocomplete/Examples/AutocompleteExample.tsx?raw"
import { Input } from "@/components/Input"
import { ScrollArea } from "@/components/ScrollArea"
import { Meta, StoryObj } from "@storybook/react"
import { LuSearch } from "react-icons/lu"

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
]

const meta: Meta = {
  title: "Components/Autocomplete",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    value: "",
    onValueChange: () => {},
    emptyMessage: "No Frameworks found",
    placeholder: "Find Frameworks",
    loading: false,
    disabled: false,
    className: "",
  },
  argTypes: {
    value: {
      control: "select",
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Source_Code: Story = {
  render: (args) => (
    <Autocomplete value="" onValueChange={() => {}}>
      <AutocompleteTrigger asChild>
        <Input
          className="bg-surface"
          placeholder={args.placeholder}
          startIcon={LuSearch}
          disabled={args.disabled}
        />
      </AutocompleteTrigger>
      <AutocompleteContent
        loading={args.loading}
        emptyMessage={args.emptyMessage}
      >
        <ScrollArea className="flex max-h-96 w-full flex-col overflow-y-auto">
          <AutocompleteGroup>
            {FRAMEWORKS.map((framework) => (
              <AutocompleteItem key={framework} value={framework}>
                {framework}
              </AutocompleteItem>
            ))}
          </AutocompleteGroup>
        </ScrollArea>
      </AutocompleteContent>
    </Autocomplete>
  ),
  parameters: {
    docs: {
      source: {
        code: AutocompleteSourceCode,
      },
    },
  },
}

export const Example_Usage: Story = {
  render: () => <AutocompleteExample />,
  parameters: {
    docs: {
      source: {
        code: AutocompleteExampleSourceCode,
      },
    },
  },
}

export const With_Scroll_Area: Story = {
  render: () => <AutocompleteWithScrollArea />,
  parameters: {
    docs: {
      source: {
        code: AutocompleteWithScrollAreaSourceCode,
      },
    },
  },
}

export const With_Dialog: Story = {
  render: () => <AutocompleteWithDialog />,
  parameters: {
    docs: {
      source: {
        code: AutocompleteWithDialogSourceCode,
      },
    },
  },
}

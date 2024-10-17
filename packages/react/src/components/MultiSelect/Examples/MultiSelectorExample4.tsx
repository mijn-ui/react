import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";

import { Button } from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/MultiSelect/MultiSelect";
import { ScrollArea } from "@/components/ScrollArea";

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
  "Nest.js",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Backbone.js",
  "Meteor.js",
  "Django",
  "Flask",
  "Laravel",
  "Spring Boot",
  "Ruby on Rails",
  "Phoenix",
  "Gatsby.js",
  "Strapi",
  "Fastify",
  "Hapi.js",
  "AdonisJS",
];

const MultiSelectorWithDialog = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Dialog>
      <DialogTrigger>Open MultiSelector</DialogTrigger>
      <DialogContent className="gap-0">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <DialogTitle>User Information</DialogTitle>
        </div>
        <Input placeholder="Username" className="mt-4" />
        <Input placeholder="Email" className="mt-2" />
        <MultiSelector values={value} onValuesChange={setValue} loop>
          <MultiSelectorTrigger className="w-full">
            <div className="flex w-full items-center">
              <MultiSelectorInput
                placeholder="Select your framework"
                className="w-full"
              />
              <LuChevronsUpDown className="mr-2 size-4" />
            </div>
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <ScrollArea
              className="flex flex-col overflow-y-auto"
              style={{
                minHeight: "10rem",
                maxHeight:
                  "calc(var(--radix-popover-content-available-height) - 2rem)",
              }}
            >
              <MultiSelectorList>
                {FRAMEWORKS.map((framework) => (
                  <MultiSelectorItem key={framework} value={framework}>
                    {framework}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </ScrollArea>
          </MultiSelectorContent>
        </MultiSelector>

        <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose>Cancel</DialogClose>
          <DialogClose unstyled asChild>
            <Button>Add User</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { MultiSelectorWithDialog };

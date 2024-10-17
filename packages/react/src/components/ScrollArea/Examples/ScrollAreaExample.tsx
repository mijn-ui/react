import React from "react";

import { ScrollArea } from "@/components/ScrollArea";
import { Separator } from "@/components/Separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaExample = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border bg-surface">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export { ScrollAreaExample };

import React from "react";
import { Button } from "@mijn-ui/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react/components/card";
import { LuArrowUpRight, LuPlus } from "react-icons/lu";

const CardExample = () => {
  return (
    <Card className="relative max-w-60">
      <CardHeader>
        <Button
          variant={"text"}
          color={"accent"}
          size={"icon"}
          className="rounded-lg bg-accent p-0 text-disabled-text sm:h-12 sm:w-12"
          asChild
        >
          <span>
            <LuPlus className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
        </Button>

        <div className="absolute right-4 top-4 text-disabled-text">
          <LuArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-base">Users</CardTitle>
        <CardDescription>Manage user accounts and permissions.</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardExample;

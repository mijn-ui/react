import React from "react";
import { Button } from "@mijn-ui/react/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mijn-ui/react/components/card";
import { IoBagOutline } from "react-icons/io5";

const StatsCardExample = () => {
  return (
    <Card className="max-w-44">
      <CardHeader className="px-5 pb-5 sm:px-6 sm:pb-4">
        <Button color="neutral" size={"icon"} className="rounded-full p-0 sm:h-12 sm:w-12">
          <IoBagOutline className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </CardHeader>

      <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col gap-1">
        <CardDescription>Total Sales</CardDescription>
        <CardTitle className="text-xl font-medium sm:text-2xl">$75,890.75</CardTitle>
        <p className="text-xs font-normal text-disabled-text">
          <span className="text-success">+128%</span> from June
        </p>
      </CardContent>
    </Card>
  );
};

export default StatsCardExample;

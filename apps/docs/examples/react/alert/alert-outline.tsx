import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@mijn-ui/react/components/alert";
import { MdErrorOutline } from "react-icons/md";

const AlertOutline = () => {
  return (
    <div className="flex w-full items-center justify-center flex-wrap gap-4">
      {/* ----------------------------- Default ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"outline"}>
        <AlertIcon>
          {" "}
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a outline default Alert.</AlertDescription>
      </Alert>

      {/* ----------------------------- Success ---------------------------- */}
      <Alert className="w-full max-w-lg" status={"success"} variant={"outline"}>
        <AlertIcon>
          {" "}
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>This is a outline Success Alert.</AlertDescription>
      </Alert>

      {/* ----------------------------- Warning ---------------------------- */}
      <Alert className="w-full max-w-lg" status={"warning"} variant={"outline"}>
        <AlertIcon>
          {" "}
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a outline Warning Alert.</AlertDescription>
      </Alert>

      {/* ----------------------------- Danger ---------------------------- */}
      <Alert className="w-full max-w-lg" status={"danger"} variant={"outline"}>
        <AlertIcon>
          {" "}
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>This is a outline Danger Alert.</AlertDescription>
      </Alert>

      {/* ------------------------------ Info ----------------------------- */}
      <Alert className="w-full max-w-lg" status={"info"} variant={"outline"}>
        <AlertIcon>
          {" "}
          <MdErrorOutline />
        </AlertIcon>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is a outline Info Alert.</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertOutline;

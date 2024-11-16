"use client";

import React from "react";
import { Button } from "@mijn-ui/react/components/button";
import { buttonStyles } from "@mijn-ui/react/components/button";
import { Checkbox } from "@mijn-ui/react/components/checkbox";
import { Label } from "@mijn-ui/react/components/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@mijn-ui/react/components/radio-group";
import { VariantProps } from "class-variance-authority";

type ButtonOptionsType = {
  unstyled: boolean;
  variant: VariantProps<typeof buttonStyles>["variant"];
  loading: boolean;
  disabled: boolean;
  color: VariantProps<typeof buttonStyles>["color"];
  size: VariantProps<typeof buttonStyles>["size"];
  radius: VariantProps<typeof buttonStyles>["radius"];
};

const CheckboxWithLabel = ({
  id,
  checked,
  onCheckedChange,
  label,
}: {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    <Checkbox
      id={id}
      size={"sm"}
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
    <Label className="text-sm" htmlFor={id}>
      {label}
    </Label>
  </div>
);

const RadioGroupWithOptions = ({
  defaultValue,
  value,
  onValueChange,
  label,
  options,
}: {
  defaultValue: string;
  value: string;
  onValueChange: (value: string) => void;
  label: string;
  options: { value: string; id: string }[];
}) => (
  <RadioGroup
    className="sm:min-w-24"
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
  >
    <p className="text-sm">{label}</p>
    {options.map((option) => (
      <div className="flex items-center space-x-2" key={option.id}>
        <RadioGroupItem value={option.value} id={option.id} />
        <Label htmlFor={option.id}>{option.value}</Label>
      </div>
    ))}
  </RadioGroup>
);

const KeyFeaturesPlayground = () => {
  const [buttonOptions, setButtonOptions] = React.useState<ButtonOptionsType>({
    unstyled: false,
    variant: "filled",
    loading: false,
    disabled: false,
    color: "primary",
    size: "md",
    radius: "md",
  });

  const handleChange = (key: string, value: boolean | string) => {
    setButtonOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <figure className="w-full not-prose">
      <figcaption className="text-base mb-3">Try it here!</figcaption>

      <div className="w-full flex-col sm:flex-row rounded-md overflow-hidden flex items-center border h-80">
        <div className="bg-main min-h-32 flex-auto h-full flex items-center justify-center">
          <Button
            unstyled={buttonOptions.unstyled}
            loading={buttonOptions.loading}
            disabled={buttonOptions.disabled}
            /* eslint-disable-next-line */
            // @ts-expect-error
            color={buttonOptions.color}
            variant={buttonOptions.variant}
            radius={buttonOptions.radius}
            size={buttonOptions.size}
          >
            {buttonOptions.size === "icon" ? "M" : "MijnUI"}
          </Button>
        </div>

        <div className="bg-surface w-full flex-grow xl:flex-initial sm:max-w-80 xl:max-w-none xl:w-1/2 h-full p-5 flex flex-col gap-4 items-center">
          <div className="flex items-center gap-5 sm:w-full">
            <CheckboxWithLabel
              id="unstyled"
              checked={buttonOptions.unstyled}
              onCheckedChange={() =>
                handleChange("unstyled", !buttonOptions.unstyled)
              }
              label="Unstyled"
            />

            <CheckboxWithLabel
              id="loading"
              checked={buttonOptions.loading}
              onCheckedChange={() =>
                handleChange("loading", !buttonOptions.loading)
              }
              label="Loading"
            />

            <CheckboxWithLabel
              id="disabled"
              checked={buttonOptions.disabled}
              onCheckedChange={() =>
                handleChange("disabled", !buttonOptions.disabled)
              }
              label="Disabled"
            />
          </div>

          <div className="flex items-start flex-wrap h-full max-h-32 pb-4 sm:pb-0 overflow-y-auto sm:overflow-hidden sm:max-h-none gap-x-6 sm:gap-x-4">
            <RadioGroupWithOptions
              defaultValue="filled"
              value={buttonOptions.variant || "filled"}
              onValueChange={(value) => handleChange("variant", value)}
              label="Variant"
              options={[
                { value: "filled", id: "filled" },
                { value: "outline", id: "outline" },
                { value: "text", id: "text" },
              ]}
            />

            <RadioGroupWithOptions
              defaultValue="primary"
              value={buttonOptions.color || "primary"}
              onValueChange={(value) => handleChange("color", value)}
              label="Colors"
              options={[
                { value: "primary", id: "primary" },
                { value: "neutral", id: "neutral" },
                { value: "accent", id: "accent" },
                { value: "danger", id: "danger" },
              ]}
            />

            <RadioGroupWithOptions
              defaultValue="md"
              value={buttonOptions.radius || "md"}
              onValueChange={(value) => handleChange("radius", value)}
              label="Radius"
              options={[
                { value: "sm", id: "radius-sm" },
                { value: "md", id: "radius-md" },
                { value: "lg", id: "radius-lg" },
                { value: "full", id: "radius-full" },
              ]}
            />

            <RadioGroupWithOptions
              defaultValue="md"
              value={buttonOptions.size || "md"}
              onValueChange={(value) => handleChange("size", value)}
              label="Size"
              options={[
                { value: "sm", id: "size-sm" },
                { value: "md", id: "size-md" },
                { value: "lg", id: "size-lg" },
                { value: "icon", id: "size-icon" },
              ]}
            />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default KeyFeaturesPlayground;

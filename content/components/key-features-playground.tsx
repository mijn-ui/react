"use client"

import React from "react"
import { Button } from "@mijn-ui/components/button"
import { buttonStyles } from "@mijn-ui/components/button"
import { Checkbox } from "@mijn-ui/components/checkbox"
import { Label } from "@mijn-ui/components/label"
import { RadioGroup, RadioGroupItem } from "@mijn-ui/components/radio-group"
import { VariantProps } from "class-variance-authority"

type ButtonOptionsType = {
  unstyled: boolean
  variant: VariantProps<typeof buttonStyles>["variant"]
  loading: boolean
  disabled: boolean
  color: VariantProps<typeof buttonStyles>["color"]
  size: VariantProps<typeof buttonStyles>["size"]
  radius: VariantProps<typeof buttonStyles>["radius"]
}

const KeyFeaturesPlayground = () => {
  const [buttonOptions, setButtonOptions] = React.useState<ButtonOptionsType>({
    unstyled: false,
    variant: "filled",
    loading: false,
    disabled: false,
    color: "primary",
    size: "md",
    radius: "md",
  })

  console.log(buttonOptions.color)

  const handleChange = (key: string, value: boolean | string) => {
    console.log("reached")
    setButtonOptions((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <figure className="h-80 preview w-full not-prose">
      <figcaption className="text-base mb-3">Try it here!</figcaption>

      <div className="w-full h-full rounded-md overflow-hidden flex items-center border">
        <div className="bg-main w-1/2 h-full flex items-center justify-center">
          <Button
            unstyled={buttonOptions.unstyled}
            loading={buttonOptions.loading}
            disabled={buttonOptions.disabled}
            // need to fix types issues, not important but I'll fix it later
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

        <div className="bg-surface w-1/2 h-full p-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={buttonOptions.unstyled}
                onCheckedChange={() =>
                  handleChange("unstyled", !buttonOptions.unstyled)
                }
                id="unstyled"
                size={"sm"}
              />
              <Label className="text-sm" htmlFor="unstyled">
                Unstyled
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="loading"
                size={"sm"}
                checked={buttonOptions.loading}
                onCheckedChange={() =>
                  handleChange("loading", !buttonOptions.loading)
                }
              />
              <Label className="text-sm" htmlFor="loading">
                Loading
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="disabled"
                size={"sm"}
                checked={buttonOptions.disabled}
                onCheckedChange={() =>
                  handleChange("disabled", !buttonOptions.disabled)
                }
              />
              <Label className="text-sm" htmlFor="disabled">
                Disabled
              </Label>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div>
              {" "}
              <RadioGroup
                className="mt-4"
                defaultValue="filled"
                value={buttonOptions.variant || "filled"}
                onValueChange={(value) => handleChange("variant", value)}
              >
                <p className="text-sm">Variant</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="filled" id="filled" />
                  <Label htmlFor="filled">filled</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outline" id="outline" />
                  <Label htmlFor="outline">outline</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="text" id="text" />
                  <Label htmlFor="text">text</Label>
                </div>
              </RadioGroup>
              <RadioGroup
                className="mt-4"
                defaultValue="primary"
                value={buttonOptions.color || "primary"}
                onValueChange={(value) => handleChange("color", value)}
              >
                <p className="text-sm">Colors</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="primary" id="primary" />
                  <Label htmlFor="primary">primary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral">neutral</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="accent" id="accent" />
                  <Label htmlFor="accent">accent</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="danger" id="danger" />
                  <Label htmlFor="danger">danger</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center w-full gap-11">
              <RadioGroup
                className="mt-4"
                defaultValue="md"
                value={buttonOptions.radius || "md"}
                onValueChange={(value) => handleChange("radius", value)}
              >
                <p className="text-sm">Radius</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sm" id="radius-sm" />
                  <Label htmlFor="radius-sm">sm</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="md" id="radius-md" />
                  <Label htmlFor="radius-md">md</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lg" id="radius-lg" />
                  <Label htmlFor="radius-lg">lg</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full" id="radius-full" />
                  <Label htmlFor="radius-full">full</Label>
                </div>
              </RadioGroup>

              <RadioGroup
                className="mt-4"
                defaultValue="md"
                value={buttonOptions.size || "md"}
                onValueChange={(value) => handleChange("size", value)}
              >
                <p className="text-sm">Size</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sm" id="size-sm" />
                  <Label htmlFor="size-sm">sm</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="md" id="size-md" />
                  <Label htmlFor="size-md">md</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lg" id="size-lg" />
                  <Label htmlFor="size-lg">lg</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="icon" id="size-icon" />
                  <Label htmlFor="size-icon">icon</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default KeyFeaturesPlayground

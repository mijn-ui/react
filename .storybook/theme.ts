/* eslint-disable */
// @ts-nocheck
import logoUrl from "../public/logo.png"
import { create } from "@storybook/theming/create"

export default create({
  base: "dark",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Mijn UI",
  brandUrl: "https://mijnui.com",
  brandImage: process.env.NODE_ENV === "production" ? logoUrl : "/logo.png",
  brandTarget: "_self",
})

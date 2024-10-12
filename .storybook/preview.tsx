import * as React from "react"
import { Inter } from "next/font/google"
import "../app/global.css"
import { withThemeByClassName } from "@storybook/addon-themes"
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

const inter = Inter({
  subsets: ["latin"],
})

const preview: Preview = {
  parameters: {
    theme: themes.dark,
    options: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`flex min-h-64 items-center justify-center bg-main p-5 sm:min-h-96, ${inter.className}`}
      >
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview

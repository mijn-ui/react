import { Preview } from "@storybook/react"

const largePreview: Preview = {
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-center justify-center bg-main p-5 sm:min-h-96">
        <Story />
      </div>
    ),
  ],
}

export default largePreview

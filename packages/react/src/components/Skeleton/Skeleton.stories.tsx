import { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/Skeleton";
import { SkeletonDemo } from "@/components/Skeleton/Examples/SkeletonExample1";
import SkeletonExample1SourceCode from "@/components/Skeleton/Examples/SkeletonExample1.tsx?raw";
import { SkeletonCard } from "@/components/Skeleton/Examples/SkeletonExample2";
import SkeletonExample2SourceCode from "@/components/Skeleton/Examples/SkeletonExample2.tsx?raw";
import SkeletonSourceCode from "@/components/Skeleton/Skeleton.tsx?raw";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: () => {
    return <SkeletonDemo />;
  },
  parameters: {
    docs: {
      source: {
        code: SkeletonSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => {
    return <SkeletonDemo />;
  },
  parameters: {
    docs: {
      source: {
        code: SkeletonExample1SourceCode,
      },
    },
  },
};

export const Skeleton_Card: Story = {
  render: () => {
    return <SkeletonCard />;
  },
  parameters: {
    docs: {
      source: {
        code: SkeletonExample2SourceCode,
      },
    },
  },
};

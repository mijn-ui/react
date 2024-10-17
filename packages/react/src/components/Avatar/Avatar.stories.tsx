import { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/Avatar/Avatar";
import AvatarSourceCode from "@/components/Avatar/Avatar.tsx?raw";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    src: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    fallback: "A",
    alt: "Anthony",
    size: "md",
    unstyled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Avatar size={args.size} unstyled={args.unstyled}>
        <AvatarImage alt={args.alt} src={args.src} />
        <AvatarFallback>{args.fallback}</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    docs: {
      source: {
        code: AvatarSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <Avatar size={args.size}>
        <AvatarImage src={args.src} />
        <AvatarFallback>{args.fallback}</AvatarFallback>
      </Avatar>
    );
  },
};

export const Avatar_Group: Story = {
  render: (args) => {
    return (
      <AvatarGroup {...args} className="flex items-center justify-center">
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            }
          />
          <AvatarFallback>Anthony</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
            }
          />
          <AvatarFallback>Susie</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <AvatarFallback>John Doe</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <AvatarFallback>John Doe</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <AvatarFallback>John Doe</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <AvatarFallback>John Doe</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
  },
  args: {
    max: 3,
  },
};

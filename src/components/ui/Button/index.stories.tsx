import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "button",
  },
};

export const Large: Story = {
  args: {
    children: "button",
    variant: "outlined",
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    children: "button",
    variant: "outlined",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "button",
    variant: "contained",
    size: "small",
  },
};

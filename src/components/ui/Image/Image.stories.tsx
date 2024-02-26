import { Image } from "./Image";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Image> = {
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "images/am1.png",
    alt: "alt",
  },
};

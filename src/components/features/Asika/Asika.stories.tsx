import { Asika } from "./Asika";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Asika> = {
  component: Asika,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Asika>;

export const Default: Story = {
  args: {
    status: 8,
  },
};

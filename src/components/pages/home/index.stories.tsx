import { HomePage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
};

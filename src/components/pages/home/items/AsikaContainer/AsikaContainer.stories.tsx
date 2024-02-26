import { AsikaContainer } from "./AsikaContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AsikaContainer> = {
  component: AsikaContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="h-screen">
      <AsikaContainer {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof AsikaContainer>;

export const Default: Story = {
  args: {
    status: 3,
  },
};

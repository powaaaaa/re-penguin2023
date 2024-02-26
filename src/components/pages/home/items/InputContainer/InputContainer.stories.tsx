import { InputContainer } from "./InputContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputContainer> = {
  component: InputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="h-screen">
      <InputContainer {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {
  args: {
    userName: "powaaaaa",
  },
};

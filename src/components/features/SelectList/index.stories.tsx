import { Meta, StoryObj } from "@storybook/react";
import { SelectList } from ".";

const meta: Meta<typeof SelectList> = {
  component: SelectList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectList>;

export const Default: Story = {
  args: {},
};

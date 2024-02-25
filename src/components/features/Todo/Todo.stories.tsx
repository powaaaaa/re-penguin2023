import { Todo } from "./Todo";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Todo> = {
  component: Todo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Todo>;

export const Default: Story = {
  args: {
    todo: {
      content: "テキスト",
      difficulty: "かんたん",
      motivation: "そこそこ",
      category: "アイデア",
    },
  },
};

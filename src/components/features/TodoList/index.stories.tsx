import { TodoList } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    todos: [
      {
        content: "テキスト",
        difficulty: "かんたん",
        motivation: "そこそこ",
        category: "アイデア",
      },
      {
        content: "テキスト",
        difficulty: "かんたん",
        motivation: "そこそこ",
        category: "アイデア",
      },
      {
        content: "テキスト",
        difficulty: "かんたん",
        motivation: "そこそこ",
        category: "アイデア",
      },
      {
        content: "テキスト",
        difficulty: "かんたん",
        motivation: "そこそこ",
        category: "アイデア",
      },
    ],
  },
};

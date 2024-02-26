import { TodoContainer } from "./TodoContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoContainer> = {
  component: TodoContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="h-screen">
      <TodoContainer {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof TodoContainer>;

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

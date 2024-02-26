import { HomePage } from "./homePage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   render: (args) => (
  //     <div className="h-screen">
  //       <InputContainer {...args} />
  //     </div>
  //   ),
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
};

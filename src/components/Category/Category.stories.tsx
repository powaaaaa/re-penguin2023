import { Category } from "./Category";
import { FaRegFaceLaughSquint } from "react-icons/fa6";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Category> = {
  component: Category,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    label: "label",
    icon: <FaRegFaceLaughSquint />,
  },
};

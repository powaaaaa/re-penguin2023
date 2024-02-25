import { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";
import { categoryList } from "../../../util/categoryList";

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    catName: "difficulty",
    catArr: categoryList.difficulty,
  },
};

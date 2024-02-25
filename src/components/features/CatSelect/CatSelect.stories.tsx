import { Meta, StoryObj } from "@storybook/react";
import { CatSelect } from "./CatSelect";
import { categoryList } from "../../../util/categoryList";

const meta: Meta<typeof CatSelect> = {
  component: CatSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CatSelect>;

export const Default: Story = {
  args: {
    catName: "difficulty",
    catArr: categoryList.difficulty,
  },
};

import { RadioItem } from "./RadioItem";
import { FaRegFaceLaughSquint } from "react-icons/fa6";

import type { Meta, StoryObj } from "@storybook/react";
import { CustomIcon } from "../../util/CustomIcon";

const meta: Meta<typeof RadioItem> = {
  component: RadioItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioItem>;

export const Default: Story = {
  args: {
    value: "value",
    selectItem: "selectItem",
    defaultChecked: "default",
    handleChange: () => {
      console.log("handleChange run");
    },
    icon: <CustomIcon size="20px" element={<FaRegFaceLaughSquint />} />,
  },
};

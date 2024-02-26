import { FC } from "react";
import { RadioItem } from "../../ui/RadioItem/RadioItem";
import { CategoryType } from "../../../util/type";

type Props = {
  catName: string;
  catArr: CategoryType[];
  value: string;
  handleChange: () => void;
};

export const SelectBox: FC<Props> = ({
  catName,
  catArr,
  value,
  handleChange,
}) => {
  return (
    <div className="flex max-w-80 px-12 py-5 bg-[#bfe7e5] rounded-lg">
      <p className="pr-10">{catName}</p>
      <div className="flex flex-col">
        {catArr.map((item) => (
          <RadioItem
            key={item.name}
            className="pb-3 last:pb-0"
            name={catName}
            value={value}
            selectItem={item.name}
            defaultChecked={catArr[0].name}
            icon={item.icon}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

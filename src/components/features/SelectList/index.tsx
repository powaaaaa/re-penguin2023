import { ChangeEvent, FC } from "react";
import { categoryList } from "../../../util/categoryList";
import { SelectBox } from "../SelectBox";

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SelectList: FC<Props> = ({ handleChange }) => {
  const selects = [
    { catName: "difficulty", catArr: categoryList.difficulty },
    { catName: "motivation", catArr: categoryList.motivation },
    { catName: "category", catArr: categoryList.category },
  ];

  return (
    <div className="grid gap-y-5">
      {selects.map((select, index) => (
        <SelectBox
          key={index}
          value={select.catName}
          catName={select.catName}
          catArr={select.catArr}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

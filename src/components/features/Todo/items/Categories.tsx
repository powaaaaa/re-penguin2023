import { FC } from "react";
import { CustomIcon } from "../../../../util/CustomIcon";
import { categoryList } from "../../../../util/categoryList";
import { Category } from "../../../ui/Category/Category";
import { CategoryType } from "../../../../util/type";

type Props = {
  dif: string;
  mot: string;
  cat: string;
};

export const Categories: FC<Props> = ({ dif, mot, cat }) => {
  const difficulty = categoryList.difficulty;
  const motivation = categoryList.motivation;
  const category = categoryList.category;

  const choseIcon = (name: string, arr: CategoryType[]) => {
    return name === arr[0].name ? (
      <CustomIcon element={arr[0].icon} size="30px" />
    ) : name === arr[1].name ? (
      <CustomIcon element={arr[1].icon} size="30px" />
    ) : (
      <CustomIcon element={arr[2].icon} size="30px" />
    );
  };

  return (
    <li className="flex gap-7">
      <Category label="difficulty" icon={choseIcon(dif, difficulty)} />
      <Category label="motivation" icon={choseIcon(mot, motivation)} />
      <Category label="category" icon={choseIcon(cat, category)} />
    </li>
  );
};

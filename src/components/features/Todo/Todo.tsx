import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import { Categories } from "./items/Categories";
import { TodoType } from "../../../util/type";

type Props = {
  todo: TodoType;
  handleClick: () => void;
};

export const Todo: FC<Props> = ({ todo, handleClick }) => {
  return (
    <div className="flex px-5 py-3 bg-[#bfe7e5] rounded-lg">
      <div className="flex flex-col pr-8">
        <p className="pb-3">{todo.content}</p>
        <Categories
          dif={todo.difficulty}
          mot={todo.motivation}
          cat={todo.category}
        />
      </div>
      <Button variant="contained" size="small" onClick={handleClick}>
        完了
      </Button>
    </div>
  );
};

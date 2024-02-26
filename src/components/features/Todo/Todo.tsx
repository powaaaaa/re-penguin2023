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
    <div className="flex max-w-[356px] max-h-[118px] px-5 py-3 bg-[#bfe7e5] rounded-lg">
      <div className="flex flex-col pr-8">
        <p className="max-w-56 pb-3 truncate">{todo.content}</p>
        <Categories
          dif={todo.difficulty}
          mot={todo.motivation}
          cat={todo.category}
        />
      </div>
      <Button
        className="min-w-[46px]"
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        完了
      </Button>
    </div>
  );
};

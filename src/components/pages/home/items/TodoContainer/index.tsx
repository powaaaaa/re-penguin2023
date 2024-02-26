import { FC } from "react";
import { TodoType } from "../../../../../util/type";
import { TodoList } from "../../../../features/TodoList";

type Props = {
  todos: TodoType[];
  className?: string;
  handleDoneClick: (todo: TodoType) => void;
};

export const TodoContainer: FC<Props> = ({
  todos,
  className,
  handleDoneClick,
}) => {
  return (
    <div
      className={`flex justify-center px-9 py-16 h-full bg-[#D9EFEC] rounded-lg ${className}`}
    >
      <div className="max-w-[374px] w-full">
        <p className="text-2xl font-semibold pb-14">Your Todo!!</p>
        <TodoList todos={todos} handleClick={handleDoneClick} />
      </div>
    </div>
  );
};

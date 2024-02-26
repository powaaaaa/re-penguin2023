import { FC } from "react";
import { TodoType } from "../../../../../util/type";
import { TodoList } from "../../../../features/TodoList";

type Props = {
  todos: TodoType[];
  className?: string;
  handleClick: () => void;
};

export const TodoContainer: FC<Props> = ({ todos, className, handleClick }) => {
  return (
    <div
      className={`flex justify-center px-9 py-16 h-full bg-[#D9EFEC] rounded-lg ${className}`}
    >
      <div>
        <p className="text-2xl font-semibold pb-14">Your Todo!!</p>
        <TodoList todos={todos} handleClick={handleClick} />
      </div>
    </div>
  );
};

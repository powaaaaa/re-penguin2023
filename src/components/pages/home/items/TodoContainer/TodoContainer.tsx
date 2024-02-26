import { FC } from "react";
import { TodoType } from "../../../../../util/type";
import { TodoList } from "../../../../features/TodoList/TodoList";

type Props = {
  todos: TodoType[];
  className?: string;
  handleClick: () => void;
};

export const TodoContainer: FC<Props> = ({ todos, className, handleClick }) => {
  return (
    <div className={`px-9 py-10 h-full bg-[#D9EFEC] rounded-lg ${className}`}>
      <p className="text-2xl pb-9">Your Todo!!</p>
      <TodoList todos={todos} handleClick={handleClick} />
    </div>
  );
};

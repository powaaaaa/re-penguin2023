import { FC } from "react";
import { TodoType } from "../../../util/type";
import { Todo } from "../Todo";

type Props = {
  todos: TodoType[];
  handleClick: () => void;
};

export const TodoList: FC<Props> = ({ todos, handleClick }) => {
  return (
    <div className="overflow-auto max-h-[808px] grid gap-y-5">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} handleClick={handleClick} />
      ))}
    </div>
  );
};

import { FC } from "react";
import { TodoType } from "../../../util/type";
import { Todo } from "../Todo/Todo";

type Props = {
  todos: TodoType[];
  handleClick: () => void;
};

export const TodoList: FC<Props> = ({ todos, handleClick }) => {
  return (
    <div className="overflow-auto max-h-[625px] grid gap-y-3">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} handleClick={handleClick} />
      ))}
    </div>
  );
};

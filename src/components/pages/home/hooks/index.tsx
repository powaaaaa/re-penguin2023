import { ChangeEvent, useState } from "react";
import { TodoType } from "../../../../util/type";

type IUseHomePage = {
  todos: TodoType[];
  inputTodo: TodoType;
  handleContentChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClick: () => void;
  handleDoneClick: (todo: TodoType) => void;
};

export const useHomePage = (): IUseHomePage => {
  const storage = localStorage.getItem("todos");
  const data: TodoType[] = storage ? JSON.parse(storage) : [];
  const [inputTodo, setInputTodo] = useState<TodoType>({
    content: "",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  });
  const [todos, setTodos] = useState<TodoType[]>(data);

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTodo({
      ...inputTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitClick = () => {
    if (inputTodo.content === "") {
      alert("Todoを入力してね");
      return;
    }
    setTodos([
      ...todos,
      {
        content: inputTodo.content,
        difficulty: inputTodo.difficulty,
        motivation: inputTodo.motivation,
        category: inputTodo.category,
      },
    ]);
    setInputTodo({
      content: "",
      difficulty: "かんたん",
      motivation: "そこそこ",
      category: "アイデア",
    });
  };

  const handleDoneClick = (todo: TodoType) => {
    setTodos(todos.filter((t: TodoType) => t.content !== todo.content));
  };

  return {
    todos,
    inputTodo,
    handleContentChange,
    handleSubmitClick,
    handleDoneClick,
  };
};

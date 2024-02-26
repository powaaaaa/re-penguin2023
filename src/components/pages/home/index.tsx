import { useHomePage } from "./hooks";
import { AsikaContainer } from "./items/AsikaContainer";
import { InputContainer } from "./items/InputContainer";
import { TodoContainer } from "./items/TodoContainer";

export const HomePage = () => {
  const {
    todos,
    inputTodo,
    handleContentChange,
    handleSubmitClick,
    handleDoneClick,
  } = useHomePage();

  return (
    <main className="flex p-8 space-x-8 h-screen">
      <InputContainer
        className="basis-1/3"
        userName="powaaaaa"
        value={inputTodo.content}
        handleContentChange={handleContentChange}
        handleSubmitClick={handleSubmitClick}
      />
      <AsikaContainer className="basis-1/3" status={1} />
      <TodoContainer
        className="basis-1/3"
        todos={todos}
        handleDoneClick={handleDoneClick}
      />
    </main>
  );
};

import { AsikaContainer } from "./items/AsikaContainer/AsikaContainer";
import { InputContainer } from "./items/InputContainer/InputContainer";
import { TodoContainer } from "./items/TodoContainer/TodoContainer";

const todos = [
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
  {
    content: "テキスト",
    difficulty: "かんたん",
    motivation: "そこそこ",
    category: "アイデア",
  },
];

export const HomePage = () => {
  return (
    <main className="flex p-8 space-x-8 h-screen">
      <InputContainer
        className="basis-1/3"
        userName="powaaaaa"
        handleClick={() => console.log()}
        handleChange={() => console.log()}
      />
      <AsikaContainer className="basis-1/3" status={1} />
      <TodoContainer
        className="basis-1/3"
        todos={todos}
        handleClick={() => console.log()}
      />
    </main>
  );
};

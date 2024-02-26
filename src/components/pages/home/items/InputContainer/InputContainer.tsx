import { FC } from "react";
import { SelectList } from "../../../../features/SelectList/SelectList";
import { Button } from "../../../../ui/Button/Button";

type Props = {
  userName: string;
  className?: string;
  handleChange: () => void;
  handleClick: () => void;
};

export const InputContainer: FC<Props> = ({
  userName,
  className,
  handleChange,
  handleClick,
}) => {
  return (
    <form className={`px-9 py-10 h-full bg-[#D9EFEC] rounded-lg ${className}`}>
      <p className="pb-9 text-2xl font-bold">{userName}</p>

      <div className="flex flex-col pb-10">
        <p className="pb-4">Todoを入力してね</p>
        <input
          type="text"
          className="pl-2"
          name="content"
          //   value={inputTodo.content}
          //   onChange={handleChange}
          placeholder="がんばれ！"
          autoFocus
        />
      </div>

      <div className="pb-9">
        <p className="pb-4">どんなTodo??</p>
        <SelectList handleChange={handleChange} />
      </div>

      <div className="flex justify-center">
        <Button onClick={handleClick} variant="outlined" size="medium">
          追加
        </Button>
      </div>
    </form>
  );
};

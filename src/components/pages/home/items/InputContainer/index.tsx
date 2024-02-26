import { FC } from "react";
import { SelectList } from "../../../../features/SelectList";
import { Button } from "../../../../ui/Button";

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
    <form
      className={`flex justify-center px-9 py-16 h-full bg-[#D9EFEC] rounded-lg ${className}`}
    >
      <div>
        <p className="pb-14 text-2xl font-bold">{userName}</p>

        <div className="flex flex-col pb-16">
          <p className="pb-8">Todoを入力してね</p>
          <input
            type="text"
            className="pl-2 max-w-80 rounded-md"
            name="content"
            //   value={inputTodo.content}
            //   onChange={handleChange}
            placeholder="がんばれ！"
            autoFocus
          />
        </div>

        <div className="pb-14">
          <p className="pb-8">どんなTodo??</p>
          <SelectList handleChange={handleChange} />
        </div>

        <div className="flex justify-center">
          <Button onClick={handleClick} variant="outlined" size="medium">
            追加
          </Button>
        </div>
      </div>
    </form>
  );
};

import { ChangeEvent, FC } from "react";
import { SelectList } from "../../../../features/SelectList";
import { Button } from "../../../../ui/Button";

type Props = {
  userName: string;
  value: string;
  className?: string;
  handleContentChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClick: () => void;
};

export const InputContainer: FC<Props> = ({
  userName,
  value,
  className,
  handleContentChange,
  handleSubmitClick,
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
            value={value}
            onChange={handleContentChange}
            placeholder="がんばれ！"
            autoFocus
          />
        </div>

        <div className="pb-14">
          <p className="pb-8">どんなTodo??</p>
          <SelectList handleChange={handleContentChange} />
        </div>

        <div className="flex justify-center">
          <Button onClick={handleSubmitClick} variant="outlined" size="medium">
            追加
          </Button>
        </div>
      </div>
    </form>
  );
};

import { ChangeEvent, FC, ReactElement } from "react";

type Props = {
  /** 入力値 */
  value: string;
  /** 選択肢の値 */
  selectItem: string;
  /** 仮置き */
  defaultChecked: string;
  name: string;
  icon: ReactElement;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const RadioItem: FC<Props> = ({
  value,
  selectItem,
  defaultChecked,
  name,
  icon,
  handleChange,
  //! ComponentPropsWithoutRef<'div'>でなぜかエラーが出た
  className,
}) => {
  return (
    <label
      htmlFor={selectItem}
      className={`flex items-center min-w-[120px] ${className}`}
    >
      <input
        type="radio"
        style={{ marginRight: "4px" }}
        id={selectItem}
        name={name}
        value={value}
        // checked={}
        defaultChecked={selectItem === defaultChecked}
        onChange={handleChange}
      />
      {/* `className="pr-1"`が効かない */}
      <span style={{ paddingRight: "4px" }}>{selectItem}</span>
      <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
    </label>
  );
};

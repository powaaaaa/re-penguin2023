import { ComponentPropsWithoutRef, FC, ReactElement } from "react";

type Props = {
  label: string;
  icon: ReactElement;
} & ComponentPropsWithoutRef<"div">;

export const Category: FC<Props> = ({ label, icon, ...props }) => {
  return (
    <div className={props.className}>
      <label className="text-sm pb-2 flex justify-center">{label}</label>
      <div className="flex justify-center">{icon}</div>
    </div>
  );
};

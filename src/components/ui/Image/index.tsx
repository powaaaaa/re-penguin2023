import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"img">;

export const Image: FC<Props> = ({ ...props }) => {
  return (
    <img
      className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2] w-16 md:w-32 lg:w-48"
      {...props}
    />
  );
};

import { FC, ReactElement } from "react";
import { IconContext } from "react-icons";

type Props = {
  element: ReactElement;
  size: string;
};

export const CustomIcon: FC<Props> = ({ element, size }) => (
  <IconContext.Provider value={{ size: size, color: "#3B3838" }}>
    {element}
  </IconContext.Provider>
);

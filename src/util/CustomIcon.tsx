import { FC, ReactElement } from "react";
import { IconContext } from "react-icons";

type Props = {
  element: ReactElement;
};

export const CustomIcon: FC<Props> = ({ element }) => (
  <IconContext.Provider value={{ size: "20px", color: "#3B3838" }}>
    {element}
  </IconContext.Provider>
);

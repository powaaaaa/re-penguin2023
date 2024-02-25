import { ReactElement } from "react";

export type CategoryType = {
  name: string;
  icon: ReactElement;
};

export type CategoryList = {
  difficulty: CategoryType[];
  motivation: CategoryType[];
  category: CategoryType[];
};

export type TodoType = {
  content: string;
  difficulty: string;
  motivation: string;
  category: string;
};

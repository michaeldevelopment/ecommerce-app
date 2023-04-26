import { ReactNode } from "react";
import { categoriesType } from "./dataTypes";

export interface navbarProps {
  children: ReactNode;
}

export interface titleTextProps {
  titleText: categoriesType;
}

export interface productTextProps {
  isNew: boolean;
  name: string;
  description: string;
}

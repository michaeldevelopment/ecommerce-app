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

export interface iconSVGProps {
  className?: string;
  fill?: string;
}

export interface iconSVGBookmarkActionableProps extends iconSVGProps {
  onClick: () => void;
}

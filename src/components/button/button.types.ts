import type { ButtonHTMLAttributes } from "react";
import type { MovieGenres } from "../icon/icon.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: MovieGenres;
  selected: boolean;
}

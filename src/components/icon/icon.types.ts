export type MovieGenres =
  | "action"
  | "comedy"
  | "documentary"
  | "drama"
  | "horror"
  | "family";

export interface IconProps {
  name: MovieGenres;
  color: string;
}

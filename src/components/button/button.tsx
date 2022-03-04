import "../../styles/button.scss";

import { FC } from "react";

import Icon from "../icon/icon";

import type { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({
  iconName,
  title,
  selected,
  ...drilling
}) => (
  <button
    type="button"
    {...(selected && { className: "selected" })}
    {...drilling}
  >
    <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
    {title}
  </button>
);

export default Button;

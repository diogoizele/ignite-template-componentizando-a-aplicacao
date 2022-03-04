import "../../styles/sidebar.scss";
import { FC } from "react";

import Button from "../button/button";

import type { SideBarProps } from "./sideBar.types";

const SideBar: FC<SideBarProps> = ({
  genres,
  onClickButton,
  selectedGenreId,
}) => (
  <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map(({ id, name, title }) => (
        <Button
          key={String(id)}
          title={title}
          iconName={name}
          onClick={() => onClickButton(id)}
          selected={selectedGenreId === id}
        />
      ))}
    </div>
  </nav>
);

export default SideBar;

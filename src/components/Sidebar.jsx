import "../blocks/Sidebar.css";
import React from "react";
import avatar from "../assets/AvatarFalse.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

//SideBar displays the current user's username and avatar (still hardcoded).

const Sidebar = () => {
  const userName = "Patricia Tirado";

  return (
    <div className="sidebar">
      <img
        src={avatar}
        alt={`${userName}'s avatar`}
        className="sidebar__avatar"
      />
      <p className="sidebar__user-name">{userName}</p>
    </div>
  );
};

export default Sidebar;

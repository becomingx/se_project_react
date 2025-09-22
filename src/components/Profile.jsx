import "../blocks/Profile.css";
import React from "react";
import Sidebar from "./Sidebar.jsx";
import ClothesSection from "./ClothesSection.jsx";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

/*
The new Profile component will include two components inside:
SideBar displays the current user's username and avatar (still hardcoded).
ClothesSection displays all the clothing items from the current application state and includes a button that opens the AddItemModal component.
*/
/*profile__cards_list-temp_menu--open is now profile__header-menu--open
profile__cards_list-temp is now profile__header*/
const Profile = ({
  menu,
  weatherData,
  clothingItems,
  handleCardClick,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const userName = "Patricia Tirado";

  return (
    <div className="profile__content">

      <section className="profile__sidebar">
        <Sidebar/>
      </section>

      <section className="profile__clothes-section">
        <ClothesSection
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
      </section>
    </div>
  );
};

export default Profile;

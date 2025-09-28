import "../blocks/Profile.css";
import React from "react";
import AddItemModal from "./AddItemModal.jsx";
import Sidebar from "./Sidebar.jsx";
import ClothesSection from "./ClothesSection.jsx";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

const Profile = ({
  weatherData,
  clothingItems,
  handleCardClick,
  handleAddClick
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
          handleCardClick={handleCardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
};

export default Profile;

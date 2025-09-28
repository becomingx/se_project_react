import React from "react";
import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard.jsx";
import { defaultClothingItems } from "../utils/clothingItems.js";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

const ClothesSection = ({
  weatherData,
  clothingItems,
  handleAddClick,
  handleCardClick,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (

    <div className="clothes-section__container">
      <div className="clothes-section__header-info">
        <p className="clothes-section__header-writing">Your Items</p>
        <button
          type="button"
          className="clothes-section__add-btn"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>

      <ul className={"clothes-section__cards-list"}>
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ClothesSection;

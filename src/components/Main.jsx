import React from "react";
import WeatherCard from "./WeatherCard.jsx";
import { weatherCards } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";
import "../blocks/Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

const Main = ({ menu, weatherData, clothingItems, handleCardClick }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="content">
      {!menu && (
        <WeatherCard weatherData={weatherData} weatherCards={weatherCards} />
      )}
      <section className="cards__page-section">
        <div
          className={menu ? "cards__list-temp_menu-open" : "cards__list-temp"}
        >
          <p className="cards__list-temp--writing">
            Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
            {currentTemperatureUnit} / You may want to wear:
          </p>
        </div>

        <ul className={menu ? "cards__list_menu-open" : "cards__list"}>
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
      </section>
    </main>
  );
};

export default Main;

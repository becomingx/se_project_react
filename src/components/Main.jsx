import React from 'react'
import WeatherCard from "./WeatherCard.jsx";
import {defaultClothingItems, weatherCards} from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";

const Main = ({menu, weatherData, handleCardClick}) => {

    return (
      
      <main className= "content">
        {!menu &&
          (<WeatherCard
            weatherData = {weatherData}
            weatherCards = {weatherCards} 
            temp= {weatherData.temp}/>)
        }
        <section className= "cards__page-section"> 

          <div className= {menu ? "cards__list-temp_menu-open" : "cards__list-temp"}>
            <p className="cards__list-temp--writing">Today is {weatherData.temp} &deg; F / You may want to wear:</p>
          </div>

          <ul className={menu ? "cards__list_menu-open" : "cards__list"}>
            {defaultClothingItems
              .filter((item) => {
                return item.weather === weatherData.type;
              })
              .map((item) => {
                return (
                  <ItemCard key= {item._id} item={item} onCardClick={handleCardClick}/>
                );
              })
            }
          </ul>

        </section>
      </main>

    );
  };

export default Main;

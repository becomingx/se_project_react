import React from "react";
import { weatherCards } from "../utils/constants.js";
import "../blocks/WeatherCard.css";
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { useContext } from 'react';

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);

  const weatherCardsFilter = weatherCards.filter((card) => {
    return (
      card.day === weatherData.isDay &&
      card.condition.includes(weatherData.condition)
    );
  });

  const weatherCardUrl = weatherCardsFilter[0]?.url;
  return (
    <section className="weather__card">
       <p className="weather__card--temp">
        {weatherData.temp[currentTemperatureUnit]} &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherCardUrl}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;

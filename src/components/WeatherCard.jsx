import React from "react";
import { weatherCards } from "../utils/constants.js";
import "../blocks/WeatherCard.css";

const WeatherCard = ({ temp, weatherData }) => {
  const weatherCardsFilter = weatherCards.filter((card) => {
    return (
      card.day === weatherData.isDay &&
      card.condition.includes(weatherData.condition)
    );
  });

  const weatherCardUrl = weatherCardsFilter[0]?.url;
  return (
    <section className="weather__card">
      <p className="weather__card--temp"> {temp} &deg; F</p>
      <img
        src={weatherCardUrl}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;

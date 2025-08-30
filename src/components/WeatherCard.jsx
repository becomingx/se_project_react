import React from "react";
import "./index.css";
import {weatherCards} from "../utils/constants.js";

const WeatherCard = ({temp, weatherData}) => {
    const weatherCardsFilter = weatherCards.filter((card) => {
        return (
            card.day === weatherData.isDay && card.condition.includes(weatherData.condition)
        ); 
    })

    const weatherCardUrl = weatherCardsFilter[0]?.url;
    return (
        <section className="weather-card">
            <p className="weather-card__temp"> {temp} &deg; F</p>
            <img src= {weatherCardUrl} alt="Weather Image" className="weather-card__image"/>    
        </section>
    );

};
 
export default WeatherCard;


import {openWeatherKey, coordinates, weatherCards} from "../utils/constants.js";

const getWeather = (coordinates, openWeatherKey) => {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${openWeatherKey}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject(`Error: ${res.status}`);
      }
    });
}

const filterWeatherData = (data) => {
  const result = {};
  const now =  Math.floor(Date.now() / 1000); 
  result.city = data.name;
  result.temp = data.main.temp;
  result.type = getWeatherType(result.temp);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, now);
  return result;
}

const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
}

const isDay = ({sunrise, sunset}, now) => {
  return sunrise < now && now < sunset;
}

export {getWeather, filterWeatherData, getWeatherType};
const weatherCards = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/clouds.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: ["fog", "mist"],
    url: new URL("../assets/day/fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/nightClear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/nightClouds.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: ["fog", "mist"],
    url: new URL("../assets/night/nightFog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/nightRain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/nightSnow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/nightThunderstorm.svg", import.meta.url).href,
  },
];

//not a sensitive API Key, OK to store here
const openWeatherKey = "aaee6ab22aea5619b8be5635b7d26796";

const coordinates = {
  latitude: 35.47998,
  longitude: -79.180542,
};

export { openWeatherKey, coordinates, weatherCards };

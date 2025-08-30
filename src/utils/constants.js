const defaultClothingItems = [
    {
      _id: 0,
      name: "Cap",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    },
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 2,
      name: "Jacket",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    },
    {
      _id: 3,
      name: "Sneakers",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      _id: 5,
      name: "Coat",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    }
  ]

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

const coordinates = 
{
  latitude: 35.479980, 
  longitude: -79.180542
};

export {
  defaultClothingItems, 
  openWeatherKey,
  coordinates,
  weatherCards
};
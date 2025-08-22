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
    _id: 1,
    name: "Day",
    time: "day",
    link: "../assets/weather_cards/day.svg"
  },
  {
    _id: 2,
    name: "Cloudy",
    time: "day",
    link: "../assets/weather_cards/sunny.svg"
  },
  {
    _id: 3,
    name: "Fog",
    time: "day",
    link: "../assets/weather_cards/fog.svg"
  },
  {
    _id: 4, 
    name: "Rain",
    time: "day",
    link: "../assets/weather_cards/rain.svg"
  },
  {
    _id: 5,
    name: "Snow",
    time: "day",
    link: "../assets/weather_cards/snow.svg"
  },
  {
    _id: 6,
    name: "Storm",
    time: "day",
    link: "../assets/weather_cards/storm.svg"
  },
  {
    _id: 7,
    name: "Night",
    time: "night",
    link: "../assets/weather_cards/night.svg"
  },
  {
    _id: 8,
    name: "Cloudy",
    time: "night",
    link: "../assets/weather_cards/nightCloudy.svg"
  },
  {
    _id: 9,
    name: "Fog",
    time: "night",
    link: "../assets/weather_cards/nightFog.svg"
  },
  {
    _id: 10,
    name: "Rain",
    time: "night",
    link: "../assets/weather_cards/nightRain.svg"
  },
  {
    _id: 11,
    name: "Snow",
    time: "night",
    link: "../assets/weather_cards/nightSnow.svg"
  },
  {
    _id: 12,
    name: "Storm",
    time: "night",
    link: "../assets/weather_cards/night.svg"
  },
]

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
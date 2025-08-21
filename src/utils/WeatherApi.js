
//we’ll only need to extract the:
// 1.city name and 
// 2. the current temperature value and 
// 3. define the weather types. 
// 
// Create a function to extract all of the necessary data from the API.

//We recommend keeping all of the data manipulation functionality 
// (fetching and filtering) with the API in a separate utils/weatherApi.js file. 
// Import the API module to App.js.
// The request to the API should only be made when mounting the App component.

/*
In a later task, you’ll filter the cards based on their weather in Main.js. 
To do so, you’ll need to determine the weather type based on the temperature. 
Write a getWeatherCondition() function in utils/weatherApi.js that accepts 
a temperature in Fahrenheit and returns:

"hot" if it is at least 86 degrees
"warm" if it is at least 66 degrees, but less than 86
"cold" otherwise

Feel free to adjust the temperature ranges to match your own preferences.

/*
ex obj
(referred to as "data")
{
    "coord": {
        "lon": -79.1805,
        "lat": 35.48
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
      "main": {
          "temp": 81.95,
          "feels_like": 85.32,
          "temp_min": 81.88,
          "temp_max": 86.14,
          "pressure": 1010,
          "humidity": 65,
          "sea_level": 1010,
          "grnd_level": 998
      },
    "visibility": 10000,
    "wind": {
        "speed": 4.61,
        "deg": 50
    },
    "clouds": {
        "all": 40
    },
    "dt": 1755813218,
    "sys": {
        "type": 1,
        "id": 6072,
        "country": "US",
        "sunrise": 1755772858,
        "sunset": 1755820741
    },
    "timezone": -14400,
    "id": 4490329,
    "name": "Sanford",
    "cod": 200
}
*/


//coord.lat, coord.long
//main.temp
//data.name


import {openWeatherKey, coordinates} from "../utils/constants.js";

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
  result.city = data.name;
  result.temp = data.main.temp;
  return result;
}

export {getWeather, filterWeatherData};
import {openWeatherKey, coordinates} from "./utils/constants.js";

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
*/

const getWeather = (coordinates, openWeatherKey) => {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${openWeatherKey}`)
    .then((res) = () => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject(`Error: ${res.status}`);
      }
    });
}

export {getWeather};
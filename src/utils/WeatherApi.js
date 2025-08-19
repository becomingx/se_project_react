/*
NOTE
Utility functions → utils directory
EX:
// src/utils/api.js
export const getWeatherData = () => {  };
export const getClothingItems = () => {  };

// src/utils/constants.js
export const API_KEY = "your-api-key";
export const defaultClothingItems = [  ];

example API response
                          
{
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}                    
                        

Weather API returns a lot of information, but for our project, we’ll only need to extract 
the city name and the current temperature value and define the weather types. 

Create a function to extract all of the necessary data from the API.
We recommend keeping all of the data manipulation functionality (fetching and filtering) 
with the API in a separate utils/weatherApi.js file. 

Import the API module to App.js. The request to the API should only be made when mounting the App component.
Since the cards must be filtered by weather type in Main.js, you can write the logic of defining temperature ranges in utils/weatherApi.js. For example:

if (temperature >= 86) {
  return 'hot';
} else if (temperature >= 66) {
  return 'warm';
} else {
  return 'cold';
}
Here, we only use three ranges based on our personal temperature sensitivity, but you are free to define your ranges and expand the number of weather types.
*/
//ex from tripleten
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

//ex from openweather
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//validation import goes here!
/*
EX:
import { checkResponse } from './validation.js';

export const getWeatherData = (coordinates) => {
  return fetch(`${baseUrl}/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIkey}`)
    .then(checkResponse) // Using validation here
    .then((data) => {
      return data;
    });
};
*/

/*
class WeatherApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    };

    _checkResponse(res, parseJson = true) {
        if (res.ok) {
          return parseJson ? res.json() : res;
        }
        return Promise.reject(`Error: ${res.status}`);
    };

    getAppInfo() {
        return Promise.all([this.getTempValue(), this.getLocationValue()]);
    };

    getTempValue() {
        return this._request(`${this._baseUrl}/`,
            { 
                headers: this._headers,
                temp
            }
        );
    };

    getLocationValue() {
        return this._request(`${this._baseUrl}/`,
            { 
                headers: this._headers,
                location
            }
        );
    };


};

  export default WeatherApi;

*/
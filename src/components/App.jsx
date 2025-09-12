import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import {
  getWeather,
  filterWeatherData,
  getWeatherType,
} from "../utils/WeatherApi.js";
import {
  coordinates,
  openWeatherKey,
  weatherCards,
} from "../utils/constants.js";
import "../blocks/App.css";
import { defaultClothingItems } from "../utils/clothingItems.js";
import  CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";
/*
TBD
data validation
*/

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [mobileMenuOpen, toggleMobileMenu] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {
      F: 0,
      C: 0
    },
    city: "",
    condition: "",
    isDay: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getWeather(coordinates, openWeatherKey)
      .then((data) => {
        const apiWeatherData = filterWeatherData(data);
        setWeatherData(apiWeatherData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleMobileMenu = () => {
    toggleMobileMenu(!mobileMenuOpen);
  };
  const handleAddClick = () => {
    setActiveModal("add garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("view item");
    setSelectedCard(card);
  };

  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <div className="page">
      <Header
        onClick={handleAddClick}
        menu={mobileMenuOpen}
        weatherData={weatherData}
        handleMobileMenu={handleMobileMenu}

      />

      <Main
        clothingItems={clothingItems}
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        menu={mobileMenuOpen}
      />

      <Footer />

      <ModalWithForm
        title="New Garment"
        name="add-form"
        buttonText="Add Garment"
        isOpen={activeModal === "add garment"}
        onClick={handleAddClick}
        onClose={closeActiveModal}
        getWeatherType={getWeatherType}
      >
        <label htmlFor="name" className="modal__label">
          Name {""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name" 
          />
        </label>
        <label htmlFor="image-url" className="modal__label">
          Image {""}
          <input
            type="url"
            className="modal__input"
            id="image-url"
            placeholder="Image"
          />
        </label>

        <fieldset className="modal__radio-fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="hot"
              id="hot"
              name="temp"
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="warm"
              id="warm"
              name="temp"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="cold"
              id="cold"
              name="temp"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <ItemModal
        isOpen={activeModal === "view item"}
        card={selectedCard}
        onClose={closeActiveModal}
        onClick={handleCardClick}
      />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;

import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import AddItemModal from "./AddItemModal.jsx";
import ItemModal from "./ItemModal.jsx";
import Profile from "./Profile.jsx";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";
import { getWeather, filterWeatherData } from "../utils/WeatherApi.js";
import { coordinates, openWeatherKey } from "../utils/constants.js";
import { defaultClothingItems } from "../utils/clothingItems.js";
import ConfirmationModal from "./ConfirmationModal.jsx";
import "../blocks/App.css";

/*
TBD
data validation
*/

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [mobileMenuOpen, toggleMobileMenu] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {
      F: 0,
      C: 0,
    },
    city: "",
    condition: "",
    isDay: true,
  });

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

  const handleDeleteClick = () => {
    setActiveModal("open delete confirmation");
  };

  const onAddItem = (inputValues) => {
    //fetch
    //.then(res)...includes all the things from below
    const newCardData = {
      name: inputValues.name,
      weather: inputValues.weatherType,
      link: inputValues.link,
    };
    //don't use newcarddata for api structure, doesn't have id
    //id will be included in the response data
    setClothingItems([...clothingItems, newCardData]);
    closeActiveModal();
    //.catch()
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <HashRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Header
            onClick={handleAddClick}
            menu={mobileMenuOpen}
            weatherData={weatherData}
            handleMobileMenu={handleMobileMenu}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  menu={mobileMenuOpen}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  menu={mobileMenuOpen}
                />
              }
            />
          </Routes>
        </HashRouter>

        <Footer />

        <AddItemModal
          isOpen={activeModal === "add garment"}
          onClose={closeActiveModal}
          onAddItem={onAddItem}
          onClick={handleAddClick}
        />

        <ConfirmationModal
          isOpen={activeModal === "open delete confirmation"}
          onClose={closeActiveModal}
          card={selectedCard}
        />

        <ItemModal
          isOpen={activeModal === "view item"}
          card={selectedCard}
          onClose={closeActiveModal}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;

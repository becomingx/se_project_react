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
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";
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
    //saves card to delete in the state
  };

  const handleCardDelete = () => {
    //delete()
    //.then(res)
    //update clothingItems state
    //modals close
    //state containing card reset
    //.catch()
    /*
the handleCardDelete handler, which is passed from the App to the DeleteConfirmationModal component. 
This handler makes the API call. After a successful API request, the clothingItems state needs to be updated, 
the modals closed, and the state containing the card should be reset.
*/
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

          <Footer />

          <AddItemModal
            isOpen={activeModal === "add garment"}
            onClose={closeActiveModal}
            onAddItem={onAddItem}
            onClick={handleAddClick}
          />

          <DeleteConfirmationModal
            isOpen={activeModal === "open delete confirmation"}
            onClose={closeActiveModal}
            card={selectedCard}
            //handleCardDelete={handleCardDelete}
          />

          <ItemModal
            isOpen={activeModal === "view item"}
            card={selectedCard}
            onClose={closeActiveModal}
            openConfirmationModal={handleDeleteClick}
          />
        </HashRouter>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;

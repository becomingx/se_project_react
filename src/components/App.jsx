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
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";
import { getItems, addItem, removeItem } from "../utils/api.js";
import "../blocks/App.css";

/*
TBD
data validation

API calls
--Modify the corresponding Effect hook to add the items to the application state from the server.
--Remove the utils/clothingItems.js file containing the default items that we used in the previous project. 
--From now on, we'll fetch items from the server. Yes, it's a mock server, but it's a server nonetheless!
*/

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
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

    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Failed to fetch clothing data", error);
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

  const onAddItem = (inputValues, handleReset) => {
    const newCardData = {
      name: inputValues.name,
      weather: inputValues.weather,
      imageUrl: inputValues.imageUrl,
    };

    addItem(newCardData, handleReset)
      .then((data) => {
        const updatedItems = [data, ...clothingItems];
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
        handleReset();
      })
      .catch(console.error);
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

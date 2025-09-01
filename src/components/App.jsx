import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import {getWeather, filterWeatherData, getWeatherType} from "../utils/WeatherApi.js"
import {coordinates, openWeatherKey, weatherCards} from "../utils/constants.js"
/*
TBD
weather card dynamic changing pictures
data validation
*/


const App = () => {

  const [mobileMenuOpen, toggleMobileMenu] = useState(false);
  const [weatherData, setWeatherData] = useState(
    {
      type:"", 
      temp: 0,
      city: "",
      condition: "",
      isDay: true
    }
  );
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  
  useEffect(() => {getWeather(coordinates, openWeatherKey)  
    .then((data) => {
      const apiWeatherData = filterWeatherData(data);
      setWeatherData(apiWeatherData);
    }) 
    .catch(console.error);
}, []);
      
  const handleMobileMenu = () => {
    toggleMobileMenu(!mobileMenuOpen);
  }
  const handleAddClick = () => {
    setActiveModal("add__modal-with-form");
  }

  const closeActiveModal = () => {
    setActiveModal("");
  }

  const handleCardClick = (card) => {
    setActiveModal("item__modal");
    setSelectedCard(card);
  }

  return (
    <>
      <div className= "page">
        <Header
          onClick= {handleAddClick}
          menu= {mobileMenuOpen}
          weatherData= {weatherData}
          handleMobileMenu= {handleMobileMenu}
        />

        <Main 
          weatherData= {weatherData}
          handleCardClick= {handleCardClick}
          menu= {mobileMenuOpen}
        />

        <Footer/>

        <ModalWithForm
          title= "New Garment"
          buttonText= "Add Garment"
          activeModal= {activeModal}
          onClick={handleAddClick}
          onClose= {closeActiveModal}
          getWeatherType= {getWeatherType}
        ></ModalWithForm>

        <ItemModal 
          activeModal={activeModal} 
          card={selectedCard} 
          onClose={closeActiveModal}
          onClick={handleCardClick}
        />
      </div>
    </>

  )
};

export default App;
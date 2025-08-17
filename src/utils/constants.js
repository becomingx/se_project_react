//import WeatherApi from "../utils/WeatherApi.js";

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

  const openWeatherKey = "aaee6ab22aea5619b8be5635b7d26796";

  /*
  const apiCall =  new WeatherApi({ 
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    headers: {
      authorization: openWeatherKey,
      "content-Type": "application/json"
    }
  });
  */

//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

/*

const headerAvatar = document.querySelector(".profile__avatar");
const headerUserName = document.querySelector(".profile__name");

const modalWithForm = document.querySelector("#modalWithForm-modal");
const modalWithFormElement = modalWithForm.querySelector(".modal__form");
const modalWithFormCloseBtn = modalWithForm.querySelector(".modal__close-btn");
const modalWithFormNameInput = modalWithForm.querySelector("#name-input");
const modalWithFormDescriptionInput = modalWithForm.querySelector("#image-description-input");
const modalWithFormSubmitBtn = modalWithForm.querySelector(".modal__submit-btn");

const itemModal = document.querySelector("#item-modal");
const itemModalImageElement = itemModal.querySelector(".modal__image");
const itemModalCloseBtn = itemModal.querySelector(".modal__close-btn");
const itemModalCaption = itemModal.querySelector(".");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");*/

/*
export {
  //default array of clothing items
  defaultClothingItems,

  //API key
  openWeatherKey,

  // header elements
  headerAvatar,
  headerUserName,

  // Edit modal
  modalWithForm,
  modalWithFormElement,
  modalWithFormCloseBtn,
  modalWithFormNameInput,
  modalWithFormDescriptionInput,
  modalWithFormSubmitBtn,

  //item modal
  itemModal,
  itemModalImageElement,
  itemModalCloseBtn,

  // Card template and list
  cardTemplate,
  cardsList
};
*/

export {defaultClothingItems, openWeatherKey};
import "../components/index.css";
//import validation from "./utils/validation.js";


/*
Instead of using querySelector, you should handle modal interactions through React props and event handlers.
*/

/*
//adds new garment

const formModal = document.querySelector("#modal-with-form");
const formModalBtn = document.querySelector(".header__button")
const formModalFormElement = formModal.querySelector(".modal__form");
const formModalCloseBtn = formModal.querySelector(".modal__close-btn");
const modalInput = document.querySelector(".modal__input");
const formModalImageInput = formModal.querySelector("#image-url-input");
const formModalImageNameInput = formModal.querySelector("#name-input");
const formModalSubmitBtn = formModal.querySelector(".modal__submit-btn");

//view garment details and photo
const itemModal = document.querySelector("#item-modal");
const itemModalCloseBtn = itemModal.querySelector(".modal__close-btn");
const itemModalBtn = document.querySelector(".card__view-btn")
const itemModalImageElement = itemModal.querySelector(".card__image");


const openModal = (modal) => {
    modal.classList.add("modal_opened");
    //document.addEventListener("keydown", handleEscapeKey);
    //modal.addEventListener("mousedown", handleOverlayClick);
  };
  
const closeModal = (modal) => {
    modal.classList.remove("modal_opened");
    //document.removeEventListener("keydown", handleEscapeKey);
    //modal.removeEventListener("mousedown", handleOverlayClick);
  };


const handleEscapeKey = (evt) => {
    if (evt.key === "Escape") {
    const activeModal = document.querySelector("modal_opened");
      if (activeModal) {
        closeModal(activeModal);
      };
    };
  };
  
  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closeModal(evt.target);
    };
  };

  itemModalBtn.addEventListener("click", () => openModal(itemModal));
  itemModalCloseBtn.addEventListener("click", () => closeModal(itemModal));
  
  const initializeModalListeners = () => {
    // Close modal button listeners
    const closeButtons = [
      { button: formModalCloseBtn, modal: formModal },
      { button: itemModalCloseBtn, modal: itemModal }
    ];
    
    //open modal button listeners
    const openButtons = [
      {button: formModalBtn, modal: formModal},
      {button: itemModalBtn, modal: itemModal}
    ];
  
    closeButtons.forEach(({ button, modal }) => {
      button.addEventListener("click", () => closeModal(modal));
    });
   
    openButtons.forEach(({ button, modal }) => {
      button.addEventListener("click", () => openModal(modal));
    });
}
 

  const handleModalFormSubmit = (evt) => {
    evt.preventDefault();
    const modalSubmit = formModalSubmitBtn;
    setSaveButtonText(modalSubmit, true);
  
    api.method({formSubmit: modalInput.value})
      .then((data) => {
        placeholder.src = formSubmit.form;
        closeModal(modal);
      })
      .catch(console.error)
      .finally(() => {
        setSaveButtonText(modalSubmit, false);
      });
  };


  formModalSubmitBtn.addEventListener("click", () => {
    //imageName and imageUrl need to be input from user
    formModalImageNameInput.value = imageName.textContent;
    formModalImageInput.value = imageUrl.src;
  });

  itemModal.addEventListener("click", () => {
    //imageName and imageUrl need to be fetched from API for viewing in modal
    openModal(itemModal);
  });

//formModalFormElement.addEventListener("submit", handleModalFormSubmit);

const resetAllModalValidation = () => {
    const modalsWithValidation = [
      {
        modal: formModal,
        form: formModalFormElement,
        submitButton: formModalSubmitBtn
      }
    ];
    
    modalsWithValidation.forEach(({ modal, form, submitButton }) => {
      const inputs = Array.from(form.querySelectorAll('.modal__input'));
      resetValidation(modal, inputs, submitButton, settings);
    });
  };
  
  weatherApi.getAppInfo()
  .then(([cards, userInfo]) => {
    cards.forEach((item) => {
      const cardEl = getCardElement(item);
      cardsList.append(cardEl);
    });
    formModalName.textContent = userInfo.value;
    formModalImage.src = userInfo.value;
  })
  .catch(console.error);

  resetAllModalValidation();
  //initializeModalListeners();
  export default Modal;

  */
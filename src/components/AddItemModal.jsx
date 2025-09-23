import { useState } from "react";
import ModalWithForm from "./ModalWithForm.jsx";

// onAddItem refers to the submit handler declared in App.jsx
const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  // ...

  return (
    <ModalWithForm 
      title="New Garment" 
      name="add-form"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onClose}
      onAddItem={onAddItem}
    >
      <>
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
      </>
    </ModalWithForm>
  );
};

export default AddItemModal;

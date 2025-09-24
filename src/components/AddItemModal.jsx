import { useState } from "react";
import ModalWithForm from "./ModalWithForm.jsx";
import useForm from "../hooks/useForm.js";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = { name: "", image_link: "", weatherType: "" };
  const { values, handleChange } = useForm({ defaultValues });

  const handleSubmit = (evt) => {};

  return (
    <ModalWithForm
      title="New Garment"
      name="add-form"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onAddItem}
    >
      <>
        <label htmlFor="name" className="modal__label">
          Name {""}
          <input
            type="text"
            name="name"
            className="modal__input"
            id="name"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image-url" className="modal__label">
          Image {""}
          <input
            type="url"
            name="image_link"
            className="modal__input"
            id="image-url"
            placeholder="Image"
            value={values.image_link || ""}
            onChange={handleChange}
          />
        </label>

        <fieldset className="modal__radio-fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="hot"
              id="radio_hot"
              name="temp"
              onChange={handleChange}
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="warm"
              id="radio_warm"
              name="temp"
              onChange={handleChange}
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="cold"
              id="radio_cold"
              name="temp"
              onChange={handleChange}
            />
            Cold
          </label>
        </fieldset>
      </>
    </ModalWithForm>
  );
};

export default AddItemModal;

import ModalWithForm from "./ModalWithForm.jsx";
import useForm from "../hooks/useForm.js";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = { name: "", weather: "", imageUrl: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(values, handleReset);
  };

  return (
    <ModalWithForm
      title="New Garment"
      name="add-form"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        <label htmlFor="link" className="modal__label">
          Image {""}
          <input
            type="url"
            name="imageUrl"
            className="modal__input"
            id="link"
            placeholder="Image"
            value={values.imageUrl || ""}
            onChange={handleChange}
          />
        </label>

        <fieldset className="modal__radio-fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="radio_hot" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="hot"
              id="radio_hot"
              name="weather"
              onChange={handleChange}
            />
            Hot
          </label>
          <label htmlFor="radio_warm" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="warm"
              id="radio_warm"
              name="weather"
              onChange={handleChange}
            />
            Warm
          </label>
          <label htmlFor="radio_cold" className="modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              value="cold"
              id="radio_cold"
              name="weather"
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

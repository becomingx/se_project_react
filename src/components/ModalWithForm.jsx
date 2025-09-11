import React from "react";
import "../blocks/ModalWithForm.css";

//TODO
//radio button, form submit functionality

const ModalWithForm = ({ title, buttonText, isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="add__modal_content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="add__modal_close-btn"
          onClick={onClose}
        />
        <form name="add-form" className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

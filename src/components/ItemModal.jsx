import React from "react";
import "../blocks/ItemModal.css";

const ItemModal = ({ isOpen, onClose, card, onDeleteClick }) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="item__modal modal__container">
        <div className="modal__container_type_image">
          <button
            type="button"
            className="modal__close-btn"
            onClick={onClose}
          />
          <img src={card.link} alt={card.name} className="modal__image" />
        </div>
        <div className="modal__footer">
          <div className="modal__text-container">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div className="delete-btn__container">
            <button className="item__modal_delete-btn" onClick={onDeleteClick}>
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

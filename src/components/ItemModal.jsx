import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../blocks/ItemModal.css";
import "../blocks/ItemModal_V2.css";

const ItemModal = ({ isOpen, onClose, card, openConfirmationModal }) => {
  const location = useLocation();
  const [profileView, setProfileView] = useState(false);

  useEffect(() => {
    setProfileView(location.pathname === "/profile");
  }, [location.pathname]);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      {!profileView && (
        <div className="item__modal modal__container">
          <div className="modal__container_type_image">
            <button
              type="button"
              className="modal__close-btn"
              onClick={onClose}
            />
            <img src={card.imageUrl} alt={card.name} className="modal__image" />
          </div>
          <div className="modal__footer">
            <div className="modal__text-container">
              <h2 className="modal__caption">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>
            </div>
            <div className="delete-btn__container">
              <button
                className="item__modal_delete-btn"
                onClick={openConfirmationModal}
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      )}
      {profileView && (
        <div className="item__modal_container-V2">
          <button
            type="button"
            className="modal__close-btn_V2"
            onClick={onClose}
          />
          <div className="modal__container_type_image_V2">
          <h2 className="modal__card__name_V2">{card.name}</h2>
            <img src={card.imageUrl} alt={card.name} className="modal__image_V2" />
          </div>

          <div className="modal__side-container_V2">
            <div className="modal__text-container_V2">
              <p className="modal__weather_V2">Weather: {card.weather}</p>
            </div>
            <div className="delete-btn__container_V2">
              <button
                className="item__modal_delete-btn_V2"
                onClick={openConfirmationModal}
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemModal;

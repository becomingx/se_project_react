import React from "react";
import "../blocks/ConfirmationModal.css";

const ConfirmationModal = ({isOpen, onClose, card}) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="confirmation__modal_container">
        <div type="button" className="confirmation__modal_close-btn" onClick={onClose} />

        <h2 className="confirmation__modal_title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>

        <div className="confirmation__modal_delete-container">
          <button type="button" className="confirm__delete">Yes, Delete Item</button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

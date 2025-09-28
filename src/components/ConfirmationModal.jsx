import ItemModal from "./ItemModal.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ConfirmationModal.css";

const ConfirmationModal = (isOpen, onClose, handleDeleteCard) => {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="confirmation__modal_container">
        <div className="confirmation__modal_close-btn"></div>

        <h2 className="confirmation__modal_title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>

        <div className="confirmation__modal_delete-container">
          <button
            className="confirm__delete"
            handleDeleteCard={handleDeleteCard}
          >
            Yes, Delete Item
          </button>
          <button className="cancel" onClose={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

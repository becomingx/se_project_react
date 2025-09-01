import React from "react";


const ItemModal = ({activeModal, onClose, card}) => {
    return (
        <div className= {`modal ${activeModal === "item__modal" && "modal_opened"}`}>
            <div className="item__modal modal__container">
                <div className="modal__container_type_image"> 
                <button 
                    type="button" 
                    className="modal__close-btn"
                    onClick={onClose}
                ></button>                                                 
                    <img src={card.link} alt="" className="modal__image"/>
                </div>
                <div className="modal__footer">
                    <div className="modal__text-container">
                        <h2 className="modal__caption">{card.name}</h2>
                        <p className="modal__weather">Weather: {card.weather}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemModal;
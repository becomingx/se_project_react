import React from "react";
import '../blocks/ModalWithForm.css';

//TODO
//radio button, form submit functionality

const ModalWithForm = ({title, buttonText, activeModal, onClose}) => {
    
    return (
        <div className= {`modal ${activeModal === "add__modal-with-form" && "modal_opened"}`}>

                <div className="add__modal_content">
                    <h2 className="modal__title">{title}</h2>
                    <button 
                        type="button" 
                        className="add__modal_close-btn"
                        onClick={onClose}
                    ></button>
                    <form name= "add-form" className="modal__form">
                        <label 
                            htmlFor="name" 
                            className="modal__label"
                        >Name {""}
                            <input
                                type="text"
                                className="modal__input"
                                id="name"
                                placeholder= "Name"
                            />
                        </label>

                        <label 
                            htmlFor="image-url" 
                            className="modal__label"
                        >Image {""}
                            <input 
                                type= "url" 
                                className= "modal__input"
                                id="image-url" 
                                placeholder="Image" 
                            />
                        </label>
                    </form>
                    <fieldset className="modal__radio-fieldset">
                        <legend className="modal__legend">Select the weather type:</legend>
                        <label 
                            htmlFor="hot"
                            className="modal__label_radio"
                        >
                            <input
                                type="radio"
                                className="modal__radio-input"
                                id="hot"
                                name="temp"
                            />
                        Hot</label>
                        <label 
                            htmlFor="warm"
                            className="modal__label_radio"
                        >
                            <input
                                type="radio"
                                className="modal__radio-input"
                                id="warm"
                                name="temp"
                            />
                        Warm</label>
                        <label 
                            htmlFor="cold"
                            className="modal__label_radio"
                        >
                            <input
                                type="radio"
                                className="modal__radio-input"
                                id="cold"
                                name="temp"
                            />
                        Cold</label>
                    </fieldset>
                    <button type="submit" className="modal__submit-btn">{buttonText}</button>
                </div>
            
        </div>
    );
};

export default ModalWithForm;
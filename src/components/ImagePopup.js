import React from "react";

const ImagePopup = (props) => {
  return (
    <div
      className={`popup popup_type_image-prev ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_image-preview">
        <button
          className="popup__close-button popup__close-button_type_image-prev"
          type="button"
          onClick={props.onClose}
        ></button>
        <img src={props.card.link} alt="#" className="popup__image" />
        <p className="popup__caption">{props.card.name}</p>
      </div>
    </div>
  );
};

export default ImagePopup;

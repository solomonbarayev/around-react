import React from "react";

const PopupWithForm = (props) => {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="submit"
          className="form popup__form"
          noValidate
          name={props.name}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;

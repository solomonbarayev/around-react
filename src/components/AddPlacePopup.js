import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isLoading, isOpen, onClose, onAddPlaceSubmit }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm
      title="New place"
      name="add-place"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={`${isLoading ? "Creating..." : "Create"}`}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <div className="form__input-container">
          <input
            id="place-title-input"
            type="text"
            name="name"
            placeholder="Title"
            className="form__input form__input_type_place-name"
            required
            minLength="1"
            maxLength="30"
            value={name || ""}
            onChange={handleNameChange}
          />
          <span className="form__input-error place-title-input-error"></span>
        </div>
        <div className="form__input-container">
          <input
            id="place-url-input"
            type="url"
            name="link"
            placeholder="Image link"
            className="form__input form__input_type_place-url"
            required
            value={link || ""}
            onChange={handleLinkChange}
          />
          <span className="form__input-error place-url-input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;

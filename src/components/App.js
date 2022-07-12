import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setImagePreviewOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  };

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setImagePreviewOpen(false);
    setSelectedCard("");
  };

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Edit profile"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__fieldset">
          <div className="form__input-container">
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Name"
              className="form__input form__input_type_profile-name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
          </div>
          <div className="form__input-container">
            <input
              id="title-input"
              type="text"
              name="title"
              placeholder="About me"
              className="form__input form__input_type_profile-title"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error title-input-error"></span>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <button className="form__button" type="submit">
            Save
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="New place"
        name="add-place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
            />
            <span className="form__input-error place-url-input-error"></span>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <button
            className="form__button form__button_type_place"
            type="submit"
          >
            Create
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Change Profile Picture"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__fieldset">
          <div className="form__input-container">
            <input
              id="avatar-input"
              type="url"
              name="link"
              placeholder="Profile Image link"
              className="form__input form__input_type_avatar"
              required
            />
            <span className="form__input-error avatar-input-error"></span>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <button
            className="form__button form__button_type_avatar"
            type="submit"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title="Are you sure?" name="delete-card">
        <fieldset className="form__fieldset">
          <button
            className="form__button form__button_type_delete-card"
            type="submit"
          >
            Yes
          </button>
        </fieldset>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePreviewOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;

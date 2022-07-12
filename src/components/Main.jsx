import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        console.log(res);
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content section">
      <div className="separator"></div>
      <section className="profile">
        <div
          className="profile__image-container"
          onClick={props.onEditAvatarClick}
        >
          <img
            src={userAvatar}
            alt="User's Profile"
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="edit profile"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__title">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="add place"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;

import React from "react";
import "../blocks/ItemCard.css";
import Main from "./Main";

const ItemCard = ({ item, onCardClick }) => {
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;

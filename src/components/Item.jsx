import React from "react";
import { FaCartArrowDown, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useState } from "react";
import { useEffect } from "react";

export default function Item({
  item,
  onAdd,
  likeThis,
  disLike,
  favourites,
}) {
  const [isLiked, setIsLiked] = useState();
  useEffect(() => {
    if (favourites && favourites.find((el) => el.id === item.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    };
  }, [])
  
  const likeItem = (it, id) => {
    isLiked ? disLike(id) : likeThis(it);
   setIsLiked(!isLiked)
  };
  const style = {
    backgroundColor: item.back,
    backgroundImage: `url(.//img/sticker/${item.stick})`,
  };
  return (
    <div className="item" onDoubleClick={() => likeItem(item, item.id)}>
      <div className="img">
        <span style={style} className="sticker"></span>
        <span className="like" onClick={() => likeItem(item, item.id)}>
          {isLiked ? (
            <FaHeart size={30} color="red" />
          ) : (
            <FaRegHeart size={30} />
          )}
        </span>
        <Link to={`/product/${item.id}`}>
          <img src={"..//img/" + item.src} alt={item.title} />
        </Link>
      </div>
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <div>
        <span className="item-rating">
          <Rating rate={item.rate} sizing={20} />
        </span>

        <FaCartArrowDown className="add-to-cart" onClick={() => onAdd(item)} />
        <Link key={item.id} to={`/product/${item.id}`}>
          <BsInfoCircle className="click" />
        </Link>
      </div>
    </div>
  );
}

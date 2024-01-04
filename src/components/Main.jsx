import React, { useState } from "react";
import Items from "./Items";
export default function Main({
  currentItems,
  onAdd,
  product,
  likeThis,
  disLike,
  favourites,
}) {
  return (
    <>
      <Items
        favourites={favourites}
        likeThis={likeThis}
        disLike={disLike}
        items={currentItems}
        onAdd={onAdd}
        product={product}
      />
    </>
  );
}

import React from "react";
import Main from "./Main";
export default function Favourites({
  favourites,
  product,
  onAdd,
  likeThis,
  disLike,
}) {
  return (
    <div>
      <Main
        likeThis={likeThis}
        disLike={disLike}
        favourites ={favourites}
        product={product}
        onAdd={onAdd}
        currentItems={favourites}
      />
    </div>
  );
}

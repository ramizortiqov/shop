import React from "react";
import { useEffect } from "react";
import Brands from "../components/Brands";
import Main from "../components/Main";
import Presentation from "../components/Presentation";
import Slides from "../components/Slides";

export default function Home({
  product,
  addToOrder,
  onAdd,
  currentItems,
  setCurrentItems,
  brands,
  likeThis,
  disLike,
  favourites,
}) {
  useEffect(() => {
    setCurrentItems(product);
  }, []);

  return (
    <>
      <div className="pres-slide">
        <Slides />
        <Presentation
          items={product}
          onAdd={onAdd}
        
          likeThis={likeThis}
          disLike={disLike}
          favourites={favourites}
        />
      </div>
      <Brands brands={brands} />
      <Main
        likeThis={likeThis}
        disLike={disLike}
        favourites={favourites}
        product={product}
        addToOrder={addToOrder}
        onAdd={onAdd}
        currentItems={currentItems}
      />
    </>
  );
}

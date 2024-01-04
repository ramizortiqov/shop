import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({sizing, rate}) {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={Math.random()}>
            <input
              onClick={() => setRating(ratingValue)}
              className="rating-input"
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <FaStar
            onMouseOver={()=>setHover(ratingValue)}
            onMouseLeave = {()=> setHover(null)}
              className="star"
              color={ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"}
              size={sizing}
            />
          </label>
        );
      })}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Brands ({brands}) {
    return (
      <div className="brands">
        {brands.map((el) => (
          <Link className="div" to={`/${el.key}`} key={el.key}>
            {el.name}
          </Link>
        ))}
      </div>
    )}